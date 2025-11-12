import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Navbar.jsx'
import ListBlog from './pages/ListBlog.jsx'
import ViewBlog from './pages/ViewBlog.jsx'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/listblog'element={<ListBlog/>}/>
      <Route path='/viewblog' element={<ViewBlog/>}/>
    </Routes>
      
    </>
  )
}

export default App
