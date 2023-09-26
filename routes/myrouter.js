const express = require('express');
const router = express.Router();

// use mongoose
const Product = require('../models/products');


router.get('/take_or_dine', (req, res) => {
    res.render('take_or_dine.ejs',{products: products});
});

router.get('/menu', (req, res) => {
    Product.find().exec((err, doc) => {
        if(err) throw err;
        res.render('menu.ejs',{products: doc});
    });
});

const path = require('path');


module.exports = router;