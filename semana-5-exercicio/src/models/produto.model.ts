import { Schema } from "mongoose";
import mongoose from "mongoose";


export const produtSchema = new  Schema({
    id: {
        type: Number
    },
    description: {
        type: String
    },
    img: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export const Produt = mongoose.model('Produt', produtSchema);
