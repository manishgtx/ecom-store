const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')
const Product = require('../models/productsSchema')
const path = require('path')
const cloudinary = require('cloudinary').v2
const getProducts = async (req,res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
        
    } catch (error) {
        console.log(error)
    }
}

const addProduct = async (req,res) => {
    console.log(req.body)
    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({message:'Your Product has been added successfully',product})
}

const updateProduct = async (req,res) => {
    try {
        const {id} = req.params
        const product = await Product.findOneAndUpdate({_id:id},req.body,{new: true,runValidators: true})
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
    }
}

const getProduct = (req,res) => {
    res.send('get Product')
}

const deleteProduct = (req,res) => {
    res.send('Delete Product')
}

const getProductsByCategory = async (req,res) => {
    const products = await Product.find({category:req.params.category})
    res.send(products)
}
const uploadImage = async(req,res) => {
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath,{
        use_filename:true,
        folder: 'ecom'
    })
    res.status(StatusCodes.CREATED).json(result)
}

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    getProduct,
    deleteProduct,
    getProductsByCategory,
    uploadImage
}