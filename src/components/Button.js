import React from 'react'
import "./button.css"

const Button = ({content, type}) => {
  return (
    <button className="btn connect-btn py-2 px-3"  type= {type}>
            <span>{content}</span>
    </button>
  )
}

export default Button