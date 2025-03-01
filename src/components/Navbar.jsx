import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import logo from '../assets/image.png';

const Navbar = () => {
  return (
    <section id='home'>
      <nav className='flex items-center justify-between'> 
        <div className='flex items-center justify-center'>
          <a href='/' aria-label='Home'>
            <img 
              src={logo} 
              alt='logo' 
              className='mx-2 transition-transform duration-300 hover:scale-110' 
              width={250} 
              height={33} 
            />
          </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a
            href="https://www.linkedin.com/in/sanatan-sharma-637605266/"
            target='_blank'
            rel="noopener noreferrer"
            aria-label='LinkedIn'
            className='transition-transform duration-300 hover:scale-110 hover:text-blue-500'
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sanatan-dive"
            target='_blank'
            rel="noopener noreferrer"
            aria-label='Github'
            className='transition-transform duration-300 hover:scale-110 hover:text-gray-500'
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/Sanatan_dive/"
            target='_blank'
            rel="noopener noreferrer"
            aria-label='Leetcode'
            className='transition-transform duration-300 hover:scale-110 hover:text-yellow-500'
          >
            <SiLeetcode />
          </a>
          <a
            href="https://x.com/Sanatan_dive"
            target='_blank'
            rel="noopener noreferrer"
            aria-label='Twitter'
            className='transition-transform duration-300 hover:scale-110 hover:text-black'
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
