import React from 'react';
import "./portfolio.css";
import IMGI from "../../assets/portfolio1.jpg";
import IMGI1 from "../../assets/portfolio2.png";
import IMGI2 from "../../assets/portfolio3.png";
import IMGI3 from "../../assets/portfolio4.png";


const Portfolio = () => {
  const data = [{ id: 1,
                  image: IMGI,
                  title: "Chat gpt3 website",
                  github: "https://github.com/AbhayPratapSIngh098/chatGpt3-website",
                  demo: "https://chatgpt3web.netlify.app"},
                { id: 2,
                    image: IMGI1,
                    title: "Youtube-Clone",
                    github: "https://github.com/AbhayPratapSIngh098/youtube-clone",
                    demo: "https://youtubecloneabhay.netlify.app"},
                { id: 3,
                    image: IMGI2,
                    title: "Amazon-Clone",
                    github: "https://github.com/AbhayPratapSIngh098/Amazon-Clone",
                    demo: "https://amazoncloneap.netlify.app"}, 
                { id: 4,
                    image: IMGI3,
                    title: "Movie-Review",
                    github: "https://github.com/AbhayPratapSIngh098/movieReviewApp",
                    demo: "https://moviereviewaps.netlify.app"},  
                ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>
      <div className='container portfolio__container'>
      {data.map((item)=>{
        return (
          <article key={item.id} className='portfolio_item'>
        <div className='portfolio__item-image'>
          <img src={item.image} alt='firstp1'/>
        </div>
          <h3>{item.title}</h3>
          <div className='portfolio_item-cta'>
          <a href={item.github} rel="noreferrer"  className='btn' target='_blank'>GitHub</a>
          <a href={item.demo} rel="noreferrer" className='btn btn-primary'target='_blank'>live Demo</a>
          </div>  
      </article>
        )
      })}

      </div>
    </section>
  )
}

export default Portfolio