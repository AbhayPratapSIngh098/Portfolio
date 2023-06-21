import React from 'react';
import "./footer.css";
import {BsInstagram} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Abhay</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.instagram.com/abhay_pratap_singh098/'><BsInstagram/></a>
        <a href='https://www.linkedin.com/in/abhay-pratap-252b56193/'><AiFillLinkedin/></a>
      </div>
      
    </footer>
  )
}

export default footer