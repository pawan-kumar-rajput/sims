import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoute from './routes/studentRoute.js'
dotenv.config();
const app=express();
app.use(cors());  
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/sims");
app.use('/students',studentRoute);
app.listen(process.env.PORT,()=>{
    console.log("server started");
});