const express = require('express')
const router = express.Router();

const {isAuthenticatedUser} = require('../utils/authuser.js')
const { registeruser,login, logout,getUserprofile,updateUserprofile } = require('../controllers/getusers.js')

router.post('/user/register',registeruser)
router.post('/user/login',login)
router.get('/user/logout',logout)
router.get('/user/me',isAuthenticatedUser,getUserprofile)


router.put('/user/update/:id',isAuthenticatedUser,updateUserprofile)



module.exports= router