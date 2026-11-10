/* Hero-Tier-Listen – Anzeige der Daten aus data.js */
(() => {
  'use strict';

  const DATA = window.TIER_DATA;
  const GENS = [1, 2, 3, 4, 5, 6, 7];
  const TIER_ORDER = ['S', 'A', 'B', 'C', 'Avoid'];
  const STORAGE_KEY = 'kstierlist.v1';

  const I18N = {
    en: {
      back: '← Guides', eyebrow: 'Kingshot · Guide', title: 'Hero Tier Lists',
      lead: 'Which heroes to use for Bear Trap, Castle / KvK and Arena – sorted by hero generation. Pick the mode and the generation your server is currently in.',
      modeBear: 'Bear Trap', modeCastle: 'Castle / KvK', modeArena: 'Arena',
      genLabel: 'Hero generation', roleLabel: 'Role in the rally', roleLeaders: 'Rally leader', roleJoiners: 'Rally joiner',
      listBearLeaders: 'Bear Trap · Gen {g} · Rally leaders', listBearJoiners: 'Bear Trap · Gen {g} · Rally joiners',
      listCastle: 'Castle / KvK · Gen {g} · Attacking rally leader', listArena: 'Arena 3v3 · Gen {g}',
      introBearLeaders: 'As rally leader, all your stats and every skill of your heroes count. Prioritise raw stats (stars, gear) and heroes with attack-boosting widgets.',
      introBearJoiners: 'As a joiner, only the first skill (top right) of your first hero counts – pick heroes whose first skill adds damage or lethality.',
      introCastle: 'For attacking castles and KvK targets. Heroes in the Avoid row add little to an offensive rally.',
      introArena: 'For 3v3 Arena fights. Synergy between your three heroes matters more than individual strength.',
      formationTitle: 'Troop formation', tipsTitle: 'Good to know',
      inf: 'Infantry', cav: 'Cavalry', arc: 'Archers',
      formLeader: 'Rally leader', formJoinerText: 'Rally joiners: 90 %+ archers.',
      formOffense: 'Attack', formDefense: 'Defense (garrison)',
      formSynergy: 'No fixed preset – build your team around skill synergies between your three heroes.',
      formTankDps: 'Frontline tanks in front, area damage and crowd control in the back row.',
      tipsBear: [
        'Leaders and joiners are rated differently – a top leader can be a weak joiner and vice versa.',
        'Stars and gear on your leader heroes matter much more than on joiners.',
        'Joiners should send almost only archers.',
      ],
      tipsCastle: [
        'This list covers the attacking rally leader.',
        'For defense (garrison), shift your troops towards infantry and cavalry.',
        'Heroes in the Avoid row are mostly defensive and weak in attack.',
      ],
      tipsArena: [
        'Rankings shift with every new generation – check again after a new gen launches.',
        'Combine a frontline tank with backline damage dealers.',
      ],
      tierAvoid: 'Avoid', emptyTier: 'No heroes in this tier',
      sourceLabel: 'Tier data:', updated: 'as of {d}',
      footer: 'Hero Tier Lists · Community guide for Kingshot',
    },
    de: {
      back: '← Guides', eyebrow: 'Kingshot · Guide', title: 'Hero-Tier-Listen',
      lead: 'Welche Heroes für Bear Trap, Burg / KvK und Arena – sortiert nach Hero-Generation. Modus und die aktuelle Generation deines Servers wählen.',
      modeBear: 'Bear Trap', modeCastle: 'Burg / KvK', modeArena: 'Arena',
      genLabel: 'Hero-Generation', roleLabel: 'Rolle in der Rally', roleLeaders: 'Rally-Leader', roleJoiners: 'Rally-Joiner',
      listBearLeaders: 'Bear Trap · Gen {g} · Rally-Leader', listBearJoiners: 'Bear Trap · Gen {g} · Rally-Joiner',
      listCastle: 'Burg / KvK · Gen {g} · Angreifender Rally-Leader', listArena: 'Arena 3v3 · Gen {g}',
      introBearLeaders: 'Als Rally-Leader zählen alle deine Werte und alle Skills deiner Heroes. Setz auf rohe Stats (Sterne, Ausrüstung) und Heroes mit Angriffs-Widgets.',
      introBearJoiners: 'Als Joiner zählt nur der erste Skill (oben rechts) deines ersten Heroes – nimm Heroes, deren erster Skill Schaden oder Lethality bringt.',
      introCastle: 'Für Angriffe auf Burgen und KvK-Ziele. Heroes in der Avoid-Reihe bringen einer Angriffs-Rally wenig.',
      introArena: 'Für 3v3-Kämpfe in der Arena. Die Synergie deiner drei Heroes zählt mehr als die Einzelstärke.',
      formationTitle: 'Truppen-Aufstellung', tipsTitle: 'Gut zu wissen',
      inf: 'Infanterie', cav: 'Kavallerie', arc: 'Bogenschützen',
      formLeader: 'Rally-Leader', formJoinerText: 'Rally-Joiner: 90 %+ Bogenschützen.',
      formOffense: 'Angriff', formDefense: 'Verteidigung (Garnison)',
      formSynergy: 'Keine feste Aufstellung – bau dein Team um die Skill-Synergien deiner drei Heroes.',
      formTankDps: 'Tanks vorne, Flächenschaden und Kontrolle in der hinteren Reihe.',
      tipsBear: [
        'Leader und Joiner werden unterschiedlich bewertet – ein Top-Leader kann ein schwacher Joiner sein und umgekehrt.',
        'Sterne und Ausrüstung zählen bei Leader-Heroes deutlich mehr als bei Joinern.',
        'Joiner schicken fast nur Bogenschützen.',
      ],
      tipsCastle: [
        'Die Liste gilt für den angreifenden Rally-Leader.',
        'Für die Verteidigung (Garnison) Truppen Richtung Infanterie und Kavallerie verschieben.',
        'Heroes in der Avoid-Reihe sind meist defensiv und im Angriff schwach.',
      ],
      tipsArena: [
        'Die Rangfolge ändert sich mit jeder neuen Generation – nach einem Gen-Start nochmal reinschauen.',
        'Einen Tank vorne mit Schadensverursachern hinten kombinieren.',
      ],
      tierAvoid: 'Meiden', emptyTier: 'Keine Heroes in diesem Tier',
      sourceLabel: 'Tier-Daten:', updated: 'Stand {d}',
      footer: 'Hero-Tier-Listen · Community-Guide für Kingshot',
    },
    fr: {
      back: '← Guides', eyebrow: 'Kingshot · Guide', title: 'Tier lists des héros',
      lead: "Quels héros utiliser pour le Bear Trap, le château / KvK et l'arène – triés par génération de héros. Choisis le mode et la génération actuelle de ton serveur.",
      modeBear: 'Bear Trap', modeCastle: 'Château / KvK', modeArena: 'Arène',
      genLabel: 'Génération de héros', roleLabel: 'Rôle dans le rally', roleLeaders: 'Leader du rally', roleJoiners: 'Participant',
      listBearLeaders: 'Bear Trap · Gen {g} · Leaders de rally', listBearJoiners: 'Bear Trap · Gen {g} · Participants',
      listCastle: 'Château / KvK · Gen {g} · Leader de rally en attaque', listArena: 'Arène 3v3 · Gen {g}',
      introBearLeaders: "En tant que leader, toutes tes stats et toutes les compétences de tes héros comptent. Mise sur les stats brutes (étoiles, équipement) et les héros avec des widgets d'attaque.",
      introBearJoiners: "En tant que participant, seule la première compétence (en haut à droite) de ton premier héros compte – choisis des héros dont la première compétence ajoute des dégâts ou de la létalité.",
      introCastle: "Pour attaquer des châteaux et des cibles en KvK. Les héros de la ligne « Éviter » apportent peu à un rally offensif.",
      introArena: "Pour les combats 3v3 en arène. La synergie entre tes trois héros compte plus que la force individuelle.",
      formationTitle: 'Formation des troupes', tipsTitle: 'Bon à savoir',
      inf: 'Infanterie', cav: 'Cavalerie', arc: 'Archers',
      formLeader: 'Leader du rally', formJoinerText: 'Participants : 90 %+ archers.',
      formOffense: 'Attaque', formDefense: 'Défense (garnison)',
      formSynergy: "Pas de formation fixe – construis ton équipe autour des synergies de compétences de tes trois héros.",
      formTankDps: "Des tanks devant, des dégâts de zone et du contrôle à l'arrière.",
      tipsBear: [
        "Leaders et participants sont évalués différemment – un excellent leader peut être un participant faible, et inversement.",
        "Les étoiles et l'équipement comptent bien plus pour les héros leaders que pour les participants.",
        'Les participants envoient presque uniquement des archers.',
      ],
      tipsCastle: [
        "Cette liste concerne le leader de rally en attaque.",
        "Pour la défense (garnison), oriente tes troupes vers l'infanterie et la cavalerie.",
        "Les héros de la ligne « Éviter » sont surtout défensifs et faibles en attaque.",
      ],
      tipsArena: [
        "Le classement change à chaque nouvelle génération – vérifie à nouveau après le lancement d'une nouvelle gen.",
        "Associe un tank en première ligne à des dégâts en arrière-ligne.",
      ],
      tierAvoid: 'Éviter', emptyTier: 'Aucun héros dans ce tier',
      sourceLabel: 'Données des tiers :', updated: 'mise à jour {d}',
      footer: 'Tier lists des héros · Guide communautaire pour Kingshot',
    },
  };

  // ---------- Zustand ----------
  const store = {
    get() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; } },
    set(v) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(v)); } catch { /* egal */ } },
  };
  const state = { lang: KSLang.get(), mode: 'bear', gen: 7, role: 'leaders', ...pick(store.get()) };
  readHash();

  function pick(o) {
    const r = {};
    if (['bear', 'castle', 'arena'].includes(o.mode)) r.mode = o.mode;
    if (GENS.includes(+o.gen)) r.gen = +o.gen;
    if (['leaders', 'joiners'].includes(o.role)) r.role = o.role;
    return r;
  }
  function readHash() {
    const [mode, gen, role] = location.hash.replace('#', '').split('-');
    Object.assign(state, pick({ mode, gen, role }));
  }
  function writeHash() {
    const h = `#${state.mode}-${state.gen}${state.mode === 'bear' ? `-${state.role}` : ''}`;
    if (location.hash !== h) history.replaceState(null, '', h);
    store.set({ mode: state.mode, gen: state.gen, role: state.role });
  }

  // ---------- Helfer ----------
  const $ = id => document.getElementById(id);
  const t = (key, vars) => {
    let s = I18N[state.lang]?.[key] ?? I18N.en[key] ?? key;
    if (vars && typeof s === 'string') for (const [k, v] of Object.entries(vars)) s = s.split(`{${k}}`).join(v);
    return s;
  };
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };

  function heroColor(name) {
    let h = 0;
    for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) % 360;
    return `hsl(${h} 70% 68%)`;
  }
  function initials(name) {
    const parts = name.replace('&', ' ').split(/\s+/).filter(Boolean);
    return (parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : name.slice(0, 2)).toUpperCase();
  }

  function currentList() {
    const m = DATA.tiers[state.mode];
    const role = state.mode === 'bear' ? state.role : Object.keys(m)[0];
    return m[role][String(state.gen)] || {};
  }

  // ---------- Rendering ----------
  function renderControls() {
    document.querySelectorAll('#modes [data-mode]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.mode === state.mode)));
    const gens = $('gens');
    if (!gens.children.length) {
      GENS.forEach(g => {
        const b = el('button', null, String(g));
        b.type = 'button'; b.dataset.gen = g;
        b.setAttribute('aria-label', `Gen ${g}`);
        b.addEventListener('click', () => { state.gen = g; update(); });
        gens.appendChild(b);
      });
    }
    gens.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.gen === state.gen)));
    $('roleRow').hidden = state.mode !== 'bear';
    document.querySelectorAll('#roles [data-role]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.role === state.role)));
  }

  function renderList() {
    const key = state.mode === 'bear' ? (state.role === 'leaders' ? 'listBearLeaders' : 'listBearJoiners')
      : state.mode === 'castle' ? 'listCastle' : 'listArena';
    $('listTitle').textContent = t(key, { g: state.gen });
    const introKey = state.mode === 'bear' ? (state.role === 'leaders' ? 'introBearLeaders' : 'introBearJoiners')
      : state.mode === 'castle' ? 'introCastle' : 'introArena';
    $('listIntro').textContent = t(introKey);

    const list = currentList();
    const wrap = $('tiers');
    wrap.textContent = '';
    TIER_ORDER.forEach(tier => {
      const heroes = list[tier];
      // C und Avoid nur zeigen, wenn befüllt; S–B immer
      if (!heroes && !['S', 'A', 'B'].includes(tier)) return;
      const row = el('div', 'tier');
      row.dataset.tier = tier;
      row.appendChild(el('div', `tier-label${tier === 'Avoid' ? ' small' : ''}`, tier === 'Avoid' ? t('tierAvoid') : tier));
      const box = el('div', 'heroes');
      if (heroes && heroes.length) {
        heroes.forEach(name => {
          const chip = el('span', 'hero');
          const av = el('span', 'av', initials(name));
          av.style.background = heroColor(name);
          av.setAttribute('aria-hidden', 'true');
          chip.append(av, document.createTextNode(name));
          box.appendChild(chip);
        });
      } else {
        box.appendChild(el('span', 'empty-tier', t('emptyTier')));
      }
      row.appendChild(box);
      wrap.appendChild(row);
    });
  }

  function bar(label, [inf, cav, arc]) {
    const line = el('div', 'form-line');
    line.appendChild(el('div', 'form-head', label));
    const b = el('div', 'bar');
    [['inf', inf], ['cav', cav], ['arc', arc]].forEach(([cls, v]) => {
      if (!v) return;
      const s = el('span', cls, `${v}%`);
      s.style.width = `${v}%`;
      s.title = `${t(cls)} ${v}%`;
      b.appendChild(s);
    });
    line.appendChild(b);
    return line;
  }

  function renderInfo() {
    const box = $('formation');
    box.textContent = '';
    const f = DATA.formations;
    const wrap = el('div', 'formation');
    if (state.mode === 'bear') {
      wrap.appendChild(bar(t('formLeader'), f.bear.leaders[state.gen]));
      wrap.appendChild(legend());
      wrap.appendChild(el('p', 'form-text', t('formJoinerText')));
    } else if (state.mode === 'castle') {
      wrap.appendChild(bar(t('formOffense'), f.castle.offense));
      wrap.appendChild(bar(t('formDefense'), f.castle.defense));
      wrap.appendChild(legend());
    } else {
      wrap.appendChild(el('p', 'form-text', t(f.arena[state.gen] === 'synergy' ? 'formSynergy' : 'formTankDps')));
    }
    box.appendChild(wrap);

    const tips = $('tips');
    tips.textContent = '';
    const tipKey = state.mode === 'bear' ? 'tipsBear' : state.mode === 'castle' ? 'tipsCastle' : 'tipsArena';
    (t(tipKey) || []).forEach(x => tips.appendChild(el('li', null, x)));
  }

  function legend() {
    const l = el('div', 'legend');
    [['inf', '#9aa3b2'], ['cav', '#5aa9ff'], ['arc', '#2fd27a']].forEach(([k, c]) => {
      const s = el('span');
      const i = el('i'); i.style.background = c;
      s.append(i, document.createTextNode(t(k)));
      l.appendChild(s);
    });
    return l;
  }

  function renderStatic() {
    KSLang.mark(state.lang);
    document.querySelectorAll('[data-i18n]').forEach(e => { e.textContent = t(e.dataset.i18n); });
    document.title = `${t('title')} · Kingshot`;
    $('footerText').textContent = t('footer');
    const link = $('sourceLink');
    link.href = DATA.source.url;
    link.textContent = DATA.source.name;
    const [y, m] = DATA.updated.split('-').map(Number);
    let d = DATA.updated;
    try { d = new Intl.DateTimeFormat(state.lang, { month: 'long', year: 'numeric' }).format(new Date(y, m - 1, 1)); } catch { /* egal */ }
    $('updated').textContent = t('updated', { d });
  }

  function update() {
    writeHash();
    renderControls();
    renderList();
    renderInfo();
  }

  // ---------- Events ----------
  document.querySelectorAll('#modes [data-mode]').forEach(b => b.addEventListener('click', () => { state.mode = b.dataset.mode; update(); }));
  document.querySelectorAll('#roles [data-role]').forEach(b => b.addEventListener('click', () => { state.role = b.dataset.role; update(); }));
  window.addEventListener('hashchange', () => { readHash(); update(); });
  KSLang.bind(l => { state.lang = l; renderStatic(); update(); });

  renderStatic();
  update();
})();
