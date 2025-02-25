const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require('./routes/todoRoutes');
const dotenv = require("dotenv");
const connectToDB = require("./config/db");
dotenv.config();
 const app = express();
 app.use(express.json());
const PORT=process.env.PORT; 
app.use('/api', todoRoutes);
 //start server
 //app.listen(PORT,()=>{
    //console.log(`server running on ${PORT}`)
connectToDB();
   //});
module.exports=app;