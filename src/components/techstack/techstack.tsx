import React from 'react';
import { FaGithub, FaHtml5, FaCss3, FaJs, FaReact, FaDatabase, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiCplusplus, SiPostgresql, SiMongodb, SiMysql, SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiPostman, SiRender } from 'react-icons/si';
import './techstack.scss';

const Techstack: React.FC = () => {
  return (
    <div className="about-technologies-container">
      <section className="about-technologies">
        <h2>My Techstack</h2>
        <div className="technology-categories">
          <div className="technology-category">
            <h3>Languages</h3>
            <div className="technology-items">
              <div className="technology-item"><SiCplusplus /><p>C++</p></div>
              <div className="technology-item"><FaJs /><p>JavaScript</p></div>
              <div className="technology-item"><FaPython /><p>Python</p></div>
              <div className="technology-item"><FaDatabase /><p>SQL</p></div>
              <div className="technology-item"><FaHtml5 /><p>HTML</p></div>
              <div className="technology-item"><FaCss3 /><p>CSS</p></div>
            </div>
          </div>
          
          <div className="technology-category">
            <h3>Frameworks & Libraries</h3>
            <div className="technology-items">
              <div className="technology-item"><FaReact /><p>ReactJS</p></div>
              <div className="technology-item"><SiNextdotjs /><p>NextJS</p></div>
              <div className="technology-item"><SiTypescript /><p>TypeScript</p></div>
              <div className="technology-item"><SiTailwindcss /><p>TailwindCSS</p></div>
              <div className="technology-item"><SiExpress /><p>Express.js</p></div>
              <div className="technology-item"><FaNodeJs /><p>Node.js</p></div>
            </div>
          </div>
          
          <div className="technology-category">
            <h3>Tools & Technologies</h3>
            <div className="technology-items">
              <div className="technology-item"><FaGithub /><p>Git</p></div>
              <div className="technology-item"><SiPostman /><p>Postman</p></div>
              <div className="technology-item"><SiRender /><p>Render</p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Techstack;