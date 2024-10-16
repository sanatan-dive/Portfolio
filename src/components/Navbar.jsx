import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import logo from '../assets/image.png';

const Navbar = () => {
  return (
    <nav className='  flex items-center justify-between py-10'> 
      <div className='flex  items-center'>
        <a href='/' aria-label='Home'>
          <img src={logo} alt='logo' className='mx-2 ' width={250} height={33} />
        </a>
    </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a
          href="https://www.linkedin.com/in/sanatan-sharma-637605266/"
          target='_blank'
          rel="noopener noreferrer"
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sanatan-dive"
          target='_blank'
          rel="noopener noreferrer"
          aria-label='Github'
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/Sanatan_dive/"
          target='_blank'
          rel="noopener noreferrer"
          aria-label='Leetcode'
        >
          <SiLeetcode />
        </a>
        <a
          href="https://x.com/Sanatan_dive"
          target='_blank'
          rel="noopener noreferrer"
          aria-label='Twitter'
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
