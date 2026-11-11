/* Chat-Nachrichten: Text in Teile mit begrenzter Länge aufteilen und einzeln kopieren.
   Der Kingshot-Chat erlaubt nur ca. 150 Zeichen pro Nachricht. */
window.KSChat = (() => {
  const LIMIT = 150;            // max. Zeichen pro Chat-Nachricht
  const SEP = ' | ';            // Trenner statt Zeilenumbruch (Umbrüche gehen im Spiel-Chat oft verloren)
  const len = s => s.length;    // UTF-16-Länge: zählt Emojis doppelt, also eher zu vorsichtig

  /** Eine zu lange Zeile an Wortgrenzen umbrechen */
  function wrap(line, max) {
    const out = [];
    let cur = '';
    line.split(/\s+/).forEach(word => {
      while (len(word) > max) { // extrem lange Wörter hart teilen
        if (cur) { out.push(cur); cur = ''; }
        out.push(word.slice(0, max));
        word = word.slice(max);
      }
      const cand = cur ? `${cur} ${word}` : word;
      if (len(cand) <= max) cur = cand;
      else { out.push(cur); cur = word; }
    });
    if (cur) out.push(cur);
    return out;
  }

  /** Zeilen zu möglichst wenigen Nachrichten ≤ LIMIT zusammenpacken, ggf. mit "(1/3) " davor */
  function split(lines, limit = LIMIT) {
    const clean = lines.map(l => String(l).replace(/\s+/g, ' ').trim()).filter(Boolean);
    const single = clean.join(SEP);
    if (len(single) <= limit) return single ? [single] : [];

    const room = limit - 8; // Platz für "(10/10) "
    const pieces = clean.flatMap(l => (len(l) > room ? wrap(l, room) : [l]));
    const msgs = [];
    let cur = '';
    pieces.forEach(p => {
      const cand = cur ? cur + SEP + p : p;
      if (len(cand) <= room) cur = cand;
      else { msgs.push(cur); cur = p; }
    });
    if (cur) msgs.push(cur);
    return msgs.map((m, i) => `(${i + 1}/${msgs.length}) ${m}`);
  }

  async function copy(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch {
      const ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch { ok = false; }
      ta.remove();
      return ok;
    }
  }

  const TXT = {
    en: { one: 'Fits into one chat message ({limit} characters max):', many: 'Chat allows {limit} characters per message – post these {n} messages one after another:', part: 'Message {i}/{n}', copy: '📋 Copy', copied: '✓ Copied', fail: 'Copy failed' },
    de: { one: 'Passt in eine Chat-Nachricht (max. {limit} Zeichen):', many: 'Der Chat erlaubt {limit} Zeichen pro Nachricht – diese {n} Nachrichten nacheinander posten:', part: 'Nachricht {i}/{n}', copy: '📋 Kopieren', copied: '✓ Kopiert', fail: 'Kopieren fehlgeschlagen' },
    fr: { one: 'Tient en un seul message ({limit} caractères max) :', many: 'Le chat autorise {limit} caractères par message – publie ces {n} messages l’un après l’autre :', part: 'Message {i}/{n}', copy: '📋 Copier', copied: '✓ Copié', fail: 'Échec de la copie' },
  };
  const fmt = (s, v) => Object.entries(v).reduce((a, [k, x]) => a.split(`{${k}}`).join(x), s);
  const lang = () => (window.KSLang ? KSLang.get() : 'en');

  /** Nachrichten in einen Container rendern; markiert bereits kopierte Teile */
  function render(container, msgs, copiedIdx = new Set()) {
    const T = TXT[lang()] || TXT.en;
    container.textContent = '';
    container.hidden = !msgs.length;
    if (!msgs.length) return;
    const intro = document.createElement('p');
    intro.className = 'chat-intro';
    intro.textContent = fmt(msgs.length === 1 ? T.one : T.many, { limit: LIMIT, n: msgs.length });
    container.appendChild(intro);
    msgs.forEach((m, i) => {
      const box = document.createElement('div');
      box.className = 'chat-part' + (copiedIdx.has(i) ? ' done' : '');
      const head = document.createElement('div');
      head.className = 'chat-head';
      const title = document.createElement('span');
      title.textContent = msgs.length > 1 ? fmt(T.part, { i: i + 1, n: msgs.length }) : '';
      const count = document.createElement('span');
      count.className = 'chat-len';
      count.textContent = `${len(m)}/${LIMIT}`;
      head.append(title, count);
      const text = document.createElement('p');
      text.className = 'chat-text';
      text.textContent = m;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = copiedIdx.has(i) ? T.copied : T.copy;
      btn.addEventListener('click', async () => {
        const ok = await copy(m);
        btn.textContent = ok ? T.copied : T.fail;
        if (ok) { copiedIdx.add(i); box.classList.add('done'); }
      });
      box.append(head, text, btn);
      container.appendChild(box);
    });
  }

  /** Komplett-Ablauf für einen Haupt-Button: aufteilen, anzeigen, Nachricht 1 kopieren */
  async function share(container, lines, mainBtn, labels) {
    const msgs = split(lines);
    const done = new Set();
    const ok = msgs.length ? await copy(msgs[0]) : false;
    if (ok) done.add(0);
    render(container, msgs, done);
    if (mainBtn && labels) {
      const T = TXT[lang()] || TXT.en;
      mainBtn.textContent = ok ? (msgs.length > 1 ? `${T.copied} (1/${msgs.length})` : T.copied) : T.fail;
      setTimeout(() => { mainBtn.textContent = labels.idle; }, 1800);
    }
    return msgs;
  }

  return { LIMIT, split, copy, render, share };
})();
