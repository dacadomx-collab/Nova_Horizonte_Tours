# 🧬 SYSTEM CODEX & REGISTRY (DICCIONARIO DE ORO)
**Proyecto:** Nova Horizonte Tours | **Última actualización:** 2026-06-04 | **Agente:** AXON_DCD

---

## 📊 MAPEO DE VARIABLES VALIDADAS (FRONT VS BACK)

| Concepto | DB / Backend (snake_case) | Frontend (camelCase) | Tipo de Dato |
| :--- | :--- | :--- | :--- |
| Categoría de servicio | `category` | `category` | String (`standard_vip`, `elite`, `black`) |
| Nombre del servicio | `service_name` | `serviceName` | String |
| Descripción del servicio | `description` | `description` | String |
| Upsells VIP | `upsells` | `upsells` | Array de String |
| ID de servicio | `service_id` | `serviceId` | Int (AUTO_INCREMENT) |

> **NOTA DE FUNDACIÓN:** Toda conexión a la base de datos se realiza obligatoriamente a través de la clase `Database` en `core/src/conexion.php`, leyendo las variables `DB_HOST`, `DB_NAME`, `DB_USER` y `DB_PASS` del archivo `core/.env`.

---

## 🗄️ ESTRUCTURA DE TABLAS (SCHEMA)

> ⚠️ **INMUTABILIDAD:** No se pueden crear tablas ni alterar el schema sin autorización explícita del Arquitecto (Mandamiento 9).

### Tabla: `services` (Futura — requiere autorización para crear)
- `service_id`: INT AUTO_INCREMENT PK
- `category`: ENUM('standard_vip','elite','black')
- `service_name`: VARCHAR(255) NOT NULL
- `description`: TEXT
- `upsells`: JSON
- `is_active`: TINYINT(1) DEFAULT 1
- `created_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP

---

## 🎨 ACTIVOS VISUALES REGISTRADOS

| Activo | Ruta Canónica | Uso Autorizado |
| :--- | :--- | :--- |
| Logo Light Mode | `assets/img/logo1.png` | Navbar tema claro · Open Graph |
| Logo Dark Mode | `assets/img/logo3.png` | Navbar tema oscuro · Favicon global |
| Logo Footer | `assets/img/logo2.png` | Footer (fallback: `logo1.png`) |
| Favicon Global | `assets/img/logo3.png` | `<link rel="icon">` en todas las páginas |

---

## 🧠 REGISTRO SEMÁNTICO (VOCABULARIO CONTROLADO)

| ✅ Término Permitido | ❌ Prohibido / Sinónimo |
| :--- | :--- |
| `experiencia` / `experiencias` | `tour`, `actividad`, `producto` |
| `coordinamos` | `organizamos`, `gestionamos` |
| `acceso exclusivo` | `tour compartido`, `grupo` |
| `experiencia privada` | `paquete turístico` |
| `nos encargamos` | `te ayudamos`, `te asistimos` |
| `service_id` (backend) | `id`, `serviceID`, `servicio_id` |
| `service_name` (backend) | `nombre`, `title`, `name` |

---

## 🧩 REGISTRO DE COMPONENTES FRONTEND

| Componente | Ruta | Tipo | Estado | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| `index.php` | `index.php` | Page | ✅ Activo | Landing SPA principal — Hero, Catálogo, Footer |
| `main.css` | `css/main.css` | Style | ✅ Activo | Hoja de estilos global — Variables CSS, Dark Mode nativo |
| `app.js` | `js/app.js` | Logic | ✅ Activo | JS principal — Theme toggle, lang toggle, renderCards(), Nova concierge |
| `Database` (clase PHP) | `core/src/conexion.php` | Backend | ✅ Activo | PDO centralizado, CORS, logging |

---

## 🔒 REGISTRO DE INFRAESTRUCTURA

| Artefacto | Ruta | Estado | Notas |
| :--- | :--- | :--- | :--- |
| `.htaccess` | `.htaccess` | ✅ Activo | Blindaje Apache. Bloquea `core/`, `knowledge/`, `logs/`, `*.env` |
| `.gitignore` | `.gitignore` | ✅ Activo | Protección PHP/Apache. Excluye `core/.env`, `logs/*.log`, secretos |
| `.env.example` | `core/.env.example` | ✅ Activo | Plantilla pública INI. Sintaxis `;` para `parse_ini_file()` |
| `deploy.yml` | `.github/workflows/deploy.yml` | ✅ Activo | CI/CD FTP — trigger en `main`, `server-dir: ./` |
| `logs/` | `logs/` | ✅ Activo | Directorio de logs. `backend.log` escrito por `conexion.php` |

---

## 📡 VARIABLES DE ENTORNO REGISTRADAS (`core/.env`)

| Variable | Tipo | Descripción |
| :--- | :--- | :--- |
| `APP_ENV` | String | Entorno activo (`production`/`local`) |
| `APP_URL` | String | URL base del sistema |
| `DB_HOST` | String | Host de base de datos (cPanel: `localhost`) |
| `DB_NAME` | String | Nombre de la base de datos |
| `DB_USER` | String | Usuario de base de datos |
| `DB_PASS` | String | Contraseña de base de datos (NUNCA en Git) |
| `SMTP_HOST` | String | Host del servidor de correo |
| `SMTP_USER` | String | Correo corporativo |
| `SMTP_PASS` | String | Contraseña SMTP (NUNCA en Git) |
| `SMTP_PORT` | Int | Puerto SMTP (465 para SSL) |
| `SMTP_SECURE` | String | Protocolo (`ssl`/`tls`) |
| `ALLOWED_ORIGINS` | String | Lista de orígenes CORS separados por coma |
| `PAYPAL_CLIENT_ID` | String | Client ID de PayPal (futuro) |
| `PAYPAL_SECRET` | String | Secret de PayPal (futuro) |
| `STRIPE_SECRET_KEY` | String | API Key de Stripe (futuro) |
