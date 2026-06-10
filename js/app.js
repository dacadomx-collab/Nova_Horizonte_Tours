/**
 * NOVA HORIZONTE TOURS — app.js
 * Mobile-First | Bilingüe ES/EN | ARF-Grid compliant
 * Sin !important | Sin hardcode de estilos en línea
 */

'use strict';

/* ═══════════════════════════════════════════════════════════
   0. SIGNATURE DETAIL — ICONOGRAFÍA SVG (sin emojis)
═══════════════════════════════════════════════════════════ */
const NH_SIG_ICONS = {
  cold:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07M8 6l4-2 4 2M8 18l4 2 4-2M6 8l-2 4 2 4M18 8l2 4-2 4"/></svg>',
  drink:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-7M8 22h8M5 4h14l-2 6.5a5 5 0 0 1-10 0z"/><path d="M9 6h6"/></svg>',
  music:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>',
  thermo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>'
};

/* ═══════════════════════════════════════════════════════════
   1. DICCIONARIO BILINGÜE — VOCABULARIO CONTROLADO
═══════════════════════════════════════════════════════════ */
const NH_LANG = {
  es: {
    /* Navbar */
    navExperiences: 'Experiencias',
    navConcierge:   'Concierge Nova',
    navAbout:       'Nosotros',
    navContact:     'Contacto',

    /* Hero */
    heroBadge:    'Acceso exclusivo · Baja California Sur',
    heroTitle:    'La experiencia privada que mereces',
    heroSub:      'Nos encargamos de cada detalle. Tú solo decides dónde quieres estar.',
    heroCta1:     'Explorar Experiencias',
    heroCta2:     'Hablar con Nova',

    /* Nova bar */
    novaPlaceholder: '¿Qué experiencia privada coordinamos para ti?',
    novaLabel:       'Concierge Virtual Nova',
    novaChip1:       'Expedición marítima',
    novaChip2:       'Traslado VIP',
    novaChip3:       'Evento exclusivo',
    novaChip4:       'Ruta al atardecer',
    novaListening:   'Escuchando…',

    /* Nova respuestas */
    novaGreet:   'Bienvenido. Soy el Concierge Virtual Nova. Coordinamos cada detalle de tu experiencia privada en Baja California Sur.',
    novaDefault: 'Entendido. Nos encargamos de coordinar tu experiencia privada. Un especialista de Gladys y David se pondrá en contacto contigo en breve para ofrecerte acceso exclusivo.',

    /* Servicios — sección */
    servTitle: 'Experiencias Privadas',
    servDesc:  'Coordinamos cada detalle para que tu único trabajo sea disfrutar. Acceso exclusivo a las maravillas del Mundo.',
    servCta:   'Ver experiencia',
    servUpsellLabel: 'Mejoras VIP disponibles',
    servPlayLabel: 'Reproducir vista previa',

    /* Servicios A–G */
    services: [
      {
        id: 'maritime',
        tag: 'A · Oceanic Command™',
        tier: 'Elite & Black',
        title: 'Expediciones Marítimas Premium',
        icon: '🌊',
        desc: 'Exploraciones privadas en el Mar de Cortés con ejecución impecable. Coordinamos acceso exclusivo a Isla Espíritu Santo y encuentros controlados con fauna marina. Flota de alto nivel, protocolos estrictos.',
        upsells: [
          { icon: '👨‍🍳', name: 'Chef Privado Cognitivo', desc: 'Menú maridado diseñado según clima y preferencias del viajero, servido a bordo.' },
          { icon: '📸', name: 'Fotografía Editorial Automatizada', desc: 'Cobertura cinemática con entrega tipo magazine. Nos encargamos del resultado visual.' }
        ]
      },
      {
        id: 'ground',
        tag: 'B · TerraLink Executive™',
        tier: 'VIP & Elite',
        title: 'Logística Terrestre VIP',
        icon: '🚘',
        desc: 'Movilidad de alto nivel que garantiza fluidez, discreción y puntualidad. Coordinamos desde la recepción personalizada hasta el traslado final en vehículos climatizados con conectividad total.',
        upsells: [
          { icon: '✈️', name: 'Fast-Track Aeroportuario Inteligente', desc: 'Asistencia prioritaria de equipaje y trámites. Nos encargamos sin fricción.' },
          { icon: '🌿', name: 'Amenidades Biorresponsivas', desc: 'Fragancia signature de la casa y bebidas premium adaptadas al perfil del viajero.' }
        ]
      },
      {
        id: 'nature',
        tag: 'C · Terra Essence™',
        tier: 'VIP & Elite',
        title: 'Exploración y Naturaleza',
        icon: '🏔️',
        desc: 'Acceso curado a los paisajes más impactantes de BCS. Rutas guiadas exclusivas —miradores, playas vírgenes— con guías expertos y equipamiento de alto rendimiento. Coordinamos densidad turística y clima.',
        upsells: [
          { icon: '🧺', name: 'Picnic Escenográfico de Lujo', desc: 'Experiencia gourmet en locaciones secretas coordinadas con precisión absoluta.' },
          { icon: '🛰️', name: 'Soporte Satelital Inteligente', desc: 'Tracking y monitoreo en tiempo real para tu tranquilidad total.' }
        ]
      },
      {
        id: 'equestrian',
        tag: 'D · Equestrian Horizon™',
        tier: 'Elite & Black',
        title: 'Rutas Ecuestres de Lujo',
        icon: '🐴',
        desc: 'Conexión elegante con el entorno. Recorridos privados al atardecer en playa o desierto. Coordinamos el ritmo del cliente, selección de montura y ruta para una experiencia privada sin igual.',
        upsells: [
          { icon: '🎬', name: 'Sesión Fotográfica Cinemática IA', desc: 'Golden Hour calculada. Nos encargamos de cada encuadre para un resultado editorial.' },
          { icon: '🍷', name: 'Wine Tasting Privado en la Naturaleza', desc: 'Etiquetas y temperatura adaptadas al clima y momento. Acceso exclusivo.' }
        ]
      },
      {
        id: 'cultural',
        tag: 'E · Legacy Immersion™',
        tier: 'VIP & Elite',
        title: 'Herencia Cultural',
        icon: '🏛️',
        desc: 'Inmersión cultural privada en Todos Santos y El Triunfo. Coordinamos itinerarios a medida con gastronomía de autor y acceso exclusivo a la historia local sin ninguna fricción logística.',
        upsells: [
          { icon: '🖼️', name: 'Acceso Privado Cognitivo a Galerías', desc: 'Experiencia privada con artistas locales de renombre. Coordinamos todo.' },
          { icon: '🍽️', name: 'Reservaciones Off-Menu', desc: 'Acceso exclusivo a experiencias gastronómicas que no están en el menú público.' }
        ]
      },
      {
        id: 'concierge',
        tag: 'F · Signature Orchestration™',
        tier: 'Black',
        title: 'Concierge & Eventos Exclusivos',
        icon: '💎',
        desc: 'El núcleo de Nova Horizonte. Coordinamos la producción y ejecución de eventos en yates, playas o locaciones privadas con precisión absoluta. El cliente define la visión; nos encargamos de la realidad.',
        upsells: [
          { icon: '✨', name: 'Signature Experience Engine', desc: 'Evento único no replicable, diseñado para una sola ocasión. Acceso exclusivo total.' },
          { icon: '🎵', name: 'Curaduría Musical Cognitiva', desc: 'Selección y entretenimiento premium coordinados al milímetro del evento.' }
        ]
      }
    ],

    /* Signature Detail */
    sigTitle: 'Signature Detail™',
    sigDesc:  'La hospitalidad invisible que lo distingue todo.',
    sigItems: [
      { icon: NH_SIG_ICONS.cold,    text: 'Toalla fría aromatizada al primer contacto' },
      { icon: NH_SIG_ICONS.drink,   text: 'Bebida premium de bienvenida contextual' },
      { icon: NH_SIG_ICONS.music,   text: 'Música ambiental sincronizada con el nivel VIP' },
      { icon: NH_SIG_ICONS.thermo,  text: 'Temperatura ideal coordinada con el clima local' }
    ],

    /* Trust */
    trust: [
      'Seguridad Avanzada de Grado Bancario',
      'Infraestructura Blindada Global',
      'Privacidad Total Garantizada',
      'Reserva con Bloqueo Atómico',
      'Control Operativo 24/7'
    ],

    /* Modal */
    modalReserve:  'Solicitar Acceso Exclusivo',
    modalWhatsApp: 'WhatsApp Directo',

    /* Footer */
    footerTagline: '"Cero estrés. Control absoluto. Experiencias impecables."',
    footerLinks: ['Política de Privacidad', 'Términos de Servicio', 'Contacto VIP'],
    footerSecurity: 'Seguridad Avanzada de Grado Bancario',
    footerCopy: '© 2026 Nova Horizonte · Liderado por Gladys y David · La Paz, Baja California Sur, México',
    footerCopy2: 'Infraestructura Blindada Global · Todos los derechos reservados'
  },

  en: {
    navExperiences: 'Experiences',
    navConcierge:   'Concierge Nova',
    navAbout:       'About',
    navContact:     'Contact',

    heroBadge:    'Exclusive Access · Baja California Sur',
    heroTitle:    'The private experience you deserve',
    heroSub:      'We handle every detail. You simply decide where you want to be.',
    heroCta1:     'Explore Experiences',
    heroCta2:     'Talk to Nova',

    novaPlaceholder: 'What private experience shall we arrange for you?',
    novaLabel:       'Concierge Virtual Nova',
    novaChip1:       'Maritime expedition',
    novaChip2:       'VIP transfer',
    novaChip3:       'Exclusive event',
    novaChip4:       'Sunset route',
    novaListening:   'Listening…',

    novaGreet:   'Welcome. I am Concierge Virtual Nova. We handle every detail of your private experience in Baja California Sur.',
    novaDefault: 'Understood. We will arrange your private experience. A specialist from Gladys and David will reach out shortly for your exclusive access.',

    servTitle: 'Private Experiences',
    servDesc:  'We coordinate every detail so your only task is to enjoy. Exclusive access to the wonders of the world.',
    servCta:   'View experience',
    servUpsellLabel: 'VIP upgrades available',
    servPlayLabel: 'Play preview',

    services: [
      {
        id: 'maritime',
        tag: 'A · Oceanic Command™',
        tier: 'Elite & Black',
        title: 'Premium Maritime Expeditions',
        icon: '🌊',
        desc: 'Private explorations in the Sea of Cortez with flawless execution. We arrange exclusive access to Isla Espíritu Santo and controlled wildlife encounters. Top-tier fleet, strict protocols.',
        upsells: [
          { icon: '👨‍🍳', name: 'Cognitive Private Chef', desc: 'Paired menu designed around weather and traveler preferences, served on board.' },
          { icon: '📸', name: 'Automated Editorial Photography', desc: 'Cinematic coverage with magazine-style delivery. We handle every visual result.' }
        ]
      },
      {
        id: 'ground',
        tag: 'B · TerraLink Executive™',
        tier: 'VIP & Elite',
        title: 'VIP Ground Logistics',
        icon: '🚘',
        desc: 'Premium mobility ensuring fluidity, discretion, and punctuality. We coordinate from personalized Meet & Greet to final transfer in climate-controlled vehicles with full connectivity.',
        upsells: [
          { icon: '✈️', name: 'Intelligent Airport Fast-Track', desc: 'Priority baggage and clearance assistance. We handle it seamlessly.' },
          { icon: '🌿', name: 'Bioresponsive Amenities', desc: 'House signature fragrance and premium beverages tailored to the traveler\'s profile.' }
        ]
      },
      {
        id: 'nature',
        tag: 'C · Terra Essence™',
        tier: 'VIP & Elite',
        title: 'Exploration & Nature',
        icon: '🏔️',
        desc: 'Curated access to BCS\'s most breathtaking landscapes. Exclusive guided routes — viewpoints, virgin beaches — with expert guides and high-performance gear. We coordinate crowd density and weather.',
        upsells: [
          { icon: '🧺', name: 'Luxury Scenic Picnic', desc: 'Gourmet experience at secret locations, coordinated with absolute precision.' },
          { icon: '🛰️', name: 'Intelligent Satellite Support', desc: 'Real-time tracking and monitoring for your complete peace of mind.' }
        ]
      },
      {
        id: 'equestrian',
        tag: 'D · Equestrian Horizon™',
        tier: 'Elite & Black',
        title: 'Luxury Equestrian Routes',
        icon: '🐴',
        desc: 'Elegant connection with the landscape. Private sunset rides on beach or desert. We coordinate the client\'s pace, mount selection, and route for an unmatched private experience.',
        upsells: [
          { icon: '🎬', name: 'AI Cinematic Photo Session', desc: 'Calculated Golden Hour. We handle every frame for an editorial result.' },
          { icon: '🍷', name: 'Private Wine Tasting in Nature', desc: 'Labels and temperature adapted to weather and moment. Exclusive access.' }
        ]
      },
      {
        id: 'cultural',
        tag: 'E · Legacy Immersion™',
        tier: 'VIP & Elite',
        title: 'Cultural Heritage',
        icon: '🏛️',
        desc: 'Private cultural immersion in Todos Santos and El Triunfo. We coordinate bespoke itineraries with signature cuisine and exclusive access to local history without any logistical friction.',
        upsells: [
          { icon: '🖼️', name: 'Cognitive Private Gallery Access', desc: 'Private experience with renowned local artists. We handle everything.' },
          { icon: '🍽️', name: 'Off-Menu Reservations', desc: 'Exclusive access to culinary experiences not listed on any public menu.' }
        ]
      },
      {
        id: 'concierge',
        tag: 'F · Signature Orchestration™',
        tier: 'Black',
        title: 'Concierge & Exclusive Events',
        icon: '💎',
        desc: 'The core of Nova Horizonte. We coordinate production and execution of events on yachts, beaches, or private venues with absolute precision. The client defines the vision; we handle the reality.',
        upsells: [
          { icon: '✨', name: 'Signature Experience Engine', desc: 'A one-of-a-kind, non-replicable event designed for a single occasion. Total exclusive access.' },
          { icon: '🎵', name: 'Cognitive Music Curation', desc: 'Premium entertainment selection coordinated to every detail of the event.' }
        ]
      }
    ],

    sigTitle: 'Signature Detail™',
    sigDesc:  'The invisible hospitality that sets everything apart.',
    sigItems: [
      { icon: NH_SIG_ICONS.cold,    text: 'Chilled aromatic towel at first contact' },
      { icon: NH_SIG_ICONS.drink,   text: 'Contextual premium welcome drink' },
      { icon: NH_SIG_ICONS.music,   text: 'Ambient music synced to VIP level' },
      { icon: NH_SIG_ICONS.thermo,  text: 'Ideal temperature coordinated with local climate' }
    ],

    trust: [
      'Advanced Bank-Grade Security',
      'Global Shielded Infrastructure',
      'Total Privacy Guaranteed',
      'Atomic Locking Reservation',
      '24/7 Operational Control'
    ],

    modalReserve:  'Request Exclusive Access',
    modalWhatsApp: 'Direct WhatsApp',

    footerTagline: '"Zero stress. Absolute control. Flawless experiences."',
    footerLinks: ['Privacy Policy', 'Terms of Service', 'VIP Contact'],
    footerSecurity: 'Advanced Bank-Grade Security',
    footerCopy: '© 2026 Nova Horizonte · Led by Gladys and David · La Paz, Baja California Sur, Mexico',
    footerCopy2: 'Global Shielded Infrastructure · All rights reserved'
  }
};

