import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiGearHammer} from 'react-icons/gi'
import {RiFolderOpenLine} from 'react-icons/ri'
import {FiMessageSquare} from 'react-icons/fi'

import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiFolderOpenLine/></a>
      <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiGearHammer/></a>    
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiMessageSquare/></a>
    </nav>
  )
}

export default Nav