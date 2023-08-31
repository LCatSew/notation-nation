const express = require('express');
const path = require('path');
const dbData = require('/develop/db/db.json');
const app = express();

const PORT = 3001;

//HTML ROUTES//
app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'develop/public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'develop/public/notes.html')));

//API ROUTES//
app.get('/api/notes', (req, res) => res.json(dbData));

app.listen(PORT, () => 
    console.log(`Example app listening at http://localhost:${PORT}`)
);