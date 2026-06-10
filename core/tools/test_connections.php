<?php
declare(strict_types=1);

// =============================================================================
// AXON_DCD · PORTAL DE DIAGNÓSTICO DE INFRAESTRUCTURA
// Acceso web: ?token=AXON_SECURITY_2026  |  Acceso CLI: php test_connections.php
// Rotar el token periódicamente. No subir el valor real a Git.
// =============================================================================
const TOOLS_ACCESS_TOKEN = 'AXON_SECURITY_2026';

$isCli = (PHP_SAPI === 'cli');

// ── Control de acceso ────────────────────────────────────────────────────────
if (!$isCli) {
    $provided = trim((string)($_GET['token'] ?? ''));
    if (!hash_equals(TOOLS_ACCESS_TOKEN, $provided)) {
        header('Content-Type: application/json; charset=utf-8');
        http_response_code(403);
        echo json_encode(
            ['status' => 'error', 'message' => 'Acceso denegado. Token de auditoría inválido.'],
            JSON_UNESCAPED_UNICODE
        );
        exit(1);
    }
}

// ── Helper: carga de .env ────────────────────────────────────────────────────
function loadEnv(string $path): array
{
    if (!file_exists($path) || !is_readable($path)) {
        return [];
    }
    $data = parse_ini_file($path, false, INI_SCANNER_RAW);
    return is_array($data) ? $data : [];
}

// ── Helper: lectura SMTP multilínea ─────────────────────────────────────────
// Lee del socket hasta encontrar la línea final de una respuesta SMTP.
// Las respuestas de continuación tienen '-' en la posición 3 (ej: "250-AUTH").
// La línea final tiene ' ' en la posición 3 (ej: "250 OK").
// Detecta timeouts de stream para no bloquear indefinidamente.
function smtpRead(mixed $socket): string
{
    $buffer = '';
    while ($line = fgets($socket, 512)) {
        $buffer .= $line;
        if (stream_get_meta_data($socket)['timed_out']) {
            break;
        }
        // Línea final: código + espacio (pos 3). Continuación: código + guion.
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }
    return $buffer;
}

// ── Carga de entorno ─────────────────────────────────────────────────────────
$envPath   = __DIR__ . '/../.env';
$env       = loadEnv($envPath);
$envLoaded = !empty($env);

// ── Contenedor de resultados ─────────────────────────────────────────────────
// Cada entrada: ['id' => string, 'label' => string, 'ok' => bool, 'detail' => string]
$results = [];

// =============================================================================
// PRUEBA 1 — BASE DE DATOS (PDO / MySQL)
// =============================================================================
$r = ['id' => 'db', 'label' => 'Base de Datos (PDO / MySQL)', 'ok' => false, 'detail' => ''];

if (!$envLoaded) {
    $r['detail'] = 'Archivo .env no encontrado o ilegible en: ' . dirname($envPath);
} else {
    $dbHost = (string)($env['DB_HOST'] ?? 'localhost');
    $dbName = (string)($env['DB_NAME'] ?? '');
    $dbUser = (string)($env['DB_USER'] ?? '');
    $dbPass = (string)($env['DB_PASS'] ?? '');

    if ($dbName === '' || $dbUser === '') {
        $r['detail'] = 'DB_NAME o DB_USER vacíos en .env.';
    } else {
        try {
            $pdo = new PDO(
                "mysql:host={$dbHost};dbname={$dbName};charset=utf8mb4",
                $dbUser,
                $dbPass,
                [
                    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES   => false,
                ]
            );
            $ver = $pdo->query('SELECT VERSION() AS v')->fetchColumn();
            $r['ok']     = true;
            $r['detail'] = "Conexión activa · DB: {$dbName} · MySQL {$ver} · EMULATE_PREPARES: OFF";
        } catch (PDOException $e) {
            $r['detail'] = 'PDOException: ' . $e->getMessage();
        }
    }
}
$results[] = $r;

// =============================================================================
// PRUEBA 2 — TRANSFERENCIA DE ARCHIVOS (FTP)
// =============================================================================
$r = ['id' => 'ftp', 'label' => 'Transferencia de Archivos (FTP)', 'ok' => false, 'detail' => ''];

$ftpServer = (string)($env['FTP_SERVER']   ?? '');
$ftpUser   = (string)($env['FTP_USERNAME'] ?? '');
$ftpPass   = (string)($env['FTP_PASSWORD'] ?? '');

if ($ftpServer === '' || $ftpUser === '') {
    $r['detail'] = 'FTP_SERVER o FTP_USERNAME no configurados en .env.';
} else {
    $conn = @ftp_connect($ftpServer, 21, 10);
    if (!$conn) {
        $r['detail'] = "Imposible conectar a {$ftpServer}:21";
    } elseif (!@ftp_login($conn, $ftpUser, $ftpPass)) {
        @ftp_close($conn);
        $r['detail'] = "Conexión establecida pero autenticación rechazada para '{$ftpUser}'.";
    } else {
        $r['ok']     = true;
        $r['detail'] = "Autenticación exitosa · Host: {$ftpServer} · Usuario: {$ftpUser}";
        @ftp_close($conn);
    }
}
$results[] = $r;

