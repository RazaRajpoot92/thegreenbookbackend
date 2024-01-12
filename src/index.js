import dotenv  from "dotenv"
import connectDB from "./db/db.js"
import { app } from "./app.js"

dotenv.config()


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`app is listening on PORT ${process.env.PORT}`)
    })
})
.catch(error=>{
    console.log("Database connection failed! Error: ",error)
})