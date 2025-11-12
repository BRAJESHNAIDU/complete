import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    image:{type:String,required:true},
})

const Blog=mongoose.model("blog",blogSchema)
export default Blog;