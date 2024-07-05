import React from 'react'

import { Link } from 'react-router-dom';
const Contact = () => {

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-620 px-4'>
                <div className='mt-28 items-center justify-center text-center'>

                    <h1 className='text-2xl  md:text-4xl text-clip'>Contact Us</h1>
                    <p className='mt-12'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis distinctio minus maiores
                        laudantium quasi temporibus, sunt expedita nostrum commodi, odio eveniet magnam neque quo
                        culpa laboriosam ipsum, dicta sequi. Reiciendis.
                        Libero corporis, enim assumenda exercitationem dolore hic at nobis
                        id pariatur nihil dolores error! Illo aperiam nulla inventore dolor impedit dolorem voluptatem,
                        ut totam reprehenderit soluta repellendus numquam porro unde.

                    </p>
                    <div className='space-x-2'>
                        <Link to="/course"><button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>
                            Back</button></Link>

                        <Link to="/about"><button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>
                            Next</button></Link>
                    </div>

                    <div className=''>
                        <form>
                            <p className="text-2xl">Feedback & Queries</p>
                            <br/>
                            <div>
                                <label className="text-md">Select Issue*</label>
                                <br></br>
                                <select className=" border border-gray-300 
                                        text-gray-300 text-sm rounded-lg 
                                        focus:border-gray-500 w-full p-2.5">
                                    <option value="Feedback" >
                                        -- Select Your Query --
                                    </option>
                                    <option value="Feedback" >
                                        Feedback
                                    </option>
                                    <option value="Feedback">
                                        Course Related Queries
                                    </option>
                                    <option value="Feedback">
                                        Payment Related Issue
                                    </option>
                                    <option value="Feedback">
                                        Hiring Related Queries
                                    </option>
                                    <option value="Feedback">
                                        Advertise With Us
                                    </option>
                                </select>
                                <br></br>
                                <label className="text-md">Email Address*</label>
                                <br></br>
                                <input className=" border border-gray-300 
                                        text-sm rounded-lg focus:border-gray-500
                                        w-full p-2.5"
                                    type="email"
                                    placeholder="bookstore@ShashiKumar.org" />
                                <br></br>
                                <label className="text-md">Contact No.</label>
                                <br></br>
                                <input className=" border border-gray-300
                                        text-sm rounded-lg focus:border-gray-500 
                                        w-full p-2.5"
                                    type="text"
                                    placeholder="+91 **********" />
                                <br></br>
                                <label className="text-md">
                                    Drop Your Query
                                </label>
                                <br></br>
                                <textarea className=" border border-gray-300 
                                            text-sm rounded-lg 
                                            focus:border-gray-500 
                                            w-full p-2.5"
                                    rows="4"
                                    cols="25"
                                    maxlength="300"
                                    placeholder="Max Allowed Characters: 300">
                                </textarea>
                                <br></br>
                                <button className="bg-pink-500 hover:bg-pink-700 
                                        text-white font-bold 
                                        py-2 px-4 rounded"
                                    type="button">
                                    Submit
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact;