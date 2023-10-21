const express = require('express');
const router = express.Router();

router.get('/menu', (req, res) => {
    res.render('menu');
});

router.get('/Restaurant_done', (req, res) => {
    res.render('POS_done');
});

router.get('/Restaurant_pay', (req, res) => {
  res.render('POS_pay');
});

router.get('/take_or_dine', (req, res) => {
    res.render('take_or_dine');
});

router.get('/receipt', (req, res) => {
    res.render('receipt');
});

const path = require('path');


module.exports = router;