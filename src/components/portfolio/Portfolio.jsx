import React, { useEffect} from 'react'
import YoutubeEmbed from "./YoutubeEmbed";
import './portfolio.css'
import IMG from '../../IMG.jpg'
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
    },
    
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
             <a href='#portfolio' className={selected === item.id ? 'btn__portfolio__selected' : 'btn__portfolio' }><PortfolioOptions title = {item.title} active = {selected === item.id} setSelected = {setSelected} id = {item.id} /></a> 
          ))}           
      </div>
      <div className='container portfolio__container'>
        {
          data.map(data => {
            const isMobile = window.innerWidth <= 1024;
            const isBigRender = data.isBig && !isMobile;
            return (
              <article key={data.id} className={`portfolio__item${isBigRender ? ' portfolio__item--big' : ''}`}>
                {isBigRender ? (
                  <>
                    <div className='portfolio__item-image'>
                      {data.isVideo === 'true' ? <YoutubeEmbed embedId={data.img} big /> : <img src={data.img} alt={data.title} />}
                    </div>
                    <div className='portfolio__item-content'>
                      <h3>{data.title}</h3>
                      <h4>{data.desc}</h4>
                      <div className='details__container'>
                        <div><strong>Role:</strong></div>
                        <div><strong>Platform:</strong></div>
                        <div><strong>Engine:</strong></div>
                        <div>{data.role}</div>
                        <div>{data.platform}</div>
                        <div>{data.engine}</div>
                      </div>
                      <div className='tags__container'>
                        {data.tags.map((tag) => (
                          <div className='tags__tag'>{tag}</div>
                        ))}
                      </div>
                      <div className="portfolio__item-cta">
                        <a 
                          href={data.link || undefined}
                          className={`btn${(!data.link || !data.img) ? ' disabled' : ''}`}
                          target='_blank'
                          tabIndex={(!data.link || !data.img) ? -1 : 0}
                          aria-disabled={(!data.link || !data.img) ? 'true' : 'false'}
                          style={(!data.link || !data.img) ? {pointerEvents: 'none', opacity: 0.5} : {}} rel="noreferrer"
                        >Details</a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='portfolio__item-image'>
                      {data.isVideo === 'true' ? <YoutubeEmbed embedId={data.img} /> : <img src={data.img} alt={data.title} />}
                    </div>
                    <h3>{data.title}</h3>
                    <h4>{data.desc}</h4>
                    <div className='details__container'>
                      <div><strong>Role:</strong></div>
                      <div><strong>Platform:</strong></div>
                      <div><strong>Engine:</strong></div>
                      <div>{data.role}</div>
                      <div>{data.platform}</div>
                      <div>{data.engine}</div>
                    </div>
                    <div className='tags__container'>
                      {data.tags.map((tag) => (
                        <div className='tags__tag'>{tag}</div>
                      ))}
                    </div>
                    <div className="portfolio__item-cta">
                      <a 
                        href={data.link || undefined}
                        className={`btn${(!data.link || !data.img) ? ' disabled' : ''}`}
                        target='_blank'
                        tabIndex={(!data.link || !data.img) ? -1 : 0}
                        aria-disabled={(!data.link || !data.img) ? 'true' : 'false'}
                        style={(!data.link || !data.img) ? {pointerEvents: 'none', opacity: 0.5} : {}} rel="noreferrer"
                      >Details</a>
                    </div>
                  </>
                )}
              </article>
            );
          })
        }
      </div>
    </section>
  )
}

export default Portfolio