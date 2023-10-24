import mongoose from "mongoose";

function createUserSchema(){

        const userSchema =  new mongoose.Schema({
            firstName:{
                type: String,
                required: true
            },
            lastName:{
                type: String,
                required: true
            },
            email:{
                type: String,
                required: true
            },
            pic:{
                type: String,
                required: false
            },
            password:{
                type: String,
                required: true
            }
        });

        mongoose.model("User",userSchema);
        console.log("User Schema created");
}

export default createUserSchema;