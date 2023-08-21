const jwt = require('jsonwebtoken')
const User = require('../models/usersSchema')
const {StatusCodes} = require('http-status-codes')
const signUp = async (req,res) => {
    const {email,password} = req.body
    console.log(req.body)
    try {
        if(!email || !password){
            res.status(StatusCodes.BAD_REQUEST).send('Please Provide email & password')
            return
        }
        const user = await User.create({email,password})
        res.status(StatusCodes.CREATED).send({success:true,message:'User is created Successfully.'})
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send(error)
    }
}

const signIn = async (req,res) => {
    const {email,password} = req.body
    try {
        if(!email || !password) {
            res.status(StatusCodes.BAD_REQUEST).send('Please Provide email & Password')
            return
        }
        const user = await User.findOne({email})
        if(user.password === password) {
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'30d'})
            res.status(200).json({token})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    signUp,
    signIn
}