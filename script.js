/* ==========================================================================
   PORTFOLIO UX/UI DESIGNER — FATOU THIAM
   JavaScript Vanilla — Aucun framework requis
   ========================================================================== */

'use strict';

/**
 * 1. CONFIGURATION PERSONNALISABLE
 * --------------------------------------------------------------------------
 * Modifiez simplement les valeurs ci-dessous dans Visual Studio Code pour
 * activer vos vraies coordonnées, liens sociaux et votre CV PDF.
 * Tant qu'un champ reste vide (''), le site affiche un repère clair sans
 * jamais inventer de fausses coordonnées.
 */
const PORTFOLIO_CONFIG = {
  email: 'ft95thiam@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/fatou-thiam',
  whatsappNumber: '221776092143',
  phoneDisplay: '+221 77 609 21 43',
  // Fichier CV intégré (une copie locale est également disponible dans ./assets/cv/CV_Fatou_Thiam_UX_UI.pdf pour VS Code)
  cvFile: '/assets/aistudio/MON_CV_Fatou_thiam_2_6489fce9.pdf',
  cvReady: true,
};

/**
 * 2. DONNÉES DES ÉTUDES DE CAS (PROJETS)
 * --------------------------------------------------------------------------
 * Aucun résultat chiffré ni statistique inventée.
 * Pour intégrer vos écrans Figma réels : ajoutez le chemin de chaque image
 * dans `image` (ex. './assets/images/svd-wireframes.png') et l'URL de votre
 * prototype dans `prototypeUrl`.
 */
