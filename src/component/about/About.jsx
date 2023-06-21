import React from 'react';
import ME from '../../assets/me-about.jpg'
import "./about.css";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='me'/>
          </div>
        </div>
        <div className='about__content'>
           <div className='about__cards'>
            <div className='about__card'>
               <FaAward className='about__icons' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </div>
            <div className='about__card'>
               <FiUsers className='about__icons' />
              <h5>Training</h5>
              <small>from ELearning PlatForm</small>
            </div>
            <div className='about__card'>
               <VscFolderLibrary  className='about__icons' />
              <h5>Projects</h5>
              <small>completed 4 projects</small>
            </div>

           </div>
          <p>Enthusiastic, focused and motivated Front end developer with good experience in using React Js components, router and redux concepts.Ability to apply theoretical consepts in the practical world. knowledge of developing good UI interfaces using REACTJS, HTML,CSS and JAVASCRIPT.</p>
          
          <a href='#contact' className='btn btn-primary btn1' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about