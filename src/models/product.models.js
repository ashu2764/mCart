
import mongoose, {Schema} from "mongoose";
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"



const productSchema = new Schema(
    {
        prodctName:{
            type:String,
            required :true,
           
        },
        prodctCode:{
            type:String,
            required :true,
           
        },
        description:{
            type:String,
            required :true,
           
        },
        productPhoto:{
            type:String,
            required :true
           
        },
        price:{
            type:Number,
            required :true,
        },
        phoneNumber:{
            type:Number,
            required:true

        },
        manufacture:{
            type:String,
            required :true,
           
        },
        osType:{
            type:String,
            required :true,
           
        },
        rating:{
            type:Number,
        
           
        },

       
       
    }
,
{timestamps:true}
)


export const User = mongoose.model("Product", productSchema)











