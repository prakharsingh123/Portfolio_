import React from 'react'
import "./Resume.css"
import Education from './Education'
import Experience from './Experience'

const Resume = () => {
  return (
    <section className="section__resume section" id="portfolio">
    <h2 id="portfolio_title" className="section__title">Portfolio</h2>
    <span className="section__subtitle">My Journey</span>
    <div className="resume__container grid">
     <Education/>
   <Experience/>

    </div>
   </section>
  )
}

export default Resume


