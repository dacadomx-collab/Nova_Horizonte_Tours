<!DOCTYPE html>
<html lang="es" data-theme="">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Nova Horizonte — Logística y hospitalidad de ultra-lujo. Experiencias privadas en tierra, mar y cielo. La Paz, Baja California Sur.">
  <meta name="theme-color" content="#0B0C10">

  <!-- Favicon Global — Mandamiento AXON_DCD: logo3.png inyectado en todas las páginas -->
  <link rel="icon" type="image/png" sizes="32x32" href="assets/img/logo3.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/img/logo3.png">
  <link rel="apple-touch-icon"                    href="assets/img/logo3.png">
  <link rel="shortcut icon"                       href="assets/img/logo3.png">

  <!-- Open Graph -->
  <meta property="og:title"       content="Nova Horizonte · Experiencias Privadas de Ultra-Lujo">
  <meta property="og:description" content="Coordinamos cada detalle. Acceso exclusivo. Cero estrés.">
  <meta property="og:type"        content="website">
  <meta property="og:image"       content="assets/img/logo1.png">

  <title>Nova Horizonte · Experiencias Privadas de Ultra-Lujo</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

  <!-- Main CSS -->
  <link rel="stylesheet" href="css/main.css">
</head>

<body>

<!-- ═══════════════════════════════════════════════════════
     NAVBAR
════════════════════════════════════════════════════════ -->
<nav id="nh-navbar" role="navigation" aria-label="Navegación principal">

  <!-- Logo -->
  <a href="#nh-hero" aria-label="Nova Horizonte — Inicio">
    <img id="nh-navbar-logo"
         src="assets/img/logo3.png"
         alt="Nova Horizonte Tours"
         class="nh-logo"
         data-dark="assets/img/logo3.png"
         data-light="assets/img/logo1.png"
         onerror="this.onerror=null; this.src='assets/img/logo3.png';">
  </a>

  <!-- Desktop links -->
  <ul class="nh-nav-links" role="list">
    <li><a id="nh-nav-experiences" href="#nh-services">Experiencias</a></li>
    <li><a id="nh-nav-concierge"   href="#nh-nova-bar">Concierge Nova</a></li>
    <li><a id="nh-nav-about"       href="#nh-footer">Nosotros</a></li>
    <li><a id="nh-nav-contact"     href="#nh-footer">Contacto</a></li>
  </ul>

  <!-- Controls -->
  <div class="nh-nav-controls">

    <!-- Language toggle -->
    <button id="nh-lang-btn"
            class="nh-icon-btn nh-lang-btn"
            onclick="nhToggleLang()"
            aria-label="Cambiar idioma"
            type="button">EN</button>

    <!-- Theme toggle -->
    <button id="nh-theme-btn"
            class="nh-icon-btn"
            onclick="nhToggleTheme()"
            aria-label="Cambiar tema"
            type="button">
      <span id="nh-theme-icon"></span>
    </button>

    <!-- Hamburger (mobile) -->
    <button id="nh-hamburger"
            class="nh-hamburger"
            onclick="nhToggleDrawer()"
            aria-label="Abrir menú"
            aria-expanded="false"
            aria-controls="nh-drawer"
            type="button">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>

<!-- Mobile Drawer — Silent Luxury Menu -->
<nav id="nh-drawer" role="navigation" aria-label="Menú móvil">
  <a id="nh-drawer-experiences" class="nh-drawer-link" href="#nh-services"  onclick="nhCloseDrawer()">Experiencias</a>
  <a id="nh-drawer-concierge"   class="nh-drawer-link" href="#nh-nova-bar"  onclick="nhCloseDrawer()">Concierge Nova</a>
  <a id="nh-drawer-about"       class="nh-drawer-link" href="#nh-footer"    onclick="nhCloseDrawer()">Nosotros</a>
  <a id="nh-drawer-contact"     class="nh-drawer-link" href="#nh-footer"    onclick="nhCloseDrawer()">Contacto</a>
</nav>


<!-- ═══════════════════════════════════════════════════════
     HERO
