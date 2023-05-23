import React, { useEffect, useState } from 'react'
import './items.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Items = ({title, proValue}) => {
    const [percentage, setPercentage] = useState(proValue);
    useEffect(() => {
        setTimeout(() => {
          if (percentage < 100) {
            setPercentage(percentage);
          }
        }, 50);
      }, [percentage]);
  return (
    <div className='item'>
      <div className='circle'>
        <CircularProgressbar value={percentage} text={`${percentage}%` }  />
      </div>
        <h5>{title}</h5>
    </div>
  )
}

export default Items