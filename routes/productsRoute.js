const express = require('express')
const router = express.Router()
const {getProducts,addProduct,updateProduct,getProduct,deleteProduct,getProductsByCategory,uploadImage} = require('../controllers/productsController')
const checkCategoryExists = require('../middleware/checkCategoryExists')
router.route('/products').get(getProducts).post(checkCategoryExists,addProduct)
router.route('/products/:category').get(getProductsByCategory)
router.route('/products/:id').get(getProduct).patch(updateProduct).delete(deleteProduct)
router.route('/uploads').post(uploadImage)

module.exports = router