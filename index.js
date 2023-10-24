
// import {query} from "graphql";
import mongooseConnect from "./Server/mongoose.js";
import Index from "./Models/index.js";
import resolvers from "./Resolvers/resolvers.js";
import server from "./Server/server.js";
// 

const startApp = async () =>{
    // Connection set up to mongo db
   const check= await mongooseConnect();
    console.log(check);
    // Create Schema
    Index();

    // Create Resolvers
    resolvers();

    // Start Server
    server();
}

startApp();
