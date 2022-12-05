# Ein fast einfacher Server in Express.js

Mit diesem Projekt kannst du üben, Middleware für Anfragen in Express.js zu schreiben

## Was du tun wirst

Mit diesem Projekt kannst du üben, wie man:

> Express.js

verwendet.

Dieses Projekt setzt voraus, dass du bereits Erfahrung hast mit:

> JavaScript-APIs (Math, Date)

## Aufgaben

## Aufgabe 1 - Vorbereitung

1. Installiere das express.js npm-Paket `npm i express`.
2. Erstelle eine Datei für deinen Server (`server.js`)

# Aufgabe 2 - Einrichten deines Servers

Verwende das Snippet **Startercode**, um deine Datei `server.js` zu initialisieren

# Aufgabe 3 - Füge eine GET-Anfrage zu '/hello' hinzu

Benutze das Snippet **GET request middleware**, um eine Middleware zu schreiben, die auf den Pfad `/hello` reagiert

Diese Middleware sollte eine `response` mit einer Nachricht mit Grüßen zurückgeben.

# Aufgabe 4 - Füge eine GET-Anfrage zu '/time' hinzu

Benutze das Snippet **GET request middleware**, um eine Middleware zu schreiben, die auf den Pfad `/time` antwortet

Diese Middleware sollte eine `response` mit der aktuellen Uhrzeit und dem Datum im [ISO-Format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) zurückgeben (`2011-10-05T14:48:00.000Z`)

> Forschung:
>
> [Date Object [en]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
>
> [Datumsobjekt [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date)

# Aufgabe 5 - Füge eine GET-Anfrage zu '/random' hinzu

Benutze das Snippet **GET request middleware**, um eine Middleware zu schreiben, die auf den Pfad `/random` reagiert

Diese Middleware sollte eine `response` mit der Zufallszahl zurückgeben

> Forschung:
>
> [Math.random() [de]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
>
> [Math.random() [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

# Aufgabe 6 - Füge eine GET-Anfrage zu '/isNumber' hinzu

Schreibe mithilfe des Snippets **GET request middleware with parameters** eine Middleware, die auf den Pfad `/isNumber` antwortet

> Tipp: Parameter können einem Pfad mit dem Symbol `:` hinzugefügt werden. Um zum Beispiel den Parameter `name` hinzuzufügen, schreibst du `/:name/`.

Diese Middleware sollte einen Parameter "value" erhalten.

Diese Middleware sollte prüfen, ob der Parameter "value" in eine Zahl umgewandelt werden kann.

Wenn er in eine Zahl umgewandelt werden kann, sendet sie eine "response" mit der Nachricht:
> "Dies ist eine Zahl"

Wenn er nicht in eine Zahl umgewandelt werden kann, schicke eine Antwort mit der Meldung:
> "Dies ist keine Zahl"

> Tipp: Du kannst sowohl die Math-Funktion `Number()` als auch die Funktion `istNaN()` verwenden, um zu sehen, ob der Wert in eine Zahl umgewandelt werden kann oder nicht

> Recherche:
>
> [Number() [english]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
>
> [Zahl() [deutsch]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
>
> [isNaN() [englisch]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
>
> [isNaN() [deutsch]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

[//]: # (autograding info start)
## Ergebnisse
  [![Ergebnisabzeichen](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/BE-Express-Almost-Simple-Server/actions)
  
  [Ergebnisdetails](https://github.com/DigitalCareerInstitute/BE-Express-Almost-Simple-Server/actions)
  
  ### Debugging deines Codes
  > [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
  #### 1. Tests lokal ausführen
  - Führe `npm install` aus
  - Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.
  
  #### 2. Überprüfen der Testausgabe auf GitHub
  - Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/BE-Express-Almost-Simple-Server/actions)
  - Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
  - Klicke auf "Autograding".
  - Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
  - Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
