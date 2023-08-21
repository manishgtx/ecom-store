const {StatusCodes} = require('http-status-codes')
const Cart = require('../models/cartSchema')
const getCart = (req,res) => {
    res.send('getCart')
}
const addProductToCart = async (req,res) => {
    try {
        const cart = await Cart.findOne({userId:req.user})
        if(!cart){
            const cart = await Cart.create({userId:req.user,cartItems:req.body})
            res.status(200).json(cart)
        } else {
            const check = await Cart.findOne({userId:req.user},{
                cartItems: {
                    $elemMatch: {
                        productId:{ $eq:'64e1b66e3cac846eb202e535'}
                    }
                }
            })
            if(check){
                res.status(StatusCodes.BAD_REQUEST).json({message:'Item Already Present In The Cart'})
            } else {
                const addSingleProduct = await Cart.updateOne({userId:req.user},{
                    "$push": {
                        "cartItems": req.body
                    }
                })
                console.log(addSingleProduct)
                res.status(200).json({message:'Item Added To The Cart'})
            }
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getCart,
    addProductToCart
}