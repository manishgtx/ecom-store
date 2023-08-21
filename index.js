const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2
// Router Imports
const usersRouter = require('./routes/usersRoute')
const productsRouter = require('./routes/productsRoute')
const categoryRouter = require('./routes/cateogryRoute')
const cartRouter = require('./routes/cartRoute')

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})

// Middleware
app.use(cors())
app.use(express.json())
app.use(fileUpload({useTempFiles:true}))

// routes
app.use('/api/v1',[productsRouter,usersRouter,categoryRouter,cartRouter])
app.use((req,res)=> {
    res.status(404).send('Not Found')
})

const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB connected Successfully')
        app.listen(PORT,console.log(`Server is running on Port ${PORT}`))       
    } catch (error) {
        console.log(error)
    }
}

start()