/* ═══════════════════════════════════════════════════════════
   2. MEDIA REGISTRY — activos visuales por experiencia
═══════════════════════════════════════════════════════════ */
const NH_CARD_MEDIA = {
  maritime: {
    poster: {
      avif: 'assets/img/oceanic_command_aerial_pursuit.avif',
      webp: 'assets/img/oceanic_command_aerial_pursuit.webp',
      jpg:  'assets/img/oceanic_command_aerial_pursuit.jpg'
    },
    video: {
      webm: 'assets/video/oceanic_command_expedition.webm',
      mp4:  'assets/video/oceanic_command_expedition.mp4'
    }
  },
  ground: {
    poster: {
      avif: 'assets/img/terralink_executive_jet_wing.avif',
      webp: 'assets/img/terralink_executive_jet_wing.webp',
      jpg:  'assets/img/terralink_executive_jet_wing.jpg'
    },
    video: {
      webm: 'assets/video/VIP_ground_logistics.webm',
      mp4:  'assets/video/VIP_ground_logistics.mp4'
    }
  },
  nature: {
    poster: {
      avif: 'assets/img/terra_essence_cactus_overlook.avif',
      webp: 'assets/img/terra_essence_cactus_overlook.webp',
      jpg:  'assets/img/terra_essence_cactus_overlook.jpg'
    },
    video: {
      webm: 'assets/video/terra_essence_hiking_aerial.webm',
      mp4:  'assets/video/terra_essence_hiking_aerial.mp4'
    }
  },
  equestrian: {
    poster: {
      avif: 'assets/img/equestrian_beach_silhouette.avif',
      webp: 'assets/img/equestrian_beach_silhouette.webp',
      jpg:  'assets/img/equestrian_beach_silhouette.jpg'
    },
    video: {
      webm: 'assets/video/equestrian_horizon_sunset_aerial.webm',
      mp4:  'assets/video/equestrian_horizon_sunset_aerial.mp4'
    }
  },
  cultural: {
    poster: {
      avif: 'assets/img/legacy_immersion_malecon_sunset.avif',
      webp: 'assets/img/legacy_immersion_malecon_sunset.webp',
      jpg:  'assets/img/legacy_immersion_malecon_sunset.jpg'
    },
    video: {
      webm: 'assets/video/Cultural_heritage.webm',
      mp4:  'assets/video/Cultural_heritage.mp4'
    }
  },
  concierge: {
    poster: {
      avif: 'assets/img/signature_orchestration_yacht_event.avif',
      webp: 'assets/img/signature_orchestration_yacht_event.webp',
      jpg:  'assets/img/signature_orchestration_yacht_event.jpg'
    },
    video: {
      webm: 'assets/video/signature_orchestration_event.webm',
      mp4:  'assets/video/signature_orchestration_event.mp4'
    }
  }
};

