# CLAUDE.md — Manual Operativo del Agente IA
## Nova Horizonte Tours | DCD LABS / VECTOR_CERO
**Versión:** 1.1 | **Fecha:** 2026-06-04 | **Agente Ejecutor:** AXON_DCD

---

## 1. IDENTIDAD DEL PROYECTO

**Proyecto:** Nova Horizonte Tours
**Cliente / Dueño:** Nova Horizonte Tours — La Paz, Baja California Sur
**Objetivo:** Plataforma web de ultra-lujo para logística y hospitalidad privada. Orquesta experiencias exclusivas en tierra, mar y cielo con un sistema de concierge virtual y catálogo de servicios VIP A–G.
**Dominio de producción:** `https://nova.tourfindy.com`
**Entorno local:** `C:\xampp\htdocs\Nova_Horizonte_Tours\`
**Repositorio:** GitHub → rama `main` → auto-deploy vía GitHub Actions FTP

### Stack Tecnológico
- **Frontend:** HTML5 + CSS3 + Vanilla JS (Mobile-First, Modo Oscuro Nativo)
- **Backend:** PHP 8+ con `declare(strict_types=1)` obligatorio en todo archivo nuevo
- **Base de Datos:** MySQL/MariaDB vía PDO centralizado (`core/src/conexion.php`)
- **Servidor:** Apache/XAMPP local + cPanel Shared Hosting (producción en `nova.tourfindy.com`)
- **CI/CD:** GitHub Actions → FTP Deploy (`SamKirkland/FTP-Deploy-Action@v4.3.5`)
- **IA (si aplica):** N/A por ahora — API Key SOLO en `.env` si se integra

### Activos Visuales (Rutas Canónicas)
| Activo | Ruta | Uso |
| :--- | :--- | :--- |
| Logo Light Mode | `assets/img/logo1.png` | Navbar en tema claro |
| Logo Dark Mode | `assets/img/logo3.png` | Navbar en tema oscuro + Favicon global |
| Logo Footer | `assets/img/logo2.png` | Footer (fallback a logo1.png) |
| Favicon Global | `assets/img/logo3.png` | `<link rel="icon">` en todas las páginas |

### Paleta de Colores (WCAG 2.1)
| Rol | HEX | Uso |
| :--- | :--- | :--- |
| Fondo Principal | `#0B0C10` | Base dark mode, hero background |
| Acento / CTAs | `#00E5FF` | Botones primarios, highlights |
| Superficies / Cards | `#1F2833` | Tarjetas, navbar |
| Texto Principal | `#FAFAFA` | Textos sobre fondo oscuro |

---

## 2. ESTRUCTURA DE CARPETAS

```
Nova_Horizonte_Tours/
├── index.php                        ← Punto de entrada principal (SPA)
├── .htaccess                        ← Blindaje Apache Nivel Militar
├── .env                             ← Credenciales REALES (NUNCA en Git)
├── .env.example                     ← (no aplica en raíz — ver core/)
├── .gitignore                       ← Protección del repositorio
├── CLAUDE.md                        ← Este archivo — manual del agente
│
├── core/                            ← Núcleo backend del sistema
│   ├── .env.example                 ← Plantilla pública de variables (sí en Git)
│   ├── .env                         ← Credenciales REALES (NUNCA en Git)
│   └── src/
│       └── conexion.php             ← Conexión PDO centralizada (lee core/.env)
│
├── assets/                          ← CSS, JS, imágenes estáticas
│   ├── css/   (→ css/ en raíz)
│   ├── js/    (→ js/ en raíz)
│   └── img/
│       ├── logo1.png                ← Logo Light Mode
│       ├── logo2.png                ← Logo Footer
│       └── logo3.png                ← Logo Dark Mode + Favicon
│
├── css/                             ← Hojas de estilo
│   └── main.css
│
├── js/                              ← Scripts frontend
│   └── app.js
│
├── logs/                            ← Logs del sistema (bloqueados en .htaccess)
│   └── backend.log
│
├── .github/
│   └── workflows/
│       └── deploy.yml               ← Pipeline CI/CD automático
│
└── knowledge/                       ← Codex del sistema (bloqueado en .htaccess)
    ├── 00_ADN_DEL_PROYECTO.md
    ├── 01_LEY_Y_MANDAMIENTOS.md
    ├── 02_SYSTEM_CODEX_REGISTRY.md
    ├── 03_CONTRATOS_API_Y_LOGICA.md
    ├── 04_PROTOCOLOS_DE_VUELO.md
    └── 05_RUNTIME_GUARDRAILS.md
```

---

## 3. LOS 18 MANDAMIENTOS — LEY SUPREMA

Referencia completa: `knowledge/01_LEY_Y_MANDAMIENTOS.md`

