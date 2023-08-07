import mongoose from "mongoose";
import { exit } from "process";

export default async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!, {connectTimeoutMS: 5000});
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log("MongoDB connected successfully");
        })

        connection.on("error", (err)=>{
            console.log("MongoDB connection error. Make sure mongodb is running.",err);
            process.exit();
        })
    } catch (error:any) {
        console.log("something goes wrong");
        console.log(error)
    }
}