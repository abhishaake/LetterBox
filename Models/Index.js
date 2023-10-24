
import createCommentSchema from "./Comment.js";
import createFollowersSchema from "./Followers.js";
import createNotificationSchema from "./Notification.js";
import createPostSchema from "./Posts.js";
import createUserSchema from "./User.js";

function Index(){

    createCommentSchema();
    createFollowersSchema();
    createNotificationSchema();
    createPostSchema();
    createUserSchema();

}

export default Index;