const PROJECTS = [
  {
    id: 'senegal-vide-dressing',
    index: '01',
    title: 'Sénégal Vide Dressing',
    category: 'Marketplace Mode · Seconde main',
    platform: 'Mobile first, puis Web',
    cover: './assets/images/projet-senegal-vide-dressing.jpg',
    role: 'UX Research, UX/UI Design et prototypage',
    tools: ['Figma', 'FigJam', 'Miro'],
    objective:
      'Faciliter la revente et l’achat de vêtements et accessoires de cérémonie de seconde main à prix accessibles pour les femmes au Sénégal.',
    problems: [
      'Les tenues de cérémonie représentent un budget conséquent et sont souvent peu portées après un événement.',
      'La revente informelle sur les réseaux sociaux manque de structure, de filtres fiables (taille, style, état) et de repères de confiance.',
      'Les utilisatrices consultent majoritairement depuis leur smartphone et ont besoin d’un parcours de publication et de recherche rapide.',
    ],
    solution:
      'Conception d’une marketplace pensée Mobile first puis déclinée sur Web, avec un catalogue clair par type de cérémonie, un dépôt d’annonce guidé étape par étape et des fiches produits rassurantes mettant en valeur les détails des tenues.',
    steps: [
      'Analyse des besoins utilisateurs et compréhension des usages d’achat/revente de tenues de cérémonie.',
      'Définition des personas acheteuses / vendeuses et cartographie du parcours utilisateur.',
      'Architecture de l’information et wireframes fonctionnels Mobile first.',
      'Direction visuelle UI, composants réutilisables et prototype interactif sur Figma.',
    ],
    prototypeUrl: '', // Ajoutez votre lien Figma ici dès qu'il est prêt
    figmaFrames: [
      {
        label: 'Flux utilisateur & Wireframes Mobile',
        hint: 'Emplacement prévu pour vos écrans d’onboarding, recherche filtrée et dépôt d’annonce.',
        suggestedPath: 'assets/images/figma-svd-wireframes.png',
        image: '',
      },
      {
        label: 'Maquettes UI Haute Fidélité & Design System',
        hint: 'Emplacement prévu pour vos écrans finaux Figma (Mobile et adaptation Web).',
        suggestedPath: 'assets/images/figma-svd-ui.png',
        image: '',
      },
    ],
  },
  {
    id: 'moytu-net',
    index: '02',
    title: 'Moytu Net (Pel Challenge)',
    category: 'Application éducative · Citoyenneté numérique',
    platform: 'Application Mobile / Tablette',
    cover: './assets/images/projet-moytu-net.jpg',
    role: 'UX Researcher, UI Designer, Graphiste, responsable du prototype et des tests',
    tools: ['Figma', 'FigJam', 'Adobe Illustrator', 'Adobe Photoshop'],
    objective:
      'Sensibiliser les enfants de 7 à 12 ans aux risques numériques grâce à des activités ludiques, tout en proposant un accompagnement clair pour les parents.',
    problems: [
      'Les enfants accèdent de plus en plus tôt aux écrans et aux réseaux sans toujours identifier les comportements à risque en ligne.',
      'Les contenus de prévention classiques sont souvent trop théoriques ou peu adaptés au niveau de lecture des 7–12 ans.',
      'Les parents manquent de repères simples pour suivre l’apprentissage numérique de leurs enfants et ouvrir le dialogue.',
    ],
    solution:
      'Création d’une interface ludique, rassurante et structurée autour de défis courts adaptés à l’âge des enfants, soutenue par des illustrations pédagogiques sur mesure et un espace dédié permettant aux parents d’accompagner la progression.',
    steps: [
      'Recherche utilisateur auprès des familles et analyse des usages numériques des 7–12 ans.',
      'Formalisation des personas (enfant et parent) et scénarios pédagogiques.',
      'Conception graphique, wireframes et maquettes UI accessibles aux jeunes lecteurs.',
      'Réalisation du prototype interactif sur Figma et préparation/conduite des tests utilisateurs.',
    ],
    prototypeUrl:
      'https://www.figma.com/proto/xfdYGWtNRA5fbYHufgBXVs/moytu-net-Pel-challenge?node-id=3-773&t=VadDl35fPtnNikpc-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    figmaFrames: [
      {
        label: 'Parcours ludique Enfant (7–12 ans)',
        hint: 'Emplacement prévu pour vos écrans de défis interactifs et badges pédagogiques.',
        suggestedPath: 'assets/images/figma-moytu-enfant.png',
        image: '',
      },
      {
        label: 'Espace d’accompagnement Parents & Univers graphique',
        hint: 'Emplacement prévu pour vos planches graphiques et écrans parents.',
        suggestedPath: 'assets/images/figma-moytu-parents.png',
        image: '',
      },
    ],
  },
  {
    id: 'mairie-connect',
    index: '03',
    title: 'Mairie Connect',
    category: 'Service public · Expérience citoyenne',
    platform: 'Web & Mobile responsive',
    cover: './assets/images/projet-mairie-connect.jpg',
    role: 'UX Researcher, responsable du prototype et des tests',
    tools: ['Figma', 'Miro', 'FigJam', 'Trello'],
    objective:
      'Faciliter les interactions entre les citoyens et les services municipaux, améliorer l’accès aux informations administratives et simplifier les démarches.',
    problems: [
      'Les démarches municipales peuvent paraître complexes : manque de visibilité sur les pièces à fournir, les horaires ou l’avancement d’une demande.',
      'Les citoyens doivent faire face à des déplacements répétés faute d’informations centralisées et compréhensibles.',
      'L’interface doit rester accessible à des profils variés, quel que soit leur niveau d’aisance numérique.',
    ],
    solution:
      'Conception d’une architecture de l’information claire centrée sur les intentions citoyennes (demander un document, suivre une démarche, contacter un service), appuyée par un prototype interactif testé pour vérifier la compréhension immédiate des parcours.',
    steps: [
      'Recherche utilisateur et cartographie des points de friction dans les démarches citoyennes.',
      'Restructuration de l’architecture de l’information et des parcours prioritaires.',
      'Création de wireframes et prototypage interactif orienté clarté et accessibilité.',
      'Conduite de tests utilisateurs pour identifier les améliorations d’ergonomie.',
    ],
    prototypeUrl: '', // Ajoutez votre lien Figma ici dès qu'il est prêt
    figmaFrames: [
      {
        label: 'Architecture de l’information & User Journey',
        hint: 'Emplacement prévu pour votre cartographie de parcours et arborescence.',
        suggestedPath: 'assets/images/figma-mairie-ux.png',
        image: '',
      },
      {
        label: 'Prototype interactif des démarches citoyennes',
        hint: 'Emplacement prévu pour vos écrans clés du prototype Figma.',
        suggestedPath: 'assets/images/figma-mairie-prototype.png',
        image: '',
      },
    ],
  },
];

/**
 * 3. DONNÉES DU PROCESSUS UX (5 ÉTAPES)
 */
const PROCESS_STEPS = {
  empathize: {
    kicker: 'Étape 01 sur 05',
    title: 'Empathize — Comprendre les utilisateurs',
    description:
      'Observer les habitudes, écouter les frustrations et comprendre le contexte réel d’utilisation avant de formuler la moindre hypothèse d’interface.',
    deliverables: [
      'Entretiens utilisateurs et observation des usages',
      'Analyse des besoins et points de friction',
      'Cartes d’empathie (Empathy Maps)',
    ],
  },
  define: {
    kicker: 'Étape 02 sur 05',
    title: 'Define — Identifier et formuler le problème',
    description:
      'Synthétiser les enseignements de la recherche pour isoler les vrais enjeux utilisateurs et aligner le projet autour d’un problème clair et actionnable.',
    deliverables: [
      'Personas représentatifs des utilisateurs cibles',
      'Cartographie du parcours utilisateur (User Journey)',
      'Formulation claire de la problématique produit',
    ],
  },
  ideate: {
    kicker: 'Étape 03 sur 05',
    title: 'Ideate — Explorer les solutions',
    description:
      'Générer plusieurs pistes fonctionnelles, organiser les contenus de façon logique et sélectionner les approches les plus pertinentes et réalistes.',
    deliverables: [
      'Ateliers d’idéation sur FigJam et Miro',
      'Architecture de l’information et flux utilisateurs (User Flows)',
      'Croquis rapides et priorisation des fonctionnalités',
    ],
  },
  design: {
    kicker: 'Étape 04 sur 05',
    title: 'Design — Concevoir les interfaces et prototypes',
    description:
      'Construire progressivement l’expérience, des wireframes basse fidélité jusqu’aux maquettes UI accessibles, cohérentes et interactives.',
    deliverables: [
      'Wireframes et maquettes fonctionnelles responsive',
      'Composants et bases de design system sur Figma',
      'Prototypes interactifs prêts à être testés',
    ],
  },
  test: {
    kicker: 'Étape 05 sur 05',
    title: 'Test — Évaluer et améliorer l’expérience',
    description:
      'Confronter le prototype à de vrais utilisateurs afin de vérifier la clarté des parcours, repérer les blocages et itérer avec pragmatisme.',
    deliverables: [
      'Scénarios et guides de tests d’utilisabilité',
      'Observation des interactions et recueil des retours',
      'Itérations ciblées pour affiner l’ergonomie et l’accessibilité',
    ],
  },
};

