import React from 'react'
import './footer.css'
import {IoLogoTwitter} from 'react-icons/io'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Néstor Sánchez</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
   

    </footer>
  )
}

export default Footer