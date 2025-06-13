import React from 'react';
import AboutImg from '../../assets/about.jpg';
import Info from './Info';
import './About.css';

const About = () => {
  return (
    <section className="about__section section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="profile" className="about__img" />
        
        <div className="about__data">
          <Info />
          <p className="about__description">
            I'm Prakhar Singh, a Software Engineer at Tech Mahindra with a solid foundation in modern web technologies.
            I'm eager to contribute to innovative IT projects and create impactful digital experiences.
          </p>

          <div className="about__icons">
            <div>
              <i className="bx bx-calendar-heart"></i>
              <span>Age: 24 years</span>
            </div>
            <div>
              <i className="bx bx-location-plus"></i>
              <span>Location: Pune</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
