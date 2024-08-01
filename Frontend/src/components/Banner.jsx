import React from 'react'
import Banner123 from "../../public/Banner123.jpg"
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-620 px-4 flex my-10'>
    <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
        <h1 className='text-4xl font-bold'>
                Namaste, welcomes here to learn something <span className='text-pink-600'>new everyday!!!</span>
            </h1>
            <p className='text-xl'>Books are collections of written or printed sheets of paper bound together, 
                serving as a medium for recording information, stories, and knowledge. 
                They can be fiction or nonfiction and cover a wide range of genres, including literature, science, history, and self-help. 
                Books play a crucial role in education, entertainment, and cultural preservation, and they have evolved from handwritten manuscripts to 
                printed volumes and, more recently, to digital formats like e-books.
            </p>

            <label className="input input-bordered flex items-center gap-2">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
            </label>        

        </div>
        <div className='space-x-2'>
        {/*<button className="btn mt-6 btn-secondary">Secondary</button>*/}

        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>
                Get Started</button>

        <Link to="/course"><button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>
                Next Page</button></Link>
        </div>

    </div>
    <div className='order-1 w-full md:w-1/2'>
        <img src={Banner123} className='w-90 h-90 mt-14' alt=''/>
    </div>
    </div>
        
    </>
  )
}

export default Banner