import React from 'react'
import './newsle.css'
import Button from '../Button'

const Newsle = () => {
  return (
    <div className='news'>
        <div className='container box-news bg-white rounded rounded-pill'>
            <div className='row align-items-center d-flex'>
                <div className='col-sm-12 col-md-5'>
                <p className='fs-6 text-sm-center text-md-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, libero consequuntur! Veniam quam iusto magni!</p>
                </div>
                <div className='col-sm-12 col-md-7'>
                    <form >
                        <div className='input-box'>
                            <input type='email' placeholder='Email Address'/>
                            <Button type='submit' content="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsle