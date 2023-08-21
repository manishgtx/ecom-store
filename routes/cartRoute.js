const express = require('express')
const router = express.Router()
const {getCart,addProductToCart} = require('../controllers/cartController')
const {authenticationMiddleware} = require('../middleware/auth')
router.route('/cart').post(authenticationMiddleware,addProductToCart)

module.exports = router