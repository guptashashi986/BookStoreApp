import React from 'react'
import Home from './home/Home'


import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contactus from './components/contact/Contactus'
import About from './about/About'


const App = () => {
  return (
    <>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/about' element={<About/>}/>
        
      </Routes>
      </div>
    </>
  )
}

export default App