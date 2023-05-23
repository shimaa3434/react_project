import React from 'react'
import './icons.css'
import { Link } from 'react-router-dom'
const Icons = ({icon_name, path}) => {
  return (
        <Link to={path} target="_blank">
          <i className= {icon_name}></i>
        </Link>
  )
}

export default Icons