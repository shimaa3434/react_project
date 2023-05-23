import React from 'react'
import Project from './Project'
import { projects } from '../../data.js'

const Section1 = () => {
  return (
    <div className="container" >
        <div className='row'>
            {projects.map((project, index)=>{
                return(
                    <Project key={index} title={project.title} des={project.des} imgUrl={project.imgUrl}/>
                )
            })}
        </div>
    </div>
  )
}

export default Section1