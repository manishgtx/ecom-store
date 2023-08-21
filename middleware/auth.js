const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')
const authenticationMiddleware = async (req,res,next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(StatusCodes.UNAUTHORIZED).send('No token provided')
        return
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded.id
        next()
    } catch (error) {
        res.status(StatusCodes.UNAUTHORIZED).send('Authentication Failed')
    }
}

module.exports = {
    authenticationMiddleware
}