# CLAUDE.md – Kingshot Tools

Community-Website für das Mobile-Game **Kingshot**: Tools und Guides für Allianzen. Statisches HTML/CSS/JS ohne Build, ohne Backend, ohne Tracker.

- **Repo:** `sbelle-dev/ks-tools` (Branch `main`)
- **Live:** https://ks-hugo.com (eigene Domain über Hostinger, GitHub Pages; alte Adresse sbelle-dev.github.io/ks-tools leitet weiter)
- **Domain:** `ks-hugo.com` – DNS bei Hostinger (4 A-Records auf GitHub-IPs, `www` → CNAME `sbelle-dev.github.io`). Die Datei `CNAME` im Repo-Root **nicht löschen**, sonst fällt die Domain weg.
- **Projektordner (Doku):** `C:\Users\hello\OneDrive\_MyCLAUDE\_Projekte\Kingshot-Tools Website Github`
- **Owner:** Sebastian – kommuniziert auf Deutsch, locker und direkt

## Arbeitsweise

- **Neue Seiten/Features: erst Konzept zeigen, nach Freigabe bauen und pushen.** Kleine Änderungen (Texte, Hinweise, Fixes) direkt umsetzen.
- Bei Unklarheiten kurz nachfragen statt annehmen.
- Vor dem Push im Browser testen (Playwright, Handy 375–390 px + Desktop, alle fünf Sprachen, keine Konsolenfehler).
- Nach dem Push prüfen, ob es live ist (Pages braucht ~30–60 s).
- **Nach jedem Push** im Projektordner `01_Projekt-Doku.md` und `02_Changelog.md` aktualisieren und `04_Code/` auf den Repo-Stand bringen (falls der Ordner verbunden ist).
- Commits: Autor `sbelle-dev <sbelle-dev@users.noreply.github.com>`, Nachricht auf Deutsch.
- Repo-Einstellungen (Pages, Umbenennen) kann Claude nicht ändern → Sebastian Schritte nennen.

## Feste Regeln für alle Seiten

- **Sprachen:** Englisch ist Standard, dazu Deutsch, Französisch, Türkisch und Spanisch. Jeder sichtbare Text steht im `I18N`-Block (`en`/`de`/`fr`/`tr`/`es`) der jeweiligen `app.js` – neue Texte immer in allen fünf Sprachen. Sprachwahl über `assets/lang.js` (`KSLang`), gilt seitenübergreifend.
- **Footer** auf jeder Seite (wörtlich):
  - `provided for free with love by HUGO`
  - Disclaimer: *This is a fan-made website and is not affiliated with, endorsed by, or associated with Century Games or the official developers of Kingshot. All game assets, imagery, and text content are copyrights of their respective owners.*
- **Keine externen Links** auf den Seiten. Quellen nur als Text nennen.
- **Keine Kopier-/„Plan kopieren“-Funktionen** (bewusst entfernt; Spiel-Chat hat ~150-Zeichen-Limit).
- **Cache-Busting:** Nach jeder Änderung an `.js`/`.css` die Version `?v=JJJJMMTTx` in **allen** HTML-Dateien hochzählen.
- **Mobile first:** 16 px Seitenrand, kein horizontales Scrollen, Touch-Ziele ≥ 44 px.
- Neue Seiten: `crumb`-Navigation mit Zurück-Link + Sprachschalter (EN/DE/FR/TR/ES), Karte auf Startseite bzw. in `/guides/` ergänzen.
- Elemente mit `text-transform: uppercase` und englischen Wörtern (z.B. Eyebrow „Kingshot“) bekommen `lang="en"`, sonst wird im Türkischen „İ“ daraus.
- `localStorage` immer in try/catch, Seite muss auch ohne funktionieren.

## Struktur

```
index.html                 Startseite (Abschnitte Tools + Guides)
assets/styles.css          gemeinsames Design, Farb-Variablen in :root
assets/lang.js             Sprachwahl (KSLang)
assets/heroes/*.webp       Hero-Porträts 160 px
rally/                     Rally Sync
reinforce/                 Reinforcement Timer
guides/index.html          Guides-Übersicht
guides/tier-lists/         Tier-Listen – Daten in data.js
guides/bear-hunt/          Bear Hunt Guide – Strategie im Block PLAN (app.js)
```

## Inhalte & Daten

- **Hero-Bilder:** `assets/heroes/<slug>.webp`, Slug = Name klein, Leerzeichen → `-`, `&` → `-and-` (z.B. `wee-and-woo`). Quelle: kingshotoptimizer.com (Porträts 384 px → auf 160 px WebP verkleinern). Fehlt ein Bild, zeigt die Seite ein Kürzel-Badge.
- **Tier-Listen** (`guides/tier-lists/data.js`): Gen 1–8.
  - kingshotapp.com: Bear Trap, Burg Angriff-Lead, Arena (Gen 1–7)
  - kingshotoptimizer.com: Burg Angriff-Joiner, Garnison-Lead, Garnison-Joiner, sowie komplett Gen 8
  - PvP-Joiner-Pool von kingshotoptimizer wird nach dem **ersten Skill** aufgeteilt: offensiv → Angriff, defensiv → Garnison (Ava in beiden).
- **Bear Hunt:** Leader 1/9/90 (Amadeus → Alt. Diego, Ava → Alt. Petra, Luna → Alt. Yang); Joiner 5/10/85 (vom Nutzer anpassbar, Bogenschützen = Rest) mit sechs festen Märschen (Slot 1 zählt, Slot 2+3 nur gegen Doppelungen); Truppenlimit-Presets 100k/110k/120k; Staggering nach Entfernung zur Bärenfalle. Vorgaben stammen von Sebastian – nicht eigenmächtig ändern.
- Spielbegriffe (Rally, Pet, Staggering, Lethality …) in allen Sprachen so lassen, wie die Community sie nutzt.
