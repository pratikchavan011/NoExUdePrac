const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'view', 'home.html'));
});

app.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'view', 'users.html'));
});

app.get("*", (req, res, next) => {
    res.status(404).send('<h1>404 Page Not Found!</h1>');
})

app.listen(1795);