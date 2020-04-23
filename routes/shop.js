const path = require('path');

const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products')

router.get('/', productsController.getProducts);

router.get('/products');

router.get('/cart');

router.get('checkout');

module.exports = router;