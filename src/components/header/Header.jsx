import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section'); // Assuming you use <section> for each page section
    const handleScroll = () => {
      let scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(`#${section.getAttribute('id')}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the page is loaded in the middle

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav_container">
        <a href="index.html" className="nav_logo">
          Prakhar
        </a>
        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav__item">
              <a 
                href="#home" 
                className={`nav_link ${activeLink === '#home' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('#home')}
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#about" 
                className={`nav_link ${activeLink === '#about' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('#about')}
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#skills" 
                className={`nav_link ${activeLink === '#skills' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('#skills')}
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#portfolio" 
                className={`nav_link ${activeLink === '#portfolio' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('#portfolio')}
              >
                <i className="uil uil-briefcase nav__icon"></i>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#projects" 
                className={`nav_link ${activeLink === '#projects' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('#projects')}
              >
                <i className="uil uil-briefcase nav__icon"></i>Projects
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#contact" 
                className={`nav_link ${activeLink === '#contact' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('#contact')}
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps nav_toggle"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
