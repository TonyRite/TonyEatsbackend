import express, { Request, Response } from "express";
import cors from "cors"
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/myUserRoute";


// connect to mongodb
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(()=>{console.log('Database connected')})
// initialise express 
const app = express();
// convert request to json
app.use(express.json())
app.use(cors())


app.get("/health",async (req:Request,res:Response)=>{
    res.send({message:"Health OK!"});
})

app.use("/api/my/user",myUserRoute)

app.listen(7000, () => {
    console.log("server started on 7000")
})
