/* Reinforcement Timer – Verstärkungen so timen, dass sie direkt nach einer Gegner-Rally landen. */
(() => {
  'use strict';

  // ---------- Anpassbar ----------
  const SITE = {
    footer: { en: 'Reinforcement Timer · Community tool for Kingshot', de: 'Reinforcement Timer · Community-Tool für Kingshot', fr: 'Reinforcement Timer · Outil communautaire pour Kingshot' },
    defaultBuffer: 1,     // Sekunden Landung nach Einschlag
    goFlashSeconds: 1.5,  // wie lange "GO" angezeigt wird
    soonSeconds: 5,       // ab wann ein Start gelb markiert wird
  };
  const STORAGE_KEY = 'ksreinforce.v1';

  // ---------- Texte ----------
  const I18N = {
    de: {
      back: '← Alle Tools',
      lead: 'Verstärkungen so timen, dass sie direkt nach einer Gegner-Rally in der Burg landen – bevor die nächste einschlägt.',
      enemyTitle: '1 · Gegner-Rallys',
      enemyHint: 'Rally-Countdown so eintippen, wie er gerade im Spiel steht – es zählt der Moment des ersten Tastendrucks. Marschzeit vorher schätzen und aktualisieren, sobald die Rally losmarschiert (dann die angezeigte Restzeit eintragen). Läuft die Rally schon, Countdown leer lassen und nur die Marsch-Restzeit eintragen.',
      lCd: 'Rally-Countdown', lMarchEst: 'Marsch (Schätzung)', lMarchLive: 'Marsch-Restzeit',
      phCd: 'z.B. 3:00', phMarch: 'z.B. 1:30', enemyDefault: 'Rally {n}',
      chipIdle: '—', chipWait: 'Start {t}', chipMarch: 'Einschlag {t}', chipEst: '≈ {t}', chipHit: 'eingeschlagen', chipNeed: 'Marsch?',
      eNeed: 'Countdown oder Marsch-Restzeit eintragen.',
      eWaitNoMarch: 'Start in {t} · Marschzeit fehlt',
      eMarchingNoMarch: 'Marschiert – Marsch-Restzeit eintragen!',
      eHitIn: 'Einschlag in {t}', eEst: ' (geschätzt – aktualisieren, sobald sie marschiert)',
      eEstLive: 'Marschiert – Marsch-Restzeit aktualisieren!',
      eHitAgo: 'Eingeschlagen vor {t}',
      eGap: 'Lücke zur nächsten: {t}', eGapSmall: 'Lücke zur nächsten nur {t} – kleiner als Puffer!', eGapLast: 'Letzte Rally – offenes Fenster',
      addEnemy: '＋ Gegner-Rally',
      playerTitle: '2 · Verstärker',
      playerHint: 'Jeder Verstärker bekommt ein Zielfenster: Er landet kurz nach dem Einschlag dieser Rally und füllt die Burg wieder auf.',
      bufferLabel: 'Landung nach Einschlag', sec: 's',
      lPMarch: 'Eigene Marschzeit', lTarget: 'Landen nach', phName: 'Spielername', targetOpt: 'nach {label}',
      addPlayer: '＋ Verstärker',
      pNoTarget: 'Erst eine Gegner-Rally anlegen.',
      pNeedMarch: 'Eigene Marschzeit eintragen.',
      pWaitEnemy: 'Wartet auf Einschlagzeit von {label}.',
      pLands: 'landet {b} s nach {label}',
      pCueHit: 'losschicken bei Einschlag-Countdown {t}',
      pCueRally: 'losschicken bei Rally-Countdown {t}',
      pEst: 'Gegner-Marsch nur geschätzt',
      pTooLate: 'landet erst nach {next} – Fenster zu knapp!',
      pMissed: 'Falls nicht gestartet: späteres Fenster wählen.',
      whenIn: 'in {t}', whenNow: 'JETZT', whenAgo: 'vor {t}',
      flowTitle: '3 · Ablauf (live)',
      nextLabel: 'Nächster Start', nextHitLabel: 'Nächster Einschlag',
      nextNone: 'Noch nichts geplant – Gegner-Rallys und Verstärker eintragen.',
      tlHit: '{label} schlägt ein', tlLaunch: '{name} → nach {label}',
      hud: '▶ Vollbild-Timer',
      example: 'Beispiel', reset: 'Neue Runde', clear: 'Alles leeren',
      confirmClear: 'Alle Eingaben löschen?', confirmReset: 'Zeiten der Gegner-Rallys zurücksetzen? Verstärker bleiben erhalten.',
      
      
      hudNext: 'Nächster Start in', hudGo: 'Jetzt verstärken', hudNone: 'Keine Starts ausstehend',
      hudEnemy: '⚔ {label} {t}',
      exit: 'Zurück', unnamed: 'Unbenannt', removeRow: 'Entfernen', examplePlayer: 'Spieler {x}',
    },
    en: {
      back: '← All tools',
      lead: 'Time reinforcements so they land in the castle right after an enemy rally hits – before the next one arrives.',
      enemyTitle: '1 · Enemy rallies',
      enemyHint: 'Type the rally countdown exactly as shown in-game right now – the moment of your first keystroke counts. Estimate the march time first and update it once the rally starts marching (enter the remaining time shown). If the rally is already marching, leave the countdown empty and only enter the remaining march time.',
      lCd: 'Rally countdown', lMarchEst: 'March (estimate)', lMarchLive: 'March remaining',
      phCd: 'e.g. 3:00', phMarch: 'e.g. 1:30', enemyDefault: 'Rally {n}',
      chipIdle: '—', chipWait: 'Start {t}', chipMarch: 'Hit {t}', chipEst: '≈ {t}', chipHit: 'hit', chipNeed: 'March?',
      eNeed: 'Enter countdown or remaining march time.',
      eWaitNoMarch: 'Starts in {t} · march time missing',
      eMarchingNoMarch: 'Marching – enter remaining march time!',
      eHitIn: 'Hits in {t}', eEst: ' (estimate – update once it marches)',
      eEstLive: 'Marching – update remaining march time!',
      eHitAgo: 'Hit {t} ago',
      eGap: 'Gap to next: {t}', eGapSmall: 'Gap to next only {t} – smaller than buffer!', eGapLast: 'Last rally – open window',
      addEnemy: '＋ Enemy rally',
      playerTitle: '2 · Reinforcers',
      playerHint: 'Each reinforcer gets a target window: they land right after that rally hits and refill the castle.',
      bufferLabel: 'Land after hit', sec: 's',
      lPMarch: 'Own march time', lTarget: 'Land after', phName: 'Player name', targetOpt: 'after {label}',
      addPlayer: '＋ Reinforcer',
      pNoTarget: 'Add an enemy rally first.',
      pNeedMarch: 'Enter own march time.',
      pWaitEnemy: 'Waiting for hit time of {label}.',
      pLands: 'lands {b} s after {label}',
      pCueHit: 'send at hit countdown {t}',
      pCueRally: 'send at rally countdown {t}',
      pEst: 'enemy march is an estimate',
      pTooLate: 'lands after {next} – window too tight!',
      pMissed: 'If not sent: pick a later window.',
      whenIn: 'in {t}', whenNow: 'NOW', whenAgo: '{t} ago',
      flowTitle: '3 · Timeline (live)',
      nextLabel: 'Next launch', nextHitLabel: 'Next hit',
      nextNone: 'Nothing planned yet – add enemy rallies and reinforcers.',
      tlHit: '{label} hits', tlLaunch: '{name} → after {label}',
      hud: '▶ Fullscreen timer',
      example: 'Example', reset: 'New round', clear: 'Clear all',
      confirmClear: 'Delete all inputs?', confirmReset: 'Reset enemy rally times? Reinforcers are kept.',
      
      
      hudNext: 'Next launch in', hudGo: 'Reinforce now', hudNone: 'No launches pending',
      hudEnemy: '⚔ {label} {t}',
      exit: 'Back', unnamed: 'Unnamed', removeRow: 'Remove', examplePlayer: 'Player {x}',
    },
    fr: {
      back: '← Tous les outils',
      lead: "Synchronise tes renforts pour qu'ils arrivent au château juste après l'impact d'un rally ennemi – avant le suivant.",
      enemyTitle: '1 · Rallys ennemis',
      enemyHint: "Tape le compte à rebours du rally tel qu'il s'affiche en jeu – c'est le moment de la première frappe qui compte. Estime d'abord le temps de marche, puis mets-le à jour dès que le rally part (saisis le temps restant affiché). Si le rally marche déjà, laisse le compte à rebours vide et saisis seulement le temps de marche restant.",
      lCd: 'Compte à rebours', lMarchEst: 'Marche (estimation)', lMarchLive: 'Marche restante',
      phCd: 'ex. 3:00', phMarch: 'ex. 1:30', enemyDefault: 'Rally {n}',
      chipIdle: '—', chipWait: 'Départ {t}', chipMarch: 'Impact {t}', chipEst: '≈ {t}', chipHit: 'impact', chipNeed: 'Marche ?',
      eNeed: 'Saisis le compte à rebours ou le temps de marche restant.',
      eWaitNoMarch: 'Départ dans {t} · temps de marche manquant',
      eMarchingNoMarch: 'En marche – saisis le temps de marche restant !',
      eHitIn: 'Impact dans {t}', eEst: ' (estimation – mets à jour dès qu\'il marche)',
      eEstLive: 'En marche – mets à jour le temps de marche restant !',
      eHitAgo: 'Impact il y a {t}',
      eGap: 'Écart avec le suivant : {t}', eGapSmall: 'Écart avec le suivant seulement {t} – plus petit que la marge !', eGapLast: 'Dernier rally – fenêtre ouverte',
      addEnemy: '＋ Rally ennemi',
      playerTitle: '2 · Renforts',
      playerHint: "Chaque renfort reçoit une fenêtre cible : il arrive juste après l'impact de ce rally et remplit à nouveau le château.",
      bufferLabel: "Arrivée après l'impact", sec: 's',
      lPMarch: 'Ton temps de marche', lTarget: 'Arriver après', phName: 'Nom du joueur', targetOpt: 'après {label}',
      addPlayer: '＋ Renfort',
      pNoTarget: "Ajoute d'abord un rally ennemi.",
      pNeedMarch: 'Saisis ton propre temps de marche.',
      pWaitEnemy: "En attente de l'heure d'impact de {label}.",
      pLands: 'arrive {b} s après {label}',
      pCueHit: "envoyer quand le compte à rebours d'impact affiche {t}",
      pCueRally: 'envoyer quand le compte à rebours du rally affiche {t}',
      pEst: 'marche ennemie estimée',
      pTooLate: 'arrive après {next} – fenêtre trop serrée !',
      pMissed: 'Si pas envoyé : choisis une fenêtre plus tardive.',
      whenIn: 'dans {t}', whenNow: 'MAINTENANT', whenAgo: 'il y a {t}',
      flowTitle: '3 · Déroulement (en direct)',
      nextLabel: 'Prochain départ', nextHitLabel: 'Prochain impact',
      nextNone: 'Rien de prévu – ajoute des rallys ennemis et des renforts.',
      tlHit: '{label} frappe', tlLaunch: '{name} → après {label}',
      hud: '▶ Minuteur plein écran',
      example: 'Exemple', reset: 'Nouvelle manche', clear: 'Tout effacer',
      confirmClear: 'Supprimer toutes les saisies ?', confirmReset: 'Réinitialiser les temps des rallys ennemis ? Les renforts sont conservés.',
      
      
      hudNext: 'Prochain départ dans', hudGo: 'Renforce maintenant', hudNone: 'Aucun départ en attente',
      hudEnemy: '⚔ {label} {t}',
      exit: 'Retour', unnamed: 'Sans nom', removeRow: 'Supprimer', examplePlayer: 'Joueur {x}',
    },
  };

  // ---------- Zustand ----------
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* egal */ } },
  };
  let uid = 0;
  const emptyTime = () => ({ text: '', sec: null, at: null });
  const newEnemy = () => ({ id: ++uid, label: '', cd: emptyTime(), march: emptyTime() });
  const newPlayer = (target = null) => ({ id: ++uid, name: '', march: '', target });

  const saved = store.get(STORAGE_KEY) || {};

  const state = {
    lang: KSLang.get(),
    buffer: Number.isFinite(saved.buffer) ? saved.buffer : SITE.defaultBuffer,
    enemies: [], players: [],
  };
  if (Array.isArray(saved.enemies)) {
    const idMap = new Map();
    state.enemies = saved.enemies.map(e => {
      const n = { ...newEnemy(), label: e.label || '', cd: { ...emptyTime(), ...e.cd }, march: { ...emptyTime(), ...e.march } };
      idMap.set(e.id, n.id);
      return n;
    });
    if (Array.isArray(saved.players)) {
      state.players = saved.players.map(p => ({ ...newPlayer(idMap.get(p.target) ?? null), name: p.name || '', march: p.march || '' }));
    }
  }
  if (!state.enemies.length) state.enemies = [newEnemy(), newEnemy()];
  if (!state.players.length) state.players = [newPlayer(state.enemies[0].id), newPlayer(state.enemies[0].id)];

  function persist() {
    store.set(STORAGE_KEY, { buffer: state.buffer, enemies: state.enemies, players: state.players });
  }

  // ---------- Helfer ----------
  const $ = id => document.getElementById(id);
  const t = (key, vars) => {
    let s = I18N[state.lang]?.[key] ?? I18N.en[key] ?? key;
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.split(`{${k}}`).join(v);
    return s;
  };

  /** "45" | "1:05" | "1m 5s" | "00:01:05" → Sekunden (oder null) */
  function parseTime(input) {
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
  const fmtLeft = ms => fmt(Math.ceil(ms / 1000));   // Countdown
  const fmtAgo = ms => fmt(Math.floor(ms / 1000));   // vergangene Zeit

  const enemyName = e => e.label.trim() || t('enemyDefault', { n: state.enemies.indexOf(e) + 1 });
  const playerName = p => p.name.trim() || t('unnamed');

  // ---------- Berechnung ----------
  /** Start- und Einschlagzeit einer Gegner-Rally (ms, Epoch) */
  function enemyTimes(e) {
    const launchAt = e.cd.sec != null ? e.cd.at + e.cd.sec * 1000 : null;
    let hitAt = null, marchMode = null;
    if (e.march.sec != null) {
      // Vor dem Rally-Start eingetragen = Schätzung der Gesamt-Marschzeit,
      // danach (oder ohne Countdown) = Restzeit ab dem Moment der Eingabe.
      const live = launchAt == null || e.march.at >= launchAt;
      hitAt = live ? e.march.at + e.march.sec * 1000 : launchAt + e.march.sec * 1000;
      marchMode = live ? 'live' : 'est';
    }
    return { launchAt, hitAt, marchMode };
  }

  function compute(now) {
    const times = new Map(state.enemies.map(e => [e.id, enemyTimes(e)]));
    const hits = state.enemies
      .map(e => ({ e, hitAt: times.get(e.id).hitAt }))
      .filter(x => x.hitAt != null)
      .sort((a, b) => a.hitAt - b.hitAt);
    const nextHitAfter = (hitAt, id) => hits.find(h => h.hitAt > hitAt && h.e.id !== id) || null;

    const plans = state.players.map(p => {
      const e = state.enemies.find(x => x.id === p.target);
      const marchSec = parseTime(p.march);
      if (!e) return { p, status: 'noTarget' };
      if (marchSec == null || marchSec <= 0) return { p, e, status: 'needMarch' };
      const et = times.get(e.id);
      if (et.hitAt == null) return { p, e, status: 'waitEnemy' };
      const landAt = et.hitAt + state.buffer * 1000;
      const launchAt = landAt - marchSec * 1000;
      const next = nextHitAfter(et.hitAt, e.id);
      const tooLate = next && landAt >= next.hitAt ? next : null;
      const cue = et.launchAt == null || launchAt >= et.launchAt
        ? { type: 'hit', ms: et.hitAt - launchAt }
        : { type: 'rally', ms: et.launchAt - launchAt };
      return { p, e, status: 'ok', launchAt, landAt, tooLate, cue, est: et.marchMode === 'est' };
    });

    return { now, times, hits, plans, nextHitAfter };
  }

  // ---------- Rendering: Gegner ----------
  const enemyEls = new Map();
  const playerEls = new Map();

  /** Zeiteingabe: Zeitpunkt des ersten Tastendrucks zählt, übernommen bei Enter/Verlassen. */
  function bindTimed(input, onCommit) {
    let startedAt = null;
    input.addEventListener('focus', () => { startedAt = null; });
    input.addEventListener('input', () => { if (startedAt === null) startedAt = Date.now(); input.classList.remove('invalid'); });
    input.addEventListener('change', () => {
      const at = startedAt ?? Date.now();
      startedAt = null;
      onCommit(input.value, at);
    });
    input.addEventListener('keydown', e => { if (e.key === 'Enter') input.blur(); });
  }

  function commitTime(target, input, value, at) {
    const text = value.trim();
    if (!text) { Object.assign(target, emptyTime()); input.classList.remove('invalid'); return true; }
    const sec = parseTime(text);
    if (sec == null) { input.classList.add('invalid'); return false; }
    Object.assign(target, { text, sec, at });
    return true;
  }

  function renderEnemies() {
    const wrap = $('enemies');
    wrap.textContent = '';
    enemyEls.clear();
    const tpl = $('enemyTpl');
    state.enemies.forEach((e, i) => {
      const el = tpl.content.firstElementChild.cloneNode(true);
      const label = el.querySelector('.f-label'), cd = el.querySelector('.f-cd'), march = el.querySelector('.f-march');
      label.value = e.label; label.placeholder = t('enemyDefault', { n: i + 1 });
      label.setAttribute('aria-label', t('enemyDefault', { n: i + 1 }));
      cd.value = e.cd.text; cd.placeholder = t('phCd');
      march.value = e.march.text; march.placeholder = t('phMarch');
      el.querySelector('.l-cd').textContent = t('lCd');
      const del = el.querySelector('.del');
      del.setAttribute('aria-label', t('removeRow'));

      label.addEventListener('input', () => { e.label = label.value; persist(); renderTargets(); });
      bindTimed(cd, (v, at) => { if (commitTime(e.cd, cd, v, at)) { persist(); update(); } });
      bindTimed(march, (v, at) => { if (commitTime(e.march, march, v, at)) { persist(); update(); } });
      del.addEventListener('click', () => {
        state.enemies = state.enemies.filter(x => x.id !== e.id);
        if (!state.enemies.length) state.enemies.push(newEnemy());
        state.players.forEach(p => { if (p.target === e.id) p.target = state.enemies[0].id; });
        persist(); renderAll();
      });

      enemyEls.set(e.id, {
        chip: el.querySelector('.chip'), status: el.querySelector('.estatus'),
        lMarch: el.querySelector('.l-march'),
      });
      wrap.appendChild(el);
    });
  }

  // ---------- Rendering: Verstärker ----------
  function renderTargets() {
    playerEls.forEach(({ select }, pid) => {
      const p = state.players.find(x => x.id === pid);
      select.textContent = '';
      state.enemies.forEach(e => select.add(new Option(t('targetOpt', { label: enemyName(e) }), String(e.id))));
      select.value = String(p.target);
    });
  }

  function renderPlayers() {
    const wrap = $('players');
    wrap.textContent = '';
    playerEls.clear();
    const tpl = $('playerTpl');
    state.players.forEach(p => {
      if (!state.enemies.some(e => e.id === p.target)) p.target = state.enemies[0]?.id ?? null;
      const el = tpl.content.firstElementChild.cloneNode(true);
      const name = el.querySelector('.f-name'), march = el.querySelector('.f-pmarch'), select = el.querySelector('.f-target');
      name.value = p.name; name.placeholder = t('phName'); name.setAttribute('aria-label', t('phName'));
      march.value = p.march; march.placeholder = t('phMarch');
      el.querySelector('.l-pmarch').textContent = t('lPMarch');
      el.querySelector('.l-target').textContent = t('lTarget');
      const del = el.querySelector('.del');
      del.setAttribute('aria-label', t('removeRow'));

      name.addEventListener('input', () => { p.name = name.value; persist(); update(); });
      march.addEventListener('input', () => { p.march = march.value; march.classList.remove('invalid'); persist(); update(); });
      march.addEventListener('change', () => { if (p.march.trim() && parseTime(p.march) == null) march.classList.add('invalid'); });
      select.addEventListener('change', () => { p.target = +select.value; persist(); update(); });
      del.addEventListener('click', () => {
        state.players = state.players.filter(x => x.id !== p.id);
        if (!state.players.length) state.players.push(newPlayer(state.enemies[0]?.id ?? null));
        persist(); renderAll();
      });

      playerEls.set(p.id, { select, when: el.querySelector('.pwhen'), info: el.querySelector('.pinfo') });
      wrap.appendChild(el);
    });
    renderTargets();
  }

  function renderAll() { renderEnemies(); renderPlayers(); update(); }

  function setText(el, v) { if (el.textContent !== v) el.textContent = v; }
  function setClass(el, base, extra) { const c = extra ? `${base} ${extra}` : base; if (el.className !== c) el.className = c; }

  // ---------- Live-Aktualisierung ----------
  let lastNow = Date.now();
  const flashMs = SITE.goFlashSeconds * 1000;

  function update() {
    const now = Date.now();
    const c = compute(now);

    // Gegner-Zeilen
    state.enemies.forEach(e => {
      const els = enemyEls.get(e.id);
      if (!els) return;
      const { launchAt, hitAt, marchMode } = c.times.get(e.id);
      const launched = launchAt == null ? e.march.sec != null : now >= launchAt;
      setText(els.lMarch, launchAt != null && !launched ? t('lMarchEst') : t('lMarchLive'));

      let chip = t('chipIdle'), chipCls = '', status = t('eNeed'), warn = false;
      if (hitAt != null) {
        if (now >= hitAt) {
          chip = t('chipHit'); chipCls = 'hit';
          status = t('eHitAgo', { t: fmtAgo(now - hitAt) });
        } else if (marchMode === 'est' && launched) {
          chip = t('chipEst', { t: fmtLeft(hitAt - now) }); chipCls = 'need';
          status = t('eEstLive'); warn = true;
        } else {
          chip = launched ? t('chipMarch', { t: fmtLeft(hitAt - now) }) : t('chipWait', { t: fmtLeft(launchAt - now) });
          chipCls = launched ? 'march' : 'wait';
          status = t('eHitIn', { t: fmtLeft(hitAt - now) }) + (marchMode === 'est' ? t('eEst') : '');
        }
        if (now < hitAt) {
          const next = c.nextHitAfter(hitAt, e.id);
          if (next) {
            const gap = (next.hitAt - hitAt) / 1000;
            const small = gap <= state.buffer;
            status += ' · ' + t(small ? 'eGapSmall' : 'eGap', { t: fmt(gap) });
            warn = warn || small;
          } else {
            status += ' · ' + t('eGapLast');
          }
        }
      } else if (launchAt != null) {
        if (!launched) { chip = t('chipWait', { t: fmtLeft(launchAt - now) }); chipCls = 'wait'; status = t('eWaitNoMarch', { t: fmtLeft(launchAt - now) }); }
        else { chip = t('chipNeed'); chipCls = 'need'; status = t('eMarchingNoMarch'); warn = true; }
      }
      setText(els.chip, chip); setClass(els.chip, 'chip', chipCls);
      setText(els.status, status); setClass(els.status, 'estatus', warn ? 'warn' : '');
    });

    // Verstärker-Zeilen
    c.plans.forEach(plan => {
      const els = playerEls.get(plan.p.id);
      if (!els) return;
      let when = '—', whenCls = '', info = '', warn = false;
      if (plan.status === 'noTarget') info = t('pNoTarget');
      else if (plan.status === 'needMarch') info = t('pNeedMarch');
      else if (plan.status === 'waitEnemy') info = t('pWaitEnemy', { label: enemyName(plan.e) });
      else {
        const d = plan.launchAt - now;
        if (d > 0) { when = t('whenIn', { t: fmtLeft(d) }); whenCls = d <= SITE.soonSeconds * 1000 ? 'soon' : ''; }
        else if (d > -flashMs) { when = t('whenNow'); whenCls = 'go'; }
        else { when = t('whenAgo', { t: fmtAgo(-d) }); whenCls = 'past'; }
        const parts = [t('pLands', { b: state.buffer, label: enemyName(plan.e) })];
        parts.push(t(plan.cue.type === 'hit' ? 'pCueHit' : 'pCueRally', { t: fmt(Math.round(plan.cue.ms / 1000)) }));
        if (plan.est) parts.push(t('pEst'));
        if (plan.tooLate) { parts.unshift(t('pTooLate', { next: enemyName(plan.tooLate.e) })); warn = true; if (whenCls !== 'go') whenCls = 'bad'; }
        if (d <= -flashMs && plan.landAt > now) parts.push(t('pMissed'));
        info = parts.join(' · ');
      }
      setText(els.when, when); setClass(els.when, 'pwhen mono', whenCls);
      setText(els.info, info); setClass(els.info, 'pinfo', warn ? 'warn' : '');
    });

    // Neue Starts → Vibration
    c.plans.forEach(pl => {
      if (pl.status === 'ok' && lastNow < pl.launchAt && pl.launchAt <= now) {
        try { navigator.vibrate && navigator.vibrate(300); } catch { /* egal */ }
      }
    });
    lastNow = now;

    renderFlow(c);
    if (!$('hud').hidden) renderHud(c);
  }

  // ---------- Ablauf ----------
  function events(c) {
    const list = [];
    c.hits.forEach(h => list.push({ kind: 'hit', at: h.hitAt, text: t('tlHit', { label: enemyName(h.e) }), est: c.times.get(h.e.id).marchMode === 'est' }));
    c.plans.filter(p => p.status === 'ok').forEach(p => list.push({
      kind: 'launch', at: p.launchAt, text: t('tlLaunch', { name: playerName(p.p), label: enemyName(p.e) }), plan: p,
    }));
    return list.sort((a, b) => a.at - b.at || (a.kind === 'hit' ? -1 : 1));
  }

  function currentLaunch(c) {
    const launches = c.plans.filter(p => p.status === 'ok').sort((a, b) => a.launchAt - b.launchAt);
    const flashing = launches.filter(p => c.now >= p.launchAt && c.now < p.launchAt + flashMs);
    if (flashing.length) return { mode: 'go', group: flashing, launches };
    const next = launches.find(p => p.launchAt > c.now);
    if (!next) return { mode: 'none', group: [], launches };
    const group = launches.filter(p => Math.abs(p.launchAt - next.launchAt) < 500);
    return { mode: next.launchAt - c.now <= SITE.soonSeconds * 1000 ? 'soon' : 'wait', group, launches };
  }

  const groupText = g => g.map(p => `${playerName(p.p)} → ${enemyName(p.e)}`).join(', ');

  let lastTimelineKey = '';
  function renderFlow(c) {
    const card = $('nextCard');
    const cur = currentLaunch(c);
    const nextHit = c.hits.find(h => h.hitAt > c.now);
    let html;
    if (cur.mode === 'none') {
      if (nextHit) {
        html = { cls: 'next', big: fmtLeft(nextHit.hitAt - c.now), lbl: t('nextHitLabel'), who: enemyName(nextHit.e) };
      } else {
        html = { cls: 'next empty', big: '', lbl: '', who: t('nextNone') };
      }
    } else {
      const g = cur.group;
      html = {
        cls: `next ${cur.mode === 'go' ? 'go' : cur.mode === 'soon' ? 'soon' : ''}`.trim(),
        big: cur.mode === 'go' ? 'GO' : fmtLeft(g[0].launchAt - c.now),
        lbl: t('nextLabel'), who: groupText(g),
      };
    }
    if (!card.firstChild) card.innerHTML = '<span class="big"></span><div class="txt"><div class="lbl"></div><div class="who"></div></div>';
    setClass(card, html.cls);
    setText(card.querySelector('.big'), html.big);
    setText(card.querySelector('.lbl'), html.lbl);
    setText(card.querySelector('.who'), html.who);
    card.querySelector('.big').hidden = !html.big;

    // Timeline
    const evs = events(c);
    const ol = $('timeline');
    const key = evs.map(e => e.kind + e.text + Math.round(e.at / 1000)).join('|');
    if (key !== lastTimelineKey) {
      lastTimelineKey = key;
      ol.textContent = '';
      evs.forEach(ev => {
        const li = document.createElement('li');
        li.innerHTML = '<span class="t"></span><span class="ic"></span><span class="d"></span>';
        li.querySelector('.ic').textContent = ev.kind === 'hit' ? '⚔' : '🛡';
        li.querySelector('.d').textContent = ev.text + (ev.est ? ' ≈' : '');
        ol.appendChild(li);
      });
    }
    const nextIdx = evs.findIndex(ev => ev.kind === 'launch' && ev.at > c.now - flashMs);
    [...ol.children].forEach((li, i) => {
      const ev = evs[i];
      const d = ev.at - c.now;
      setText(li.querySelector('.t'), d > -1000 ? fmtLeft(Math.max(0, d)) : `−${fmtAgo(-d)}`);
      const cls = [ev.kind, d < -flashMs ? 'past' : '', i === nextIdx ? 'next' : ''].filter(Boolean).join(' ');
      if (li.className !== cls) li.className = cls;
    });
  }

  // ---------- Vollbild-Timer ----------
  let wakeLock = null;
  async function openHud() {
    $('hud').hidden = false;
    document.body.style.overflow = 'hidden';
    update();
    try { if ('wakeLock' in navigator) wakeLock = await navigator.wakeLock.request('screen'); } catch { /* egal */ }
  }
  function closeHud() {
    $('hud').hidden = true;
    document.body.style.overflow = '';
    try { wakeLock && wakeLock.release(); } catch { /* egal */ }
    wakeLock = null;
  }
  document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'visible' && !$('hud').hidden) {
      try { wakeLock = await navigator.wakeLock.request('screen'); } catch { /* egal */ }
    }
  });

  let lastHudKey = '';
  function renderHud(c) {
    const cur = currentLaunch(c);
    const hud = $('hud');
    let label, big, names = '', sub = '', cls = 'hud';
    if (cur.mode === 'go') {
      cls += ' is-go'; label = t('hudGo'); big = 'GO'; names = groupText(cur.group);
    } else if (cur.mode === 'none') {
      cls += ' is-done'; label = t('hudNone'); big = '✓';
    } else {
      const d = cur.group[0].launchAt - c.now;
      if (cur.mode === 'soon') cls += ' is-soon';
      label = t('hudNext');
      big = d < 10000 ? (d / 1000).toFixed(1) : fmtLeft(d);
      names = groupText(cur.group);
      const pl = cur.group[0];
      sub = t(pl.cue.type === 'hit' ? 'pCueHit' : 'pCueRally', { t: fmt(Math.round(pl.cue.ms / 1000)) });
    }
    if (hud.className !== cls) hud.className = cls;
    setText($('hudLabel'), label);
    setText($('hudBig'), big);
    setText($('hudNames'), names);
    setText($('hudSub'), sub);

    const nextHit = c.hits.find(h => h.hitAt > c.now);
    setText($('hudEnemy'), nextHit ? t('hudEnemy', { label: enemyName(nextHit.e), t: fmtLeft(nextHit.hitAt - c.now) }) : '');
    const done = cur.launches.filter(p => p.launchAt <= c.now).length;
    setText($('hudCount'), cur.launches.length ? `🛡 ${done}/${cur.launches.length}` : '');

    const evs = events(c).filter(ev => ev.at > c.now - 15000);
    const ol = $('hudList');
    const key = evs.map(e => e.kind + e.text + Math.round(e.at / 1000)).join('|');
    if (key !== lastHudKey) {
      lastHudKey = key;
      ol.textContent = '';
      evs.forEach(ev => {
        const li = document.createElement('li');
        li.innerHTML = '<span class="t"></span><span class="d"></span>';
        li.querySelector('.d').textContent = `${ev.kind === 'hit' ? '⚔' : '🛡'} ${ev.text}`;
        ol.appendChild(li);
      });
    }
    const nextIdx = evs.findIndex(ev => ev.kind === 'launch' && ev.at > c.now - flashMs);
    [...ol.children].forEach((li, i) => {
      const ev = evs[i];
      const d = ev.at - c.now;
      setText(li.querySelector('.t'), d > -1000 ? fmtLeft(Math.max(0, d)) : `−${fmtAgo(-d)}`);
      const lcls = [ev.kind, d < -flashMs ? 'past' : '', i === nextIdx ? 'next' : ''].filter(Boolean).join(' ');
      if (li.className !== lcls) li.className = lcls;
    });
  }

  // ---------- Sprache ----------
  function applyLang() {
    KSLang.mark(state.lang);
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $('footerText').textContent = SITE.footer[state.lang] || SITE.footer.en;
    lastTimelineKey = ''; lastHudKey = '';
    renderAll();
  }

  // ---------- Events ----------
  KSLang.bind(l => { state.lang = l; applyLang(); });
  $('buffer').value = state.buffer;
  $('buffer').addEventListener('input', e => {
    const v = parseInt(e.target.value, 10);
    state.buffer = Number.isFinite(v) ? Math.min(30, Math.max(0, v)) : 0;
    persist(); update();
  });
  $('addEnemy').addEventListener('click', () => {
    state.enemies.push(newEnemy()); persist(); renderAll();
    const labels = document.querySelectorAll('#enemies .f-cd');
    labels[labels.length - 1]?.focus();
  });
  $('addPlayer').addEventListener('click', () => {
    const last = state.players[state.players.length - 1];
    state.players.push(newPlayer(last?.target ?? state.enemies[0]?.id ?? null)); persist(); renderAll();
    const names = document.querySelectorAll('#players .f-name');
    names[names.length - 1]?.focus();
  });
  $('exampleBtn').addEventListener('click', () => {
    const now = Date.now();
    const e1 = { ...newEnemy(), label: 'Rally 1', cd: { text: '3:00', sec: 180, at: now }, march: { text: '1:30', sec: 90, at: now } };
    const e2 = { ...newEnemy(), label: 'Rally 2', cd: { text: '3:05', sec: 185, at: now }, march: { text: '1:30', sec: 90, at: now } };
    state.enemies = [e1, e2];
    state.players = [
      { ...newPlayer(e1.id), name: t('examplePlayer', { x: 'A' }), march: '1:15' },
      { ...newPlayer(e1.id), name: t('examplePlayer', { x: 'B' }), march: '1:30' },
      { ...newPlayer(e2.id), name: t('examplePlayer', { x: 'C' }), march: '2:10' },
    ];
    state.buffer = SITE.defaultBuffer; $('buffer').value = state.buffer;
    persist(); renderAll();
  });
  $('resetBtn').addEventListener('click', () => {
    if (!confirm(t('confirmReset'))) return;
    state.enemies.forEach(e => { e.cd = emptyTime(); e.march = emptyTime(); });
    persist(); renderAll();
  });
  $('clearBtn').addEventListener('click', () => {
    if (!confirm(t('confirmClear'))) return;
    state.enemies = [newEnemy(), newEnemy()];
    state.players = [newPlayer(state.enemies[0].id), newPlayer(state.enemies[0].id)];
    state.buffer = SITE.defaultBuffer; $('buffer').value = state.buffer;
    persist(); renderAll();
  });
  $('hudBtn').addEventListener('click', openHud);
  $('exitBtn').addEventListener('click', closeHud);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('hud').hidden) closeHud(); });

  applyLang();
  setInterval(update, 100);
})();
