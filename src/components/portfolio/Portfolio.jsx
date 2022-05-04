import React, { useEffect} from 'react'
import './portfolio.css'
import IMG from '../../assets/IMG.jpg'

import { useState } from 'react';




function Portfolio() {
  const [activeOption, setActiveOption] = useState('&')

  const options = [
    {
      id:"1",
      title:"Projects",
      items: [
        {
          id:1,
          title: "Project Gravit",
          desc: "First person action platformer set in a futuristic corporation facility",
          img: "https://img.itch.zone/aW1nLzM3MDIzMTAucG5n/315x250%23c/QCwh4N.png",
          link: "https://twodas.itch.io/project-gravit",
        },
        {
          id:2,
          title: "KidneyApp",
          desc: "Companion App for renal chronic disease pacients. Final Degree Project",
          img: "https://cdn-icons-png.flaticon.com/512/732/732208.png",
          link: "https://github.com/NestorSaga/KidneyApp",
        }]
    },
    {
      id:"2",
      title:"GameJams",
      items: [
        {
        id:1,
        title: "Schrö",
        desc: "Frenetic 2-player 2D cube-fighting trap-setting and timeline-splitting game. Made for the 2019 Granollers Game Jam",
        img: "https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2020/02/298784/22.png?itok=EReoQER8&timestamp=1580653725",
        link: "https://drive.google.com/file/d/1sJuEEmwIFmBLhQoYFQc0m2Z2bYQwmt1m/view",
      }, 
      {
        id:2,
        title: "CPlay",
        desc: "Puzzle platformer where you repair the scenario by 'reprogramming' it. Made for the 2020 Global Game Jam. Theme: Repair",
        img: "https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2020/02/298784/22.png?itok=EReoQER8&timestamp=1580653725",
        link: "https://globalgamejam.org/2020/games/cplay-5",
      },
      {
        id:3,
        title: "El drac",
        desc: "2-player asymmetric battle between Sant Feliu's iconic characters. Made for the 2021 Power Up Sant Feliu de Llobregat Game Jam",
        img: "https://img.itch.zone/aW1nLzU5MTQyMDguanBn/315x250%23c/nRR75q.jpg",
        link: "https://nestorsaga.itch.io/sant-feliu-contra-el-diable",
      },
      {
        id:4,
        title: "Will Will Will",
        desc: "2-player 2D fist fight for Will's will. Made for the 2022 Global Game Jam. Theme: Duality",
        img: "https://img.itch.zone/aW1nLzgwMzQzNDEuanBn/315x250%23c/xoGuVI.jpg",
        link: "https://twodas.itch.io/will-will-will",
      }]
    }
  ];
  
  
  var Selected = options[0].items;

  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__options">
        {
          options.map(o=> (       
              <div className="portfolio__option">
                <a href="#portfolio" onClick={() => {setActiveOption('&'); Selected = options.items;}} className={activeOption === '&' ? 'active' : ''}>{o.title}</a>
              </div>
            
          ))
        }
      </div>
      <div className='container portfolio__container'>
        {
          Selected.map(s=>(            
              <article key={s.id}className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={s.img} alt={s.title} />
              </div>
              <h3>{s.title}</h3>
              <h4>{s.desc}</h4>
              <div className="portfolio__item-cta">
                <a href={s.link} className='btn' target='_blank'>Details</a>
              </div>  
        </article>
            
          ))}
      </div>
    </section>
  )
}

export default Portfolio