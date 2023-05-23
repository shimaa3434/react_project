import React, { useEffect, useState } from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import './navbar.css'
import Logo from '../../img/logo.png'
import Icons from '../Icons'
import Button from '../Button'

const NavBar = () => {
  const [active, setActive] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = ()=>{
      if(window.scrollY > 100){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}>
  <div className="container">
    <Link className="navbar-brand" to= '#'>
      <img src = {Logo} className='img-fluid'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className= {`nav-link ${active === "home" ? "active" : ""}`} onClick={()=> setActive('home')}  aria-current="page" to="#home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${active === "skills" ? "active" : ""}`} onClick={()=> setActive('skills')} to="#skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${active === "projects" ? "active" : ""}`} onClick={()=> setActive('projects')} to="#projects">Projects</Link>
        </li>
        
      </ul>
      <form className="d-flex align-items-center">
        <div className='icons'>
          <Icons icon_name= "fa-brands fa-linkedin-in" path="https://www.linkedin.com/in/%D8%B4%D9%8A%D9%85%D8%A7%D8%A1-%D8%B4%D8%B9%D8%A8%D8%A7%D9%86/"/>
          <Icons icon_name= "fa-brands fa-facebook-f" path="https://www.facebook.com"/>
          <Icons icon_name= "fa-brands fa-instagram" path="https://www.instagram.com"/>
        </div>
        <Link to= '#contact'>
        <Button content="let's Contect" type="button"/>
        </Link>
        
      </form>
    </div>
  </div>
</nav>

  )

}

export default NavBar