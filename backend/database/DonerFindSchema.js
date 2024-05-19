const mongoose=require('mongoose');
const FindDonerSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Phoneno:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        requrie:true
    },
    Address:{
        type:String,
        reauire:true
    },
    State:{
        type:String,
        required:true
    },
    District:{
        type:String,
        required:true
    },
    BloodGroup:{
        type:String,
        required:true
    }

})
const DonerFindSchema=mongoose.model('DonerFindSchema',FindDonerSchema);
module.exports=DonerFindSchema;