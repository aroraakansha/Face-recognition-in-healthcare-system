const mongoose=require("mongoose");
const AmbulanceSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    }

})
//now we need to create collection

const AmbulanceRegister =mongoose.model("Ambulance",AmbulanceSchema);
module.exports=AmbulanceRegister;