| # | Mandamiento | Resumen Ejecutivo |
| :--- | :--- | :--- |
| 1 | Mobile-First | Todo componente nace para celular. Sin anchos fijos (px) en contenedores. |
| 2 | Seguridad Nivel Militar | Sanitización + Prepared Statements. Blindaje SQLi, XSS, CSRF. |
| 3 | Modo Oscuro | Contraste mínimo WCAG 4.5:1. Tema fluido Light/Dark. Logo swap logo1↔logo3. |
| 4 | Anti-Alucinación | PROHIBIDO inventar variables. Si no está en el Codex, DETENERSE. |
| 5 | Contrato de API Estricto | No alterar propiedades JSON sin modificar el Contrato oficial. |
| 6 | Ejecución Determinística | Sin "mejoras" ni extensiones no solicitadas. |
| 7 | Naming Registry | `snake_case` backend/DB. `camelCase` frontend. |
| 8 | Dead Code | Auditoría de huérfanos antes de cada entrega. |
| 9 | Inmutabilidad del Sistema | No crear tablas ni alterar schema sin autorización explícita. |
| 10 | Sinónimos Prohibidos | Un solo nombre válido por concepto. Cero traducciones libres. |
| 11 | Arranque Blindado | `.env`, `.htaccess`, `core/src/conexion.php` — fundación inamovible. |
| 12 | Bóveda de Secretos | PROHIBIDO hardcodear credenciales. Todo en `core/.env`. |
| 13 | Aislamiento de Entornos | Local NUNCA apunta a DB de producción. 3 entornos: Local/Staging/Prod. |
| 14 | CORS ≠ Auth | Endpoints POST/PUT/DELETE requieren JWT. Sin token = 401. |
| 15 | Agente Residente | `CLAUDE.md` siempre actualizado = condición de cierre de hito. |
| 16 | CI/CD Inquebrantable | Deploy automático vía `deploy.yml`. Deploy manual prohibido. |
| 17 | Documentación Viva | Módulo sin documentar = módulo no terminado. |
| 18 | Auditoría AXON DCD | Ningún proyecto a producción sin pasar el scanner perimetral. |

---

## 4. REGLAS DE HIERRO — SEGURIDAD (INAMOVIBLES)

### PROHIBIDO absolutamente:
- Hardcodear contraseñas, API Keys, tokens, DSN de BD en cualquier archivo PHP o JS.
- Escribir credenciales en comentarios de código.
- Usar `require_once 'archivo.php'` sin `__DIR__` (rutas relativas simples).
- Usar `Access-Control-Allow-Origin: *` en endpoints que modifican datos.
- Modificar el `.htaccess` sin autorización explícita del Arquitecto.
- Crear nuevas tablas o alterar el schema de BD sin autorización explícita.
- Mostrar errores de PDO o PHP en el frontend (usar try/catch + logs).

### OBLIGATORIO siempre:
- Toda credencial: `parse_ini_file()` desde `core/.env`.
- Toda ruta PHP: `require_once __DIR__ . '/ruta/archivo.php'` — sin excepción.
- Toda conexión a BD: a través de `core/src/conexion.php` únicamente.
- Antes de generar código: verificar que variables existen en `02_SYSTEM_CODEX_REGISTRY.md`.
- Al detectar credenciales hardcodeadas: reportar y corregir inmediatamente.
- Logs de errores: siempre en `logs/backend.log` con timestamp ISO 8601.

---

## 5. COMPORTAMIENTO DEL AGENTE (MODO DE OPERACIÓN)

**Modo:** Determinístico. No creativo. No expansivo.

### Antes de escribir código:
1. Consultar `03_CONTRATOS_API_Y_LOGICA.md` — respetar contratos de API existentes.
2. Verificar que las variables a usar están en `02_SYSTEM_CODEX_REGISTRY.md`.
3. Confirmar que no se alteran tablas de BD (Mandamiento 9).
4. Ejecutar el PRE-CODE CHECKLIST de `04_PROTOCOLOS_DE_VUELO.md`.

### Al terminar un módulo:
1. Actualizar `02_SYSTEM_CODEX_REGISTRY.md` con nuevas tablas, variables o endpoints.
2. Actualizar `03_CONTRATOS_API_Y_LOGICA.md` si se creó un nuevo endpoint.
3. Ejecutar el POST-CODE VALIDATION de `04_PROTOCOLOS_DE_VUELO.md`.
4. Reportar al Arquitecto el estado del módulo.

### Regla de Cierre de Hito (3 condiciones simultáneas):
1. El código está escrito, guardado y funcional en el entorno local.
2. Todos los artefactos nuevos están registrados en el Codex.
3. Se ha emitido el Informe de Operación al Arquitecto.

---

## 6. PIPELINE CI/CD (GitHub Actions → FTP)

**Archivo:** `.github/workflows/deploy.yml`
**Trigger:** Push a rama `main`

**GitHub Secrets requeridos** (Settings → Secrets → Actions):
| Secret | Contenido |
| :--- | :--- |
| `FTP_SERVER` | Servidor FTP del hosting (ej. `ftp.tourfindy.com`) |
| `FTP_USERNAME` | Usuario FTP del subdominio |
| `FTP_PASSWORD` | Contraseña FTP (NUNCA en código) |

**Nota de impacto:** `server-dir: ./` porque el usuario FTP inicia sesión directamente en `public_html/nova/`.

**Excluido del deploy:**
- `core/.env` — credenciales reales
- `knowledge/` — documentación interna
- `logs/` — logs locales
- `CLAUDE.md`, `*.md`, `*.sql`

---

## 7. VOCABULARIO CONTROLADO (Nova Horizonte)

| ✅ USAR | ❌ PROHIBIDO |
| :--- | :--- |
| "Nos encargamos" | "Te ayudamos" |
| "Coordinamos cada detalle" | "Organizamos" |
| "Acceso exclusivo" | "Tour compartido" |
| "Experiencia privada" | "Actividades" / "Tours" |
| "Experiencias" (servicios) | "Productos" |

---

## 8. BASE DE DATOS DE PRODUCCIÓN

- **Host:** `localhost` (cPanel)
- **Nombre:** `tourfindycom_nova_db`
- **Usuario:** `tourfindycom_nova_db_user`
- **Conexión:** SIEMPRE a través de `core/src/conexion.php` con PDO

---

## 9. HISTORIAL DE VERSIONES

| Versión | Fecha | Cambio Principal |
| :--- | :--- | :--- |
| v1.0 | 2026-04-03 | Creación inicial del manual operativo |
| v1.1 | 2026-06-04 | Personalización completa para Nova Horizonte Tours. Fase 0–3 ejecutada por AXON_DCD. |
