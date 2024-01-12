import {Schema,model} from "mongoose";

const sampleOrderSchema = new Schema({

    name:{
        type:String,
        required:true,
    },

    contactNo:{
        type:Number,
        required:true,
    },

    email:{
        type:String,
        required:true,
        lowercase:true,
    },

    noOfCopies:{
        type:Number,
        required:true,
        default:1
    },

    postalAdress:{
        type:String,
        required:true,
    },

    message:{
        type:String,

    }

},{timestamps:true})

export const SampleOrder = model("SampleOrder",sampleOrderSchema)