import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const ViewBlog = () => {
    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [search, setSearch] = useState('false')
    const [inpValue, setInpValue] = useState('')



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8000/getall')
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])





    const hadleSearch = async (e) => {
        setInpValue(e.target.value)

        try {
            const res = await axios.get(`http://localhost:8000/search?name=${inpValue}`)
            setSearchData(res.data)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            {search ? <input onChange={hadleSearch} type='text' placeholder='search' value={inpValue} /> : null}

            <button onClick={() => { setSearch(true) }}>Search</button>

            {
                searchData.map((item, index) => (
                    <div key={index} className='flex flex-row justify-baseline px-6 items-center gap-3 w-[400px] mt-4 h-auto border'>
                        <div>
                            <img src={item.image} className='w-[70px] h-[70px]' />
                        </div>
                        <div className='ml-[50px]'>
                            <p>{item.email}</p>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default ViewBlog
