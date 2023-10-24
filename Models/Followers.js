import mongoose from "mongoose";

function createFollowersSchema(){

        const followerSchema =  new mongoose.Schema({
            follower:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            followee:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        });

        mongoose.model("Followers",followerSchema);
        console.log("Followers Schema created");
}

export default createFollowersSchema;