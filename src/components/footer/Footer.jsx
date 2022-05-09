import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaItchIo} from 'react-icons/fa'

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
   

      <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/nestorsaga/" target ="_blank"><BsLinkedin /></a>
        <a href="https://github.com/NestorSaga" target ="_blank"><FaGithub /></a>
        <a href="https://nestorsaga.itch.io" target ="_blank"><FaItchIo /></a>

      </div>

    </footer>
  )
}

export default Footer