import React from 'react'
import Navbar from '../Navbar'
import Contact from '../Contact'
import Footer from '../Footer'

const Contactus = () => {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
            <Contact/>
        </div>
        <Footer/>
    </>
  )
}

export default Contactus;