// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
      //add listen for error here too
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!!:", err);
  });

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants"
import express from "express";
const app= express()

// function connectDB(){}
// connectDB()

//()()iffy function //;for cleaning 
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("Error:",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is running in port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("Error:",error);
        throw error;
    }
})() 

*/