/**
 * 4. DONNÉES DES CERTIFICATIONS & FORMATIONS
 * --------------------------------------------------------------------------
 * Ajoutez vos images dans `assets/certifications/` et renseignez `image` +
 * `verifyUrl` ci-dessous.
 */
const CERTIFICATIONS = {
  'google-ux': {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    status: 'Nov. 2026',
    description:
      'Programme complet couvrant la recherche utilisateur, la création de personas, l’architecture de l’information, les wireframes, le prototypage Figma et les tests d’utilisabilité.',
    image: '', // Ex. : './assets/certifications/certificat-google-ux.jpg'
    suggestedPath: 'assets/certifications/certificat-google-ux.jpg',
    verifyUrl: '', // Ex. : 'https://coursera.org/verify/professional-cert/...'
  },
  'simplon-uxui': {
    title: 'Formation UX/UI Design — Simplon Sénégal',
    issuer: 'Simplon Sénégal',
    status: 'Formation en cours (2026)',
    description:
      'Parcours professionnalisant basé sur la pédagogie active et des projets concrets : UX Research, UI Design, prototypage, design systems et accessibilité.',
    image: '', // Ex. : './assets/certifications/attestation-simplon-ux-ui.jpg'
    suggestedPath: 'assets/certifications/attestation-simplon-ux-ui.jpg',
    verifyUrl: '',
  },
  'simplon-numerique': {
    title: 'Formation Compétences Numériques — Simplon Sénégal',
    issuer: 'Simplon Sénégal',
    status: 'Avr. 2024',
    description:
      'Maîtrise des compétences numériques professionnelles, travail collaboratif et bases des métiers du digital.',
    image: '', // Ex. : './assets/certifications/attestation-simplon-numerique.jpg'
    suggestedPath: 'assets/certifications/attestation-simplon-numerique.jpg',
    verifyUrl: '',
  },
  'yunus-entrepreneuriat': {
    title: 'Entrepreneuriat « Degg Naa La » — Yunus',
    issuer: 'Yunus',
    status: 'Avr. 2024',
    description:
      'Formation à l’entrepreneuriat social, conception de projets à impact et démarche de résolution de problèmes.',
    image: '', // Ex. : './assets/certifications/certificat-yunus.jpg'
    suggestedPath: 'assets/certifications/certificat-yunus.jpg',
    verifyUrl: '',
  },
  'openclassrooms-html-css': {
    title: 'HTML5 et CSS3 — OpenClassrooms',
    issuer: 'OpenClassrooms',
    status: 'Mai 2020',
    description:
      'Conception de pages web sémantiques en HTML5 et mise en forme responsive en CSS3.',
    image: '', // Ex. : './assets/certifications/certificat-openclassrooms-html-css.jpg'
    suggestedPath: 'assets/certifications/certificat-openclassrooms-html-css.jpg',
    verifyUrl: '',
  },
  'genie-logiciel': {
    title: 'Licence 3 Génie Logiciel & Licence Réseaux',
    issuer: 'ISI Keur Massar · AMDI Dakar · Institut Privé Massamba',
    status: '2019 – 2023',
    description:
      'Licence 3 en Génie logiciel à l’Institut Supérieur d’Informatique (ISI, Keur Massar, 2022–2023), Licence en Réseaux informatiques à l’African Millennium Development Institute (AMDI, Dakar, 2021–2022) et Baccalauréat série S2 à l’Institut Privé Massamba (2019–2020).',
    image: '',
    suggestedPath: 'assets/certifications/diplome-genie-logiciel.jpg',
    verifyUrl: '',
  },
};

/* ==========================================================================
   UTILITAIRES D'INTERFACE (Toast, Échappement HTML, Piège Focus Modales)
   ========================================================================== */
