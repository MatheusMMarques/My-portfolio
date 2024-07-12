import "../css/Skills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs, faPython, faJava, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const skillsData = [
  { id: 'react', icon: faReact, name: 'ReactJs', width: '70%' },
  { id: 'node', icon: faNodeJs, name: 'NodeJs', width: '60%' },
  { id: 'javascript', icon: faJs, name: 'JavaScript', width: '65%' },
  { id: 'python', icon: faPython, name: 'Python', width: '30%' },
  { id: 'java', icon: faJava, name: 'Java', width: '15%' },
  { id: 'bootstrap', icon: faBootstrap, name: 'Bootstrap', width: '50%' },
  { id: 'sql', icon: faDatabase, name: 'SQL', width: '40%' },
];

const Skills = () => {
  const [progressWidth, setProgressWidth] = useState('0%');
  const [currentSkill, setCurrentSkill] = useState('');

  return (
    <section className="skills-container">
      <div className='box-container'>
        <div className="skills-content">
          <h2>HARD SKILLS</h2>
        </div>
        <div className='icons-habillity'>
          <div className="icons">
            {skillsData.map((skill) => (
              <FontAwesomeIcon 
                key={skill.id}
                className="icon-h" 
                id={skill.id} 
                icon={skill.icon} 
                style={{ color: skill.color }} 
                onMouseEnter={() => {
                  setProgressWidth(skill.width);
                  setCurrentSkill(skill.name);
                }}
                onMouseLeave={() => {
                  setProgressWidth('0%');
                  setCurrentSkill('');
                }}
              />
            ))}
          </div>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: progressWidth }}></div>
          </div>
          <div className={`skill-name ${currentSkill ? 'active' : ''}`}>
            {currentSkill && `NIVEL: ${currentSkill}`}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
