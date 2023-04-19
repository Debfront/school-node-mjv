
import { Schema } from "mongoose";
import mongoose from "mongoose";


export interface IUser {
    name: string;
    email: string;
    document: string;
    password: string;
    age: number;
    phone: string;
    createdAt: string | Date;
}


export const userSchema = new Schema<IUser> ({
   name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    document: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    phone: {
        type: String
    },
    createdAt: {
       type: Date, 
       default: new Date() 
    }
});
export const User = mongoose.model('User', userSchema);