/* Gemeinsame Sprachwahl für alle Tools: Standard Englisch, dann Deutsch und Französisch. */
window.KSLang = (() => {
  const KEY = 'kstools.lang';
  const LANGS = ['en', 'de', 'fr'];

  function get() {
    try {
      const l = localStorage.getItem(KEY);
      if (LANGS.includes(l)) return l;
    } catch { /* egal */ }
    return 'en';
  }

  function set(l) {
    try { localStorage.setItem(KEY, l); } catch { /* egal */ }
  }

  /** Markiert die aktive Sprache und ruft onChange(lang) bei Klick auf. */
  function bind(onChange) {
    document.querySelectorAll('#langSwitch [data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        const l = btn.dataset.lang;
        set(l);
        mark(l);
        onChange(l);
      });
    });
  }

  function mark(l) {
    document.documentElement.lang = l;
    document.querySelectorAll('#langSwitch [data-lang]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === l));
    });
  }

  return { LANGS, get, set, bind, mark };
})();
