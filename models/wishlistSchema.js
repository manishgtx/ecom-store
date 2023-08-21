const mongoose = require('mongoose')

const WishlistSchema = new mongoose({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('Wishlist',WishlistSchema)