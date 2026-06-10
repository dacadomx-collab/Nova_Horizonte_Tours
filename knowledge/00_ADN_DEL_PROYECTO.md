# 🧬 00 - ADN DEL PROYECTO (DIRECTRIZ MAESTRA)
**Última actualización:** 2026-06-04 | **Agente:** AXON_DCD

---

## 📌 1. IDENTIDAD DEL PROYECTO

- **Nombre del Proyecto:** Nova Horizonte Tours
- **Cliente / Dueño:** Nova Horizonte Tours
- **Ubicación Base:** La Paz, Baja California Sur, México
- **Fecha de Inicio:** 3 Abril 2026
- **Objetivo Principal:** Plataforma web de ultra-lujo para la coordinación de experiencias privadas en tierra, mar y cielo. Sistema de concierge virtual inteligente con catálogo de servicios VIP A–G, logística y hospitalidad de precisión matemática.
- **Posicionamiento:** No somos una agencia de tours; somos **logística y hospitalidad de ultra-lujo**.

### Promesa Central
> "Cero estrés. Control absoluto. Experiencias impecables en tierra, mar y cielo."

### Misión
Orquestar experiencias de ultra-lujo en tierra, mar y cielo mediante un sistema de logística y hospitalidad impecable. Liberamos a nuestros clientes de cualquier fricción o estrés, garantizando que su único trabajo sea disfrutar de un acceso exclusivo a las maravillas del mundo.

### Visión
Convertirnos en el estándar global de excelencia en turismo VIP y concierge, escalando desde el ecosistema único de Baja California Sur hacia los destinos más exclusivos del planeta.

---

## 🛠️ 2. STACK TECNOLÓGICO Y ARQUITECTURA

- **Frontend:** HTML5 + CSS3 + Vanilla JS — Mobile-First, Modo Oscuro Nativo
- **Backend:** PHP 8+ con `declare(strict_types=1)` en todos los archivos
- **Base de Datos:** MySQL/MariaDB vía PDO centralizado (`core/src/conexion.php`)
- **Infraestructura / Despliegue:**
  - **Servidor FTP:** Configurado en GitHub Secret `FTP_SERVER`
  - **Usuario FTP:** Configurado en GitHub Secret `FTP_USERNAME`
  - **server-dir:** `./` (FTP inicia en `public_html/nova/` del subdominio)
  - **Flujo:** GitHub Actions (`deploy.yml`) → FTP Auto-Deploy al push a `main`
- **URL Producción:** `https://nova.tourfindy.com`
- **Entorno Local:** `C:\xampp\htdocs\Nova_Horizonte_Tours\`

---

## 🧩 3. MÓDULOS PRINCIPALES (CORE FEATURES)

1. **Landing Page Ultra-Lujo (SPA):** Página principal con hero, catálogo A–G, modal de detalle + upsells, trust strip y footer. Stack: HTML/CSS/JS nativo, Mobile-First, Dark Mode nativo.
2. **Concierge Virtual Nova:** Interfaz de chat embebida en el hero para coordinación de experiencias privadas. Input de texto + voz + chips de acceso rápido.
3. **Catálogo de Servicios VIP (A–G):** Renderizado dinámico de tarjetas desde JS. Cada servicio tiene upsells VIP. Categorías: `standard_vip`, `elite`, `black`.
4. **Sistema de Autenticación (futuro):** JWT Bearer + RBAC. Todo endpoint de modificación requiere token válido.
5. **Panel de Administración (futuro):** Gestión de servicios, reservaciones y clientes.

---

## 🎨 4. CATÁLOGO OFICIAL DE SERVICIOS V1.0

Estructura de base de datos: columna `category` en tabla `services`. Niveles VIP: `['standard_vip', 'elite', 'black']`.

| ID | Categoría | Servicio | Upsells VIP Principales |
| :--- | :--- | :--- | :--- |
| A | Marítimo | Expediciones Marítimas Premium | Chef privado a bordo · Fotógrafo editorial |
| B | Terrestre | Logística Terrestre VIP (Transporte Privado) | Fast-track aeroportuario · Amenidades signature |
| C | Naturaleza | Exploración y Naturaleza (Senderismo) | Picnic escenográfico · Tracking satelital |
| D | Ecuestre | Rutas Ecuestres de Lujo (Cabalgatas) | Sesión fotográfica cinematográfica · Wine tasting |
| E | Cultural | Herencia Cultural (Pueblos Mágicos) | Acceso a galerías · Reservas off-menu |
| F | Concierge | Concierge & Eventos Exclusivos | Signature Experience · Curaduría musical |
| G | Signature | Detalle de Firma™ (Aplicable a TODO) | Toalla fría aromatizada · Bebida de bienvenida |

---

## 🔌 5. INTEGRACIONES Y TERCEROS (APIs)

- **Pasarela de Pago:** PayPal + Stripe (integración futura — keys en `core/.env`)
- **SMTP / Mensajería:** Servidor SMTP propio (`nova.tourfindy.com`, puerto 465 SSL)
- **IA Concierge:** Por definir (clave en `core/.env` bajo variable `AI_API_KEY`)
- **WhatsApp Directo:** Integración vía enlace `wa.me` — número: `+52 612 123 4567`

---

## ⚠️ 6. REGLAS ESPECÍFICAS DEL PROYECTO

1. **Vocabulario estricto:** "Nos encargamos" (nunca "Te ayudamos"). "Coordinamos" (nunca "Organizamos"). "Experiencia privada" (nunca "Tour").
2. **Paleta inamovible:** Negro Mate `#0B0C10` / Azul Eléctrico `#00E5FF` / Grafito `#1F2833` / Blanco `#FAFAFA`.
3. **Logo swap nativo:** Dark Mode → `logo3.png`; Light Mode → `logo1.png`. Ambos deben conmutar automáticamente.
4. **Favicon global:** `assets/img/logo3.png` inyectado como `<link rel="icon">` en todas las páginas sin excepción.
5. **Target de cliente:** Turismo VIP. Tono: Preciso, discreto, tecnológico, humano.
6. **Cero compartido:** Toda experiencia es "privada por defecto". Prohibido usar lenguaje de grupos o tours compartidos.
