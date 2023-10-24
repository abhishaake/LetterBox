import mongoose from "mongoose";

export class CommonService{
    constructor(){
        this.Post = mongoose.model("Post");
        this.User = mongoose.model("User");
        this.Follower = mongoose.model("Followers");
    }

    async getAllFeed({userId}){
        
        // get user data
        const user = this.User.findOne({_id:userID});

        // get people that user follows
        const posts = [];
        if(user){
            const follows = this.Follower.find({follower:user._id});

            // get posts of these people
            if(follows){
                for(let i in follows){
                    posts = [...posts,this.Post.find({from:follows[i].followee})];
                }
            }
        }
        
        // get notification of user
            // TODO

        const result = {
            user : user,
            post : posts,
            notification : ''
        };

        return result;
        // return await this.Post.find({}).populate("by","_id firstName lastName email");
    }

}