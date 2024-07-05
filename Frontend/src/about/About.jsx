import React from 'react'
import Navbar from '../components/Navbar'
import Aboutus from '../components/Aboutus'
import Footer from '../components/Footer'

const About = () => {
    return (
        <>
        <Navbar/>
        <div className='min-h-screen'>
            <Aboutus/>
        </div>
        <Footer/>
    </>
    )
}

export default About