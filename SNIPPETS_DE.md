# Schnipsel

Kleine Codestücke, die dir bei dieser Aufgabe helfen

##### starter code
```javascript
const express = require('express');
const app = express();

const server = app.listen(3001, () => {
   console.log("Der Server hört zu... 🐒")
});

module.exports = server;
```

##### GET-Anfrage Middleware
```javascript
// ersetze "/" durch deinen eigenen Pfad
app.get('/pfad', (request, response) => {
});
```

##### GET-Anfrage Middleware mit Parametern
```javascript
// ersetze "/path" durch deinen eigenen Pfad
// ersetze ":param1" mit deinem eigenen param
// füge so viele Parameter hinzu, wie du brauchst
app.get('/pfad/:param1', (request, response) => {
    const params = request.params;
});
```