let toastTimeoutId = null;

function showToast(message) {
  const toastEl = document.getElementById('toast-region');
  if (!toastEl) return;

  toastEl.textContent = message;
  toastEl.hidden = false;

  if (toastTimeoutId) {
    window.clearTimeout(toastTimeoutId);
  }
  toastTimeoutId = window.setTimeout(() => {
    toastEl.hidden = true;
  }, 5200);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/* Gestion des images avec fallback élégant (zéro image cassée) */
function initImageFallbacks() {
  document.querySelectorAll('img[data-fallback-title]').forEach((img) => {
    const applyFallback = () => {
      const parent = img.parentElement;
      if (!parent || parent.querySelector('.img-fallback-box')) return;

      const title = img.getAttribute('data-fallback-title') || 'Visuel à personnaliser';
      const sub = img.getAttribute('data-fallback-sub') || '';

      img.style.display = 'none';
      const box = document.createElement('div');
      box.className = 'img-fallback-box';
      box.innerHTML = `
        <span class="img-fallback-title">${escapeHtml(title)}</span>
        <span class="img-fallback-sub">${escapeHtml(sub)}</span>
      `;
      parent.appendChild(box);
    };

    img.addEventListener('error', applyFallback);
    if (img.complete && img.naturalWidth === 0) {
      applyFallback();
    }
  });
}

/* ==========================================================================
   NAVIGATION MOBILE & SCROLL-SPY
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const mobileLinks = Array.from(document.querySelectorAll('.mobile-nav-link'));

  const closeDrawer = () => {
    if (!toggleBtn || !drawer) return;
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', 'Ouvrir le menu de navigation');
    drawer.hidden = true;
  };

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      toggleBtn.setAttribute(
        'aria-label',
        isExpanded ? 'Ouvrir le menu de navigation' : 'Fermer le menu de navigation'
      );
      drawer.hidden = isExpanded;
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !drawer.hidden) {
        closeDrawer();
        toggleBtn.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && !drawer.hidden) {
        closeDrawer();
      }
    });
  }

  // Suivi automatique de la section active dans la barre de navigation
  const sectionIds = ['accueil', 'a-propos', 'competences', 'projets', 'certifications', 'contact'];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length > 0) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeId = entry.target.id;
            navLinks.forEach((link) => {
              const isMatch = link.getAttribute('href') === `#${activeId}`;
              link.classList.toggle('is-active', isMatch);
            });
          }
        });
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => spyObserver.observe(section));
  }

  // Barre de progression de lecture (GPU scaleX), état scrolled du header & bouton retour en haut
  const headerEl = document.getElementById('site-header');
  const progressBar = document.getElementById('scroll-progress-bar');
  const backToTopBtn = document.getElementById('back-to-top');
  let ticking = false;

  const updateScrollChrome = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0;

    if (headerEl) {
      headerEl.classList.toggle('is-scrolled', scrollTop > 18);
    }
    if (progressBar) {
      progressBar.style.transform = `scaleX(${ratio})`;
    }
    if (backToTopBtn) {
      backToTopBtn.hidden = scrollTop < 480;
    }
    ticking = false;
  };

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollChrome);
        ticking = true;
      }
    },
    { passive: true }
  );
  updateScrollChrome();
}

/* ==========================================================================
   RÉVÉLATIONS DOUCES AU DÉFILEMENT
   ========================================================================== */
function initScrollReveal() {
  const revealElements = Array.from(document.querySelectorAll('.reveal'));
  const staggerGroups = [
    '.hero-facts-strip .fact-item',
    '.skills-grid .skill-column',
    '.tools-grid .tool-tile',
    '.certifications-grid .cert-card',
    '.experience-mini-list .experience-mini-item',
    '.process-steps-nav .process-step-btn',
  ];

  const prefersReduced =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  document.documentElement.classList.add('js-enhanced');

  // Préparation des cascades (stagger) par groupe de cartes
  const staggerItems = [];
  staggerGroups.forEach((selector) => {
    const items = Array.from(document.querySelectorAll(selector));
    items.forEach((item, index) => {
      item.classList.add('stagger-item');
      item.style.setProperty('--stagger-delay', `${Math.min(index * 65, 360)}ms`);
      staggerItems.push(item);
    });
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('reveal')) {
            entry.target.classList.add('is-visible');
          }
          if (entry.target.classList.contains('stagger-item')) {
            entry.target.classList.add('is-shown');
          }
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -36px 0px',
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
  staggerItems.forEach((el) => revealObserver.observe(el));
}

/* ==========================================================================
   PROFONDEUR INTERACTIVE : SPOTLIGHT CURSEUR & TILT 3D SUBTIL (DESKTOP)
   ========================================================================== */
function initInteractiveDepth() {
  const prefersReduced =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer =
    window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (prefersReduced || !finePointer) return;

  // Halo lumineux subtil suivant le curseur dans les cartes
  const spotlightCards = document.querySelectorAll(
    '.skill-column, .cert-card, .tool-tile, .process-detail-panel'
  );
  spotlightCards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x.toFixed(1)}%`);
      card.style.setProperty('--my', `${y.toFixed(1)}%`);
    });
  });

  // Perspective 3D ultra-légère sur le portrait et la vitrine Design System
  const tiltTargets = document.querySelectorAll('[data-tilt-card], .design-showcase-card');
  tiltTargets.forEach((el) => {
    const maxAngle = el.classList.contains('design-showcase-card') ? 2.2 : 3.4;

    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateY = (relX * maxAngle * 2).toFixed(2);
      const rotateX = (-relY * maxAngle * 2).toFixed(2);
      el.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    });

    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
}

/* ==========================================================================
   FILTRAGE INTERACTIF DES PROJETS
   ========================================================================== */
function initProjectFilters() {
  const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
  const projectCards = Array.from(document.querySelectorAll('.project-card'));
  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedFilter = btn.getAttribute('data-filter') || 'all';

      filterButtons.forEach((item) => {
        const isActive = item === btn;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });

      projectCards.forEach((card, idx) => {
        const categories = (card.getAttribute('data-categories') || '').split(' ');
        const shouldShow = selectedFilter === 'all' || categories.includes(selectedFilter);
        card.classList.toggle('is-hidden', !shouldShow);

        if (shouldShow) {
          card.classList.remove('is-filter-enter');
          card.style.animationDelay = `${idx * 45}ms`;
          void card.offsetWidth;
          card.classList.add('is-filter-enter');
        }
      });
    });
  });
}

/* ==========================================================================
   GESTIONNAIRE GÉNÉRIQUE DE MODALES ACCESSIBLES (Focus Trap + ESC)
   ========================================================================== */
let activeModal = null;
let lastFocusedElement = null;

function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute('hidden') && el.offsetParent !== null);
}

function openModal(modalEl) {
  if (!modalEl) return;
  lastFocusedElement = document.activeElement;
  activeModal = modalEl;
  modalEl.hidden = false;
  document.body.classList.add('modal-open');

  const dialog = modalEl.querySelector('.modal-dialog');
  const closeBtn = modalEl.querySelector('[data-modal-close]');
  if (closeBtn) {
    closeBtn.focus();
  } else if (dialog) {
    dialog.focus();
  }
}

function closeActiveModal() {
  if (!activeModal) return;
  activeModal.hidden = true;
  document.body.classList.remove('modal-open');
  activeModal = null;

  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
  lastFocusedElement = null;
}

function initModalEvents() {
  document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
    backdrop.addEventListener('click', (event) => {
      if (event.target === backdrop) {
        closeActiveModal();
      }
    });

    backdrop.querySelectorAll('[data-modal-close]').forEach((closeBtn) => {
      closeBtn.addEventListener('click', closeActiveModal);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (!activeModal) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeActiveModal();
      return;
    }

    if (event.key === 'Tab') {
      const focusables = getFocusableElements(activeModal);
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

/* ==========================================================================
   MODALE D'ÉTUDE DE CAS COMPLÈTE
   ========================================================================== */
function renderProjectCaseStudy(projectId) {
  const projectIndex = PROJECTS.findIndex((item) => item.id === projectId);
  if (projectIndex === -1) return;

  const project = PROJECTS[projectIndex];
  const modalEl = document.getElementById('project-modal');
  const metaEl = document.getElementById('modal-project-meta');
  const contentEl = document.getElementById('modal-project-content');
  const footerEl = document.getElementById('modal-project-footer');
  if (!modalEl || !metaEl || !contentEl || !footerEl) return;

  metaEl.innerHTML = `
    <span>Étude de cas ${escapeHtml(project.index)}</span>
    <span aria-hidden="true">·</span>
    <span>${escapeHtml(project.platform)}</span>
  `;

  const problemsHtml = project.problems.map((p) => `<li>${escapeHtml(p)}</li>`).join('');
  const stepsHtml = project.steps
    .map(
      (step, idx) => `
      <div class="case-step-item">
        <span class="case-step-index">0${idx + 1}</span>
        <p class="case-step-text">${escapeHtml(step)}</p>
      </div>
    `
    )
    .join('');

  const figmaSlotsHtml = project.figmaFrames
    .map((frame) => {
      if (frame.image) {
        return `
          <figure class="figma-slot">
            <img src="${escapeHtml(frame.image)}" alt="${escapeHtml(frame.label)}" class="figma-slot-img" referrerpolicy="no-referrer" />
            <figcaption class="figma-slot-label">${escapeHtml(frame.label)}</figcaption>
          </figure>
        `;
      }
      return `
        <div class="figma-slot">
          <div>
            <p class="figma-slot-label">${escapeHtml(frame.label)}</p>
            <p class="figma-slot-hint">${escapeHtml(frame.hint)}</p>
          </div>
          <span class="figma-slot-path">À ajouter dans script.js → ${escapeHtml(frame.suggestedPath)}</span>
        </div>
      `;
    })
    .join('');

  const prototypeActionHtml = project.prototypeUrl
    ? `<a href="${escapeHtml(project.prototypeUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-accent">Ouvrir le prototype Figma</a>`
    : `<button type="button" class="btn btn-secondary" data-missing-prototype="${escapeHtml(project.title)}">Lien prototype Figma (à renseigner)</button>`;

  contentEl.innerHTML = `
    <div>
      <h2 id="modal-project-title" class="case-title">${escapeHtml(project.title)}</h2>
      <p class="case-objective">${escapeHtml(project.objective)}</p>
    </div>

    <div class="case-cover">
      <img src="${escapeHtml(project.cover)}" alt="Visuel principal du projet ${escapeHtml(project.title)}" referrerpolicy="no-referrer" />
    </div>

    <dl class="case-meta-grid">
      <div>
        <dt>Rôle</dt>
        <dd>${escapeHtml(project.role)}</dd>
      </div>
      <div>
        <dt>Plateforme</dt>
        <dd>${escapeHtml(project.platform)}</dd>
      </div>
      <div>
        <dt>Outils utilisés</dt>
        <dd>${escapeHtml(project.tools.join(' · '))}</dd>
      </div>
    </dl>

    <div class="case-two-col">
      <div>
        <h3 class="case-block-title">Problématiques identifiées</h3>
        <ul class="case-bullet-list">${problemsHtml}</ul>
      </div>
      <div>
        <h3 class="case-block-title">Solution proposée</h3>
        <p class="case-objective">${escapeHtml(project.solution)}</p>
      </div>
    </div>

    <div>
      <h3 class="case-block-title">Principales étapes UX/UI</h3>
      <div class="case-steps-grid">${stepsHtml}</div>
    </div>

    <div>
      <h3 class="case-block-title">Visuels &amp; maquettes Figma</h3>
      <div class="figma-slots-grid">${figmaSlotsHtml}</div>
    </div>

    <div class="case-honesty-note">
      <strong>Note d'authenticité :</strong> cette étude de cas présente fidèlement la démarche UX/UI
      menée sur le projet sans données chiffrées ni résultats de tests inventés.
    </div>
  `;

  // Navigation fluide vers le projet suivant
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  footerEl.innerHTML = `
    <div>${prototypeActionHtml}</div>
    <button type="button" class="btn btn-primary" data-project-switch="${escapeHtml(nextProject.id)}">
      <span>Projet suivant : ${escapeHtml(nextProject.title)}</span>
    </button>
  `;

  const missingProtoBtn = footerEl.querySelector('[data-missing-prototype]');
  if (missingProtoBtn) {
    missingProtoBtn.addEventListener('click', () => {
      showToast(
        'Ajoutez l’URL de votre prototype Figma dans le champ `prototypeUrl` du fichier script.js.'
      );
    });
  }

  const switchBtn = footerEl.querySelector('[data-project-switch]');
  if (switchBtn) {
    switchBtn.addEventListener('click', () => {
      renderProjectCaseStudy(nextProject.id);
      contentEl.scrollTop = 0;
    });
  }

  if (activeModal !== modalEl) {
    openModal(modalEl);
  }
}

function initProjectModals() {
  document.querySelectorAll('[data-project-open], [data-project-media-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const projectId =
        trigger.getAttribute('data-project-open') ||
        trigger.getAttribute('data-project-media-open');
      if (projectId) {
        renderProjectCaseStudy(projectId);
      }
    });
  });
}

/* ==========================================================================
   PROCESSUS UX INTERACTIF (5 ÉTAPES)
   ========================================================================== */
function initProcessExplorer() {
  const tabButtons = Array.from(document.querySelectorAll('.process-step-btn'));
  const panel = document.getElementById('process-panel');
  const kickerEl = document.getElementById('process-detail-kicker');
  const titleEl = document.getElementById('process-detail-title');
  const descEl = document.getElementById('process-detail-desc');
  const listEl = document.getElementById('process-deliverables-list');
  const trackFill = document.getElementById('process-track-fill');

  if (!tabButtons.length || !panel || !kickerEl || !titleEl || !descEl || !listEl) return;

  const activateStep = (stepKey, btn, stepIndex) => {
    const step = PROCESS_STEPS[stepKey];
    if (!step) return;

    tabButtons.forEach((tab) => {
      const isSelected = tab === btn;
      tab.classList.toggle('is-active', isSelected);
      tab.setAttribute('aria-selected', String(isSelected));
    });

    if (trackFill) {
      const progress = (stepIndex + 1) / tabButtons.length;
      trackFill.style.transform = `scaleX(${progress})`;
    }

    panel.setAttribute('aria-labelledby', btn.id);
    kickerEl.textContent = step.kicker;
    titleEl.textContent = step.title;
    descEl.textContent = step.description;
    listEl.innerHTML = step.deliverables.map((item) => `<li>${escapeHtml(item)}</li>`).join('');

    panel.classList.remove('is-switching');
    void panel.offsetWidth;
    panel.classList.add('is-switching');
  };

  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-step-id');
      if (key) activateStep(key, btn, index);
    });

    // Navigation clavier avec flèches gauche / droite
    btn.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const nextIndex =
        event.key === 'ArrowRight'
          ? (index + 1) % tabButtons.length
          : (index - 1 + tabButtons.length) % tabButtons.length;
      const nextBtn = tabButtons[nextIndex];
      const key = nextBtn.getAttribute('data-step-id');
      nextBtn.focus();
      if (key) activateStep(key, nextBtn, nextIndex);
    });
  });
}

/* ==========================================================================
   CERTIFICATIONS : MODALE D'APERÇU & LIENS DE VÉRIFICATION
   ========================================================================== */
function initCertifications() {
  const modalEl = document.getElementById('cert-modal');
  const metaEl = document.getElementById('cert-modal-meta');
  const contentEl = document.getElementById('cert-modal-content');

  document.querySelectorAll('[data-cert-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const certId = btn.getAttribute('data-cert-open');
      const cert = certId ? CERTIFICATIONS[certId] : null;
      if (!cert || !modalEl || !metaEl || !contentEl) return;

      metaEl.innerHTML = `
        <span>${escapeHtml(cert.issuer)}</span>
        <span aria-hidden="true">·</span>
        <span>${escapeHtml(cert.status)}</span>
      `;

      const visualHtml = cert.image
        ? `<img src="${escapeHtml(cert.image)}" alt="Certificat ${escapeHtml(cert.title)}" class="cert-preview-img" referrerpolicy="no-referrer" />`
        : `
          <div class="cert-preview-box">
            <p class="figma-slot-label">Emplacement réservé au visuel du certificat</p>
            <p class="figma-slot-hint">
              Déposez l'image dans le dossier dédié puis renseignez son chemin dans <code>script.js</code>.
            </p>
            <span class="figma-slot-path">${escapeHtml(cert.suggestedPath)}</span>
          </div>
        `;

      const verifyHtml = cert.verifyUrl
        ? `<a href="${escapeHtml(cert.verifyUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Vérifier le certificat en ligne</a>`
        : `<p class="figma-slot-hint">Lien de vérification personnalisable dans l'objet <code>CERTIFICATIONS</code> de <code>script.js</code>.</p>`;

      contentEl.innerHTML = `
        <div>
          <h2 id="cert-modal-title" class="case-title">${escapeHtml(cert.title)}</h2>
          <p class="case-objective">${escapeHtml(cert.description)}</p>
        </div>
        ${visualHtml}
        <div>${verifyHtml}</div>
      `;

      openModal(modalEl);
    });
  });

  document.querySelectorAll('[data-cert-verify]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const certId = btn.getAttribute('data-cert-verify');
      const cert = certId ? CERTIFICATIONS[certId] : null;
      if (!cert) return;

      if (cert.verifyUrl) {
        const tempLink = document.createElement('a');
        tempLink.href = cert.verifyUrl;
        tempLink.target = '_blank';
        tempLink.rel = 'noopener noreferrer';
        tempLink.click();
      } else {
        showToast(
          `Lien de vérification à renseigner dans script.js (CERTIFICATIONS['${certId}'].verifyUrl).`
        );
      }
    });
  });
}

