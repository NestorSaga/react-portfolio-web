import React, { useState, useEffect } from 'react'

import './about.css'
import ME from '../../assets/ME.png'
import CAT from '../../assets/catalan.png'
import ESP from '../../assets/español.png'
import ENG from '../../assets/engflag2.png'
import JAP from '../../assets/japanese.png'

function About() {


  const [buttonText, setButtonText] = useState("Let's Talk");

  return (
    <section id='about'>
      
      <h2>About me</h2>
      
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          
          <p>
          Hi! My name is Néstor Sánchez and I'm a Software Engineer and an aspiring Technical Game Designer living in Barcelona, Spain.
          I'm a double Bachelor's Degree in Software Engineering + Design and Production of Video Games graduate. <br /> <br />

          This broad but strong arrange of skills lets me act as a bridge between game design and game programming. To ensure this, critical thinking and good
          communication skills are key to polish any idea or system in order to keep the process agile and smooth, which are 2 strong points that I consider myself to fit in.<br /> <br />

          Bringing the team's ideas and mechanics to reality has been my passion since I started coding. As someone who is always thinking about how everything
          works and how it could be improved I found my home in the game development world, always avid to learn new stuff.
          </p>

          <div className='about__langtitle'>
            <h3>I speak</h3>
            <div className="about__cards">
              
              <article className="about__card" onMouseEnter={() => setButtonText('Hablemos')}>
                <img className='about__icon' src={ESP} alt="Languaje_Image" />
                <h4>Native</h4>
              </article>

              <article className="about__card" onMouseEnter={() => setButtonText('Parlem')}>
                <img className='about__icon' src={CAT} alt="Languaje_Image" />
                <h4>Native</h4>
              </article>

              <article className="about__card" onMouseEnter={() => setButtonText("Let's talk")}>
                <img className='about__icon' src={ENG} alt="Languaje_Image" />
                <h4>C1</h4>
              </article>

              <article className="about__card" onMouseEnter={() => setButtonText("話しましょう")}>
                <img className='about__icon' src={JAP} alt="Languaje_Image" />
                <h4>N4</h4>
              </article>

            </div>
              <div className='about__item-cta'>
              <a href="#contact" className='btn btn__about'>{buttonText}</a>
              </div> 
          </div>      
        </div>
      </div>
    </section>
  )
}

export default About