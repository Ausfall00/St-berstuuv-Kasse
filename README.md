# Stöberstuuv Kasse

Einfache Kasse für Vereinsevents: feste Artikel in Kategorien, Rückgeld-Anzeige, Buchung „Für Personal", Statistik und Datensicherung. Läuft auf Handy und Tablet (iOS und Android) und funktioniert nach der ersten Installation **ohne Internet**.

## 1. Auf GitHub veröffentlichen (einmalig, ca. 10 Minuten)

Du brauchst dafür kein Programmieren und kein Git, alles geht im Browser.

1. Konto anlegen auf <https://github.com> (kostenlos).
2. Oben rechts auf **+** → **New repository**.
   - Name: `vereinskasse`
   - Sichtbarkeit: **Public** (kostenloses GitHub Pages funktioniert nur mit öffentlichen Repositories)
   - Häkchen bei „Add a README" **nicht** setzen → **Create repository**.
3. Auf der neuen Seite den Link **uploading an existing file** anklicken.
4. Das ZIP entpacken und **alle Dateien** (nicht den Ordner selbst) in das Browserfenster ziehen. Es sind 12 Dateien: `index.html`, `manifest.webmanifest`, `sw.js`, zwei `.woff2`-Schriften, `mark.png`, `logo.jpg`, vier Icons (`.png`) und diese `README.md`. Dann unten **Commit changes**.
5. Oben auf **Settings** → links **Pages**.
   - Bei „Build and deployment" → Source: **Deploy from a branch**
   - Branch: **main**, Ordner: **/ (root)** → **Save**
6. Nach etwa einer Minute steht oben auf der Seite die Adresse, sie sieht so aus:
   `https://DEIN-NAME.github.io/vereinskasse/`

Hinweis: Öffentlich ist nur die App selbst (mit Beispielartikeln und eurem Logo). Deine Verkaufsdaten bleiben ausschließlich auf den Geräten.

## 2. Auf dem Gerät installieren

**iPhone / iPad (Safari):** Adresse öffnen → Teilen-Symbol → **Zum Home-Bildschirm** → Hinzufügen.

**Android (Chrome):** Adresse öffnen → Menü (drei Punkte) → **App installieren** (oder „Zum Startbildschirm hinzufügen").

Wichtig:
- **Danach immer über das Icon auf dem Startbildschirm öffnen**, nicht mehr im Browser. Auf dem iPhone hat die installierte App einen eigenen Speicher, getrennt von Safari.
- Einmal mit Internet öffnen und kurz warten, damit sich die App für den Offline-Betrieb selbst ablegt. Danach ist kein Netz mehr nötig (auch nicht auf dem Sportplatz).

## 3. Kassieren

- Oben wählst du die Kategorie (Essen, Trinken, Kaffee & Kuchen). Die orange Zahl am Reiter zeigt, wie viele Artikel aus dieser Kategorie schon in der Bestellung sind.
- Auf einen Artikel tippen, um ihn hinzuzufügen. Die Zahl auf dem Artikel zeigt die Menge.
- **Handy:** Unten erscheint die Leiste „Kassieren". Darin trägst du ein, was der Gast gegeben hat (oder tippst Passend / 5 € / 10 € …). Das Rückgeld steht groß darunter.
- **Tablet:** Die Bestellung steht dauerhaft rechts neben den Artikeln.
- Falsch gebucht? „Letzte Buchung zurücknehmen" macht die letzte Buchung rückgängig.

## 4. Für Personal buchen

In der Bestellung auf **Für Personal** tippen. Es erscheint eine Rückfrage mit den Artikeln und dem Warenwert. Erst nach „Ja, für Personal buchen" wird gebucht. Der Betrag wird nicht kassiert und zählt nicht zum Umsatz, die Artikel erscheinen aber in der Statistik (Spalte „Personal") und in der CSV-Datei.

## 5. Verwaltung

Oben rechts auf **Verwaltung** (zurück mit **Zur Kasse**). Der Bereich ist getrennt, damit im Betrieb nichts versehentlich verstellt wird.

- **Statistik:** Umsatz, Verkäufe, Artikel gesamt, Personal (Stückzahl und Warenwert), außerdem Mengen nach Kategorie und nach Artikel. „Statistik zurücksetzen" startet ein neues Event.
- **Artikel:** Namen und Preise ändern, Artikel anlegen oder löschen, in eine andere Kategorie verschieben, mit den Pfeilen die Reihenfolge festlegen. Kategorien lassen sich umbenennen, anlegen und (wenn leer) löschen. Preise in Euro, z. B. `2,50`.
- **Sicherung:** siehe unten.

## 6. Datensicherung (bitte nicht auslassen)

Die Daten liegen nur auf dem jeweiligen Gerät. Fällt es aus oder wird es zurückgesetzt, sind sie weg, außer du hast gesichert.

- Verwaltung → **Sicherung** → **Sicherung erstellen**. Es öffnet sich das Teilen-Menü, schicke die Datei an dich selbst (WhatsApp, E-Mail, Cloud-Ordner). Auf Geräten ohne Teilen-Menü wird die Datei heruntergeladen.
- **Wann sichern:** nach jedem Event und in längeren Pausen. Die App erinnert dich nach 15 Buchungen ohne Sicherung.
- **Wiederherstellen** (z. B. auf einem Ersatzgerät): App installieren → Verwaltung → Sicherung → **Datei auswählen** → die zuletzt gesicherte `.json`-Datei. Auch Sicherungen aus der ersten Version (ohne Kategorien) lassen sich einlesen.
- **Für die Abrechnung:** „Buchungen als CSV" erzeugt eine Tabelle, die sich in Excel oder Numbers öffnen lässt.

Tipp für mehrere Geräte: Jedes Gerät führt seine eigene Statistik. Pro Event am besten **ein** Gerät als Kasse verwenden oder am Ende die Zahlen zusammenrechnen.

## 7. Neue Version einspielen

Auf GitHub im Repository: **Add file → Upload files**, alle neuen Dateien hineinziehen (gleiche Namen werden ersetzt) → **Commit changes**. Nach etwa einer Minute ist die Seite aktualisiert, die App holt sich die neue Version beim nächsten Öffnen mit Internet (ggf. einmal komplett schließen und neu öffnen). Bereits gespeicherte Artikel und Buchungen bleiben erhalten und werden automatisch in Kategorien einsortiert. Danach bitte kurz prüfen, ob die Artikel zu den richtigen Kategorien gehören.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | die komplette Kasse |
| `manifest.webmanifest` | Name, Farben und Icons für die Installation |
| `sw.js` | Offline-Modus |
| `abril-fatface.woff2`, `kaushan-script.woff2` | Schriften (frei nutzbar, SIL Open Font License) |
| `mark.png`, `logo.jpg` | Logo-Motiv im Kopf und Vereinslogo in der Verwaltung |
| `icon-*.png`, `apple-touch-icon.png` | App-Symbole |