════════════════════════════════════════════════════════ -->
<section id="nh-hero" aria-label="Portada principal">
  <video class="nh-hero-video"
         autoplay
         loop
         muted
         playsinline
         poster="assets/img/main.png"
         aria-hidden="true">
    <source src="assets/video/main.mp4" type="video/mp4">
  </video>
  <div class="nh-hero-bg" aria-hidden="true"></div>

  <div class="nh-hero-badge nh-reveal">
    <span class="nh-hero-badge-dot" aria-hidden="true"></span>
    <span id="nh-hero-badge-text">Acceso exclusivo · Baja California Sur</span>
  </div>

  <h1 class="nh-display nh-hero-title nh-reveal" data-delay="1">
    <span id="nh-hero-title-text">La experiencia privada que mereces</span>
  </h1>

  <p id="nh-hero-sub" class="nh-hero-sub nh-reveal" data-delay="2">
    Nos encargamos de cada detalle. Tú solo decides dónde quieres estar.
  </p>

  <div class="nh-hero-cta-group nh-reveal" data-delay="3">
    <a id="nh-hero-cta1" class="nh-btn nh-btn-primary" href="#nh-services">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      Explorar Experiencias
    </a>
    <button id="nh-hero-cta2" class="nh-btn nh-btn-ghost" onclick="document.getElementById('nh-nova-input').focus()" type="button">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      Hablar con Nova
    </button>
  </div>

  <!-- ── CONCIERGE VIRTUAL NOVA ── -->
  <div id="nh-nova-bar" class="nh-reveal" data-delay="4">

    <p id="nh-nova-label" class="nh-eyebrow" style="margin-bottom:.6rem;">
      Concierge Virtual Nova
    </p>

    <div class="nh-nova-container">
      <!-- Nova icon -->
      <div class="nh-nova-icon" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B0C10" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </div>

      <!-- Text input -->
      <input id="nh-nova-input"
             type="text"
             class="nh-nova-input"
             placeholder="¿Qué experiencia privada coordinamos para ti?"
             autocomplete="off"
             aria-label="Consultar al Concierge Virtual Nova">

      <!-- Voice -->
      <button id="nh-voice-btn"
              class="nh-voice-btn"
              onclick="nhToggleVoice()"
              aria-label="Activar entrada por voz"
              type="button">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
      </button>

      <!-- Send -->
      <button class="nh-nova-send"
              onclick="nhSendNova()"
              aria-label="Enviar consulta"
              type="button">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </div>

    <!-- Quick-access chips -->
    <div class="nh-nova-suggestions" role="list">
      <button id="nh-nova-chip-1" class="nh-nova-chip" type="button" role="listitem">Expedición marítima</button>
      <button id="nh-nova-chip-2" class="nh-nova-chip" type="button" role="listitem">Traslado VIP</button>
      <button id="nh-nova-chip-3" class="nh-nova-chip" type="button" role="listitem">Evento exclusivo</button>
      <button id="nh-nova-chip-4" class="nh-nova-chip" type="button" role="listitem">Ruta al atardecer</button>
    </div>
  </div>

  <!-- Nova response -->
  <div id="nh-nova-response" role="status" aria-live="polite">
    <div class="nh-nova-response-header">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      Concierge Virtual Nova
    </div>
    <p id="nh-nova-response-body"></p>
  </div>
</section>


<!-- ═══════════════════════════════════════════════════════
     TRUST STRIP
════════════════════════════════════════════════════════ -->
<div id="nh-trust" aria-label="Certificaciones y garantías">
  <div id="nh-trust-grid" class="nh-trust-grid"></div>
</div>

<hr class="nh-divider">


<!-- ═══════════════════════════════════════════════════════
     SERVICES CATALOG A–G
════════════════════════════════════════════════════════ -->
<section id="nh-services" class="nh-section" aria-labelledby="nh-serv-title">
  <div class="nh-section-header nh-reveal">
    <p class="nh-eyebrow">Catálogo Oficial · A – G</p>
    <h2 id="nh-serv-title" class="nh-display nh-section-title">Experiencias Privadas</h2>
    <p id="nh-serv-desc" class="nh-section-desc">
      Coordinamos cada detalle para que tu único trabajo sea disfrutar. Acceso exclusivo a las maravillas del mundo.
    </p>
  </div>

  <!-- ARF-Grid container — js renderCards() lo puebla -->
  <div id="nh-services-grid" class="nh-grid" role="list"></div>
</section>


<!-- ═══════════════════════════════════════════════════════
     VISUAL BREAK — PANORAMIC DIVIDER
════════════════════════════════════════════════════════ -->
<figure class="nh-visual-break" aria-hidden="true">
  <picture>
    <source srcset="assets/img/oceanic_command_horizon_cruise.avif" type="image/avif">
    <source srcset="assets/img/oceanic_command_horizon_cruise.webp" type="image/webp">
    <img src="assets/img/oceanic_command_horizon_cruise.jpg"
         alt=""
         loading="lazy">
  </picture>
</figure>


<!-- ═══════════════════════════════════════════════════════
     SIGNATURE DETAIL™ — BANNER G
════════════════════════════════════════════════════════ -->
<section id="nh-signature" aria-labelledby="nh-sig-title">
  <p class="nh-eyebrow nh-reveal">G · Signature Detail™</p>
  <h2 id="nh-sig-title" class="nh-display nh-section-title nh-reveal" data-delay="1">Signature Detail™</h2>
  <p id="nh-sig-desc"   class="nh-section-desc nh-reveal"              data-delay="2">
    La hospitalidad invisible que lo distingue todo.
  </p>
  <div id="nh-signature-items" class="nh-signature-grid"></div>
