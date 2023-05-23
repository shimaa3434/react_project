import React from 'react'
import Icons from '../Icons'
import Logo from '../../img/logo.png'
import './footer.css'
import {HashLink as Link } from 'react-router-hash-link'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col d-flex justify-content-between align-items-center flex-column flex-md-row'>
                <div className='logo my-2'>
                    <Link href='#'>
                        <img src = {Logo} className='img-fluid'/>
                    </Link>
                </div>
                <div className='text-footer text-center text-md-start'>
                    <div className='icons justify-content-md-end justify-content-center d-flex mb-2 '>
                        <Icons icon_name= "fa-brands fa-linkedin-in" path=""/>
                        <Icons icon_name= "fa-brands fa-facebook-f" path=""/>
                        <Icons icon_name= "fa-brands fa-instagram" path=""/>
                    </div>
                    <p>CopyRight &copy; 2023 - All right reserved here by <b>shimaa shaban</b></p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer