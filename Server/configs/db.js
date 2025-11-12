import mongoose from "mongoose";

const connectDb=async()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/blogs`)
        mongoose.connection.on('connected',()=>{console.log('Database connected successfully')})
    } catch (error) {
     console.log('Database connection failed',error)   
    }
}
export default connectDb;