
import mongoose from "mongoose";
import { UserService } from "../Service/userService.js"
import { PostsService } from "../Service/postsService.js"

function getResolvers(){

    const userService = new UserService();
    const postsService = new PostsService();
    const User = mongoose.model("User");
    const Post = mongoose.model("Post");

    const resolver = {
        Query:{

            getUsers:()=>{
                return userService.getAllUser();
            },
            getLoggedInUser:()=>{},
            getUserById:(_,{_id})=>{},

            getAllPosts: (_,{userId})=>{
                return postsService.getAllPosts(userId);
            },
            getUserPosts:(_,{userId})=>{},
            getPostById:(_,{postId})=>{},

            getAllComments:(_,{postId})=>{},

            getFollowers:(_,{userId})=>{
                return userService.getAllFollows();
            },

            getNotifications:(_,{userId})=>{},
                
            login:(_,{email,password})=>{},

            getAllFeed:(_,{userId})=>{},
            getUserFeed:(_,{userId})=>{},
            getPostFeed:(_,{postId})=>{},

            
        },
        Mutation:{

            addUser:(_,{input})=>{
                return userService.createNewUser(input);
            },
            modifyUser:(_,{input})=>{},
            deleteUser:(_,{userId})=>{},

            addPost:(_,{msg,userId})=>{
                return postsService.createNewPost(userId,msg);
            },
            modifyPost:(_,{postId,param,inc})=>{},
            deletePost:(_,{postId})=>{},

            addComment:(_,{msg,postId})=>{},
                
            addFollower:(_,{userId,followeeId})=>{
                return userService.addNewFollower(userId,followeeId);
            },
            removeFollower:(_,{followeeId,fID})=>{
                return userService.removeFollower(fID);
            },

        }
    }

    return resolver;
}

export default getResolvers;