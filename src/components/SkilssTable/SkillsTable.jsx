import React, { useState } from 'react';
import './skillsTable.scss';

const skills = [
  { name: 'React', description: 'Librairie JS pour les interfaces web.' },
  { name: 'JavaScript', description: 'Langage de base du web.' },
  { name: 'CSS', description: 'Pour le style, animations et responsive.' },
  { name: 'Node.js', description: 'Pour le backend en JS.' },
  { name: 'HTML', description: 'Pour le backend en JS.' },
];

function Footer(){
    return(
        <div className='footer'>
            <div className="barber-bar">
            </div>
        </div>
    )
}

export default Footer;