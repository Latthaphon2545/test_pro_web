const express = require('express');
const router = express.Router();

router.get('/menu', (req, res) => {
    const products = [
        {
          id: 1,
          img: 'images/Thai-Omelette-HP-191008.jpg',
          name: 'Omelet',
          price: 50,
          type: 'fry',
          AddOn: ['Egg', 'Onion', 'Tomato', 'Chili', 'Salt', 'Pepper', 'Rice']
        },
        {
          id: 2,
          img: 'images/fried-chicken.jpg',
          name: 'Fried Chicken',
          price: 60,
          type: 'fry',
          AddOn: ['Chicken', 'Salt', 'Pepper', 'Oil']
        },
        {
          id: 3,
          img: 'images/stir-fry-with-curry.jpg',
          name: 'Stir fry with curry',
          price: 70,
          type: 'stir-fry',
          AddOn: ['Chicken', 'Salt', 'Pepper', 'Oil', 'Curry']
        }
      ];
    res.render('menu', {products: products});
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