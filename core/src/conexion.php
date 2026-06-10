<?php
declare(strict_types=1);

class Database {
    private string $host;
    private string $db_name;
    private string $username;
    private string $password;
    private string $allowed_origins;
    public ?PDO $conn = null;

    public function __construct() {
        $env = $this->loadEnv(__DIR__ . '/../.env');

        $this->host            = (string)($env['DB_HOST'] ?? 'localhost');
        $this->db_name         = (string)($env['DB_NAME'] ?? '');
        $this->username        = (string)($env['DB_USER'] ?? '');
        $this->password        = (string)($env['DB_PASS'] ?? '');
        $this->allowed_origins = (string)($env['ALLOWED_ORIGINS'] ?? '');

        $this->setCorsHeaders();
    }

    private function writeLog(string $message): void {
        $logPath = __DIR__ . '/../../logs/backend.log';
        $timestamp = date('Y-m-d\TH:i:sP');
        $line = "[{$timestamp}] {$message}" . PHP_EOL;
        @file_put_contents($logPath, $line, FILE_APPEND | LOCK_EX);
    }

    private function jsonError(string $message, int $httpCode = 500): void {
        http_response_code($httpCode);
        echo json_encode(["status" => "error", "message" => $message]);
        exit;
    }

    private function loadEnv(string $path): array {
        if (!is_readable($path)) {
            $this->writeLog("FATAL: Archivo .env no encontrado o no legible en: {$path}");
            $this->jsonError("Error crítico de servidor: Configuración no encontrada.");
        }
        $data = parse_ini_file($path, false, INI_SCANNER_RAW);
        if ($data === false) {
            $this->writeLog("FATAL: Formato inválido en archivo .env: {$path}");
            $this->jsonError("Error crítico de servidor: Formato de configuración inválido.");
        }
        return $data;
    }

    private function setCorsHeaders(): void {
        $origin      = $_SERVER['HTTP_ORIGIN'] ?? '';
        $allowedList = array_map('trim', explode(',', $this->allowed_origins));

        if (!empty($origin) && !in_array($origin, $allowedList, true)) {
            $this->writeLog("CORS_DENIED: Origen bloqueado [{$origin}]");
            $this->jsonError("Acceso denegado: Origen no autorizado.", 403);
        }

        if (!empty($origin) && in_array($origin, $allowedList, true)) {
            header("Access-Control-Allow-Origin: " . $origin);
        } else {
            // Sin HTTP_ORIGIN (curl, server-to-server): se usa el primer origen permitido como cabecera segura.
            // Nunca se usa wildcard (*) — Mandamiento 14.
            $safeOrigin = $allowedList[0] ?? '';
            if ($safeOrigin !== '') {
                header("Access-Control-Allow-Origin: " . $safeOrigin);
            }
        }

        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        header("Vary: Origin");
        header("Content-Type: application/json; charset=UTF-8");

        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(204);
            exit;
        }
    }

    public function getConnection(): PDO {
        if (empty($this->db_name) || empty($this->username)) {
            $this->writeLog("ERROR: Credenciales de BD incompletas. DB_NAME o DB_USER vacíos.");
            $this->jsonError("Error de BD: credenciales incompletas.");
        }

        try {
            $dsn = "mysql:host={$this->host};dbname={$this->db_name};charset=utf8mb4";
            $this->conn = new PDO($dsn, $this->username, $this->password, [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ]);
        } catch (PDOException $e) {
            $this->writeLog("PDO_ERROR: [{$this->host}][{$this->db_name}] " . $e->getMessage());
            $this->jsonError("Error de conexión a la base de datos.");
        }

        return $this->conn;
    }
}
