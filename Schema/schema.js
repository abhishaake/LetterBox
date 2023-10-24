import {gql} from "apollo-server";


function schema (){
    const typeDefs = gql`
            type Query{
                getUsers:[User]
                getLoggedInUser:User
                getUserById(_id:ID!):User

                getAllPosts(userId:ID!):[Post]
                getUserPosts(userId:ID!):[Post]
                getPostById(postId:ID!):Post

                getAllComments(postId:ID!):[Comment]

                getFollowers(userId:ID!):[Follower]

                getNotifications(userId:ID!):[Notification]
                
                login(email:String!,password:String!):String

                getAllFeed(userId:ID!):Feed
                getUserFeed(userId:ID!):Feed
                getPostFeed(postId:ID!):Feed
            }

            type Feed{
                user: User
                post: [Post]
                notification: [Notification]
            }
            
            type User{
                _id:String
                firstName:String 
                lastName:String
                email:String
            }

            type Post{
                _id:ID
                from:ID
                msg:String
                time:String
                likes:Number
                comments:Number
            }

            type Comment{
                _id:ID
                from:ID
                msg:String
                post:ID
                time:String
            }

            type Follower{
                _id:ID
                follower:ID
                followee:ID
            }

            type Notification{
                _id:ID
                from:ID
                to:ID
                post:ID
                type:Number
                msg:String
                time:String

            }

            type Mutation{
                addUser(input:UserInput!):User
                modifyUser(input:UserInput!):User
                deleteUser(userId:ID!):String

                addPost(msg:String!):Post
                modifyPost(postId:ID!,param:Number!,inc:Number!):Post
                deletePost(postId:ID!):String

                addComment(msg:String!,postId:ID!):Comment
                
                addFollower(followeeId:ID!):String
                removeFollower(followeeId:ID!):String
            }

            input UserInput{
                firstName:String! 
                lastName:String!
                email:String!
                password:String!
            }

           
        `;

    return typeDefs;
}

export default schema;