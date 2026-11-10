# ⚔️ Kingshot Tools

Kleine Community-Tools für Kingshot – laufen komplett im Browser, ohne Backend und Anmeldung.

| Tool | Pfad | Zweck |
|---|---|---|
| **Rally Sync** | `/rally/` | Startverzögerungen, damit mehrere Rallys gleichzeitig einschlagen |
| **Reinforcement Timer** | `/reinforce/` | Verstärkungen so timen, dass sie direkt nach einer Gegner-Rally landen |
| **Hero-Tier-Listen** (Guide) | `/guides/tier-lists/` | Beste Heroes für Bear Trap, Burg / KvK und Arena je Generation |

---

## ⚔️ Rally Sync

Kleines Web-Tool, damit mehrere Rallys **gleichzeitig einschlagen**.
Marschzeiten der Rally-Leads eintragen → das Tool berechnet, wer die Base-Rally startet und mit welcher Verzögerung alle anderen folgen. Dazu gibt's einen stillen, visuellen Vollbild-Timer fürs Handy.

Läuft komplett im Browser – kein Backend, keine Anmeldung, keine Tracker.

### Features

- Beliebig viele Rally-Leads mit Allianz-Tag, Name, Pet-Markierung und Marschzeit
- Flexible Zeiteingabe: `45`, `1:05`, `1m 5s`, `00:01:05`
- Berechnung: langsamster Marsch = Base (GO), alle anderen `+Verzögerung`
- Optional: Base-Rally manuell wählen – langsamere Rallys starten dann vor der Base (`−Vorlauf`)
- Reihenfolge als Text kopieren (für den Allianz-Chat)
- Visueller Timer: optionaler 3-s-Vorlauf, Countdown mit Zehntelsekunden, grünes GO-Signal, Vibration (Android), Bildschirm bleibt an
- Deutsch/Englisch umschaltbar
- Eingaben bleiben im Browser gespeichert

---

## 🛡️ Reinforcement Timer

Füllt die Burg zwischen mehreren Gegner-Rallys wieder auf.

**Ablauf:**
1. **Gegner-Rally anlegen:** Rally-Countdown so eintippen, wie er im Spiel steht – es zählt der Moment des ersten Tastendrucks.
2. **Marschzeit des Angreifers** erst schätzen, dann aktualisieren, sobald die Rally losmarschiert (angezeigte Restzeit eintragen). Läuft die Rally schon, Countdown leer lassen und nur die Restzeit eintragen.
3. **Verstärker** mit eigener Marschzeit und Zielfenster („nach Rally 1“ …) eintragen.
4. Startzeiten werden live berechnet: `Start = Einschlag + Puffer − eigene Marschzeit`.

**Features:** Live-Status je Rally (Start / Marsch / Einschlag), Lücke zur nächsten Rally, Warnung bei zu knappem Fenster, Start-Hinweis „losschicken bei Einschlag-Countdown X“ (unabhängig von Uhrzeiten), Live-Ablauf, Plan kopieren, Vollbild-Timer mit GO-Signal und Vibration. Alles bleibt auch nach Neuladen erhalten.

---

## 🏆 Hero-Tier-Listen (Guides)

Tier-Listen für **Bear Trap** (Rally-Leader und -Joiner), **Burg / KvK** (angreifender Leader) und **Arena 3v3**, jeweils für Gen 1–7. Dazu Truppen-Aufstellung und Hinweise je Modus. Die Auswahl steckt in der URL (z.B. `#bear-7-joiners`) und lässt sich direkt teilen.

**Daten pflegen:** Alle Tiers stehen in `guides/tier-lists/data.js`. Heroes einfach zwischen den Listen `S`, `A`, `B`, `C`, `Avoid` verschieben und `updated` anpassen. Quelle der aktuellen Daten: [kingshotapp.com](https://www.kingshotapp.com/heroes/tier-lists).

---

## Auf GitHub Pages veröffentlichen

1. Alle Dateien und Ordner ins Repository hochladen.
2. *Settings → Pages* → **Source:** „Deploy from a branch“, Branch `main`, Ordner `/ (root)` → *Save*.
3. Nach ca. 1 Minute ist das Tool erreichbar unter
   `https://<dein-github-name>.github.io/<repo>/` (Startseite mit allen Tools)

Tipp: Wenn das Repo `<dein-github-name>.github.io` heißt, läuft es direkt unter der Hauptadresse.

## Anpassen

Oben in `rally/app.js` bzw. `reinforce/app.js` im Block `SITE`:

| Einstellung | Bedeutung |
|---|---|
| `footer` | Footer-Text (DE/EN) – z.B. euer State/eure Allianz |
| `precountSeconds` | Länge des Vorlaufs vor der Base-Rally |
| `goFlashSeconds` | Wie lange das grüne GO angezeigt wird |
| `defaultRows` | Anzahl leerer Zeilen beim Start |

Farben stehen als Variablen ganz oben in `assets/styles.css` (`--accent` = Orange, `--go` = Grün).

## Rechnung Rally Sync

Alle Rallys werden mit **derselben Rally-Dauer** erstellt. Dann gilt:
`Verzögerung = langsamste Marschzeit − eigene Marschzeit`.
Die Base-Rally startet bei 0, alle anderen nach ihrer Verzögerung – so landen alle zur gleichen Sekunde.
Bei manuell gewählter Base wird die Verzögerung für langsamere Rallys negativ: sie starten entsprechend früher, der Timer beginnt dann mit dem ersten Start.
