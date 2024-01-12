import mongoose from "mongoose";
import { SampleOrder } from "../models/sampleOrder.model.js";
import { app } from "../app.js";




app.post("/sampleorder",async (req,res)=>{

   try {

    const orderDetails = req.body
    const order = await SampleOrder(orderDetails)
    order.save()

    res.send(order)

   } catch (error) {
        res.status(400).send(error)
   }



})