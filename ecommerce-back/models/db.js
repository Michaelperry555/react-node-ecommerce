import mongoose from "mongoose";
import 'dotenv/config';

async function connectToDb() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@ecommerce.hwrrxye.mongodb.net/?retryWrites=true&w=majority`, {
        });
        console.log('connected to db');
    } catch (err) {
        console.log('could not connect');
        console.log(err);
        return Promise.reject(new Error('Could not connect'));

    }
}

export  {connectToDb}