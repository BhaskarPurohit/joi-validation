const mongoose = require('mongoose')
const Joi = require('joi')


mongoose.connect("mongodb://127.0.0.1:27017/joitestdb")

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        minLength:3
    },
    name:String,
    age:{
        type:Number,
        minValue:18,
        required:true
    },
    contact:{
        type:Number,
        required:true,


    },
    email:String
})


function modelValidator(data){
   let schema =  Joi.object({
        username:Joi.string().min(3).required(),
        name:Joi.string().required(),
        age:Joi.number().min(18).required(),
        contact:Joi.number().required(),
        email:Joi.string().email().required()
    })

    let {error} = schema.validate(data)
    return error
}

let userModel = mongoose.model('user',userSchema)


module.exports = {modelValidator, userModel}
