const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectToDB =()=>{
mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("connectec to db"))
    .catch((error) => console.log(error.message));
}
module.exports=connectToDB;