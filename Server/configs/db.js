import mongoose from "mongoose";

const connectDb=async()=>{
    try {
        mongoose.connect('mongodb://localhost:27017/blog')
        mongoose.connection.on('connected',()=>{console.log('Database connected successfully')})
    } catch (error) {
     console.log('Database connection failed',error)   
    }
}
export default connectDb;