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

  },{timestamps : True}//ok..not ok
);

export const todo = mongoose.model("todo" , todoSchema);

