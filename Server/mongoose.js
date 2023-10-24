import config from "../Config/config.js";
import mongoose from "mongoose";

const mongooseConnect = async () =>{

        return new Promise((resolve) =>{
            mongoose.connect(config.MONGO_DB_URL,{
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        
            mongoose.connection.on('connected',()=>{
                console.log("Connected with mongoose to mongoDb");
                resolve("...");
            });
        
            mongoose.connection.on('error',()=>{
                console.log("Failed Connection with mongoose to mongoDb");
                resolve("...");
            });
            
        })
}

export default mongooseConnect;