/* ═══════════════════════════════════════════════════════════
   3. STATE
═══════════════════════════════════════════════════════════ */
const NHState = {
  lang:          localStorage.getItem('nh_lang')  || 'es',
  theme:         localStorage.getItem('nh_theme') || 'dark',
  listening:     false,
  auraListening: false,
  auraSpeaker:   false
};

/* ═══════════════════════════════════════════════════════════
   4. DOM CACHE
═══════════════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

/* ═══════════════════════════════════════════════════════════
   4. THEME TOGGLE
═══════════════════════════════════════════════════════════ */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '');
  const btn = $('nh-theme-btn');
  if (btn) btn.setAttribute('aria-label', theme === 'light' ? 'Modo Noche' : 'Modo Día');
  localStorage.setItem('nh_theme', theme);
  NHState.theme = theme;
  updateThemeIcon();
  const logo = $('nh-navbar-logo');
  if (logo) logo.src = theme === 'light' ? (logo.dataset.light || logo.src) : (logo.dataset.dark || logo.src);
}

function updateThemeIcon() {
  const ico = $('nh-theme-icon');
  if (!ico) return;
  ico.innerHTML = NHState.theme === 'light'
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
}

/* ═══════════════════════════════════════════════════════════
   5. LANGUAGE SWITCHER
═══════════════════════════════════════════════════════════ */
function applyLang(lang) {
  NHState.lang = lang;
  localStorage.setItem('nh_lang', lang);
  const d = NH_LANG[lang];

  /* Lang button label */
  const btn = $('nh-lang-btn');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';

  /* Navbar links */
  _setText('nh-nav-experiences', d.navExperiences);
  _setText('nh-nav-concierge',   d.navConcierge);
  _setText('nh-nav-about',       d.navAbout);
  _setText('nh-nav-contact',     d.navContact);

  /* Drawer links */
  _setText('nh-drawer-experiences', d.navExperiences);
  _setText('nh-drawer-concierge',   d.navConcierge);
  _setText('nh-drawer-about',       d.navAbout);
  _setText('nh-drawer-contact',     d.navContact);

  /* Hero */
  _setText('nh-hero-badge-text', d.heroBadge);
  _setHTML('nh-hero-title-text', d.heroTitle.replace(/\n/g, '<br>'));
  _setText('nh-hero-sub',        d.heroSub);
  _setText('nh-hero-cta1',       d.heroCta1);
  _setText('nh-hero-cta2',       d.heroCta2);

  /* Nova */
  const input = $('nh-nova-input');
  if (input) input.placeholder = d.novaPlaceholder;
  _setText('nh-nova-label', d.novaLabel);
  _setText('nh-nova-chip-1', d.novaChip1);
  _setText('nh-nova-chip-2', d.novaChip2);
  _setText('nh-nova-chip-3', d.novaChip3);
  _setText('nh-nova-chip-4', d.novaChip4);

  /* Services section */
  _setText('nh-serv-title', d.servTitle);
  _setText('nh-serv-desc',  d.servDesc);

  /* Cards — rebuild */
  renderCards(lang);

  /* Signature */
  _setText('nh-sig-title', d.sigTitle);
  _setText('nh-sig-desc',  d.sigDesc);
  renderSignatureItems(lang);

  /* Trust */
  renderTrust(lang);

  /* Footer */
  _setText('nh-footer-tagline',  d.footerTagline);
  _setText('nh-footer-security', d.footerSecurity);
  _setText('nh-footer-copy',     d.footerCopy);
  _setText('nh-footer-copy2',    d.footerCopy2);
  renderFooterLinks(lang);

  document.documentElement.setAttribute('lang', lang);
}

