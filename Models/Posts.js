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
            type: Number,
            required: true
        },
        comments:{
            type: Number,
            required: true
        }
    })

    mongoose.model("Post",postSchema);
    console.log("Post Schema created");
}

export default createPostSchema;