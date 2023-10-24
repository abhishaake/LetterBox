import mongoose, { mongo } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../Config/config.js";
import {randomBytes} from "crypto";

export class UserService {
  constructor() {
    this.User = mongoose.model("User");
    this.Follower = mongoose.model("Followers");
  }

  async getLoggedInUser({userId}){
    if(!userId) throw new Error("No Logged In User found");

    const user = await this.User.findOne({_id:userId});

    if(user) return user;

    throw new Error("No User found");
  }

  async login(email,password){
    const user = await this.User.findOne({ email: email });

    if (!user) {
        throw new Error("No user exists with email " + email);
      }
    
    const originalPass = user.password;

    if(!(await bcrypt.compare(password,originalPass))){
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign({userId:user._id},config.JWT_SECRET);
    
    return token;
  }

  async getAllUser(){
    const users = await this.User.find({});

    console.log("debug check : " + typeof(users));

    return users;
  }

  async getUserById({_id}){
    const user = await this.User.findOne({_id:_id});
    
    if (!user) {
        throw new Error("No User exists");
    }
    user.password = null;
    return user;
  }

  async getUserByEmail({email}){
    const user = await this.User.findOne({email:email});
    
    if (!user) {
        throw new Error("No User exists");
    }
    user.password = null;
    return user;
  }

  async createNewUser(newUser) {
    const userAlreadyExists = await this.User.findOne({ email: newUser.email });

    if (userAlreadyExists) {
      throw new Error("User already exists with this email");
    }

    const hashedPass = await bcrypt.hash(newUser.password, 12);
    // const id = new mongoose.Types.ObjectId("");
    
    const userObj = new this.User({
      ...newUser,
      password: hashedPass,
    });

    console.log("New User Obj-> ", userObj);
    return await userObj.save();
  }

  async getAllFollows(){
    return await this.Follower.find({});
  }

  async addNewFollower(userId,followeeId){
    const obj = new this.Follower({
      follower: userId,
      followee: followeeId
    });

    console.log("New Follow obj -> " + obj);
    await obj.save();

    return "SUCCESS";
  }

  async removeFollower(fID){
    await this.Follower.deleteOne({_id:fID});
    return "SUCCESS";
  }
}