function _setText(id, text) {
  const el = $(id);
  if (el && text !== undefined) el.textContent = text;
}

function _setHTML(id, html) {
  const el = $(id);
  if (el && html !== undefined) el.innerHTML = html;
}

/* ═══════════════════════════════════════════════════════════
   6. RENDER CARDS
═══════════════════════════════════════════════════════════ */
function renderCards(lang) {
  const grid = $('nh-services-grid');
  if (!grid) return;
  const d = NH_LANG[lang];
  grid.innerHTML = d.services.map((s, i) => {
    const media = NH_CARD_MEDIA[s.id];
    let mediaInner;
    if (media) {
      const { poster, video } = media;
      mediaInner = `<div class="nh-card-media-wrap">
        <picture class="nh-card-poster">
          <source srcset="${poster.avif}" type="image/avif">
          <source srcset="${poster.webp}" type="image/webp">
          <img class="nh-card-media-img" src="${poster.jpg}" alt="" loading="lazy">
        </picture>
        <video class="nh-card-media-video" muted loop playsinline preload="none" poster="${poster.jpg}">
          <source data-src="${video.webm}" type="video/webm">
          <source data-src="${video.mp4}" type="video/mp4">
        </video>
        <button class="nh-card-play" type="button" aria-label="${d.servPlayLabel}">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
        </button>
      </div>`;
    } else {
      mediaInner = `<div class="nh-card-media-icon">${s.icon}</div>`;
    }
    return `
    <article class="nh-card nh-reveal" data-delay="${i + 1}" data-service="${s.id}"
             role="button" tabindex="0" aria-label="${s.title}"
             onclick="openModal('${s.id}','${lang}')">
      <div class="nh-card-media">
        ${mediaInner}
        <div class="nh-card-media-overlay"></div>
        <span class="nh-card-tier">${s.tier}</span>
      </div>
      <div class="nh-card-body">
        <p class="nh-card-label">${s.tag}</p>
        <h3 class="nh-card-title">${s.title}</h3>
        <p class="nh-card-desc">${s.desc}</p>
        <div class="nh-card-footer">
          <span class="nh-card-upsell-count">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${s.upsells.length} ${d.servUpsellLabel}
          </span>
          <span class="nh-card-cta">
            ${d.servCta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </div>
      </div>
    </article>
  `;
  }).join('');

  /* Re-observe new cards */
  observeReveal();
  observeCardMedia();
  bindCardKeys();
}

