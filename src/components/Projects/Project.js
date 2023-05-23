import React from 'react'
import "./project.css"
const Project = ({title, des, imgUrl}) => {
  return (
    <div className='col-sm-6 col-md-4'>
        <div className='project-img rounded rounded-3'>
            <img src = {imgUrl} className='img-fluid img-thumbnail'/>
            <div className='project-text px-3'>
                <h4 className='fs-4'>{title}</h4>
                <span className='fs-5'>{des}</span>
            </div>
        </div>
    </div>
  )
}

export default Project