import React from 'react'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import list from "../../public/list.json"
import Cards from './Cards';
const Freebooks = () => {
    const filterData=list.filter((data)=>data.category==="Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-620 px-4'>
            <div>
            <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laboriosam vero maxime minus quidem sed, in dolorum quos 
                nam esse quae, laborum porro quam, possimus molestias sequi ab. Totam, 
                iusto dicta.</p>
            </div>
        
        <div>
        <Slider {...settings}>
            {filterData.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))}
        </Slider>
        </div>
        </div>    
    </>
  )
}

export default Freebooks