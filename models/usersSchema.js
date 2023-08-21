const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email:{type:String,unique:true,lowercase:true},
    password:{type:String,minlength:8}
})

module.exports = mongoose.model('Users',UserSchema)