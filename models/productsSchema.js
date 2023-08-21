const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    description: {
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    quantitiy:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required: true,
    },
    category: {
        type:String,
        requred:true
    },
    attributes: mongoose.Schema.Types.Object

})

module.exports = mongoose.model('Products',ProductSchema)