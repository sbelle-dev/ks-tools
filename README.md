# ⚔️ Rally Sync · Kingshot

Kleines Web-Tool, damit mehrere Rallys **gleichzeitig einschlagen**.
Marschzeiten der Rally-Leads eintragen → das Tool berechnet, wer die Base-Rally startet und mit welcher Verzögerung alle anderen folgen. Dazu gibt's einen stillen, visuellen Vollbild-Timer fürs Handy.

Läuft komplett im Browser – kein Backend, keine Anmeldung, keine Tracker.

## Features

- Beliebig viele Rally-Leads mit Allianz-Tag, Name, Pet-Markierung und Marschzeit
- Flexible Zeiteingabe: `45`, `1:05`, `1m 5s`, `00:01:05`
- Berechnung: langsamster Marsch = Base (GO), alle anderen `+Verzögerung`
- Optional: Base-Rally manuell wählen – langsamere Rallys starten dann vor der Base (`−Vorlauf`)
- Reihenfolge als Text kopieren (für den Allianz-Chat)
- Visueller Timer: optionaler 3-s-Vorlauf, Countdown mit Zehntelsekunden, grünes GO-Signal, Vibration (Android), Bildschirm bleibt an
- Deutsch/Englisch umschaltbar
- Eingaben bleiben im Browser gespeichert

## Auf GitHub Pages veröffentlichen

1. Neues Repository auf GitHub anlegen (z.B. `rally-sync`, öffentlich).
2. Die Dateien `index.html`, `styles.css`, `app.js` und `README.md` hochladen
   (*Add file → Upload files*).
3. *Settings → Pages* → **Source:** „Deploy from a branch“, Branch `main`, Ordner `/ (root)` → *Save*.
4. Nach ca. 1 Minute ist das Tool erreichbar unter
   `https://<dein-github-name>.github.io/rally-sync/`

Tipp: Wenn das Repo `<dein-github-name>.github.io` heißt, läuft es direkt unter der Hauptadresse.

## Anpassen

Oben in `app.js` im Block `SITE`:

| Einstellung | Bedeutung |
|---|---|
| `footer` | Footer-Text (DE/EN) – z.B. euer State/eure Allianz |
| `precountSeconds` | Länge des Vorlaufs vor der Base-Rally |
| `goFlashSeconds` | Wie lange das grüne GO angezeigt wird |
| `defaultRows` | Anzahl leerer Zeilen beim Start |

Farben stehen als Variablen ganz oben in `styles.css` (`--accent` = Orange, `--go` = Grün).

## So funktioniert die Rechnung

Alle Rallys werden mit **derselben Rally-Dauer** erstellt. Dann gilt:
`Verzögerung = langsamste Marschzeit − eigene Marschzeit`.
Die Base-Rally startet bei 0, alle anderen nach ihrer Verzögerung – so landen alle zur gleichen Sekunde.
Bei manuell gewählter Base wird die Verzögerung für langsamere Rallys negativ: sie starten entsprechend früher, der Timer beginnt dann mit dem ersten Start.
