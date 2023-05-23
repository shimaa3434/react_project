import React from 'react'
import './skills.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Items from './Items';

const Skills = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        loop: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
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
    <div className='skills' id= 'skills'>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='skill-box'>
                        <h2 className='fs-1'>skills</h2>
                        <p className='fs-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam iste numquam vitae exercitationem corporis</p>
                        <Slider {...settings} className='skill-slider'> 
                            <Items title= 'html' proValue = '80'/>
                            <Items title= 'css' proValue = '75'/>
                            <Items title= 'bootstrap' proValue = '85'/>
                            <Items title= 'javaScript' proValue = '70'/>
                            <Items title= 'python' proValue = '55'/>
                            <Items title= 'fast API' proValue = '48'/>
                            <Items title= 'web scrping' proValue = '90'/>
                            <Items title= 'Django' proValue = '20'/>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills