import mongoose from "mongoose";


function createCommentSchema(){
    const commentSchema = new mongoose.Schema({
        from:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        msg:{
            type: String,
            required: true
        },
        post:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        },
        time:{
            type: String,
            required: true
        }
    })

    mongoose.model("Comment",commentSchema);
    console.log("Comment Schema created");
}

export default createCommentSchema;