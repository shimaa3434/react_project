import React, {useState} from 'react'
import './projects.css'
import { Link } from 'react-router-dom'


const Projects = () => {    
    const [active, setActive] = useState("")
  return (
    <div className='projects' id= 'projects'>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h2 className='fs-1'>projects</h2>
                    <p className='fs-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam iste numquam vitae exercitationem corporis</p>
                    <ul className="nav nav-pills mb-4">
                        <li className="nav-item">
                            <Link className= {`nav-link fs-6 ${active === "tab-one" ? "active" : ""}`} onClick={()=> setActive('tab-one')}  to= 'tab-one'> tab one</Link>
                        </li>
                        <li className="nav-item">
                             <Link className= {`nav-link fs-6 ${active === "tab-two" ? "active" : ""}`} onClick={()=> setActive('tab-two')} to='tab-two'> tab two</Link>
                        </li>
                        <li className="nav-item">
                            <Link className= {`nav-link fs-6 ${active === "tab-three" ? "active" : ""}`} onClick={()=> setActive('tab-three')} to='tab-three'> tab three</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects