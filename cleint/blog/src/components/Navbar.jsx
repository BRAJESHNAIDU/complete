import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    return (
        <div className=' flex items-center bg-amber-50 justify-between p-4 bg-gray-0 h-[70px]'>
            <div className='ml-[50px]'>
                <h1 className=' text-2xl '>Blog</h1>
            </div>

            <div className='flex justify-between w-[150px]  space-x-4'>
                <button onClick={()=>{navigate('/')}}>ListBlog</button>
                <button onClick={()=>{navigate('/viewblog')}}>ViewBlog</button>
            </div>
            <div>
            </div>

        </div>
    )
}

export default Navbar
