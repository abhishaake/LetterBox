import mongoose from "mongoose";


function createPostSchema(){
    const postSchema = new mongoose.Schema({
        from:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        msg:{
            type: String,
            required: true
        },
        time:{
            type: String,
            required: true
        },
        likes:{
            type: String,
            required: true
        },
        comments:{
            type: String,
            required: true
        }
    })

    mongoose.model("Post",postSchema);
    console.log("Post Schema created");
}

export default createPostSchema;