# Vereinskasse

Einfache Kasse für Vereinsevents: feste Artikel, Rückgeld-Anzeige, Statistik, Datensicherung. Läuft auf Handy und Tablet (iOS und Android) und funktioniert nach der ersten Installation **ohne Internet**.

## 1. Auf GitHub veröffentlichen (einmalig, ca. 10 Minuten)

Du brauchst dafür kein Programmieren und kein Git, alles geht im Browser.

1. Konto anlegen auf <https://github.com> (kostenlos).
2. Oben rechts auf **+** → **New repository**.
   - Name: `vereinskasse`
   - Sichtbarkeit: **Public** (kostenloses GitHub Pages funktioniert nur mit öffentlichen Repositories)
   - Häkchen bei „Add a README" **nicht** setzen → **Create repository**.
3. Auf der neuen Seite den Link **uploading an existing file** anklicken.
4. Das ZIP entpacken und **alle Dateien** (nicht den Ordner selbst) in das Browserfenster ziehen. Es müssen 8 Dateien sein: `index.html`, `manifest.webmanifest`, `sw.js`, vier `.png`-Icons und diese `README.md`. Dann unten **Commit changes**.
5. Oben auf **Settings** → links **Pages**.
   - Bei „Build and deployment" → Source: **Deploy from a branch**
   - Branch: **main**, Ordner: **/ (root)** → **Save**
6. Nach etwa einer Minute steht oben auf der Seite die Adresse, sie sieht so aus:
   `https://DEIN-NAME.github.io/vereinskasse/`

Hinweis: Öffentlich ist nur die App selbst (leere Kasse mit Beispielartikeln). Deine Verkaufsdaten bleiben ausschließlich auf den Geräten.

## 2. Auf dem Gerät installieren

**iPhone / iPad (Safari):** Adresse öffnen → Teilen-Symbol → **Zum Home-Bildschirm** → Hinzufügen.

**Android (Chrome):** Adresse öffnen → Menü (drei Punkte) → **App installieren** (oder „Zum Startbildschirm hinzufügen").

Wichtig:
- **Danach immer über das Icon auf dem Startbildschirm öffnen**, nicht mehr im Browser. Auf dem iPhone hat die installierte App einen eigenen Speicher, getrennte Daten von Safari.
- Einmal mit Internet öffnen und kurz warten, damit sich die App für den Offline-Betrieb selbst ablegt. Danach ist kein Netz mehr nötig (auch nicht auf dem Sportplatz).

## 3. Artikel anpassen

Tab **Artikel**: Namen und Preise ändern, neue Artikel anlegen, alte löschen. Preise in Euro, z. B. `2,50`.

## 4. Datensicherung (bitte nicht auslassen)

Die Daten liegen nur auf dem jeweiligen Gerät. Fällt es aus oder wird es zurückgesetzt, sind sie weg, außer du hast gesichert.

- Tab **Sicherung** → **Sicherung erstellen**. Es öffnet sich das Teilen-Menü, schicke die Datei an dich selbst (WhatsApp, E-Mail, Cloud-Ordner). Auf Geräten ohne Teilen-Menü wird die Datei heruntergeladen.
- **Wann sichern:** nach jedem Event und in längeren Pausen. Die App erinnert dich nach 15 Verkäufen ohne Sicherung.
- **Wiederherstellen** (z. B. auf einem Ersatzgerät): App installieren → Tab **Sicherung** → **Datei auswählen** → die zuletzt gesicherte `.json`-Datei. Artikel und Verkäufe sind dann wieder da.
- **Für die Abrechnung:** „Verkäufe als CSV" erzeugt eine Tabelle, die sich in Excel oder Numbers öffnen lässt.

Tipp für mehrere Geräte: Jedes Gerät führt seine eigene Statistik. Pro Event am besten **ein** Gerät als Kasse verwenden oder am Ende die Zahlen zusammenrechnen.

## 5. Neues Event

Tab **Statistik** → **Statistik zurücksetzen**. Vorher unter „Sicherung" eine Datei erstellen, falls du die alten Zahlen noch brauchst.

## 6. Änderungen einspielen

Auf GitHub im Repository die Datei anklicken → Stift-Symbol (Edit) oder **Add file → Upload files** und die neue Version hochladen → **Commit changes**. Die Seite aktualisiert sich nach ca. einer Minute, die App holt sich die neue Version beim nächsten Öffnen mit Internet (ggf. einmal komplett schließen und neu öffnen). Deine gespeicherten Daten bleiben dabei erhalten.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | die komplette Kasse |
| `manifest.webmanifest` | Name, Farben und Icons für die Installation |
| `sw.js` | Offline-Modus |
| `icon-*.png`, `apple-touch-icon.png` | App-Symbole |
