'use strict';

/* =========================================================
   i18n ENGINE
   - Detects browser language on first load (pt vs en)
   - Persists user choice in localStorage
   - Applies translations via data-i18n, data-i18n-html,
     data-i18n-placeholder, data-i18n-aria, data-i18n-bullets
   ========================================================= */
const i18n = (function () {
  const STORAGE_KEY = 'rc_lang';
  const SUPPORTED = ['pt', 'en'];

  /** Resolve a dot-notation key against a translations object. */
  function resolve(obj, key) {
    return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
  }

  /** Detect preferred language from browser, falling back to 'pt'. */
  function detectBrowserLang() {
    const nav = navigator.language || navigator.userLanguage || 'pt';
    // Accept any variant starting with 'en' (en-US, en-GB, …)
    return nav.toLowerCase().startsWith('en') ? 'en' : 'pt';
  }

  /** Return the active language code ('pt' or 'en'). */
  function getActiveLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    return detectBrowserLang();
  }

  /** Apply all translations for the given language. */
  function applyLang(lang) {
    const t = window.TRANSLATIONS[lang];
    if (!t) return;

    // <html lang>
    document.documentElement.lang = t.htmlLang;

    // <title>
    document.title = t.pageTitle;

    // Plain text nodes: [data-i18n="some.key"]
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = resolve(t, el.dataset.i18n);
      if (val !== null) el.textContent = val;
    });

    // innerHTML nodes (allow <strong>, <span …>): [data-i18n-html="some.key"]
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const val = resolve(t, el.dataset.i18nHtml);
      if (val !== null) el.innerHTML = val;
    });

    // Placeholder attributes: [data-i18n-placeholder="some.key"]
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const val = resolve(t, el.dataset.i18nPlaceholder);
      if (val !== null) el.placeholder = val;
    });

    // aria-label attributes: [data-i18n-aria="some.key"]
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const val = resolve(t, el.dataset.i18nAria);
      if (val !== null) {
        el.setAttribute('aria-label', val);
        el.setAttribute('title', val);
      }
    });

    // Bullet lists — replaces <li> children from an array key: [data-i18n-bullets="some.array"]
    document.querySelectorAll('[data-i18n-bullets]').forEach((ul) => {
      const bullets = resolve(t, ul.dataset.i18nBullets);
      if (!Array.isArray(bullets)) return;
      ul.innerHTML = bullets.map((b) => `<li>${b}</li>`).join('');
    });

    // Update lang-switcher button label & aria
    document.querySelectorAll('#lang-switcher, #lang-switcher-mobile').forEach((btn) => {
      if (!btn) return;
      const span = btn.querySelector('span');
      if (span) span.textContent = t.nav.langToggle;
      btn.setAttribute('aria-label', t.nav.langAriaLabel);
    });

    // Restart the typed effect with the new phrases
    if (typeof restartTyped === 'function') restartTyped(t.typedPhrases);
  }

  /** Toggle between pt ↔ en and persist choice. */
  function toggle() {
    const current = getActiveLang();
    const next = current === 'pt' ? 'en' : 'pt';
    localStorage.setItem(STORAGE_KEY, next);
    applyLang(next);
  }

  /** Initialise: detect lang, apply, wire buttons. */
  function init() {
    const lang = getActiveLang();
    applyLang(lang);

    document.querySelectorAll('#lang-switcher, #lang-switcher-mobile').forEach((btn) => {
      if (btn) btn.addEventListener('click', toggle);
    });
  }

  return { init, toggle, getActiveLang, applyLang };
})();

/* =========================================================
   TYPED TEXT EFFECT
   Exposed via restartTyped() so i18n can swap phrases.
   ========================================================= */
let restartTyped;

(function initTyped() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  let phrases = ['Full-Stack Developer'];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timerId = null;

  function type() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 60 : 90;

    if (!isDeleting && charIndex === current.length) {
      delay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 400;
    }

    timerId = setTimeout(type, delay);
  }

  // Called by i18n when language changes
  restartTyped = function (newPhrases) {
    if (timerId) clearTimeout(timerId);
    phrases = newPhrases;
    phraseIndex = 0;
    charIndex = 0;
    isDeleting = false;
    el.textContent = '';
    timerId = setTimeout(type, 400);
  };

  timerId = setTimeout(type, 1000);
})();

/* =========================================================
   NAVBAR: SCROLL STATE & ACTIVE LINK
   ========================================================= */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });

    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */
(function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  function close() {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('.mobile-nav-link').forEach((link) =>
    link.addEventListener('click', close)
  );

  mobileNav.addEventListener('click', (e) => { if (e.target === mobileNav) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();

/* =========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================= */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
})();

/* =========================================================
   SMOOTH SCROLL
   ========================================================= */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navH = 72;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
    });
  });
})();

/* =========================================================
   CONTACT FORM (mailto fallback)
   ========================================================= */
(function initContactForm() {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const honeypot = form.querySelector('input[name="_honeypot"]');
    if (honeypot && honeypot.value) return;

    const lang = i18n.getActiveLang();
    const t    = window.TRANSLATIONS[lang].contact;

    const name    = form.querySelector('#name').value.trim();
    const email   = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      status.textContent = t.formErrorEmpty;
      status.className = 'form-note error';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = t.formErrorEmail;
      status.className = 'form-note error';
      return;
    }

    const subject = encodeURIComponent(`${t.mailSubject} — ${name}`);
    const body    = encodeURIComponent(`${lang === 'pt' ? 'Nome' : 'Name'}: ${name}\nEmail: ${email}\n\n${lang === 'pt' ? 'Mensagem' : 'Message'}:\n${message}`);

    status.textContent = t.formOpening;
    status.className = 'form-note success';

    setTimeout(() => {
      form.reset();
      status.textContent = '';
      status.className = 'form-note';
    }, 4000);
  });
})();

/* =========================================================
   PARALLAX GLOW
   ========================================================= */
(function initParallaxGlow() {
  const glow1 = document.querySelector('.hero-glow-1');
  const glow2 = document.querySelector('.hero-glow-2');
  if (!glow1 || !glow2) return;

  let ticking = false;
  window.addEventListener('mousemove', (e) => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      glow1.style.transform = `translate(${x}px, ${y}px)`;
      glow2.style.transform = `translate(${-x * 0.5}px, ${-y * 0.5}px)`;
      ticking = false;
    });
  }, { passive: true });
})();

/* =========================================================
   BOOT — initialise i18n last so translations.js is loaded
   ========================================================= */
i18n.init();
