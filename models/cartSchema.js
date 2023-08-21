const mongoose = require('mongoose')
const CartSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    cartItems:[
        {
            name: {
                type: String,
                required:true
            },
            price: {
                type: Number,
                required:true,
            },
            quantity: {
                type: Number,
                default: 1
            },
            uniqueId: {
                type: mongoose.Schema.Types.ObjectId,
                auth: true
            },
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                required:true
            },
            image: {
                type: String,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model('Cart',CartSchema)