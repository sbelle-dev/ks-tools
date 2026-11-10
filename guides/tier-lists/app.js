/* Hero-Tier-Listen – Anzeige der Daten aus data.js */
(() => {
  'use strict';

  const DATA = window.TIER_DATA;
  const GENS = [1, 2, 3, 4, 5, 6, 7];
  const TIER_ORDER = ['S', 'A', 'B', 'C', 'D', 'Avoid'];
  const ALWAYS_SHOWN = ['S', 'A', 'B'];
  const STORAGE_KEY = 'kstierlist.v2';

  // Rollen je Modus (Arena hat keine)
  const ROLES = {
    bear: [
      { id: 'leaders', icon: '👑', label: 'roleLeaders' },
      { id: 'joiners', icon: '🤝', label: 'roleJoiners' },
    ],
    castle: [
      { id: 'atk-lead', icon: '⚔️', label: 'roleAtkLead' },
      { id: 'atk-join', icon: '⚔️', label: 'roleAtkJoin' },
      { id: 'gar-lead', icon: '🛡️', label: 'roleGarLead' },
      { id: 'gar-join', icon: '🛡️', label: 'roleGarJoin' },
    ],
    arena: [],
  };

  const I18N = {
    en: {
      back: '← Guides', eyebrow: 'Kingshot · Guide', title: 'Hero Tier Lists',
      lead: 'Which heroes to use for Bear Trap, Castle / KvK and Arena – sorted by hero generation. Pick the mode and the generation your server is currently in.',
      modeBear: 'Bear Trap', modeCastle: 'Castle / KvK', modeArena: 'Arena',
      genLabel: 'Hero generation', roleLabel: 'Role',
      roleLeaders: 'Rally leader', roleJoiners: 'Rally joiner',
      roleAtkLead: 'Attack · Rally lead', roleAtkJoin: 'Attack · Rally joiner',
      roleGarLead: 'Garrison · Lead', roleGarJoin: 'Garrison · Joiner',
      title_bear_leaders: 'Bear Trap · Gen {g} · Rally leaders',
      title_bear_joiners: 'Bear Trap · Gen {g} · Rally joiners',
      'title_castle_atk-lead': 'Castle / KvK · Gen {g} · Attack rally lead',
      'title_castle_atk-join': 'Castle / KvK · Gen {g} · Attack rally joiner',
      'title_castle_gar-lead': 'Castle / KvK · Gen {g} · Garrison lead',
      'title_castle_gar-join': 'Castle / KvK · Gen {g} · Garrison joiner',
      title_arena: 'Arena 3v3 · Gen {g}',
      intro_bear_leaders: 'As rally leader, all your stats and every skill of your heroes count. Prioritise raw stats (stars, gear) and heroes with attack-boosting widgets.',
      intro_bear_joiners: 'As a joiner, only the first skill (top right) of your first hero counts – pick heroes whose first skill adds damage or lethality.',
      'intro_castle_atk-lead': 'You lead the rally against an enemy castle or KvK target. All your stats and every skill of your heroes count – offensive widgets and high attack are key.',
      'intro_castle_atk-join': 'You join an attack rally. Only the first skill of your first hero counts – it needs to be offensive (attack, lethality, extra damage on the enemy).',
      'intro_castle_gar-lead': 'You hold the castle as garrison captain. All your stats and skills count – defensive widgets and high defense/health matter most.',
      'intro_castle_gar-join': 'You reinforce a garrison. Only the first skill of your first hero counts – it needs to be defensive (defense, health, less damage from the enemy).',
      intro_arena: 'For 3v3 Arena fights. Synergy between your three heroes matters more than individual strength.',
      formationTitle: 'Troop formation', tipsTitle: 'Good to know',
      inf: 'Infantry', cav: 'Cavalry', arc: 'Archers',
      formLeader: 'Rally leader', formJoinerText: 'Rally joiners: 90 %+ archers.',
      formAttack: 'Attack', formGarrison: 'Garrison (defense)',
      formSynergy: 'No fixed preset – build your team around skill synergies between your three heroes.',
      formTankDps: 'Frontline tanks in front, area damage and crowd control in the back row.',
      tips_bear_leaders: [
        'Leaders and joiners are rated differently – a top leader can be a weak joiner and vice versa.',
        'Stars and gear on your leader heroes matter much more than on joiners.',
      ],
      tips_bear_joiners: [
        'Only the first skill of your first hero counts, so stars and gear of joiner heroes barely matter – max out that first skill.',
        'Joiners should send almost only archers.',
      ],
      'tips_castle_atk-lead': [
        'Heroes in the Avoid row are mostly defensive and weak in attack.',
        'This list comes from a different source than the other Castle lists, so rankings can differ.',
      ],
      'tips_castle_atk-join': [
        'Only the 4 strongest joiner skills in a rally count – a maxed first skill wins over a stronger hero with a lower skill level.',
        'Mix skill types (e.g. attack + lethality): different types multiply, identical ones only add up. Two of each beats four of the same.',
        'Heroes with defensive first skills belong in the garrison list, not here.',
      ],
      'tips_castle_gar-lead': [
        'From Gen 4 on, a 60/40 garrison (infantry/cavalry, no archers) becomes popular – Alcar, Margot and Saul shine there.',
        'Defensive widgets on the captain make a big difference for garrisons.',
      ],
      'tips_castle_gar-join': [
        'Same rules as for attack joiners: only the first skill of the first hero counts, max. 4 joiner skills.',
        'Mix defense, health and "less enemy damage" skills – different types multiply.',
        'Ava fits both lists: her first skill makes enemies take more damage, which also helps defenders.',
      ],
      tips_arena: [
        'Rankings shift with every new generation – check again after a new gen launches.',
        'Combine a frontline tank with backline damage dealers.',
      ],
      tierAvoid: 'Avoid', emptyTier: 'No heroes in this tier',
      sourceLabel: 'Tier data:', updated: 'as of {d}',
      splitNote: 'Joiner list split into attack and garrison by each hero\'s first skill.',
      footer: 'Hero Tier Lists · Community guide for Kingshot',
    },
    de: {
      back: '← Guides', eyebrow: 'Kingshot · Guide', title: 'Hero-Tier-Listen',
      lead: 'Welche Heroes für Bear Trap, Burg / KvK und Arena – sortiert nach Hero-Generation. Modus und die aktuelle Generation deines Servers wählen.',
      modeBear: 'Bear Trap', modeCastle: 'Burg / KvK', modeArena: 'Arena',
      genLabel: 'Hero-Generation', roleLabel: 'Rolle',
      roleLeaders: 'Rally-Leader', roleJoiners: 'Rally-Joiner',
      roleAtkLead: 'Angriff · Rally-Lead', roleAtkJoin: 'Angriff · Rally-Joiner',
      roleGarLead: 'Garnison · Lead', roleGarJoin: 'Garnison · Joiner',
      title_bear_leaders: 'Bear Trap · Gen {g} · Rally-Leader',
      title_bear_joiners: 'Bear Trap · Gen {g} · Rally-Joiner',
      'title_castle_atk-lead': 'Burg / KvK · Gen {g} · Angriff Rally-Lead',
      'title_castle_atk-join': 'Burg / KvK · Gen {g} · Angriff Rally-Joiner',
      'title_castle_gar-lead': 'Burg / KvK · Gen {g} · Garnison-Lead',
      'title_castle_gar-join': 'Burg / KvK · Gen {g} · Garnison-Joiner',
      title_arena: 'Arena 3v3 · Gen {g}',
      intro_bear_leaders: 'Als Rally-Leader zählen alle deine Werte und alle Skills deiner Heroes. Setz auf rohe Stats (Sterne, Ausrüstung) und Heroes mit Angriffs-Widgets.',
      intro_bear_joiners: 'Als Joiner zählt nur der erste Skill (oben rechts) deines ersten Heroes – nimm Heroes, deren erster Skill Schaden oder Lethality bringt.',
      'intro_castle_atk-lead': 'Du führst die Rally gegen eine gegnerische Burg oder ein KvK-Ziel. Alle deine Werte und alle Skills deiner Heroes zählen – Angriffs-Widgets und hoher Angriff sind entscheidend.',
      'intro_castle_atk-join': 'Du joinst eine Angriffs-Rally. Es zählt nur der erste Skill deines ersten Heroes – der muss offensiv sein (Angriff, Lethality, mehr Schaden am Gegner).',
      'intro_castle_gar-lead': 'Du hältst die Burg als Garnisons-Captain. Alle deine Werte und Skills zählen – defensive Widgets und hohe Verteidigung/HP sind am wichtigsten.',
      'intro_castle_gar-join': 'Du verstärkst eine Garnison. Es zählt nur der erste Skill deines ersten Heroes – der muss defensiv sein (Verteidigung, HP, weniger Schaden vom Gegner).',
      intro_arena: 'Für 3v3-Kämpfe in der Arena. Die Synergie deiner drei Heroes zählt mehr als die Einzelstärke.',
      formationTitle: 'Truppen-Aufstellung', tipsTitle: 'Gut zu wissen',
      inf: 'Infanterie', cav: 'Kavallerie', arc: 'Bogenschützen',
      formLeader: 'Rally-Leader', formJoinerText: 'Rally-Joiner: 90 %+ Bogenschützen.',
      formAttack: 'Angriff', formGarrison: 'Garnison (Verteidigung)',
      formSynergy: 'Keine feste Aufstellung – bau dein Team um die Skill-Synergien deiner drei Heroes.',
      formTankDps: 'Tanks vorne, Flächenschaden und Kontrolle in der hinteren Reihe.',
      tips_bear_leaders: [
        'Leader und Joiner werden unterschiedlich bewertet – ein Top-Leader kann ein schwacher Joiner sein und umgekehrt.',
        'Sterne und Ausrüstung zählen bei Leader-Heroes deutlich mehr als bei Joinern.',
      ],
      tips_bear_joiners: [
        'Es zählt nur der erste Skill des ersten Heroes – Sterne und Ausrüstung der Joiner-Heroes sind fast egal, aber dieser erste Skill sollte maximiert sein.',
        'Joiner schicken fast nur Bogenschützen.',
      ],
      'tips_castle_atk-lead': [
        'Heroes in der Avoid-Reihe sind meist defensiv und im Angriff schwach.',
        'Diese Liste stammt aus einer anderen Quelle als die übrigen Burg-Listen, Rangfolgen können daher abweichen.',
      ],
      'tips_castle_atk-join': [
        'Pro Rally zählen nur die 4 stärksten Joiner-Skills – ein maximierter erster Skill schlägt einen stärkeren Hero mit niedrigerem Skill-Level.',
        'Skill-Typen mischen (z. B. Angriff + Lethality): Verschiedene Typen multiplizieren sich, gleiche addieren sich nur. Zwei von jedem schlägt vier gleiche.',
        'Heroes mit defensivem ersten Skill gehören in die Garnisons-Liste, nicht hierher.',
      ],
      'tips_castle_gar-lead': [
        'Ab Gen 4 wird die 60/40-Garnison (Infanterie/Kavallerie, keine Bogenschützen) beliebt – dort glänzen Alcar, Margot und Saul.',
        'Defensive Widgets beim Captain machen in der Garnison einen großen Unterschied.',
      ],
      'tips_castle_gar-join': [
        'Gleiche Regeln wie beim Angriffs-Joiner: nur der erste Skill des ersten Heroes zählt, max. 4 Joiner-Skills.',
        'Verteidigung, HP und „weniger Gegnerschaden“ mischen – verschiedene Typen multiplizieren sich.',
        'Ava passt in beide Listen: Ihr erster Skill lässt Gegner mehr Schaden nehmen, das hilft auch den Verteidigern.',
      ],
      tips_arena: [
        'Die Rangfolge ändert sich mit jeder neuen Generation – nach einem Gen-Start nochmal reinschauen.',
        'Einen Tank vorne mit Schadensverursachern hinten kombinieren.',
      ],
      tierAvoid: 'Meiden', emptyTier: 'Keine Heroes in diesem Tier',
      sourceLabel: 'Tier-Daten:', updated: 'Stand {d}',
      splitNote: 'Joiner-Liste anhand des ersten Skills in Angriff und Garnison aufgeteilt.',
      footer: 'Hero-Tier-Listen · Community-Guide für Kingshot',
    },
    fr: {
      back: '← Guides', eyebrow: 'Kingshot · Guide', title: 'Tier lists des héros',
      lead: "Quels héros utiliser pour le Bear Trap, le château / KvK et l'arène – triés par génération de héros. Choisis le mode et la génération actuelle de ton serveur.",
      modeBear: 'Bear Trap', modeCastle: 'Château / KvK', modeArena: 'Arène',
      genLabel: 'Génération de héros', roleLabel: 'Rôle',
      roleLeaders: 'Leader du rally', roleJoiners: 'Participant',
      roleAtkLead: 'Attaque · Leader', roleAtkJoin: 'Attaque · Participant',
      roleGarLead: 'Garnison · Leader', roleGarJoin: 'Garnison · Renfort',
      title_bear_leaders: 'Bear Trap · Gen {g} · Leaders de rally',
      title_bear_joiners: 'Bear Trap · Gen {g} · Participants',
      'title_castle_atk-lead': 'Château / KvK · Gen {g} · Leader en attaque',
      'title_castle_atk-join': 'Château / KvK · Gen {g} · Participant en attaque',
      'title_castle_gar-lead': 'Château / KvK · Gen {g} · Leader de garnison',
      'title_castle_gar-join': 'Château / KvK · Gen {g} · Renfort de garnison',
      title_arena: 'Arène 3v3 · Gen {g}',
      intro_bear_leaders: "En tant que leader, toutes tes stats et toutes les compétences de tes héros comptent. Mise sur les stats brutes (étoiles, équipement) et les héros avec des widgets d'attaque.",
      intro_bear_joiners: "En tant que participant, seule la première compétence (en haut à droite) de ton premier héros compte – choisis des héros dont la première compétence ajoute des dégâts ou de la létalité.",
      'intro_castle_atk-lead': "Tu mènes le rally contre un château ennemi ou une cible KvK. Toutes tes stats et toutes les compétences de tes héros comptent – widgets offensifs et forte attaque sont essentiels.",
      'intro_castle_atk-join': "Tu rejoins un rally d'attaque. Seule la première compétence de ton premier héros compte – elle doit être offensive (attaque, létalité, dégâts accrus sur l'ennemi).",
      'intro_castle_gar-lead': "Tu tiens le château comme capitaine de garnison. Toutes tes stats et compétences comptent – widgets défensifs et forte défense/PV sont les plus importants.",
      'intro_castle_gar-join': "Tu renforces une garnison. Seule la première compétence de ton premier héros compte – elle doit être défensive (défense, PV, moins de dégâts de l'ennemi).",
      intro_arena: "Pour les combats 3v3 en arène. La synergie entre tes trois héros compte plus que la force individuelle.",
      formationTitle: 'Formation des troupes', tipsTitle: 'Bon à savoir',
      inf: 'Infanterie', cav: 'Cavalerie', arc: 'Archers',
      formLeader: 'Leader du rally', formJoinerText: 'Participants : 90 %+ archers.',
      formAttack: 'Attaque', formGarrison: 'Garnison (défense)',
      formSynergy: "Pas de formation fixe – construis ton équipe autour des synergies de compétences de tes trois héros.",
      formTankDps: "Des tanks devant, des dégâts de zone et du contrôle à l'arrière.",
      tips_bear_leaders: [
        "Leaders et participants sont évalués différemment – un excellent leader peut être un participant faible, et inversement.",
        "Les étoiles et l'équipement comptent bien plus pour les héros leaders que pour les participants.",
      ],
      tips_bear_joiners: [
        "Seule la première compétence du premier héros compte – étoiles et équipement des participants importent peu, mais cette compétence doit être au maximum.",
        'Les participants envoient presque uniquement des archers.',
      ],
      'tips_castle_atk-lead': [
        "Les héros de la ligne « Éviter » sont surtout défensifs et faibles en attaque.",
        "Cette liste provient d'une autre source que les autres listes château, les classements peuvent donc différer.",
      ],
      'tips_castle_atk-join': [
        "Seules les 4 meilleures compétences de participants comptent par rally – une première compétence au max bat un héros plus fort avec un niveau plus bas.",
        "Mélange les types (ex. attaque + létalité) : des types différents se multiplient, des types identiques s'additionnent. Deux de chaque battent quatre identiques.",
        "Les héros avec une première compétence défensive vont dans la liste garnison, pas ici.",
      ],
      'tips_castle_gar-lead': [
        "À partir de la Gen 4, la garnison 60/40 (infanterie/cavalerie, sans archers) devient populaire – Alcar, Margot et Saul y brillent.",
        "Les widgets défensifs du capitaine font une grande différence en garnison.",
      ],
      'tips_castle_gar-join': [
        "Mêmes règles que pour l'attaque : seule la première compétence du premier héros compte, 4 compétences max.",
        "Mélange défense, PV et « moins de dégâts ennemis » – des types différents se multiplient.",
        "Ava convient aux deux listes : sa première compétence fait subir plus de dégâts aux ennemis, ce qui aide aussi les défenseurs.",
      ],
      tips_arena: [
        "Le classement change à chaque nouvelle génération – vérifie à nouveau après le lancement d'une nouvelle gen.",
        "Associe un tank en première ligne à des dégâts en arrière-ligne.",
      ],
      tierAvoid: 'Éviter', emptyTier: 'Aucun héros dans ce tier',
      sourceLabel: 'Données des tiers :', updated: 'mise à jour {d}',
      splitNote: "Liste des participants répartie entre attaque et garnison selon la première compétence de chaque héros.",
      footer: 'Tier lists des héros · Guide communautaire pour Kingshot',
    },
  };

  // ---------- Zustand ----------
  const store = {
    get() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; } },
    set(v) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(v)); } catch { /* egal */ } },
  };
  const saved = store.get();
  const state = {
    lang: KSLang.get(),
    mode: ['bear', 'castle', 'arena'].includes(saved.mode) ? saved.mode : 'bear',
    gen: GENS.includes(+saved.gen) ? +saved.gen : 7,
    roles: { bear: 'leaders', castle: 'atk-lead', ...(saved.roles || {}) },
  };
  const validRole = (mode, r) => ROLES[mode].some(x => x.id === r);
  Object.keys(state.roles).forEach(m => { if (ROLES[m] && !validRole(m, state.roles[m])) state.roles[m] = ROLES[m][0].id; });
  readHash();

  function readHash() {
    const [mode, gen, ...rest] = location.hash.replace('#', '').split('-');
    const role = rest.join('-');
    if (!ROLES[mode]) return;
    state.mode = mode;
    if (GENS.includes(+gen)) state.gen = +gen;
    // ältere Links: castle ohne Rolle oder bear-x-leaders/joiners
    if (role && validRole(mode, role)) state.roles[mode] = role;
  }
  function writeHash() {
    const role = state.roles[state.mode];
    const h = `#${state.mode}-${state.gen}${role ? `-${role}` : ''}`;
    if (location.hash !== h) history.replaceState(null, '', h);
    store.set({ mode: state.mode, gen: state.gen, roles: state.roles });
  }

  // ---------- Helfer ----------
  const $ = id => document.getElementById(id);
  const t = (key, vars) => {
    let s = I18N[state.lang]?.[key] ?? I18N.en[key] ?? key;
    if (vars && typeof s === 'string') for (const [k, v] of Object.entries(vars)) s = s.split(`{${k}}`).join(v);
    return s;
  };
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const ctxKey = () => (ROLES[state.mode].length ? `${state.mode}_${state.roles[state.mode]}` : state.mode);

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
    const role = ROLES[state.mode].length ? state.roles[state.mode] : Object.keys(m)[0];
    return (m[role] || {})[String(state.gen)] || {};
  }
  function currentSource() {
    return DATA.sources?.[`${state.mode}/${state.roles[state.mode]}`] || DATA.source;
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

    const roles = ROLES[state.mode];
    $('roleRow').hidden = !roles.length;
    const box = $('roles');
    box.textContent = '';
    roles.forEach(r => {
      const b = el('button');
      b.type = 'button';
      b.append(el('span', null, r.icon), document.createTextNode(' '), el('span', null, t(r.label)));
      b.firstChild.setAttribute('aria-hidden', 'true');
      b.setAttribute('aria-pressed', String(state.roles[state.mode] === r.id));
      b.addEventListener('click', () => { state.roles[state.mode] = r.id; update(); });
      box.appendChild(b);
    });
  }

  function renderList() {
    const key = ctxKey();
    $('listTitle').textContent = t(`title_${key}`, { g: state.gen });
    $('listIntro').textContent = t(`intro_${key}`);

    const list = currentList();
    const wrap = $('tiers');
    wrap.textContent = '';
    TIER_ORDER.forEach(tier => {
      const heroes = list[tier];
      if (!heroes && !ALWAYS_SHOWN.includes(tier)) return;
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

    const src = currentSource();
    const link = $('sourceLink');
    link.href = src.url;
    link.textContent = src.name;
    $('splitNote').textContent = src.split ? t('splitNote') : '';
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

  function renderInfo() {
    const box = $('formation');
    box.textContent = '';
    const f = DATA.formations;
    const wrap = el('div', 'formation');
    if (state.mode === 'bear') {
      if (state.roles.bear === 'leaders') {
        wrap.appendChild(bar(t('formLeader'), f.bear.leaders[state.gen]));
        wrap.appendChild(legend());
      } else {
        wrap.appendChild(el('p', 'form-text', t('formJoinerText')));
      }
    } else if (state.mode === 'castle') {
      const garrison = state.roles.castle.startsWith('gar');
      wrap.appendChild(garrison ? bar(t('formGarrison'), f.castle.garrison) : bar(t('formAttack'), f.castle.attack));
      wrap.appendChild(legend());
    } else {
      wrap.appendChild(el('p', 'form-text', t(f.arena[state.gen] === 'synergy' ? 'formSynergy' : 'formTankDps')));
    }
    box.appendChild(wrap);

    const tips = $('tips');
    tips.textContent = '';
    const list = t(`tips_${ctxKey()}`);
    (Array.isArray(list) ? list : []).forEach(x => tips.appendChild(el('li', null, x)));
  }

  function renderStatic() {
    KSLang.mark(state.lang);
    document.querySelectorAll('[data-i18n]').forEach(e => { e.textContent = t(e.dataset.i18n); });
    document.title = `${t('title')} · Kingshot`;
    $('footerText').textContent = t('footer');
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
  window.addEventListener('hashchange', () => { readHash(); update(); });
  KSLang.bind(l => { state.lang = l; renderStatic(); update(); });

  renderStatic();
  update();
})();
