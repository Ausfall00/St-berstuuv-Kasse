# Stöberstuuv Kasse

Einfache Kasse für Vereinsevents: feste Artikel in Kategorien, Rückgeld-Anzeige, Buchung „Für Personal", Statistik, Datensicherung und PIN-Schutz für die Verwaltung. Läuft auf Handy und Tablet (iOS und Android) und funktioniert nach der ersten Installation **ohne Internet**.

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

Hinweis: Öffentlich ist nur die App selbst (mit Beispielartikeln und eurem Logo). Deine Verkaufsdaten und die PIN bleiben ausschließlich auf den Geräten.

## 2. Auf dem Gerät installieren

**iPhone / iPad (Safari):** Adresse öffnen → Teilen-Symbol → **Zum Home-Bildschirm** → Hinzufügen.

**Android (Chrome):** Adresse öffnen → Menü (drei Punkte) → **App installieren** (oder „Zum Startbildschirm hinzufügen").

Wichtig:
- **Danach immer über das Icon auf dem Startbildschirm öffnen**, nicht mehr im Browser. Auf dem iPhone hat die installierte App einen eigenen Speicher, getrennt von Safari.
- Einmal mit Internet öffnen und kurz warten, damit sich die App für den Offline-Betrieb selbst ablegt. Danach ist kein Netz mehr nötig (auch nicht auf dem Sportplatz).

## 3. Einrichtung durch die Verantwortliche / den Verantwortlichen (einmalig pro Gerät)

1. **Verwaltung → Zugang → PIN festlegen.** 4 Ziffern, zweimal eingeben. Die PIN an einem sicheren Ort notieren.
2. **Verwaltung → Zugang → „Wer hilft bei Problemen?"**: Name und Telefonnummer eintragen. Der Text erscheint für alle Helfer im Hilfe-Fenster (Knopf „?" oben).
3. **Verwaltung → Artikel**: Kategorien, Artikel und Preise anpassen.
4. **Verwaltung → Sicherung → Artikel und Preise speichern**: legt eine kleine Datei mit Sortiment und Preisen an (ohne Buchungen). Damit lässt sich das Sortiment auf weiteren Geräten laden (siehe Abschnitt 6).

## 4. Kassieren (für Helfer)

Im Hilfe-Fenster („?" oben) steht dieselbe Kurzanleitung.

- Oben die Kategorie wählen (Essen, Trinken, Kaffee & Kuchen). Die orange Zahl am Reiter zeigt, wie viele Artikel aus dieser Kategorie schon in der Bestellung sind.
- Auf einen Artikel tippen, um ihn hinzuzufügen. Die Zahl auf dem Artikel zeigt die Menge.
- **Handy:** Unten erscheint die Leiste „Kassieren". Darin das gegebene Geld eintippen (oder Passend / 5 € / 10 € …). Das Rückgeld steht groß darunter.
- **Tablet:** Die Bestellung steht dauerhaft rechts neben den Artikeln.
- **Für Personal:** In der Bestellung „Für Personal" tippen und bestätigen. Es wird nichts kassiert, die Artikel zählen aber in der Statistik (Spalte „Personal") mit.
- Falsch gebucht? „Letzte Buchung zurücknehmen" macht die letzte Buchung rückgängig.

## 5. Verwaltung (mit PIN)

Oben rechts auf **Verwaltung** (zurück mit **Zur Kasse**). Sobald eine PIN gesetzt ist, wird sie beim Öffnen abgefragt. Die Verwaltung sperrt sich wieder, wenn man sie verlässt oder die App länger als eine Minute im Hintergrund war. Die Kasse selbst ist immer ohne PIN benutzbar.

- **Statistik:** Umsatz, Verkäufe, Artikel gesamt, Personal (Stückzahl und Warenwert), außerdem Mengen nach Kategorie und nach Artikel. „Neues Event starten" erstellt zuerst eine Sicherung und löscht dann Buchungen und Statistik. Artikel und Preise bleiben.
- **Artikel:** Namen und Preise ändern, Artikel anlegen oder löschen, in eine andere Kategorie verschieben, mit den Pfeilen die Reihenfolge festlegen. Kategorien umbenennen, anlegen und (wenn leer) löschen. Änderungen werden sofort auf dem Gerät gespeichert. Preise in Euro, z. B. `2,50`.
- **Sicherung:** siehe unten.
- **Zugang:** PIN ändern oder entfernen, Kontaktzeile für das Hilfe-Fenster.

