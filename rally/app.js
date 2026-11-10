/* Rally Sync – berechnet Startverzögerungen, damit alle Rallys gleichzeitig einschlagen. */
(() => {
  'use strict';

  // ---------- Anpassbar ----------
  const SITE = {
    footer: { en: 'Rally Sync · Community tool for Kingshot', de: 'Rally Sync · Community-Tool für Kingshot', fr: 'Rally Sync · Outil communautaire pour Kingshot' },
    precountSeconds: 3,   // Vorlauf vor der Base-Rally
    goFlashSeconds: 1.5,  // wie lange "GO" angezeigt wird
    defaultRows: 3,
  };

  const STORAGE_KEY = 'rallysync.v1';

  // ---------- Texte ----------
  const I18N = {
    de: {
      lead: 'Trag die Marschzeit jedes Rally-Leads zum Ziel ein. Der langsamste Marsch wird zur Base-Rally – alle anderen starten mit Verzögerung, damit alle Rallys gleichzeitig einschlagen.',
      inputTitle: 'Rally-Leads',
      colTag: 'Tag', colName: 'Spieler', colMarch: 'Marsch', colPet: 'Pet', colDelay: 'Delay',
      phTag: 'TAG', phName: 'Spielername', phMarch: 'z.B. 1:05',
      add: '＋ Rally', example: 'Beispiel', clear: 'Leeren',
      hint: 'Formate: 45 · 1:05 · 1m 5s · 00:01:05. Marschzeit per Test-Rally im Spiel messen. Wichtig: Alle wählen dieselbe Rally-Dauer.',
      precount: '3-Sekunden-Vorlauf vor dem Timer',
      baseLabel: 'Base-Rally (optional)',
      baseAuto: 'Automatisch – langsamster Marsch',
      baseHint: 'Wählst du eine schnellere Rally als Base, starten langsamere vor ihr (−).',
      rowN: 'Zeile {n}',
      calc: '⚔️ Reihenfolge berechnen',
      errNone: 'Trag mindestens eine gültige Marschzeit ein.',
      errInvalid: 'Ungültige Marschzeit in den markierten Zeilen.',
      resultOne: '{names} startet die Base-Rally',
      resultMany: 'Gleichzeitig als Base: {names}',
      resultSub: 'Langsamster Marsch: {time}. Alle anderen starten nach der angezeigten Verzögerung.',
      resultSubManual: 'Base manuell gewählt (Marsch {time}). + = nach der Base starten, − = vor der Base starten.',
      errBase: 'Die gewählte Base-Rally hat keine gültige Marschzeit.',
      copy: '📋 Kopieren', copied: '✓ Kopiert', copyFail: 'Kopieren fehlgeschlagen',
      timer: '▶ Timer starten',
      copyHead: '⚔️ RALLY-REIHENFOLGE',
      copyFoot: 'Alle mit derselben Rally-Dauer starten!',
      copyLegend: '− = vor der Base starten, + = danach',
      hudPre: 'Base-Rally startet in', hudFirst: 'Erster Start in', hudGo: 'Jetzt starten', hudNext: 'Nächster Start in',
      hudDone: 'Alle Rallys gestartet',
      restart: '↺ Neustart', exit: 'Zurück',
      unnamed: 'Unbenannt', confirmClear: 'Alle Zeilen löschen?',
      removeRow: 'Zeile entfernen', pet: 'Pet-Buff aktiv',
      ariaTag: 'Allianz-Tag', ariaName: 'Spielername', ariaMarch: 'Marschzeit',
      copyBaseMarch: 'Base-Marsch: {t}',
      back: '← Alle Tools',
    },
    en: {
      lead: "Enter each rally lead's march time to the target. The slowest march becomes the base rally – everyone else launches after a delay so all rallies land together.",
      inputTitle: 'Rally leads',
      colTag: 'Tag', colName: 'Player', colMarch: 'March', colPet: 'Pet', colDelay: 'Delay',
      phTag: 'TAG', phName: 'Player name', phMarch: 'e.g. 1:05',
      add: '＋ Rally', example: 'Example', clear: 'Clear',
      hint: 'Formats: 45 · 1:05 · 1m 5s · 00:01:05. Measure march time with a test rally in-game. Important: everyone picks the same rally duration.',
      precount: '3-second lead-in before the timer',
      baseLabel: 'Base rally (optional)',
      baseAuto: 'Automatic – slowest march',
      baseHint: 'If you pick a faster rally as base, slower ones launch before it (−).',
      rowN: 'Row {n}',
      calc: '⚔️ Calculate rally order',
      errNone: 'Enter at least one valid march time.',
      errInvalid: 'Invalid march time in the highlighted rows.',
      resultOne: '{names} starts the base rally',
      resultMany: 'Launch together as base: {names}',
      resultSub: 'Slowest march: {time}. Everyone else launches after the delay shown.',
      resultSubManual: 'Base picked manually (march {time}). + = launch after the base, − = launch before the base.',
      errBase: 'The selected base rally has no valid march time.',
      copy: '📋 Copy', copied: '✓ Copied', copyFail: 'Copy failed',
      timer: '▶ Start timer',
      copyHead: '⚔️ RALLY ORDER',
      copyFoot: 'Everyone use the same rally duration!',
      copyLegend: '− = launch before the base, + = after',
      hudPre: 'Base rally starts in', hudFirst: 'First launch in', hudGo: 'Launch now', hudNext: 'Next launch in',
      hudDone: 'All rallies launched',
      restart: '↺ Restart', exit: 'Back',
      unnamed: 'Unnamed', confirmClear: 'Delete all rows?',
      removeRow: 'Remove row', pet: 'Pet buff active',
      ariaTag: 'Alliance tag', ariaName: 'Player name', ariaMarch: 'March time',
      copyBaseMarch: 'Base march: {t}',
      back: '← All tools',
    },
    fr: {
      lead: "Saisis le temps de marche de chaque leader de rally jusqu'à la cible. La marche la plus lente devient le rally de base – tous les autres partent avec un délai pour que tous les rallys frappent en même temps.",
      inputTitle: 'Leaders de rally',
      colTag: 'Tag', colName: 'Joueur', colMarch: 'Marche', colPet: 'Pet', colDelay: 'Délai',
      phTag: 'TAG', phName: 'Nom du joueur', phMarch: 'ex. 1:05',
      add: '＋ Rally', example: 'Exemple', clear: 'Effacer',
      hint: 'Formats : 45 · 1:05 · 1m 5s · 00:01:05. Mesure le temps de marche avec un rally test en jeu. Important : tout le monde choisit la même durée de rally.',
      precount: 'Pré-décompte de 3 secondes avant le minuteur',
      baseLabel: 'Rally de base (optionnel)',
      baseAuto: 'Automatique – marche la plus lente',
      baseHint: 'Si tu choisis un rally plus rapide comme base, les plus lents partent avant lui (−).',
      rowN: 'Ligne {n}',
      calc: "⚔️ Calculer l'ordre des rallys",
      errNone: 'Saisis au moins un temps de marche valide.',
      errInvalid: 'Temps de marche invalide dans les lignes marquées.',
      resultOne: '{names} lance le rally de base',
      resultMany: 'Lancer ensemble comme base : {names}',
      resultSub: 'Marche la plus lente : {time}. Tous les autres partent après le délai indiqué.',
      resultSubManual: 'Base choisie manuellement (marche {time}). + = partir après la base, − = partir avant la base.',
      errBase: "Le rally de base choisi n'a pas de temps de marche valide.",
      copy: '📋 Copier', copied: '✓ Copié', copyFail: 'Échec de la copie',
      timer: '▶ Lancer le minuteur',
      copyHead: '⚔️ ORDRE DES RALLYS',
      copyFoot: 'Tout le monde avec la même durée de rally !',
      copyLegend: '− = partir avant la base, + = après',
      copyBaseMarch: 'Marche de base : {t}',
      hudPre: 'Le rally de base part dans', hudFirst: 'Premier départ dans', hudGo: 'Lance maintenant', hudNext: 'Prochain départ dans',
      hudDone: 'Tous les rallys sont lancés',
      restart: '↺ Recommencer', exit: 'Retour',
      unnamed: 'Sans nom', confirmClear: 'Supprimer toutes les lignes ?',
      removeRow: 'Supprimer la ligne', pet: 'Bonus pet actif',
      ariaTag: "Tag d'alliance", ariaName: 'Nom du joueur', ariaMarch: 'Temps de marche',
      back: '← Tous les outils',
    },
  };

  // ---------- Speicher (optional, darf fehlschlagen) ----------
  const store = {
    get() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; } catch { return null; } },
    set(v) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(v)); } catch { /* egal */ } },
  };

  const saved = store.get() || {};
  const state = {
    lang: KSLang.get(),
    precount: saved.precount !== false,
    rows: Array.isArray(saved.rows) && saved.rows.length ? saved.rows : [],
    baseIdx: Number.isInteger(saved.baseIdx) ? saved.baseIdx : -1,
    baseId: null,
    schedule: null,
  };
  let uid = 0;
  state.rows = state.rows.map(r => ({ id: ++uid, tag: r.tag || '', name: r.name || '', march: r.march || '', pet: !!r.pet }));
  if (state.baseIdx >= 0 && state.rows[state.baseIdx]) state.baseId = state.rows[state.baseIdx].id;
  while (state.rows.length < SITE.defaultRows) state.rows.push(blankRow());

  function blankRow() { return { id: ++uid, tag: '', name: '', march: '', pet: false }; }
  function persist() {
    const baseIdx = state.rows.findIndex(r => r.id === state.baseId);
    store.set({ precount: state.precount, baseIdx, rows: state.rows.map(({ tag, name, march, pet }) => ({ tag, name, march, pet })) });
  }

  // ---------- Helfer ----------
  const $ = id => document.getElementById(id);
  const t = (key, vars) => {
    let s = (I18N[state.lang] && I18N[state.lang][key]) ?? I18N.en[key] ?? key;
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.split(`{${k}}`).join(v);
    return s;
  };

  /** "45" | "1:05" | "1m 5s" | "00:01:05" | "1h2m" → Sekunden (oder null) */
  function parseMarch(input) {
    const s = String(input || '').trim().toLowerCase().replace(',', '.');
    if (!s) return null;
    if (/^\d+(\.\d+)?$/.test(s)) return Math.round(parseFloat(s));
    if (s.includes(':')) {
      const parts = s.split(':');
      if (parts.length > 3 || parts.some(p => !/^\d+$/.test(p.trim()))) return null;
      return parts.reduce((acc, p) => acc * 60 + parseInt(p, 10), 0);
    }
    const m = s.match(/^(?:(\d+)\s*h)?\s*(?:(\d+)\s*m(?:in)?)?\s*(?:(\d+)\s*(?:s|sec|sek)?)?$/);
    if (!m || (!m[1] && !m[2] && !m[3])) return null;
    return (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0);
  }

  function fmt(sec) {
    sec = Math.max(0, Math.round(sec));
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    const ss = String(s).padStart(2, '0');
    return h ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`;
  }

  const fmtDelay = d => d === 0 ? 'BASE' : `${d > 0 ? '+' : '−'}${fmt(Math.abs(d))}`;

  const label = r => `${r.pet ? '🐾 ' : ''}${r.tag ? `[${r.tag.toUpperCase()}] ` : ''}${r.name || t('unnamed')}`;

  // ---------- Sprache ----------
  function applyLang() {
    KSLang.mark(state.lang);
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $('footerText').textContent = SITE.footer[state.lang] || SITE.footer.en;
    renderRows();
    if (state.schedule) renderResult();
  }

  // ---------- Zeilen ----------
  function renderRows() {
    const wrap = $('rows');
    wrap.textContent = '';
    const tpl = $('rowTpl');
    state.rows.forEach(r => {
      const el = tpl.content.firstElementChild.cloneNode(true);
      el.dataset.id = r.id;
      const tag = el.querySelector('.f-tag'), name = el.querySelector('.f-name'),
            march = el.querySelector('.f-march'), pet = el.querySelector('.f-pet'),
            del = el.querySelector('.del'), delay = el.querySelector('.delay');
      tag.value = r.tag; name.value = r.name; march.value = r.march; pet.checked = r.pet;
      tag.placeholder = t('phTag'); name.placeholder = t('phName'); march.placeholder = t('phMarch');
      tag.setAttribute('aria-label', t('ariaTag'));
      name.setAttribute('aria-label', t('ariaName'));
      march.setAttribute('aria-label', t('ariaMarch'));
      pet.setAttribute('aria-label', t('pet'));
      del.setAttribute('aria-label', t('removeRow'));

      const onChange = () => {
        r.tag = tag.value.trim(); r.name = name.value.trim(); r.march = march.value; r.pet = pet.checked;
        march.classList.remove('invalid');
        invalidate();
        persist();
        renderBaseSelect();
      };
      [tag, name, march].forEach(i => i.addEventListener('input', onChange));
      pet.addEventListener('change', onChange);
      march.addEventListener('keydown', e => { if (e.key === 'Enter') calculate(); });
      del.addEventListener('click', () => {
        state.rows = state.rows.filter(x => x.id !== r.id);
        if (!state.rows.length) state.rows.push(blankRow());
        invalidate(); persist(); renderRows();
      });

      if (state.schedule) {
        const s = state.schedule.items.find(x => x.id === r.id);
        if (s) {
          delay.textContent = fmtDelay(s.delay);
          delay.classList.add(s.delay === 0 ? 'base' : s.delay < 0 ? 'early' : 'set');
        }
      }
      wrap.appendChild(el);
    });
    renderBaseSelect();
  }

  function renderBaseSelect() {
    const sel = $('baseSelect');
    if (state.baseId !== null && !state.rows.some(r => r.id === state.baseId)) state.baseId = null;
    sel.textContent = '';
    const auto = new Option(t('baseAuto'), '');
    sel.add(auto);
    state.rows.forEach((r, i) => {
      const txt = (r.name || r.tag) ? label(r) : t('rowN', { n: i + 1 });
      sel.add(new Option(txt, String(r.id)));
    });
    sel.value = state.baseId === null ? '' : String(state.baseId);
    sel.classList.toggle('manual', state.baseId !== null);
  }

  function invalidate() {
    if (!state.schedule) return;
    state.schedule = null;
    $('resultCard').hidden = true;
    document.querySelectorAll('#rows .delay').forEach(d => { d.textContent = '—'; d.className = 'c-delay delay mono'; });
  }

  // ---------- Berechnung ----------
  function calculate() {
    const err = $('formError');
    err.hidden = true;
    let invalid = false;
    const items = [];

    document.querySelectorAll('#rows .row').forEach(el => {
      const r = state.rows.find(x => String(x.id) === el.dataset.id);
      const input = el.querySelector('.f-march');
      input.classList.remove('invalid');
      if (!r) return;
      const empty = !r.tag && !r.name && !r.march.trim();
      if (empty) return;
      const sec = parseMarch(r.march);
      if (sec === null || sec <= 0) { input.classList.add('invalid'); invalid = true; return; }
      items.push({ ...r, sec });
    });

    if (invalid) { showError(t('errInvalid')); return; }
    if (!items.length) { showError(t('errNone')); return; }

    const maxSec = Math.max(...items.map(i => i.sec));
    let baseSec = maxSec, manual = false;
    if (state.baseId !== null) {
      const b = items.find(i => i.id === state.baseId);
      if (!b) { showError(t('errBase')); return; }
      baseSec = b.sec; manual = true;
    }
    items.forEach(i => { i.delay = baseSec - i.sec; });
    items.sort((a, b) => a.delay - b.delay || label(a).localeCompare(label(b)));

    // Gruppen mit gleicher Verzögerung = gleichzeitiger Start
    const groups = [];
    items.forEach(i => {
      const g = groups.find(x => x.delay === i.delay);
      g ? g.items.push(i) : groups.push({ delay: i.delay, items: [i] });
    });

    state.schedule = { items, groups, maxSec, baseSec, manual };
    renderRows();
    renderResult();
    $('resultCard').hidden = false;
    $('resultCard').scrollIntoView({ behavior: 'smooth', block: 'start' });

    function showError(msg) { err.textContent = msg; err.hidden = false; }
  }

  function buildCopyText() {
    const { groups, baseSec } = state.schedule;
    const lines = [t('copyHead'), ''];
    groups.forEach(g => {
      const when = g.delay === 0 ? 'BASE – GO' : fmtDelay(g.delay);
      g.items.forEach(i => lines.push(`${when.padEnd(9)} ${label(i)}`));
    });
    lines.push('', t('copyBaseMarch', { t: fmt(baseSec) }));
    if (groups[0].delay < 0) lines.push(t('copyLegend'));
    lines.push(t('copyFoot'));
    return lines.join('\n');
  }

  function renderResult() {
    const { items, groups, baseSec, manual } = state.schedule;
    const baseGroup = groups.find(g => g.delay === 0);
    const base = baseGroup.items.map(label).join(', ');
    $('resultTitle').textContent = baseGroup.items.length > 1 ? t('resultMany', { names: base }) : t('resultOne', { names: base });
    $('resultSub').textContent = t(manual ? 'resultSubManual' : 'resultSub', { time: fmt(baseSec) });

    const list = $('schedule');
    list.textContent = '';
    items.forEach(i => {
      const li = document.createElement('li');
      if (i.delay === 0) li.className = 'is-base';
      const when = document.createElement('span');
      when.className = 'when';
      when.textContent = fmtDelay(i.delay);
      const who = document.createElement('span');
      who.className = 'who';
      who.textContent = label(i);
      const march = document.createElement('span');
      march.className = 'march';
      march.textContent = fmt(i.sec);
      li.append(when, who, march);
      list.appendChild(li);
    });
    $('copyPreview').textContent = buildCopyText();
  }

  async function copyOrder() {
    const btn = $('copyBtn');
    const text = buildCopyText();
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch {
      const ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { ok = document.execCommand('copy'); } catch { ok = false; }
      ta.remove();
    }
    btn.textContent = ok ? t('copied') : t('copyFail');
    setTimeout(() => { btn.textContent = t('copy'); }, 1600);
  }

  // ---------- Visueller Timer ----------
  const hud = { raf: 0, t0: 0, lead: 0, fired: new Set(), wakeLock: null };

  async function startTimer() {
    if (!state.schedule) return;
    hud.lead = (state.precount ? SITE.precountSeconds : 0) - state.schedule.groups[0].delay;
    hud.t0 = performance.now();
    hud.fired = new Set();
    buildHudList();
    $('hud').hidden = false;
    document.body.style.overflow = 'hidden';
    cancelAnimationFrame(hud.raf);
    tick();
    try { if ('wakeLock' in navigator) hud.wakeLock = await navigator.wakeLock.request('screen'); } catch { /* egal */ }
  }

  function stopTimer() {
    cancelAnimationFrame(hud.raf);
    $('hud').hidden = true;
    $('hud').className = 'hud';
    document.body.style.overflow = '';
    try { hud.wakeLock && hud.wakeLock.release(); } catch { /* egal */ }
    hud.wakeLock = null;
  }

  function buildHudList() {
    const ol = $('hudList');
    ol.textContent = '';
    state.schedule.groups.forEach((g, idx) => {
      const li = document.createElement('li');
      li.dataset.idx = idx;
      const tt = document.createElement('span');
      tt.className = 't';
      tt.textContent = fmtDelay(g.delay);
      const who = document.createElement('span');
      who.textContent = g.items.map(label).join(', ');
      li.append(tt, who);
      ol.appendChild(li);
    });
  }

  function setText(id, v) { const el = $(id); if (el.textContent !== v) el.textContent = v; }

  function tick() {
    const { groups } = state.schedule;
    const now = (performance.now() - hud.t0) / 1000 - hud.lead; // Sekunden seit Base-Start
    const el = $('hud');
    let mode, labelTxt, big, names, nextIdx = -1;

    // Neu ausgelöste Gruppen → Vibration
    groups.forEach((g, i) => {
      if (now >= g.delay && !hud.fired.has(i)) {
        hud.fired.add(i);
        try { navigator.vibrate && navigator.vibrate(300); } catch { /* egal */ }
      }
    });

    const flashing = [...groups].reverse().find(g => now >= g.delay && now < g.delay + SITE.goFlashSeconds);
    const nextGroup = groups.find(g => g.delay > now);
    nextIdx = nextGroup ? groups.indexOf(nextGroup) : -1;

    if (now < groups[0].delay) {
      mode = 'pre';
      labelTxt = groups[0].delay === 0 ? t('hudPre') : t('hudFirst');
      big = String(Math.ceil(groups[0].delay - now));
      names = groups[0].items.map(label).join(', ');
    } else if (flashing) {
      mode = 'go';
      labelTxt = t('hudGo');
      big = 'GO';
      names = flashing.items.map(label).join(', ');
    } else if (nextGroup) {
      const rem = nextGroup.delay - now;
      mode = rem <= 3 ? 'soon' : 'wait';
      labelTxt = t('hudNext');
      big = rem < 10 ? rem.toFixed(1) : fmt(Math.ceil(rem));
      names = nextGroup.items.map(label).join(', ');
    } else {
      mode = 'done';
      labelTxt = t('hudDone');
      big = '✓';
      names = '';
    }

    const cls = 'hud' + (mode === 'go' ? ' is-go' : mode === 'soon' || mode === 'pre' ? ' is-soon' : mode === 'done' ? ' is-done' : '');
    if (el.className !== cls) el.className = cls;
    setText('hudLabel', labelTxt);
    setText('hudBig', big);
    setText('hudNames', names);
    setText('hudClock', now < 0 ? `T−${fmt(Math.ceil(-now))}` : `T+${fmt(Math.floor(now))}`);
    setText('hudCount', `${hud.fired.size}/${groups.length}`);

    $('hudList').querySelectorAll('li').forEach(li => {
      const i = +li.dataset.idx;
      li.classList.toggle('done', hud.fired.has(i) && !(flashing && groups[i] === flashing));
      li.classList.toggle('next', i === nextIdx && !flashing);
    });

    if (mode !== 'done') hud.raf = requestAnimationFrame(tick);
  }

  document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'visible' && !$('hud').hidden && !hud.wakeLock) {
      try { hud.wakeLock = await navigator.wakeLock.request('screen'); } catch { /* egal */ }
    }
  });

  // ---------- Events ----------
  KSLang.bind(l => { state.lang = l; applyLang(); });
  $('addBtn').addEventListener('click', () => {
    state.rows.push(blankRow()); invalidate(); persist(); renderRows();
    const inputs = document.querySelectorAll('#rows .f-name');
    inputs[inputs.length - 1]?.focus();
  });
  $('exampleBtn').addEventListener('click', () => {
    state.rows = [
      { tag: 'ABC', name: 'Lead 1', march: '1:05', pet: true },
      { tag: 'ABC', name: 'Lead 2', march: '48', pet: false },
      { tag: 'XYZ', name: 'Lead 3', march: '0:57', pet: false },
      { tag: 'XYZ', name: 'Lead 4', march: '1m 12s', pet: true },
    ].map(r => ({ id: ++uid, ...r }));
    state.baseId = null;
    invalidate(); persist(); renderRows();
  });
  $('clearBtn').addEventListener('click', () => {
    if (!confirm(t('confirmClear'))) return;
    state.rows = Array.from({ length: SITE.defaultRows }, blankRow);
    state.baseId = null;
    invalidate(); persist(); renderRows();
    $('formError').hidden = true;
  });
  $('baseSelect').addEventListener('change', e => {
    state.baseId = e.target.value === '' ? null : +e.target.value;
    e.target.classList.toggle('manual', state.baseId !== null);
    invalidate(); persist();
  });
  $('precount').checked = state.precount;
  $('precount').addEventListener('change', e => { state.precount = e.target.checked; persist(); });
  $('calcBtn').addEventListener('click', calculate);
  $('copyBtn').addEventListener('click', copyOrder);
  $('timerBtn').addEventListener('click', startTimer);
  $('restartBtn').addEventListener('click', startTimer);
  $('exitBtn').addEventListener('click', stopTimer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('hud').hidden) stopTimer(); });

  applyLang();
})();
