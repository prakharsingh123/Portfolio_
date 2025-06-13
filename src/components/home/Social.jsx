import React from 'react';
import { IoLogoInstagram } from 'react-icons/io';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/artistic_prakhar/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/prakhar-singh-150622208/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
       
      >
       <FaLinkedin />
      </a>
      <a
        href="https://github.com/prakharsingh123"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
       <a
        href="https://leetcode.com/u/prakhar_singh1/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode />
      </a>
    </div>
  );
};

export default Social;
