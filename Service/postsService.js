import mongoose from "mongoose";

export class PostsService{
    constructor(){
        this.Post = mongoose.model("Post");
        this.User = mongoose.model("User");
    }

    async getAllPosts(){
        
        return await this.Post.find({}).populate("by","_id firstName lastName email");
    }

    async createNewPost({userId}, message){
        const post = new this.Post({
            msg:message,
            by:userId
        });

        console.log  ("Create New post Obj -> " + post);
        return await post.save();
    }
}