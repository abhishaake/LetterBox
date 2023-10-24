import {ApolloServer} from "apollo-server";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core";
import schema from "../Schema/schema.js";
import getResolvers from "../Resolvers/resolvers.js";
import jwt from "jsonwebtoken";
import config from "../Config/config.js";

function server(){
    const typeDefs = schema();
    const resolvers = getResolvers();

    const server =  new ApolloServer({
        typeDefs,
        resolvers,
        context:({req})=>{
            const { authorization } = req.headers;
            if(authorization){  
                try{ 
                    const {userId} = jwt.verify(authorization,config.JWT_SECRET);
                    return {userId};
                }
                catch(e){
                    console.log("ERROR : "  + e);
                    return {};
                }
            }
        },
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
    })

    server.listen().then(({url})=>  {
        console.log("server at: " + url);
    })
    console.log("Server started...");
}

export default server;