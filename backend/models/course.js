const mongoose = require('mongoose')

const blogschema=new mongoose.Schema({
    companyname:{
        type:String
    },
    title:{
        type:String,
        required: [true,"enter the title "]
    },
    instructor:{
        type:String
    },
    description:{
      type:String,
      required: [true,"enter the description "]
  },
  images:[
      {
          url:{
              type:String,
              required:true
          },
          filename:{
              type:String,
              required:true
          }
      }
  ],
  coursetiming:{
      type:String,
      required:true
  },
 price:{
     type:String,
     required:true
 },
    //   user:{
    //       type: mongoose.Schema.ObjectId,
    //       ref:'User',
    //       required:true
    //              },
      createdAt:{
          type:Date,
          Default:Date.now
      }
      
    })

    const Courses= mongoose.model('Courses',blogschema)
    module.exports= Courses;
  