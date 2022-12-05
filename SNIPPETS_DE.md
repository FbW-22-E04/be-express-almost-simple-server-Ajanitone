# Schnipsel

Kleine Codestücke, die dir bei dieser Aufgabe helfen.

##### starter code
```javascript
import express from 'express';

const app = express();

const server = app.listen(3001, () => {
   console.log("Der Server hört zu... 🐒")
});

module.exports = server;
```

##### GET-Anfrage
```javascript
// Ersetze "/path" durch deinen eigenen Pfad
app.get('/pfad', (request, response) => {
});
```
