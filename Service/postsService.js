import mongoose from "mongoose";

export class PostsService{
    constructor(){
        this.Post = mongoose.model("Post");
        this.User = mongoose.model("User");
        this.Follower = mongoose.model("Followers");
    }


    async getAllPosts(userId){
        // get follow list
        // travel list and fetch post

        const followList = await this.Follower.find({follower: userId});

        let posts = [];

        if(followList){
            for(let i in followList){                
                const post = await this.Post.find({from: followList[i].followee});
                // console.log("id to get post : " + id + " "  + post );
                posts = posts.concat(post);
            }
        }
        console.log("debug check 2 : " + posts);
        return posts;
    }

    async createNewPost(userId, message){
        const post = new this.Post({
            msg:message,
            from:userId,
            time:'time',
            likes:'0',
            comments:'0'
        });

        console.log  ("Create New post Obj -> " + post);
        return await post.save();
    }
}