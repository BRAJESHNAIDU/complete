import React, { use, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ListBlog = () => {

    const navigate=useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const res=await axios.post('http://localhost:8000/create',{name,email,image})
            console.log(res.data)
            setName('')
            setEmail('')
            setImage('')
        } catch (error) {
            console.log(error)
        }
    }
    const btn=" View Blog-->"
    return (
        <form onSubmit={handleSubmit} className='flex flex-col w-[270px] h-[250px] justify-center shadow items-center  ml-[600px] mt-[180px] gap-4'>
            <input
                type="text"
                placeholder='name'
                value={name}
                name='name'
                onChange={(e) => { setName(e.target.value) }}
                className='border w-[250px] h-[30px] rounded-0'
            />

            <input
                type="email"
                placeholder='name'
                value={email}
                name='email'
                onChange={(e) => { setEmail(e.target.value) }}
                className='border w-[250px] h-[30px] rounded-0'
            />

            <input
                type="file"
                placeholder='image'
                value={image}
                name='image'
                onChange={(e) => { setImage(e.target.value) }}
                className='border w-[250px] h-[30px] rounded-0'
            />

            <button type='submit'
            className='border w-[250px] h-[30px] rounded-sm bg-indigo-500 text-white h-[35px]'>Create Blog</button>

            <button onClick={()=>{navigate('/viewblog')}}>{btn}</button>
        </form>
    )
}

export default ListBlog
