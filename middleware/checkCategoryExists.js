const Category = require('../models/categorySchema')
const checkCategoryExists = async (req,res,next) => {
    const {category} = req.body
    try {
        const result = await Category.findOne({categories: {$in: [category]}})
        if(!result) {
            const updateResult = await Category.updateOne({_id:'64e09b04d636a5256b546dd9'},{
                "$push": {
                    "categories": category
                }
            })
            console.log(updateResult)
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = checkCategoryExists