import mongoose from "mongoose";

export const connectDB  = async ()=> {
    await mongoose.connect('mongodb+srv://subham:subham@cluster0.q8uh0ks.mongodb.net/tomato').then(()=>console.log("DB Connected"))
}