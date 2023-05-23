import React, { useEffect, useRef } from 'react'
import Typed from "typed.js";
import './hero.css'
import Button from '../Button'
import HeroImg from '../../img/hero-img.png'
import {HashLink as Link} from 'react-router-hash-link'


const Hero = () => {
    const text = useRef(null)
    useEffect(() => {
        const typed = new Typed(text.current, {
          strings: ['web develope', 'front end', 'back end'], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        smartBackspace: true,
        loop: true,
        showCursor: true,
        cursorChar: "|"
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);
    return (
    <div className='home' id= 'home'>
        <div className='container'>
            <div className='row align-items-center text-sm-center text-md-start'>
                <div className='col-xs-12 col-md-6 col-xl-7'>
                    <span className='teg-line fs-5 fw-bolder'>welcome to my Portfolio</span>
                    <h1 className='fs-1'> Hi I'm shimaa shaban <br/><span className='wrap fs-2' ref={text}></span> </h1>
                    <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, libero consequuntur! Veniam quam iusto magni!</p>
                    <Link to= "#contact">
                      <Button content= "let's connect" type="button" className= "px-3 py-2"/>
                    </Link>
                </div>
                <div className='col-xs-12 col-md-6 col-xl-5'>
                    <img src= {HeroImg} className='img-fluid' alt='hero img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
