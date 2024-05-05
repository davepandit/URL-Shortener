import mongoose from "mongoose";
const urlSchema = new mongoose.Schema({
    shortID:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true
    },
    visitHistory:[
        {timestamp:{type:Number}}
    ]
},
{
    timestamps:true
})

//exporting the model
export const URL = mongoose.model("url" , urlSchema)