import React, { useState } from 'react';
import './skillsTable.scss';
import reactsvg from '../../assets/react.svg';

const skills = [
  { name: 'React', description: 'Librairie JS pour les interfaces web.', img_path : reactsvg, img_alt : 'icone react' },
  { name: 'JavaScript'},
  { name: 'CSS'},
  { name: 'Node.js' },
  { name: 'HTML' },
  { name: 'HTML' },
  { name: 'HTML' },
  { name: 'HTML' },
  { name: 'HTML' },
  { name: 'HTML' },
];

function SkillsTable(){
    return(
        <div className="skills-table">
            {skills.map((skill, index) => (
                <div className='skill-card' key={index}>
                    <img src={skill.img_path} alt={skill.img_alt} />
                    <p>{skill.name}</p>
                </div>
            ))}
        </div>

    )
}

export default SkillsTable;