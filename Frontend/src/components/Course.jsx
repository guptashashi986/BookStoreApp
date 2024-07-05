import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'
function Course() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-620 px-4'>
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className='text-2xl  md:text-4xl'>We're delighted to have you{" "} <span className='text-pink-600'>Here! :)</span></h1>
                <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquam quibusdam! 
                    Vel iusto delectus voluptatem neque consequuntur reprehenderit minus necessitatibus 
                    quam, quas enim tempora veniam dolore tenetur fugiat esse minima.
                    Totam libero quis quod fugit tenetur ex quia! Labore, adipisci repudiandae? Labore facere 
                    incidunt est sunt aut similique amet eaque magni! Laborum quasi natus eos, aperiam provident veritatis 
                    amet! Inventore!
                </p>
                <div className='space-x-2'>
                <Link to="/"><button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>
                Back</button></Link>
                
                <Link to="/contact"><button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>
                Next</button></Link>
                </div>

            </div>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    list.map((item)=>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Course