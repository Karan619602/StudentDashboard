const express = require('express')
const app=express();
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser())
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/.env' })
// database config
    mongoose.connect(process.env.CONNECTION_URL,{
         useNewUrlParser: true, 
         useUnifiedTopology: true,
         useFindAndModify:false,
         useCreateIndex:true
     }).then( (con)=>{
 console.log(`connect to database : ${con.connection.host}`);
     })

   

     const user = require('./routes/userroutes.js')
     const blog = require('./routes/courseroutes.js')
    app.use('/api/v1',user)
    app.use('/api/v1',blog)
 

    if (process.env.NODE_ENV === 'PRODUCTION') {
        app.use(express.static(path.join(__dirname, '../frontend/build')))
    
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
        })
    }

const port=process.env.PORT||4000

app.listen(port,(err)=>{
   
        console.log(`server started on port:${port}`);
    

})