
import createCommentSchema from "./Comment";
import createFollowersSchema from "./Followers";
import createNotificationSchema from "./Notification";
import createPostSchema from "./Posts";
import createUserSchema from "./User";

function Index(){

    createCommentSchema();
    createFollowersSchema();
    createNotificationSchema();
    createPostSchema();
    createUserSchema();

}

export default Index;