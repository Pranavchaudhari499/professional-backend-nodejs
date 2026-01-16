import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import express from "express"
import { app } from "./app.js";

// const app = express();


dotenv.config();

connectDB()

.then(() => {

    app.on("error",(error) => {
        console.log("ERRR:",error);
        throw error
    })
    
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection error",err);
})









/*
import mongoose from "mongoose";
import { DB_NAME } from "./constans";

import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERR",error);
            throw error;
        })

        app.listen(process.env.PORT,() => {
            console.log(`Application is listning on ${Process.env.PORT}`)
        })

    } catch (error){
        console.error("ERR",error);
        throw error;
    }
})()
*/