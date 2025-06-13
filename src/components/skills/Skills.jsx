import React from 'react'
import Icon from "./Icon";
import "./Skills.css";


const Skills = () => {
  return (
    <section className="section__skills section" id="skills">
     <h2 className="section__title">Skills</h2>
     <span id= "skill_level" className="section__subtitle">My Technical Level</span>
     <div className="skills__container grid">
       
       {/* <Frontend/>
       <Backend/> */}
       <Icon/>
      
     </div>
    </section>
  )
}

export default Skills
