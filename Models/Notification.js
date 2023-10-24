import mongoose from "mongoose";

function createNotificationSchema(){

        const notificationSchema =  new mongoose.Schema({
            from:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            to:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            post:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post"
            },
            type:{
                type: String,
                required: true
            },
            msg:{
                type: String,
                required: true
            },
            time:{
                type: String,
                required: true
            }
        });

        mongoose.model("Notifications",notificationSchema);
        console.log("Notification Schema created");
}

export default createNotificationSchema;