const mongoose=require('mongoose');
const express=require("express");
const register =async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/registers');
        console.log('Connected to MongoDB');
    }
    catch(error)
    {
        console.log(error);
    }   
   
}


module.exports=register;