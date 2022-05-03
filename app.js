const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>The "Add Product" page!</h1>');
})

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello From Express!</h1>');
})

app.listen(1795);
