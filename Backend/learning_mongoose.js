//user.js
import mongoose from 'mongoose';

const Userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: True,
      unique: True,
      lowercase: True,
    },
    email: {
      type: String,
      required: True,
      unique: True,
      lowercase: True,
    },
    password: {
      type: String,
      require: [true, 'password must be required'],
    },
  },
  { timestamps: True }
);

export const user = mongoose.model('user', Userschema);

//tood.js
import mongoose from "mongoose"

const todoSchema = new mongoose.Schema
(
  {
    content : {
      type : String,
      required : True,
    },
    complete : {
      type : Boolean ,
      default : false,
    },
    CreatedBy : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "user"
    },
    subtodos : [
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : "subtodo"
      }
    ] // array of subtodos

  },{timestamps : True}
  
);

export const todo = mongoose.model("todo" , todoSchema);

//subtodo.js
import mongoose from "mongoose"

const subtodoSchema = new mongoose.Schema
(
  {
    content : {
      type : String,
      required : True ,
    },
    complete : {
      type : Boolean, 
      default : false,
    },
    createdby : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "user"
    }
  },{timestamps : True}
);

export const subtodo = mongoose.model("subtodo",subtodoSchema);