/* ==========================================================================
   CV & COORDONNÉES PERSONNALISABLES
   ========================================================================== */
function initPersonalConfigActions() {
  // Boutons « Télécharger mon CV »
  document.querySelectorAll('[data-cv-trigger]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (PORTFOLIO_CONFIG.cvReady && PORTFOLIO_CONFIG.cvFile) {
        const link = document.createElement('a');
        link.href = PORTFOLIO_CONFIG.cvFile;
        link.download = 'CV_Fatou_Thiam_UX_UI.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
        showToast('Téléchargement du CV de Fatou Thiam lancé (CV_Fatou_Thiam_UX_UI.pdf).');
      } else {
        showToast(
          'Déposez votre CV dans assets/cv/ puis passez `cvReady: true` dans script.js pour activer le téléchargement direct.'
        );
      }
    });
  });

  // Bouton « Consulter mon CV (PDF) » — Modale d'aperçu intégré
  const cvModal = document.getElementById('cv-modal');
  const cvFrame = document.getElementById('cv-pdf-frame');
  document.querySelectorAll('[data-cv-preview]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!cvModal || !cvFrame) return;
      if (!cvFrame.getAttribute('src')) {
        cvFrame.setAttribute('src', `${PORTFOLIO_CONFIG.cvFile}#view=FitH`);
      }
      openModal(cvModal);
    });
  });

  // Liens de contact (e-mail, LinkedIn, WhatsApp)
  const emailLink = document.getElementById('contact-email-link');
  const linkedinLink = document.getElementById('contact-linkedin-link');
  const whatsappLink = document.getElementById('contact-whatsapp-link');

  if (emailLink) {
    if (PORTFOLIO_CONFIG.email) {
      emailLink.textContent = PORTFOLIO_CONFIG.email;
      emailLink.href = `mailto:${PORTFOLIO_CONFIG.email}`;
    } else {
      emailLink.addEventListener('click', (event) => {
        event.preventDefault();
        showToast('Renseignez votre adresse e-mail dans `PORTFOLIO_CONFIG.email` (fichier script.js).');
      });
    }
  }

  if (linkedinLink) {
    if (PORTFOLIO_CONFIG.linkedinUrl) {
      linkedinLink.textContent = 'linkedin.com/in/fatou-thiam';
      linkedinLink.href = PORTFOLIO_CONFIG.linkedinUrl;
      linkedinLink.target = '_blank';
    } else {
      linkedinLink.addEventListener('click', (event) => {
        event.preventDefault();
        showToast(
          'Renseignez l’URL de votre profil LinkedIn dans `PORTFOLIO_CONFIG.linkedinUrl` (fichier script.js).'
        );
      });
    }
  }

  if (whatsappLink) {
    if (PORTFOLIO_CONFIG.whatsappNumber) {
      whatsappLink.textContent = `${PORTFOLIO_CONFIG.phoneDisplay || ''} · Discuter sur WhatsApp`.trim();
      whatsappLink.href = `https://wa.me/${PORTFOLIO_CONFIG.whatsappNumber}`;
      whatsappLink.target = '_blank';
    } else {
      whatsappLink.addEventListener('click', (event) => {
        event.preventDefault();
        showToast(
          'Renseignez votre numéro dans `PORTFOLIO_CONFIG.whatsappNumber` (fichier script.js).'
        );
      });
    }
  }
}