Die PIN schützt vor versehentlichen Änderungen und neugierigen Fingern. Sie ist kein Schutz gegen gezielte Angriffe.

### PIN vergessen

Die Kasse funktioniert weiter, nur die Verwaltung bleibt zu. Vorgehen:
1. Mit „PIN vergessen?" im PIN-Fenster eine Sicherung erstellen und an dich selbst schicken (geht ohne PIN).
2. App vom Startbildschirm löschen und neu installieren (Abschnitt 2). Dadurch verschwinden die Daten auf diesem Gerät.
3. Verwaltung → Sicherung → Sicherung einlesen, danach eine neue PIN festlegen. Die PIN ist bewusst nicht Teil der Sicherung.

## 6. Datensicherung (bitte nicht auslassen)

Die Daten liegen nur auf dem jeweiligen Gerät. Fällt es aus oder wird es zurückgesetzt, sind sie weg, außer du hast gesichert.

- **Alles sichern:** Verwaltung → Sicherung → Sicherung erstellen. Es öffnet sich das Teilen-Menü, schicke die Datei an dich selbst (WhatsApp, E-Mail, Cloud-Ordner). Auf Geräten ohne Teilen-Menü wird die Datei heruntergeladen. Die Datei enthält Artikel, Preise und alle Buchungen.
- **Wann sichern:** nach jedem Event und in längeren Pausen. Die App erinnert nicht automatisch daran. „Neues Event starten" sichert aber immer zuerst.
- **Wiederherstellen** (z. B. auf einem Ersatzgerät): App installieren → Verwaltung → Sicherung → **Datei auswählen**. Auch Sicherungen aus älteren Versionen lassen sich einlesen.
- **Artikel und Preise:** „Artikel und Preise speichern" legt eine Datei nur mit dem Sortiment an, „… laden" spielt sie auf einem anderen Gerät ein. Buchungen bleiben dabei unberührt.
- **Abrechnung:** „Abrechnung als Tabelle (CSV)" erzeugt eine einfache Tabelle für Excel oder Numbers: pro Artikel Kategorie, verkaufte Menge, davon Personal und Umsatz, unten eine Gesamtzeile. Personal-Artikel zählen bei der Menge mit, aber nicht beim Umsatz.

Tipp für mehrere Geräte: Jedes Gerät führt seine eigene Statistik. Pro Event am besten **ein** Gerät als Kasse verwenden oder am Ende die Zahlen zusammenrechnen.

### Optional: Sortiment für neue Geräte automatisch bereitstellen

Benenne die Datei aus „Artikel und Preise speichern" in `sortiment.json` um und lade sie wie in Abschnitt 1 (Schritt 4) in dein GitHub-Repository hoch. Jedes Gerät, das die App zum ersten Mal öffnet und noch keine eigenen Daten hat, übernimmt dann automatisch dieses Sortiment. Auf Geräten mit vorhandenen Daten ändert sich nichts. Nach Preisänderungen die Datei erneut hochladen.

## 7. Neue Version einspielen

Auf GitHub im Repository: **Add file → Upload files**, alle neuen Dateien hineinziehen (gleiche Namen werden ersetzt) → **Commit changes**. Nach etwa einer Minute ist die Seite aktualisiert, die App holt sich die neue Version beim nächsten Öffnen mit Internet (ggf. einmal komplett schließen und neu öffnen). Gespeicherte Artikel, Preise, Buchungen und die PIN bleiben erhalten.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | die komplette Kasse |
| `manifest.webmanifest` | Name, Farben und Icons für die Installation |
| `sw.js` | Offline-Modus |
| `abril-fatface.woff2`, `kaushan-script.woff2` | Schriften (frei nutzbar, SIL Open Font License) |
| `mark.png`, `logo.jpg` | Logo-Motiv im Kopf und Vereinslogo in der Verwaltung |
| `icon-*.png`, `apple-touch-icon.png` | App-Symbole |
| `sortiment.json` (optional, selbst erstellt) | Sortiment für neue Geräte |
