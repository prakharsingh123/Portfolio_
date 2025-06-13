import React from 'react';
import { motion } from 'framer-motion';
import "./Projects.css";
import cryptoVerse from "../../assets/crypto-verse.png";
import BankPro from "../../assets/BankPro.png";
import BankUser from "../../assets/BankUser.png";
import wearIt from "../../assets/WearIt.png";
import Moviemaze from "../../assets/Moviemaze.png";
import PigGame from "../../assets/PigGame.png";

const data = [
  {
    id: 1,
    imageUrl: wearIt,
    linkUrl: 'https://wear-it-ny4x.vercel.app/', 
    title: 'WearIt',
    description: 'A responsive e-commerce fashion website built with React, showcasing modern UI, cart functionality, payment integration, and API-driven product display.'
  },
  {
    id: 2,
    imageUrl: cryptoVerse,
    linkUrl: 'https://cryypto-verse.netlify.app', 
    title: 'Cryptoverse',
    description: 'A React-based crypto tracking app leveraging Rapid API to fetch real-time cryptocurrency data and related news with stylish charts and search features.'
  },
  {
    id: 3,
    imageUrl: BankPro,
    linkUrl: 'https://bankpro-services.netlify.app/',
    title: 'BankPro Services',
    description: 'A user onboarding platform with seamless registration UI, designed for bank administrators to manage new customers securely and efficiently.'
  },
  {
    id: 4,
    imageUrl: BankUser,
    linkUrl: 'https://bankuser.netlify.app/',
    title: 'BankUser',
    description: 'A secure banking portal enabling real-time fund transfers between accounts. Includes login authentication and transaction history view. Demo: user - js, pass - 1111.'
  },
  {
    id: 5,
    imageUrl: Moviemaze,
    linkUrl: 'https://movie-maze-1.netlify.app/',
    title: 'MovieMaze',
    description: 'A movie discovery app built with React, allowing users to search for movies, view details, and create a watchlist using the TMDB API.'
  },
   {
    id: 6,
    imageUrl: PigGame,
    linkUrl: 'https://dice-game-e762ad.netlify.app/',
    title: 'Pig Game',
    description: 'A fun and interactive Pig Dice Game built with React, allowing users to roll dice and accumulate points while trying to avoid losing them.'
  }
];

const Projects = () => {
  return (
    <section className="section project" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Work Showcase</span>
      <div className="project__container">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="project__item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
              <div className="project__image-wrapper">
                <img src={item.imageUrl} alt={item.title} className="project__image" />
              </div>
            </a>
            <div className="project__details">
              <h3 className="project__title">{item.title}</h3>
              <p className="project__desc">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
