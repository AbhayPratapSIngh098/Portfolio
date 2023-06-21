import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/abhay-pratap-252b56193/' rel="noreferrer" target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/AbhayPratapSIngh098' rel="noreferrer" target='_blank'><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials