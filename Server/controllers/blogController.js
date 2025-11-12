import Blog from '../models/Blog.js';

export const createBlog=async(req,res)=>{
    try {
        const {name,email,image}=req.body
        const newBlog=await Blog.create({name,email,image})
        res.status(201).json(newBlog)

    } catch (error) {
        console.log("Error in creating blog:",error);
        res.status(500).json({message:"Internal Server Error"})
    }
}


export const getAllBlogs=async(req,res)=>{
    try {
        const blogs=await Blog.find()
        res.status(200).json(blogs)

    } catch (error) {
        console.log("Error in fetching blogs:",error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const updateBlog=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const updateBlog=await Blog.findByIdAndUpdate(id,data)
        res.status(200).json(updateBlog)

    } catch (error) {
     console.log("Error in updating blog:",error);
     res.status(500).json({message:"Internal Server Error"})   
    }
}

export const deleteBlog=async(req,res)=>{
    try {
        const {id}=req.params
        const deleteBlog=await Blog.findByIdAndDelete(id)
        res.status(200).json(deleteBlog)

    } catch (error) {
        console.log("Error in deleting blog:",error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const searchBlog=async(req,res)=>{
    try {
        const query=req.query.name
        const serarchBlog=await Blog.find({name: { $regex:query , $options:"i" }})
        
        res.status(200).json(serarchBlog)
    } catch (error) {
     console.log("Error in searching blog:",error);   
        res.status(500).json({message:"Internal Server Error"})
    }

}


