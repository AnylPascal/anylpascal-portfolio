import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {GiBookCover} from 'react-icons/gi'
import {MdCleaningServices} from 'react-icons/md'
import {MdMarkEmailUnread} from 'react-icons/md'
import { useState } from 'react'



const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><MdWork/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiBookCover/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdCleaningServices/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdMarkEmailUnread/></a>

    </nav>
  )
}

export default Navbar