/* Bear Hunt Guide */
(() => {
  'use strict';

  // ---------- Strategie (hier anpassen) ----------
  const PLAN = {
    lead: {
      ratio: [1, 9, 90],
      heroes: [
        { type: 'inf', name: 'Amadeus' },
        { type: 'cav', name: 'Ava' },
        { type: 'arc', name: 'Yang' },
      ],
    },
    join: {
      ratio: [5, 10, 85],
      presets: [100000, 110000],
      marches: [
        { main: 'Chenko', skill: 'leth', fill: ['Diana', 'Triton'] },
        { main: 'Yeonwoo', skill: 'leth', fill: ['Fahd', 'Long Fei'] },
        { main: 'Amane', skill: 'atk', fill: ['Petra', 'Alcar'] },
        { main: 'Margot', skill: 'atk', fill: ['Rosa', 'Zoe'] },
        { main: 'Wee & Woo', skill: 'split', fill: ['Sophia', 'Eric'] },
        { main: 'Vivian', skill: 'dmg', fill: ['Gordon', 'Howard'] },
      ],
    },
    staggerRows: 3,
  };
  const STORAGE_KEY = 'ksbearhunt.v1';

  const I18N = {
    en: {
      back: '← Guides', eyebrow: 'Kingshot · Guide', title: 'Bear Hunt',
      lead: 'The most efficient Bear Hunt strategy on one page: how the alliance rallies together, which heroes to bring and how many troops to send.',
      rulesTitle: 'Core rules',
      rules: [
        { ic: '📣', t: 'Rally on cooldown', p: 'Everyone who can host starts a new rally as soon as it is available again. More rallies mean more damage on the bear.' },
        { ic: '⬆️', t: 'Join from the top', p: 'Join the first open rally in the list, then the next one – up to 6 marches. No waiting for the “strongest” leader, no cherry-picking.' },
        { ic: '💯', t: 'Troop limit per join', p: 'Send at most the announced limit per join – usually {limit}. Hosts have no limit: fill your own rally as much as you can.' },
        { ic: '⏱️', t: 'Staggering', p: 'Your start time depends on your distance to the bear trap. This way rallies don’t overlap and every single one fills up.', stagger: true },
      ],
      staggerRow0: 'Front row (closest)', staggerRow1: '1 castle row further back', staggerRowN: '{n} castle rows further back',
      staggerNow: 'start now', staggerLater: '+{n} min', staggerMore: '… and so on: +1 min per row',
      leadTitle: 'Rally leaders',
      leadIntro: 'As host, all your heroes and stats count. Use one hero per troop type:',
      inf: 'Infantry', cav: 'Cavalry', arc: 'Archers',
      formation: 'Formation',
      leadCalc: 'Your march size',
      leadTipTitle: 'This is the best option.',
      leadTipText: 'If you are missing one of these heroes, simply use the three best heroes you have for your own rally.',
      joinTitle: 'Joiner marches',
      joinIntro: 'Save these 6 marches as presets before the event. Only the first hero (slot 1) brings its skill into the rally – slots 2 and 3 just make sure no hero is used twice.',
      marchN: 'March {n}', counts: 'Skill counts', slots: 'Slots 2 + 3:',
      noHeroTitle: 'Missing one of these heroes?',
      noHeroText: 'Then join with no heroes at all – troops only. That is better than putting the wrong hero in slot 1.',
      skill_leth: '+25% Lethality', skill_atk: '+25% Attack', skill_split: 'Attack + Lethality', skill_dmg: '+25% damage taken by the bear',
      troopsTitle: 'Joiner troops',
      troopsIntro: 'Ratio 5 / 10 / 85. The limit per join is announced before each hunt – usually 100k, sometimes more. Enter it and send exactly these troops:',
      joinCalc: 'Troop limit per join',
      notesTitle: 'Good to know',
      notes: [
        '<b>Only the first skill of your first hero counts</b> as a joiner – max out that skill. Stars and gear of joiner heroes barely matter.',
        '<b>A rally uses at most 4 joiner skills.</b> Different types (lethality, attack, damage taken) multiply each other – that’s why the six marches mix them.',
        '<b>Stick to your march order</b> and never send a hero twice.',
        '<b>Consistency beats peaks:</b> steady rallies all event long deal the most damage.',
      ],
      sumTitle: 'In short',
      sum: [
        { ic: '📣', t: 'Rally often', s: 'Everyone hosts' },
        { ic: '⬆️', t: 'Join the top', s: 'No cherry-picking' },
        { ic: '💯', t: '{limit} limit', s: 'Per join' },
        { ic: '⏱️', t: 'Stagger', s: 'By distance' },
      ],
      
      
      footer: 'Bear Hunt Guide · Community guide for Kingshot',
    },
    de: {
      back: '← Guides', eyebrow: 'Kingshot · Guide', title: 'Bear Hunt',
      lead: 'Die effizienteste Bear-Hunt-Strategie auf einer Seite: wie die Allianz zusammen rallyt, welche Heroes rein gehören und wie viele Truppen man schickt.',
      rulesTitle: 'Kernregeln',
      rules: [
        { ic: '📣', t: 'Rallys auf Cooldown', p: 'Jeder, der Rallys starten kann, startet sofort eine neue, sobald es wieder geht. Mehr Rallys heißt mehr Schaden am Bären.' },
        { ic: '⬆️', t: 'Von oben joinen', p: 'Immer die erste offene Rally in der Liste joinen, dann die nächste – bis zu 6 Märsche. Nicht auf den „stärksten“ Leader warten, kein Rosinenpicken.' },
        { ic: '💯', t: 'Truppenlimit pro Join', p: 'Pro Join höchstens das angesagte Limit schicken – meist {limit}. Hosts haben kein Limit: die eigene Rally so voll wie möglich machen.' },
        { ic: '⏱️', t: 'Staggering', p: 'Deine Startzeit hängt von deiner Entfernung zur Bärenfalle ab. So überschneiden sich die Rallys nicht und jede einzelne wird voll.', stagger: true },
      ],
      staggerRow0: 'Vorderste Reihe (am nächsten)', staggerRow1: '1 Burgreihe weiter hinten', staggerRowN: '{n} Burgreihen weiter hinten',
      staggerNow: 'sofort starten', staggerLater: '+{n} Min.', staggerMore: '… und so weiter: +1 Min. pro Reihe',
      leadTitle: 'Rally-Leader',
      leadIntro: 'Als Host zählen alle deine Heroes und Werte. Nimm je einen Hero pro Truppentyp:',
      inf: 'Infanterie', cav: 'Kavallerie', arc: 'Bogenschützen',
      formation: 'Aufstellung',
      leadCalc: 'Deine Marschgröße',
      leadTipTitle: 'Das ist die beste Option.',
      leadTipText: 'Wenn dir einer dieser Heroes fehlt, nimm einfach die drei besten Heroes, die du hast, für deine eigene Rally.',
      joinTitle: 'Joiner-Märsche',
      joinIntro: 'Diese 6 Märsche vor dem Event als Presets speichern. Nur der erste Hero (Slot 1) bringt seinen Skill in die Rally – Slot 2 und 3 sorgen nur dafür, dass kein Hero doppelt verwendet wird.',
      marchN: 'Marsch {n}', counts: 'Skill zählt', slots: 'Slot 2 + 3:',
      noHeroTitle: 'Dir fehlt einer dieser Heroes?',
      noHeroText: 'Dann join lieber ganz ohne Heroes – nur mit Truppen. Das ist besser, als einen falschen Hero auf Slot 1 zu setzen.',
      skill_leth: '+25 % Lethality', skill_atk: '+25 % Angriff', skill_split: 'Angriff + Lethality', skill_dmg: '+25 % Schaden am Bären',
      troopsTitle: 'Joiner-Truppen',
      troopsIntro: 'Verhältnis 5 / 10 / 85. Das Limit pro Join wird vor jeder Jagd angesagt – meist 100k, manchmal mehr. Eintragen und genau diese Truppen schicken:',
      joinCalc: 'Truppenlimit pro Join',
      notesTitle: 'Gut zu wissen',
      notes: [
        '<b>Als Joiner zählt nur der erste Skill deines ersten Heroes</b> – diesen Skill maximieren. Sterne und Ausrüstung der Joiner-Heroes sind fast egal.',
        '<b>Eine Rally nutzt höchstens 4 Joiner-Skills.</b> Verschiedene Typen (Lethality, Angriff, Schaden am Gegner) multiplizieren sich – deshalb mischen die sechs Märsche sie.',
        '<b>Marsch-Reihenfolge einhalten</b> und nie einen Hero doppelt schicken.',
        '<b>Konstanz schlägt Spitzen:</b> gleichmäßige Rallys über das ganze Event machen den meisten Schaden.',
      ],
      sumTitle: 'Kurz gesagt',
      sum: [
        { ic: '📣', t: 'Oft starten', s: 'Jeder hostet' },
        { ic: '⬆️', t: 'Oben joinen', s: 'Kein Rosinenpicken' },
        { ic: '💯', t: '{limit} Limit', s: 'Pro Join' },
        { ic: '⏱️', t: 'Staggering', s: 'Nach Entfernung' },
      ],
      
      
      footer: 'Bear Hunt Guide · Community-Guide für Kingshot',
    },
    fr: {
      back: '← Guides', eyebrow: 'Kingshot · Guide', title: 'Bear Hunt',
      lead: "La stratégie Bear Hunt la plus efficace sur une seule page : comment l'alliance rallye ensemble, quels héros emmener et combien de troupes envoyer.",
      rulesTitle: 'Règles de base',
      rules: [
        { ic: '📣', t: 'Rally dès que possible', p: "Tous ceux qui peuvent lancer un rally en relancent un dès qu'il est disponible. Plus de rallys, plus de dégâts sur l'ours." },
        { ic: '⬆️', t: 'Rejoindre par le haut', p: "Rejoins le premier rally ouvert de la liste, puis le suivant – jusqu'à 6 marches. Pas d'attente pour le leader « le plus fort », pas de tri." },
        { ic: '💯', t: 'Limite de troupes par participation', p: "Envoie au maximum la limite annoncée – en général {limit}. Les hôtes n'ont pas de limite : remplis ton propre rally au maximum." },
        { ic: '⏱️', t: 'Staggering', p: "Ton heure de départ dépend de ta distance au piège à ours. Ainsi les rallys ne se chevauchent pas et chacun se remplit.", stagger: true },
      ],
      staggerRow0: 'Première rangée (la plus proche)', staggerRow1: '1 rangée de châteaux plus loin', staggerRowN: '{n} rangées de châteaux plus loin',
      staggerNow: 'départ immédiat', staggerLater: '+{n} min', staggerMore: '… et ainsi de suite : +1 min par rangée',
      leadTitle: 'Leaders de rally',
      leadIntro: "En tant qu'hôte, tous tes héros et toutes tes stats comptent. Prends un héros par type de troupe :",
      inf: 'Infanterie', cav: 'Cavalerie', arc: 'Archers',
      formation: 'Formation',
      leadCalc: 'Taille de ta marche',
      leadTipTitle: "C'est la meilleure option.",
      leadTipText: "S'il te manque un de ces héros, prends simplement les trois meilleurs héros que tu as pour ton propre rally.",
      joinTitle: 'Marches de participation',
      joinIntro: "Enregistre ces 6 marches en préréglage avant l'événement. Seul le premier héros (emplacement 1) apporte sa compétence au rally – les emplacements 2 et 3 évitent seulement d'utiliser un héros deux fois.",
      marchN: 'Marche {n}', counts: 'Compétence active', slots: 'Empl. 2 + 3 :',
      noHeroTitle: 'Il te manque un de ces héros ?',
      noHeroText: "Alors rejoins sans aucun héros – uniquement avec des troupes. C'est mieux que de mettre le mauvais héros en emplacement 1.",
      skill_leth: '+25 % létalité', skill_atk: '+25 % attaque', skill_split: 'Attaque + létalité', skill_dmg: "+25 % dégâts subis par l'ours",
      troopsTitle: 'Troupes de participation',
      troopsIntro: "Ratio 5 / 10 / 85. La limite par participation est annoncée avant chaque chasse – en général 100k, parfois plus. Saisis-la et envoie exactement ces troupes :",
      joinCalc: 'Limite de troupes par participation',
      notesTitle: 'Bon à savoir',
      notes: [
        "<b>Seule la première compétence de ton premier héros compte</b> en participation – monte-la au maximum. Étoiles et équipement des héros participants importent peu.",
        "<b>Un rally utilise au maximum 4 compétences de participants.</b> Des types différents (létalité, attaque, dégâts subis) se multiplient – c'est pourquoi les six marches les mélangent.",
        "<b>Respecte l'ordre de tes marches</b> et n'envoie jamais un héros deux fois.",
        "<b>La régularité bat les pics :</b> des rallys constants pendant tout l'événement font le plus de dégâts.",
      ],
      sumTitle: 'En bref',
      sum: [
        { ic: '📣', t: 'Rallye souvent', s: 'Tout le monde lance' },
        { ic: '⬆️', t: 'Par le haut', s: 'Pas de tri' },
        { ic: '💯', t: 'Limite {limit}', s: 'Par participation' },
        { ic: '⏱️', t: 'Staggering', s: 'Selon la distance' },
      ],
      
      
      footer: 'Bear Hunt Guide · Guide communautaire pour Kingshot',
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
    joinLimit: Number.isFinite(saved.joinLimit) && saved.joinLimit > 0 ? saved.joinLimit : PLAN.join.presets[0],
    leadSize: Number.isFinite(saved.leadSize) && saved.leadSize > 0 ? saved.leadSize : 200000,
  };
  const persist = () => store.set({ joinLimit: state.joinLimit, leadSize: state.leadSize });

  // ---------- Helfer ----------
  const $ = id => document.getElementById(id);
  const t = (key, vars) => {
    let s = I18N[state.lang]?.[key] ?? I18N.en[key] ?? key;
    if (vars && typeof s === 'string') for (const [k, v] of Object.entries(vars)) s = s.split(`{${k}}`).join(v);
    return s;
  };
  const fill = (s, vars) => { for (const [k, v] of Object.entries(vars)) s = s.split(`{${k}}`).join(v); return s; };
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const num = n => new Intl.NumberFormat(state.lang).format(n);
  const short = n => (n % 1000 === 0 ? `${n / 1000}k` : num(n));
  const TYPES = ['inf', 'cav', 'arc'];
  const COLORS = { inf: 'var(--inf)', cav: 'var(--cav)', arc: 'var(--arc)' };

  /** "100k" | "110.000" | "1,2m" → Zahl (oder null) */
  function parseTroops(input) {
    let s = String(input || '').trim().toLowerCase().replace(/\s/g, '');
    if (!s) return null;
    const m = s.match(/^([\d.,]+)(k|m)?$/);
    if (!m) return null;
    let v = m[1];
    if (m[2]) v = v.replace(',', '.');
    else v = v.replace(/[.,]/g, '');
    let n = parseFloat(v);
    if (!Number.isFinite(n)) return null;
    if (m[2] === 'k') n *= 1e3;
    if (m[2] === 'm') n *= 1e6;
    n = Math.round(n);
    return n > 0 && n < 1e8 ? n : null;
  }

  /** Truppen nach Verhältnis aufteilen; Rundungsrest geht an die Bogenschützen */
  function split(total, ratio) {
    const inf = Math.round(total * ratio[0] / 100);
    const cav = Math.round(total * ratio[1] / 100);
    return [inf, cav, total - inf - cav];
  }

  function heroColor(name) {
    let h = 0;
    for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) % 360;
    return `hsl(${h} 70% 68%)`;
  }
  function initials(name) {
    const parts = name.replace('&', ' ').split(/\s+/).filter(Boolean);
    return (parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : name.slice(0, 2)).toUpperCase();
  }
  const heroSlug = name => name.toLowerCase().replace(/\s*&\s*/g, '-and-').replace(/\s+/g, '-');
  function badge(name) {
    const b = el('span', 'badge', initials(name));
    b.style.background = heroColor(name);
    b.setAttribute('aria-hidden', 'true');
    const img = new Image();
    img.alt = '';
    img.decoding = 'async';
    img.onload = () => { b.textContent = ''; b.style.background = ''; b.classList.add('has-img'); b.appendChild(img); };
    img.src = `../../assets/heroes/${heroSlug(name)}.webp`;
    return b;
  }

  // ---------- Rendering ----------
  function renderRules() {
    const ul = $('rules');
    ul.textContent = '';
    t('rules').forEach(r => {
      const li = el('li', 'rule');
      li.appendChild(el('span', 'ic', r.ic));
      const body = el('div');
      body.appendChild(el('h3', null, r.t));
      body.appendChild(el('p', null, fill(r.p, { limit: short(state.joinLimit) })));
      if (r.stagger) {
        const st = el('ol', 'stagger');
        for (let i = 0; i < PLAN.staggerRows; i++) {
          const row = el('li');
          row.appendChild(el('span', null, i === 0 ? t('staggerRow0') : i === 1 ? t('staggerRow1') : t('staggerRowN', { n: i })));
          row.appendChild(el('span', 'when', i === 0 ? t('staggerNow') : t('staggerLater', { n: i })));
          st.appendChild(row);
        }
        st.appendChild(el('li', 'more', t('staggerMore')));
        body.appendChild(st);
      }
      li.appendChild(body);
      ul.appendChild(li);
    });
  }

  function renderLeaders() {
    const box = $('leaders');
    box.textContent = '';
    PLAN.lead.heroes.forEach(h => {
      const c = el('div', 'leader');
      c.dataset.type = h.type;
      c.append(el('span', 'type', t(h.type)), badge(h.name), el('span', 'name', h.name));
      box.appendChild(c);
    });
  }

  function renderBar(barId, legendId, ratio) {
    const bar = $(barId), lg = $(legendId);
    bar.textContent = ''; lg.textContent = '';
    ratio.forEach((v, i) => {
      const s = el('span', TYPES[i], v >= 8 ? `${v}%` : '');
      s.style.width = `${v}%`;
      s.title = `${t(TYPES[i])} ${v}%`;
      bar.appendChild(s);
      const l = el('span');
      const dot = el('i'); dot.style.background = COLORS[TYPES[i]];
      l.append(dot, document.createTextNode(`${t(TYPES[i])} `), el('b', null, `${v}%`));
      lg.appendChild(l);
    });
  }

  function renderResult(boxId, total, ratio) {
    const box = $(boxId);
    box.textContent = '';
    split(total, ratio).forEach((n, i) => {
      const tile = el('div', 'tile');
      tile.dataset.type = TYPES[i];
      tile.append(el('div', 'tl', t(TYPES[i])), el('div', 'tv', num(n)));
      box.appendChild(tile);
    });
  }

  function renderMarches() {
    const box = $('marches');
    box.textContent = '';
    PLAN.join.marches.forEach((m, i) => {
      const c = el('div', 'march');
      const head = el('div', 'mhead');
      head.append(el('span', 'mnum', t('marchN', { n: i + 1 })), el('span', 'counts', t('counts')));
      const skill = el('span', 'skill', t(`skill_${m.skill}`));
      skill.dataset.skill = m.skill;
      const f = el('div', 'fill');
      f.append(document.createTextNode(`${t('slots')} `), el('b', null, m.fill.join(' · ')));
      c.append(badge(m.main), head, el('span', 'name', m.main), skill, f);
      box.appendChild(c);
    });
  }

  function renderPresets() {
    const box = $('presets');
    box.textContent = '';
    PLAN.join.presets.forEach(p => {
      const b = el('button', null, short(p));
      b.type = 'button';
      b.setAttribute('aria-pressed', String(p === state.joinLimit));
      b.addEventListener('click', () => { state.joinLimit = p; $('joinLimit').value = num(p); $('joinLimit').classList.remove('invalid'); persist(); renderDynamic(); });
      box.appendChild(b);
    });
  }

  function renderNotes() {
    const ul = $('notes');
    ul.textContent = '';
    t('notes').forEach(html => {
      const li = el('li');
      // nur <b> aus eigenen Texten zulassen
      html.split(/(<b>.*?<\/b>)/).forEach(part => {
        const m = part.match(/^<b>(.*)<\/b>$/);
        li.appendChild(m ? el('b', null, m[1]) : document.createTextNode(part));
      });
      ul.appendChild(li);
    });
  }

  function renderSummary() {
    const box = $('summary');
    box.textContent = '';
    t('sum').forEach(s => {
      const c = el('div', 'sum');
      c.append(el('span', 'ic', s.ic), el('span', 'st', fill(s.t, { limit: short(state.joinLimit) })), el('span', 'ss', s.s));
      box.appendChild(c);
    });
  }

  function renderDynamic() {
    renderRules();
    renderResult('leadResult', state.leadSize, PLAN.lead.ratio);
    renderResult('joinResult', state.joinLimit, PLAN.join.ratio);
    renderPresets();
    renderSummary();
  }

  function renderAll() {
    KSLang.mark(state.lang);
    document.querySelectorAll('[data-i18n]').forEach(e => { e.textContent = t(e.dataset.i18n); });
    document.title = `${t('title')} Guide · Kingshot`;
    $('footerText').textContent = t('footer');
    renderLeaders();
    renderBar('leadBar', 'leadLegend', PLAN.lead.ratio);
    renderBar('joinBar', 'joinLegend', PLAN.join.ratio);
    renderMarches();
    renderNotes();
    $('leadSize').value = num(state.leadSize);
    $('joinLimit').value = num(state.joinLimit);
    renderDynamic();
  }

  // ---------- Events ----------
  function bindNumber(input, key) {
    input.addEventListener('input', () => {
      const n = parseTroops(input.value);
      input.classList.toggle('invalid', input.value.trim() !== '' && n == null);
      if (n != null) { state[key] = n; persist(); renderDynamic(); }
    });
    input.addEventListener('change', () => { input.value = num(state[key]); input.classList.remove('invalid'); });
    input.addEventListener('keydown', e => { if (e.key === 'Enter') input.blur(); });
  }
  bindNumber($('leadSize'), 'leadSize');
  bindNumber($('joinLimit'), 'joinLimit');
  KSLang.bind(l => { state.lang = l; renderAll(); });

  renderAll();
})();
