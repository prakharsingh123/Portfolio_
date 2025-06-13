import React from "react";
import {
  FaHtml5, FaCss3Alt, FaReact, FaBootstrap,
  FaNodeJs, FaJava, FaDocker, FaGithub,
} from "react-icons/fa";
import {
  SiRedux, SiTailwindcss, SiSpringboot,
  SiPostman, SiKubernetes,
} from "react-icons/si";
import { JavaScript, FigmaDark , ElasticsearchDark } from "@fdorantesm/react-skill-icons";

import "./Icon.css";

const skills = [
  {
    category: "Frontend Tools",
    icons: [
      { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
      { name: "ReactJS", icon: <FaReact color="#61DBFB" /> },
      { name: "Redux", icon: <SiRedux color="#764abc" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss color="#38bdf8" /> },
      { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
      { name: "GitHub", icon: <FaGithub color="white" /> },
      { name: "Figma", icon: <FigmaDark /> },
    ],
  },
  {
    category: "Backend Tools",
    icons: [
      { name: "Node.js", icon: <FaNodeJs color="#68a063" /> },
      { name: "JavaScript", icon: <JavaScript color="#f0db4f" /> },
      { name: "Java", icon: <FaJava color="#f89820" /> },
      { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
      { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
      { name: "Docker", icon: <FaDocker color="#0db7ed" /> },
      { name: "Kubernetes", icon: <SiKubernetes color="#326ce5" /> },
      { name: "Elastic (ELK)", icon: <ElasticsearchDark /> },

    ],
  },
];

const Icon = () => {
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const moveX = x * 1;
    const moveY = y * 1;
    el.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    el.style.transform = `translate(0px, 0px)`;
  };

  return (
    <section className="icon__section">
      <div className="icon__container">
        {skills.map((group, idx) => (
          <div key={idx} className="icon__group">
            <h3 className="icon__group-title">{group.category}</h3>
            <div className="icon__list">
              {group.icons.map((skill, index) => (
                <div
                  key={index}
                  className="icon__item"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  title={skill.name}
                >
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Icon;
