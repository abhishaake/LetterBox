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
                likes:String
                comments:String
            }

            type Comment{
                _id:ID
                from:String
                msg:String
                post:String
                time:String
            }

            type Follower{
                _id:ID
                follower:String
                followee:String
            }

            type Notification{
                _id:ID
                from:String
                to:String
                post:String
                type:String
                msg:String
                time:String

            }

            type Mutation{
                addUser(input:UserInput!):User
                modifyUser(input:UserInput!):User
                deleteUser(userId:ID!):String

                addPost(msg:String!,userId:String!):Post
                modifyPost(postId:ID!,param:String!,inc:String!):Post
                deletePost(postId:ID!):String

                addComment(msg:String!,postId:ID!):Comment
                
                addFollower(followeeId:ID!,userId:String!):String
                removeFollower(followeeId:ID!,fID:ID!):String
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