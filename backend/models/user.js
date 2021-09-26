const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')





const userSchema =new mongoose.Schema({
          username:{
              type: String,
              required :[true, 'please enter your name'],
              maxlength:[30,'Your name cannot exceed 30 characters']
              
          },
          email:{
            type: String,
            required :[true, 'please enter your email'],
            
            validate:[validator.isEmail,'Please enter valid email address']
          },
          password:{
            type: String,
            required :[true, 'please enter your password'],
            minlength:[6,'Your password must be longer than 6 characters'],
            select: false
                  },
          Bio:{
          type: String,
         required :[true, 'please enter your Bio'],
                
             },
         Interest:{
                type: String,
               required :[true, 'please enter your Interest'],
                      
                   },

        
})

userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }
    this.password= await bcrypt.hash(this.password,10)
    return this;
})

userSchema.methods.comparepassword= async function(enteredpassword){
    return await bcrypt.compare(enteredpassword, this.password)
}

userSchema.methods.getJwttoken= function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRES_TIME
})
}



const User= mongoose.model('Usersdb', userSchema)

module.exports= User