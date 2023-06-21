import React from 'react';
import "./experience.css";
import {BsPatchCheckFill} from "react-icons/bs";


const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I have</h5>
    <h2>My Experience</h2>
    <div className='container experience__container'>
      <div className='eperience__sytem-support'>
          <h3>Engineer 1</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-items'/>
              <div> <h4>ARAMIS</h4>
              <small className='text-light'>Intermediate</small></div>
              
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-items'/>
              <div><h4>AOTX</h4>
              <small className='text-light'>Intermediate</small></div>
              
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-items'/>
              <div>
              <h4>SAG</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-items'/>
              <div>
              <h4>Planner</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
      </div>
      <div className='eperience__frontend'>
      <h3>Front End Developement</h3>
      <p>fresher</p>
      <div className='experience__content'>
     
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-items'/>
              <div>
              <h4>Html</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-items'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-items'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-items'/>
              <div>
              <h4>React Js</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-items'/>
              <div>
              <h4>Tailwind</h4> 
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-items'/>
              <div>
              <h4>Redux/Redux Toolkit</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
      </div>
    </div>
    </section>
  )
}

export default Experience