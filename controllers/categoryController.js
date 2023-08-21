const Category = require('../models/categorySchema')
const {StatusCodes} = require('http-status-codes')
const getCategory = async (req,res) => {
    try {
        const result = await Category.find({})
        res.status(StatusCodes.OK).json(result)
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getCategory
}