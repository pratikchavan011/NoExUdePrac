const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('In another middleware');
    // res.send('<h1>Hello From Express!</h1>');
    // res.sendFile(path.resolve(__dirname, '../views/shop.html'));
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

module.exports = router