// =============================================================================
// PRUEBA 3 — MENSAJERÍA SALIENTE (SMTP / AUTH LOGIN — sin dependencias)
// =============================================================================
$r = ['id' => 'smtp', 'label' => 'Mensajería Saliente (SMTP / AUTH LOGIN)', 'ok' => false, 'detail' => ''];

$smtpHost = (string)($env['SMTP_HOST'] ?? '');
$smtpUser = (string)($env['SMTP_USER'] ?? '');
$smtpPass = (string)($env['SMTP_PASS'] ?? '');
$smtpPort = (int)($env['SMTP_PORT'] ?? 465);

if ($smtpHost === '' || $smtpUser === '') {
    $r['detail'] = 'SMTP_HOST o SMTP_USER no configurados en .env.';
} else {
    $ctxHost = ($smtpPort === 465) ? "ssl://{$smtpHost}" : $smtpHost;
    $socket  = @fsockopen($ctxHost, $smtpPort, $errno, $errstr, 15);

    if (!$socket) {
        $r['detail'] = "Socket [{$smtpHost}:{$smtpPort}] inaccesible · {$errstr} ({$errno})";
    } else {
        stream_set_timeout($socket, 8);

        smtpRead($socket);                        // 1. Banner de bienvenida
        fwrite($socket, "EHLO localhost\r\n");
        smtpRead($socket);                        // 2. Respuesta EHLO multilínea completa

        fwrite($socket, "AUTH LOGIN\r\n");
        $resAuth = smtpRead($socket);             // 3. Prompt de usuario (334 VXNlcm5hbWU6)

        if (!str_starts_with(trim($resAuth), '334')) {
            $r['detail'] = "Servidor no soporta AUTH LOGIN o respondió inesperadamente. Respuesta: " . trim($resAuth);
        } else {
            fwrite($socket, base64_encode($smtpUser) . "\r\n");
            $resUserPrompt = smtpRead($socket);   // 4. Prompt de contraseña (334 UGFzc3dvcmQ6)

            if (!str_starts_with(trim($resUserPrompt), '334')) {
                $r['detail'] = "Respuesta inesperada tras usuario B64. Respuesta: " . trim($resUserPrompt);
            } else {
                fwrite($socket, base64_encode($smtpPass) . "\r\n");
                $resFinal = smtpRead($socket);    // 5. Resultado final (235 OK ó 535 FAIL)

                if (str_starts_with(trim($resFinal), '235')) {
                    $r['ok']     = true;
                    $r['detail'] = "AUTH LOGIN completado · Host: {$smtpHost}:{$smtpPort} · Usuario: {$smtpUser}";
                } else {
                    $r['detail'] = "Credenciales rechazadas para '{$smtpUser}'. Respuesta: " . trim($resFinal);
                }
            }
        }

        fwrite($socket, "QUIT\r\n");
        fclose($socket);
    }
}
$results[] = $r;

// =============================================================================
// RENDERIZADO
// =============================================================================
$passed = count(array_filter($results, static fn(array $r): bool => $r['ok']));
$total  = count($results);
$ts     = date('Y-m-d H:i:s T');

