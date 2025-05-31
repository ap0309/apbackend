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
