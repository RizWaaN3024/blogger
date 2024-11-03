import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://rizwaan:temp1234@cluster0.vw4zm.mongodb.net/blog-app')
    console.log("DB Connected")
}