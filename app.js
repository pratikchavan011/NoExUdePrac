const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
    console.log('First Middleware!');
    // next();
    res.send('<h1>User Route Called!</h1>')
})

app.use('/', (req, res, next) => {
    console.log('Second Middleware!');
    res.send('<h1>Root Route Called!</h1>')
})

app.listen(1795);