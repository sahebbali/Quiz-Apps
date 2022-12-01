import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb+srv://sahebali2:sahebali123123@cluster0.tee2r4v.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database Connected");
}