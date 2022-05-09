import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME.png'
import HeaderSocials from './HeaderSocials'

import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

function Header() {



  return (
    <header>
        <div className="container header__container">
            <h5>
            <Typewriter 
            words = {["Hello I'm"]}
            typeSpeed={40}
            delaySpeed={4000}
            loop={1}/>
            </h5>
            
            <h1><Typewriter 
            words = {["Néstor Sánchez"]}
            typeSpeed={90}
            delaySpeed={500}
            loop={1}/></h1>
            <h5 className="text-light"><Typewriter 
            words = {["Computer Science Engineer student & Aspiring Technical Designer"]}
            typeSpeed={40}
            delaySpeed={200}
            loop={1}/>
            </h5>
            <CTA />
            <HeaderSocials />
            
        </div>
    </header>
  )
}

export default Header