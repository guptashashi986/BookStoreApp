import React from 'react'
import Home from './home/Home'


import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contactus from './components/contact/Contactus'
import About from './about/About'
import {Toaster} from "react-hot-toast"
import { useAuth } from './context/AuthProvider'
const App = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
       {/* <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>         ye kam nahi kar rha hai*/}
        <Route path='/course'element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/about' element={<About/>}/>
        
      </Routes>
      <Toaster/>
      </div>
    </>
  )
}

export default App