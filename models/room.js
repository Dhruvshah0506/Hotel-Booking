const mongoose = require("mongoose");

const roomSchema=mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    rentperday:{
        type:Number,
        required:true
    },
    imageurls:[],

    currentbookings:[],
    type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
},
{
    timestamps:true,
})

const roomModel=mongoose.model('mearn_rooms',roomSchema)
module.exports=roomModel