if ($isCli) {

    // ── MODO CLI ──────────────────────────────────────────────────────────────
    $cOk    = "\033[0;32m";
    $cErr   = "\033[0;31m";
    $cInfo  = "\033[0;36m";
    $cReset = "\033[0m";

    echo $cInfo . "═══════════════════════════════════════════════════════" . $cReset . PHP_EOL;
    echo $cInfo . "  AXON_DCD · AUDITORÍA DE INFRAESTRUCTURA              " . $cReset . PHP_EOL;
    echo $cInfo . "  {$ts}" . $cReset . PHP_EOL;
    echo $cInfo . "═══════════════════════════════════════════════════════" . $cReset . PHP_EOL;

    foreach ($results as $i => $r) {
        $n     = $i + 1;
        $color = $r['ok'] ? $cOk : $cErr;
        $badge = $r['ok'] ? '[  OK  ]' : '[ FALLA ]';
        echo PHP_EOL . $cInfo . "[{$n}/{$total}] {$r['label']}" . $cReset . PHP_EOL;
        echo $color . "  {$badge}  {$r['detail']}" . $cReset . PHP_EOL;
    }

    echo PHP_EOL;
    $resColor = ($passed === $total) ? $cOk : $cErr;
    $resLabel = ($passed === $total) ? 'OPERACIONAL' : 'REQUIERE ATENCIÓN';
    echo $cInfo . "═══════════════════════════════════════════════════════" . $cReset . PHP_EOL;
    echo $resColor . "  RESULTADO: {$passed}/{$total} · {$resLabel}" . $cReset . PHP_EOL;
    echo $cInfo . "═══════════════════════════════════════════════════════" . $cReset . PHP_EOL . PHP_EOL;

} else {

    // ── MODO WEB HTML ─────────────────────────────────────────────────────────
    $allOk        = ($passed === $total);
    $summaryBg    = $allOk ? 'rgba(0,229,255,.07)' : 'rgba(255,77,77,.07)';
    $summaryColor = $allOk ? '#00E5FF' : '#ff4d4d';
    $summaryText  = $allOk
        ? "✓ &nbsp; {$passed}/{$total} pruebas superadas &nbsp;·&nbsp; Estado: Operacional"
        : "✗ &nbsp; {$passed}/{$total} pruebas superadas &nbsp;·&nbsp; Estado: Requiere Atención";

    header('Content-Type: text/html; charset=UTF-8');
    header('X-Robots-Tag: noindex, nofollow');
?>
<!DOCTYPE html>
<html lang="es" style="color-scheme:dark;">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>AXON_DCD · Diagnóstico de Infraestructura</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    background: #0B0C10;
    color: #FAFAFA;
    min-height: 100vh;
    padding: 2rem 1rem 4rem;
  }
  header {
    text-align: center;
    padding: 2.5rem 1rem 1rem;
    border-bottom: 1px solid rgba(0,229,255,.12);
    margin-bottom: 2rem;
  }
  header h1 {
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #00E5FF;
    margin-bottom: .5rem;
  }
  header p { font-size: .78rem; color: #9EA8B3; letter-spacing: .05em; }
  .summary {
    max-width: 640px;
    margin: 0 auto 2rem;
    padding: .85rem 1.5rem;
    border-radius: 10px;
    border: 1px solid <?php echo $summaryColor; ?>;
    background: <?php echo $summaryBg; ?>;
    color: <?php echo $summaryColor; ?>;
    font-size: .85rem;
    font-weight: 600;
    letter-spacing: .04em;
    text-align: center;
  }
  .grid {
    display: grid;
    gap: 1rem;
    max-width: 900px;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
  .card {
    background: #1F2833;
    border: 1px solid rgba(0,229,255,.1);
    border-radius: 14px;
    padding: 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: .75rem;
    transition: border-color .2s;
  }
  .card.ok   { border-color: rgba(0,229,255,.3); }
  .card.fail { border-color: rgba(255,77,77,.3); }
  .card-header { display: flex; align-items: center; gap: .65rem; }
  .dot {
    width: 10px; height: 10px;
    border-radius: 50%; flex-shrink: 0;
  }
  .dot.ok   { background: #00E5FF; box-shadow: 0 0 8px rgba(0,229,255,.6); }
  .dot.fail { background: #ff4d4d; box-shadow: 0 0 8px rgba(255,77,77,.6); }
  .card-label {
    font-size: .7rem;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #9EA8B3;
  }
  .status       { font-size: .9rem; font-weight: 700; letter-spacing: .05em; }
  .status.ok    { color: #00E5FF; }
  .status.fail  { color: #ff4d4d; }
  .detail {
    font-size: .78rem;
    color: #9EA8B3;
    line-height: 1.65;
    word-break: break-word;
  }
  footer {
    text-align: center;
    margin-top: 3rem;
    font-size: .68rem;
    color: #4A5568;
    letter-spacing: .06em;
  }
</style>
</head>
<body>

<header>
  <h1>AXON_DCD &nbsp;·&nbsp; Diagnóstico de Infraestructura</h1>
  <p><?php echo htmlspecialchars($ts, ENT_QUOTES, 'UTF-8'); ?></p>
</header>

<p class="summary"><?php echo $summaryText; ?></p>

<div class="grid">
<?php foreach ($results as $r):
    $cls    = $r['ok'] ? 'ok' : 'fail';
    $badge  = $r['ok'] ? '✓ &nbsp;Operacional' : '✗ &nbsp;Falla Detectada';
    $detail = htmlspecialchars($r['detail'], ENT_QUOTES, 'UTF-8');
    $label  = htmlspecialchars($r['label'],  ENT_QUOTES, 'UTF-8');
?>
  <div class="card <?php echo $cls; ?>">
    <div class="card-header">
      <span class="dot <?php echo $cls; ?>"></span>
      <span class="card-label"><?php echo $label; ?></span>
    </div>
    <span class="status <?php echo $cls; ?>"><?php echo $badge; ?></span>
    <p class="detail"><?php echo $detail; ?></p>
  </div>
<?php endforeach; ?>
</div>

<footer>DCD LABS &nbsp;·&nbsp; AXON_DCD &nbsp;·&nbsp; Protocolo de Auditoría Segura &nbsp;·&nbsp; Token verificado</footer>

</body>
</html>
<?php
}
