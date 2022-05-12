import React, { useEffect} from 'react'
import './portfolio.css'
import IMG from '../../assets/IMG.jpg'
import PortfolioOptions from './PortfolioOptions';
import {projects, gameJams, games} from './data'
import { useState } from 'react';


function Portfolio() {
  const[selected, setSelected] = useState("games")
  const[data, setData] = useState([])


  const options = [
    {
      id:'games',
      title:'Games'
    },
    {
      id:'projects',
      title:'Projects'
    }
  ]

  useEffect(()=> {

    switch(selected){
        case "games":
            setData(games);
            break;
        case "projects":
            setData(projects);
            break;      
        default:
            setData(games);
            break;
    }

},[selected])

  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div className="container portfolio__options_top">
        {
          options.map(item=> ( 
             <a href='#portfolio' className='btn'><PortfolioOptions title = {item.title} active = {selected === item.id} setSelected = {setSelected} id = {item.id} /></a> 
          ))}           
      </div>
      <div className='container portfolio__container'>
        {
          data.map(data=>(            
              <article key={data.id}className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={data.img} alt={data.title} />
              </div>
              <h3>{data.title}</h3>
              <h4>{data.desc}</h4>
              <div className='details__container'>
                <div><strong>Role:</strong>{data.role}</div>
                <div><strong>Platform:</strong>{data.platform}</div>
                <div><strong>Engine:</strong>{data.engine}</div>

              </div>
              <div classname='container tags__container'>
                {
                  data.tags.map((tag) =>{
                    return <div className='tags__tag'>{tag}</div>
                  })
                }
                
              </div>
              <div className="portfolio__item-cta">
                <a href={data.link} className='btn' target='_blank'>Details</a>
              </div>  
        </article>
            
          ))}
      </div>
    </section>
  )
}

export default Portfolio