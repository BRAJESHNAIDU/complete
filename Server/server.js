
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
// import connectDb from './configs/db.js'
import blogRouter from './router/blogRouter.js'
import mongoose from 'mongoose'

const app=express()
const PORT= process.env.PORT || 8000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI + '/blog',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log('mongodb connected')})

//connectDb()
app.use(blogRouter)


app.get('/',(req,res)=>{res.send("Server is running")})

app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})