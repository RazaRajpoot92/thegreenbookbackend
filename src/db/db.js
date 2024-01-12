import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try{

    const connectInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Database connected successfully!! Host:",
        connectInstance.connection.host)
    }
    catch(error){
        console.log("Database connection Failed: Error: ", error)
        process.exit(1)
    }
}

export default connectDB