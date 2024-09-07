const mongoose=require('mongoose');

const usersSchema= new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String
});

module.exports=mongoose.model("users",usersSchema)