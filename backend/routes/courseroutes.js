const express = require('express')
const router = express.Router();
const multer= require('multer')
const {storage}=require('../cloudinary/cloud.js')
const upload = multer({ storage });

const {isAuthenticatedUser} = require('../utils/authuser.js')
const { createcourse,getcourse,getcourses }  = require('../controllers/course.js');

router.post('/course/new',upload.single("image"),createcourse)

router.get('/course/:id',getcourse)
router.get('/courses',getcourses)


module.exports=  router;