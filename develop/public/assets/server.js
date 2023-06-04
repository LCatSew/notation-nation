const express = require('express');

const path = require('path');

const app = express();

const PORT = 3001;

//HTML ROUTES//

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/develop/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/develop/public/notes.html')));