import mongoose,{Schema} from "mongoose";


const bookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    pdfUrl:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true
    }
},{timestamps:true})


export const Book = mongoose.model("Book",bookSchema)