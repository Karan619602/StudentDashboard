const Courses = require("../models/course.js")
const Errorhandling = require('../utils/errorhandler.js')
const catchasynerrors = require('../utils/catchasynerrors.js')


exports.createcourse=catchasynerrors(async (req,res,next)=>{
    const {companyname,title,instructor,description,coursetiming,price}=req.body
    const course= new Courses({
        companyname,
        title,
        instructor,
        description,
        images:{
            url:req.file.path,
            filename:req.file.filename
        },
        coursetiming,
        price
    })
    await course.save()
    res.send(course);
})

exports.getcourses=catchasynerrors(async (req,res,next)=>{
   
    const course= await Courses.find()
     
    res.send(course);
})
exports.getcourse=catchasynerrors(async (req,res,next)=>{
   
    const course= await Courses.findById(req.params.id)
     
    res.send(course);
})


