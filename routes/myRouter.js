const express = require('express');
const router = express.Router();
const Product = require('../models/products');

router.get('/menu', async (req, res) => {
    Product.find({}).then((products) => {
        res.render('menu', { products: products })
    }).catch(err => {console.log(err);});
});

router.get('/Restaurant_done', (req, res) => {
    res.render('POS_done');
});

router.get('/Restaurant_pay', (req, res) => {
  res.render('POS_pay');
});

router.get('/', (req, res) => {
    res.render('take_or_dine');
});

router.get('/receipt', (req, res) => {
    res.render('receipt');
});

const path = require('path');


module.exports = router;