function bindCardKeys() {
  $$('.nh-card[role="button"]').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   7. MODAL
═══════════════════════════════════════════════════════════ */
function openModal(serviceId, lang) {
  const d    = NH_LANG[lang || NHState.lang];
  const serv = d.services.find(s => s.id === serviceId);
  if (!serv) return;

  const overlay = $('nh-modal-overlay');
  const title   = $('nh-modal-title');
  const label   = $('nh-modal-label');
  const desc    = $('nh-modal-desc');
  const upsells = $('nh-modal-upsells');
  const uTitle  = $('nh-modal-upsell-title');
  const cta1    = $('nh-modal-cta1');
  const cta2    = $('nh-modal-cta2');

  if (title)  title.textContent  = serv.title;
  if (label)  label.textContent  = serv.tag;
  if (desc)   desc.textContent   = serv.desc;
  if (uTitle) uTitle.textContent = d.servUpsellLabel.toUpperCase();
  if (cta1)   cta1.textContent   = d.modalReserve;
  if (cta2)   cta2.textContent   = d.modalWhatsApp;

  if (upsells) {
    upsells.innerHTML = serv.upsells.map(u => `
      <div class="nh-upsell-item">
        <span class="nh-upsell-icon">${u.icon}</span>
        <div class="nh-upsell-content">
          <p class="nh-upsell-name">${u.name}</p>
          <p class="nh-upsell-desc">${u.desc}</p>
        </div>
      </div>
    `).join('');
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.focus();
}

function closeModal() {
  const overlay = $('nh-modal-overlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════════════════
   8. CONCIERGE NOVA
═══════════════════════════════════════════════════════════ */
const NOVA_RESPONSES = {
  maritime:   { es: 'Perfecto. Coordinamos tu expedición marítima privada en el Mar de Cortés. Acceso exclusivo garantizado. Un especialista se pondrá en contacto para los detalles de tu experiencia.', en: 'Perfect. We are arranging your private maritime expedition in the Sea of Cortez. Exclusive access guaranteed. A specialist will reach out for the details of your experience.' },
  transfer:   { es: 'Entendido. Nos encargamos de tu traslado VIP con la máxima discreción y puntualidad. Conectividad y amenidades premium incluidas.', en: 'Understood. We handle your VIP transfer with maximum discretion and punctuality. Premium connectivity and amenities included.' },
  event:      { es: 'Excelente elección. Coordinamos cada detalle de tu evento exclusivo en la locación que prefieras. El cliente define la visión; nos encargamos de la realidad.', en: 'Excellent choice. We coordinate every detail of your exclusive event at your preferred location. You define the vision; we handle the reality.' },
  sunset:     { es: 'Coordinamos tu experiencia privada al atardecer en BCS. Acceso a rutas ecuestres, marítimas o de naturaleza según tu preferencia. ¿Qué tipo de atardecer imaginas?', en: 'We are arranging your private sunset experience in BCS. Access to equestrian, maritime, or nature routes per your preference. What kind of sunset do you envision?' }
};

function sendNovaMessage(textOverride) {
  const input = $('nh-nova-input');
  const responseEl = $('nh-nova-response');
  const d = NH_LANG[NHState.lang];

  const text = (textOverride || (input ? input.value.trim() : '')).toLowerCase();
  if (!text) return;

  let response = d.novaDefault;

  if (/mar|ocean|buceo|snorkel|isla|maritime|sea|dive/i.test(text))   response = NOVA_RESPONSES.maritime[NHState.lang];
  if (/traslad|transporte|vuelo|aeropuert|transfer|flight|airport/i.test(text)) response = NOVA_RESPONSES.transfer[NHState.lang];
  if (/event|boda|celebra|yate|playa|beach|yacht|wedding/i.test(text)) response = NOVA_RESPONSES.event[NHState.lang];
  if (/atardecer|sunset|caballo|horse|ecuestr/i.test(text))            response = NOVA_RESPONSES.sunset[NHState.lang];

  if (responseEl) {
    responseEl.classList.remove('visible');
    setTimeout(() => {
      const body = responseEl.querySelector('#nh-nova-response-body');
      if (body) body.textContent = response;
      responseEl.classList.add('visible');
    }, 100);
  }

  if (input && !textOverride) input.value = '';
}

function toggleVoice() {
  const btn  = $('nh-voice-btn');
  const input = $('nh-nova-input');
  const d = NH_LANG[NHState.lang];

  if (NHState.listening) {
    NHState.listening = false;
    btn.classList.remove('listening');
    btn.setAttribute('aria-label', 'Activar voz');
    return;
  }

  NHState.listening = true;
  btn.classList.add('listening');
  btn.setAttribute('aria-label', d.novaListening);

  if (input) input.placeholder = d.novaListening;

  /* Simulación frontend: resetear después de 2.5s */
  setTimeout(() => {
    NHState.listening = false;
    if (btn) btn.classList.remove('listening');
    if (input) {
      input.placeholder = d.novaPlaceholder;
      input.value = d.novaChip1; /* Demo value */
      sendNovaMessage(d.novaChip1);
    }
  }, 2500);
}

/* ═══════════════════════════════════════════════════════════
   9. RENDER HELPERS
═══════════════════════════════════════════════════════════ */
function renderSignatureItems(lang) {
  const container = $('nh-signature-items');
  if (!container) return;
  const d = NH_LANG[lang];
  container.innerHTML = d.sigItems.map(item => `
    <div class="nh-signature-item nh-reveal">
      <span class="nh-sig-icon" aria-hidden="true">${item.icon}</span>
      <span>${item.text}</span>
    </div>
  `).join('');
  observeReveal();
}

function renderTrust(lang) {
  const container = $('nh-trust-grid');
  if (!container) return;
  const d = NH_LANG[lang];

  const icons = [
    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  ];

  container.innerHTML = d.trust.map((t, i) => `
    <div class="nh-trust-pill">${icons[i] || icons[0]} ${t}</div>
  `).join('');
}

function renderFooterLinks(lang) {
  const el = $('nh-footer-links');
  if (!el) return;
  const d = NH_LANG[lang];
  el.innerHTML = d.footerLinks.map(l => `<li><a href="#" onclick="return false;">${l}</a></li>`).join('');
}

/* ═══════════════════════════════════════════════════════════
   10. HAMBURGER / MOBILE DRAWER
═══════════════════════════════════════════════════════════ */
function toggleDrawer() {
  const btn    = $('nh-hamburger');
  const drawer = $('nh-drawer');
  if (!btn || !drawer) return;
  const open = btn.classList.toggle('open');
  drawer.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function closeDrawer() {
  const btn    = $('nh-hamburger');
  const drawer = $('nh-drawer');
  if (!btn || !drawer) return;
  btn.classList.remove('open');
  drawer.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════════════════
   11. SCROLL REVEAL (IntersectionObserver)
═══════════════════════════════════════════════════════════ */
let revealObserver;

function observeReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  $$('.nh-reveal').forEach(el => revealObserver.observe(el));
}

/* ═══════════════════════════════════════════════════════════
   11B. CARD MEDIA — DATA-SAVER LAZY LOADING
═══════════════════════════════════════════════════════════ */
let cardMediaObserver;

function activateCardVideo(wrap) {
  if (!wrap || wrap.classList.contains('is-active')) return;
  const video = wrap.querySelector('.nh-card-media-video');
  if (!video) return;
  video.querySelectorAll('source[data-src]').forEach(source => {
    source.src = source.dataset.src;
    source.removeAttribute('data-src');
  });
  video.load();
  video.play().catch(() => {});
  wrap.classList.add('is-active');
}

function observeCardMedia() {
  if (cardMediaObserver) cardMediaObserver.disconnect();

  cardMediaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (window.innerWidth >= 768) activateCardVideo(entry.target);
        cardMediaObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  $$('.nh-card-media-wrap').forEach(el => cardMediaObserver.observe(el));
}

function bindCardPlayButtons() {
  const grid = $('nh-services-grid');
  if (!grid) return;
  grid.addEventListener('click', e => {
    const btn = e.target.closest('.nh-card-play');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    activateCardVideo(btn.closest('.nh-card-media-wrap'));
  });
}

/* ═══════════════════════════════════════════════════════════
   12. NAVBAR SCROLL EFFECT
═══════════════════════════════════════════════════════════ */
function initNavbarScroll() {
  const nav = $('nh-navbar');
  if (!nav) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.style.transform = (y > lastY && y > 80) ? 'translateY(-100%)' : 'translateY(0)';
    lastY = y;
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════
   13. CHIP CLICKS
═══════════════════════════════════════════════════════════ */
function initChips() {
  $$('.nh-nova-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const input = $('nh-nova-input');
      if (input) {
        input.value = chip.textContent.trim();
        sendNovaMessage(chip.textContent.trim());
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   14b. BACK TO TOP
═══════════════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = $('nh-back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ═══════════════════════════════════════════════════════════
   14c. AURA — WIDGET FLOTANTE DE IA
═══════════════════════════════════════════════════════════ */
function initAura() {
  const toggle = $('nh-aura-toggle');
  const panel  = $('nh-aura-panel');
  const close  = $('nh-aura-close');
  const input  = $('nh-aura-input');
  const send   = $('nh-aura-send');
  const mic    = $('nh-aura-mic');
  const spk    = $('nh-aura-spk');
  if (!toggle || !panel) return;

  const openPanel = () => {
    panel.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    if (input) input.focus();
  };

  const closePanel = () => {
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    panel.classList.contains('open') ? closePanel() : openPanel();
  });

  if (close) close.addEventListener('click', closePanel);

  if (send)  send.addEventListener('click', () => nhAuraSend());
  if (input) input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); nhAuraSend(); }
  });

  if (mic) mic.addEventListener('click', nhAuraToggleMic);
  if (spk) spk.addEventListener('click', nhAuraToggleSpk);

  window.nhAuraClosePanel = closePanel;
}

function nhAuraSend() {
  const input    = $('nh-aura-input');
  const response = $('nh-aura-response');
  if (!input || !response) return;

  const text = input.value.trim().toLowerCase();
  if (!text) return;

  const d = NH_LANG[NHState.lang];
  let reply = d.novaDefault;
  if (/mar|ocean|buceo|snorkel|isla|maritime|sea|dive/i.test(text))             reply = NOVA_RESPONSES.maritime[NHState.lang];
  if (/traslad|transporte|vuelo|aeropuert|transfer|flight|airport/i.test(text)) reply = NOVA_RESPONSES.transfer[NHState.lang];
  if (/event|boda|celebra|yate|playa|beach|yacht|wedding/i.test(text))          reply = NOVA_RESPONSES.event[NHState.lang];
  if (/atardecer|sunset|caballo|horse|ecuestr/i.test(text))                     reply = NOVA_RESPONSES.sunset[NHState.lang];

  response.textContent = reply;
  input.value = '';

  if (NHState.auraSpeaker && 'speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(reply);
    utter.lang = NHState.lang === 'en' ? 'en-US' : 'es-MX';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  }
}

function nhAuraToggleMic() {
  const btn   = $('nh-aura-mic');
  const input = $('nh-aura-input');
  if (!btn) return;

  NHState.auraListening = !NHState.auraListening;
  btn.classList.toggle('listening', NHState.auraListening);
  btn.setAttribute('aria-label', NHState.auraListening ? NH_LANG[NHState.lang].novaListening : 'Activar voz');

  if (NHState.auraListening) {
    const d = NH_LANG[NHState.lang];
    if (input) input.placeholder = d.novaListening;

    setTimeout(() => {
      NHState.auraListening = false;
      btn.classList.remove('listening');
      btn.setAttribute('aria-label', 'Activar voz');
      if (input) {
        input.placeholder = 'Escribe tu consulta...';
        input.value = d.novaChip1;
        nhAuraSend();
      }
    }, 2500);
  }
}

function nhAuraToggleSpk() {
  const btn = $('nh-aura-spk');
  if (!btn) return;
  NHState.auraSpeaker = !NHState.auraSpeaker;
  btn.classList.toggle('active', NHState.auraSpeaker);
  btn.setAttribute('aria-label', NHState.auraSpeaker ? 'Desactivar audio' : 'Activar audio');
  if (!NHState.auraSpeaker && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

/* ═══════════════════════════════════════════════════════════
   15. KEYBOARD & ACCESSIBILITY
═══════════════════════════════════════════════════════════ */
function initKeyboard() {
  /* Close modal / drawer / AURA on Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const overlay = $('nh-modal-overlay');
      if (overlay && overlay.classList.contains('open')) closeModal();
      closeDrawer();
      const aura = $('nh-aura-panel');
      if (aura && aura.classList.contains('open') && window.nhAuraClosePanel) window.nhAuraClosePanel();
    }
  });

  /* Nova input: Enter to send */
  const input = $('nh-nova-input');
  if (input) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); sendNovaMessage(); }
    });
  }

  /* Modal overlay click-outside */
  const overlay = $('nh-modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal();
    });
  }
}