</section>


<!-- ═══════════════════════════════════════════════════════
     MODAL — Service Detail + Upsells
════════════════════════════════════════════════════════ -->
<div id="nh-modal-overlay"
     class="nh-modal-overlay"
     role="dialog"
     aria-modal="true"
     aria-labelledby="nh-modal-title"
     tabindex="-1">

  <div class="nh-modal" role="document">
    <div class="nh-modal-handle" aria-hidden="true"></div>

    <div class="nh-modal-header">
      <div class="nh-modal-header-info">
        <p id="nh-modal-label" class="nh-card-label"></p>
        <h3 id="nh-modal-title" class="nh-display" style="font-size:1.3rem;"></h3>
      </div>
      <button class="nh-modal-close"
              onclick="closeModal()"
              aria-label="Cerrar"
              type="button">×</button>
    </div>

    <div class="nh-modal-body">
      <p id="nh-modal-desc" class="nh-modal-desc"></p>

      <p class="nh-modal-upsells-title">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <span id="nh-modal-upsell-title">MEJORAS VIP DISPONIBLES</span>
      </p>

      <div id="nh-modal-upsells" class="nh-upsell-list"></div>

      <div class="nh-modal-cta-row">
        <button id="nh-modal-cta1"
                class="nh-btn nh-btn-primary"
                type="button"
                onclick="closeModal()">
          Solicitar Acceso Exclusivo
        </button>
        <a id="nh-modal-cta2"
           class="nh-btn nh-btn-ghost"
           href="https://wa.me/526121234567?text=Hola%2C%20deseo%20coordinar%20una%20experiencia%20privada%20con%20Nova%20Horizonte"
           target="_blank"
           rel="noopener noreferrer">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          WhatsApp Directo
        </a>
      </div>
    </div>
  </div>
</div>


<!-- ═══════════════════════════════════════════════════════
     FOOTER
════════════════════════════════════════════════════════ -->
<footer id="nh-footer" role="contentinfo">

  <img src="assets/img/logo2.png"
       alt="Nova Horizonte"
       class="nh-footer-logo"
       onerror="this.onerror=null; this.src='assets/img/logo1.png';">

  <p id="nh-footer-tagline" class="nh-footer-tagline">
    "Cero estrés. Control absoluto. Experiencias impecables."
  </p>

  <ul id="nh-footer-links" class="nh-footer-links" role="list"></ul>

  <div class="nh-footer-security">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    <span id="nh-footer-security">Seguridad Avanzada de Grado Bancario</span>
  </div>

  <p id="nh-footer-copy"  class="nh-footer-copy"></p>
  <p id="nh-footer-copy2" class="nh-footer-copy"></p>
</footer>


<!-- ═══════════════════════════════════════════════════════
     BACK TO TOP
════════════════════════════════════════════════════════ -->
<button id="nh-back-top" type="button" aria-label="Volver al inicio">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
</button>


<!-- ═══════════════════════════════════════════════════════
     AURA — ASISTENTE DE IA
════════════════════════════════════════════════════════ -->
<button id="nh-aura-toggle" type="button" aria-label="Abrir AURA" aria-expanded="false">
  <span class="nh-aura-pulse" aria-hidden="true"></span>
</button>

<div id="nh-aura-panel" role="dialog" aria-label="Panel de AURA">
  <div class="nh-aura-header">
    <span class="nh-aura-orb" aria-hidden="true"></span>
    <div class="nh-aura-header-text">
      <p class="nh-aura-name">AURA</p>
      <p class="nh-aura-status">Inteligencia Nova · En línea</p>
    </div>
    <button id="nh-aura-close" type="button" aria-label="Cerrar AURA">&times;</button>
  </div>

  <div class="nh-aura-body">
    <p id="nh-aura-response" class="nh-aura-response">
      Soy AURA. Pregúntame sobre tu próxima experiencia privada.
    </p>

    <div class="nh-aura-controls">
      <input id="nh-aura-input"
             type="text"
             class="nh-aura-input"
             placeholder="Escribe tu instrucción..."
             autocomplete="off"
             aria-label="Instrucción para AURA">

      <button id="nh-aura-mic" class="nh-aura-btn" type="button" aria-label="Activar voz">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
      </button>

      <button id="nh-aura-spk" class="nh-aura-btn" type="button" aria-label="Activar audio">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
      </button>

      <button id="nh-aura-send" class="nh-aura-send" type="button" aria-label="Enviar a AURA">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </div>
  </div>
</div>


<!-- ═══════════════════════════════════════════════════════
     SCRIPTS
════════════════════════════════════════════════════════ -->
<script src="js/app.js"></script>

</body>
</html>
