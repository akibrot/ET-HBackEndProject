import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import mongoose from 'mongoose'
dotenv.config();
const port =process.env.PORT

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.static("./public"))
mongoose.connect(process.env.MONGODBURL,()=>{
  console.log('database connected')
});

app.listen(port , () => {
  console.log(`server started successfully ${port}`);
});
app.use(router);