/* ═══════════════════════════════════════════════════════════
   16. INIT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(NHState.theme);
  applyLang(NHState.lang);
  observeReveal();
  bindCardPlayButtons();
  initNavbarScroll();
  initChips();
  initKeyboard();
  initBackToTop();
  initAura();

  /* Show Nova greeting on first focus */
  const novaInput = $('nh-nova-input');
  if (novaInput) {
    let greeted = false;
    novaInput.addEventListener('focus', () => {
      if (greeted) return;
      greeted = true;
      const responseEl = $('nh-nova-response');
      const body = $('nh-nova-response-body');
      const d = NH_LANG[NHState.lang];
      if (body) body.textContent = d.novaGreet;
      if (responseEl) responseEl.classList.add('visible');
    });
  }
});

/* Exponer funciones globales que el HTML necesita */
window.nhToggleTheme   = () => applyTheme(NHState.theme === 'dark' ? 'light' : 'dark');
window.nhToggleLang    = () => applyLang(NHState.lang === 'es' ? 'en' : 'es');
window.nhToggleDrawer  = toggleDrawer;
window.nhCloseDrawer   = closeDrawer;
window.nhSendNova      = sendNovaMessage;
window.nhToggleVoice   = toggleVoice;
window.openModal       = openModal;
window.closeModal      = closeModal;
