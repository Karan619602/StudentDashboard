const User = require('../models/user.js')
const Errorhandling = require('../utils/errorhandler.js')
const catchasynerrors = require('../utils/catchasynerrors.js')
const jwt = require('jsonwebtoken')


exports.isAuthenticatedUser= catchasynerrors( async (req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
      return   next(new Errorhandling('user not verify',401))
    }

    const decoded= jwt.verify(token,process.env.JWT_SECRET)
    req.user= await User.findById(decoded.id)
    next()
})