/* ==========================================================================
   FORMULAIRE DE CONTACT ACCESSIBLE
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');

  const nameError = document.getElementById('error-name');
  const emailError = document.getElementById('error-email');
  const messageError = document.getElementById('error-message');
  const feedbackEl = document.getElementById('form-feedback');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setFieldError = (input, errorEl, message) => {
    if (!input || !errorEl) return;
    errorEl.textContent = message;
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
  };

  [nameInput, emailInput, messageInput].forEach((input) => {
    if (!input) return;
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') {
        const errorEl = document.getElementById(`error-${input.name}`);
        setFieldError(input, errorEl, '');
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameVal = nameInput ? nameInput.value.trim() : '';
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const messageVal = messageInput ? messageInput.value.trim() : '';

    let isValid = true;

    if (nameVal.length < 2) {
      setFieldError(nameInput, nameError, 'Veuillez renseigner votre nom (au moins 2 caractères).');
      isValid = false;
    } else {
      setFieldError(nameInput, nameError, '');
    }

    if (!emailPattern.test(emailVal)) {
      setFieldError(emailInput, emailError, 'Veuillez saisir une adresse e-mail valide.');
      isValid = false;
    } else {
      setFieldError(emailInput, emailError, '');
    }

    if (messageVal.length < 10) {
      setFieldError(
        messageInput,
        messageError,
        'Merci de rédiger un message d’au moins 10 caractères.'
      );
      isValid = false;
    } else {
      setFieldError(messageInput, messageError, '');
    }

    if (!isValid) {
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    if (feedbackEl) {
      if (PORTFOLIO_CONFIG.email) {
        const subject = encodeURIComponent(`Contact Portfolio — ${nameVal}`);
        const body = encodeURIComponent(`Nom : ${nameVal}\nE-mail : ${emailVal}\n\n${messageVal}`);
        feedbackEl.innerHTML = `
          Merci ${escapeHtml(nameVal)}, votre message est prêt.
          <a href="mailto:${escapeHtml(PORTFOLIO_CONFIG.email)}?subject=${subject}&body=${body}" class="feedback-link">
            Ouvrir votre messagerie pour l’envoyer
          </a>.
        `;
      } else {
        feedbackEl.textContent = `Merci ${nameVal}, votre message a bien été validé. Pour activer l'envoi vers votre boîte de réception, renseignez votre e-mail dans PORTFOLIO_CONFIG.email (script.js) ou connectez un service de formulaire (ex. Formspree).`;
      }
      feedbackEl.hidden = false;
    }

    form.reset();
  });
}

/* ==========================================================================
   INITIALISATION AU CHARGEMENT DU DOM
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  initImageFallbacks();
  initNavigation();
  initScrollReveal();
  initInteractiveDepth();
  initProjectFilters();
  initModalEvents();
  initProjectModals();
  initProcessExplorer();
  initCertifications();
  initPersonalConfigActions();
  initContactForm();
});
