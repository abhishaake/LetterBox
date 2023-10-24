
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

            getUsers:()=>{},
            getLoggedInUser:()=>{},
            getUserById:(_,{_id})=>{},

            getAllPosts:(_,{userId})=>{},
            getUserPosts:(_,{userId})=>{},
            getPostById:(_,{postId})=>{},

            getAllComments:(_,{postId})=>{},

            getFollowers:(_,{userId})=>{},

            getNotifications:(_,{userId})=>{},
                
            login:(_,{email,password})=>{},

            getAllFeed:(_,{userId})=>{},
            getUserFeed:(_,{userId})=>{},
            getPostFeed:(_,{postId})=>{},

            users:async ()=>{
                return userService.getAllUser();
            },
            msg:async ()=>{
                // return postsService.getAllPosts();
                return await Post.find({}).populate("by","_id firstName lastName email");
            },
            msgByUser:async (_,{_id})=>{
                // return postsService.getAllPosts();
                return await Post.find({by:_id}).populate("by","_id firstName lastName email");
            },
            userByEmail:async(_,{email})=>{
                return userService.getUserByEmail({email});
            },
            userById:async(_,{_id})=>{
                return userService.getUserById({_id});
            },
            loggedInUser:async(_,{},{userId})=>{
                return userService.getLoggedInUser({userId});
            },
            login:(_,{email,password})=>{
                return userService.login(email,password);
            }
        },
        User:{
            msg:(user)=>{
                return msgs.filter(msg=>msg.by==user.id);
            }
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
                
            addFollower:(_,{followeeId})=>{},
            removeFollower:(_,{followeeId})=>{},

            user: async (_, {newUser})=>{
                return userService.createNewUser(newUser);
            },
            msg:(_,{str},{userId})=>{
                if(!userId) return "Login First";
                return postsService.createNewPost({userId},str);
            }
        }
    }

    return resolver;
}

export default getResolvers;