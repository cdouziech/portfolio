import './projectsPage.scss';
import ProjectCard from '../../components/projectCard/projectCard';
import { useState } from "react";
import Modale from "../../components/modale/Modale.jsx"; 

import bookiBanner from '../../imgs/banners/booki.png';
import MVGBanner from '../../imgs/banners/mon_vieux_grimoire1.webp';
import ninaBanner from '../../imgs/banners/nina.webp';
import kasaBanner from '../../imgs/banners/kasa.webp';

const projects = [
    { id: 1, title: "Booki", image: bookiBanner, 
        description: "Mon premier projet. Il m'a appris tout simplement à implémenter un site depuis une maquette, avec HTML et CSS. L'enjeu était de bien respecter les tailles et le responsive.",
        logos :[{ "index":1, src : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt:"HTML icon"}]
    },
    { id: 2, title: "Mon vieux grimoire", image: MVGBanner, 
        description: "Un proket entièrement back-end ! J'ai pu créer ma base de donnée avec MongoDB et apprendre à faire fonctionner des API avec Node.js et Express.",
        logos :[{ "index":1, src : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt:"Node.js icon"}]
    },
    { id: 3, title: "Kasa", image: kasaBanner, 
        description: "Mon projet préféré ! Le but était de réalisé le front-end d'un site en React, nottamment en récupérer des données du back-end (avec fetch) pour les afficher.",
        logos :[{ "index":1, src : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt:"react icon"}]
    },
    { id: 4, title: "Nina Carducci", image: ninaBanner, 
        description: "Lors de ce projet, j'ai pu optimisé un site déjà existant presque entèrement. Ce site souffrait de plusieurs défauts : long à démarer, buggé, mal référencé", 
        logos :[{ "index":1, src : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Google_Lighthouse_logo.svg/1200px-Google_Lighthouse_logo.svg.png", alt:"lighthouse icon"}] 
    }
];

function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className='projectsContainer'>
            {projects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={() => setSelectedProject(project)}
                />
            ))}

            {selectedProject && (
                <Modale 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                    logos={selectedProject.logos}
                />
            )}
        </div>
    );
}

export default ProjectsPage;
