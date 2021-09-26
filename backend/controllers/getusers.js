const User = require('../models/user.js')
const Errorhandling = require('../utils/errorhandler.js')
const catchasynerrors = require('../utils/catchasynerrors.js')
const sendToken = require('../utils/jwt.js')

exports.registeruser= catchasynerrors( async(req,res,next)=>{

    

                   const { username,email,password,Bio,Interest}= req.body;
           const user= await User.create({ username,email,password,Bio,Interest})
      
           sendToken(user,200,res)
    
         })
        
    
    
         exports.login= catchasynerrors(async (req,res,next)=>{
        const {email,password}= req.body;
    
        // check if email or password stored by users
        if(!email||!password){
         return   next(new Errorhandling('enter email and password', 400))
        }
    
        //finding user in database
        const user= await User.findOne({email}).select('+password')
        if(!user)
        {
            return next(new Errorhandling('enter correct email or password',400))
        }
        //if password if incorrect
        const isPasswordMatched= await user.comparepassword(password)
        if(!isPasswordMatched){
            return next(new Errorhandling('enter correct password',401))
    
        }
        sendToken(user,200,res)
    })
    
    //logout user => /api/v1/logout
    
    exports.logout= catchasynerrors(async (req,res,next)=>{
        res.cookie('token',null,{
            expires:new Date(Date.now()),
            httpOnly:true
        })
        res.send({
            success:true,
            message:'logout'
        })
    })
    
    //get currently logged user details =>/api/v1/me
    
    exports.getUserprofile=catchasynerrors(async (req,res,next)=>{
        const user= await User.findById(req.user.id);
        console.log(user);
        res.status(200).json({
            success:true,
            user
        })
        })

 



// Update user profile   =>   /api/v1/user/:id
exports.updateUserprofile = catchasynerrors(async (req, res, next) => {
  console.log(req.body)
    const user = await User.findByIdAndUpdate(req.params.id, req.body.UserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})

