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
        description: "Mon premier projet. Il m'a appris tout simplement à implémenter un site depuis une maquette, avec HTML et CSS. L'enjeu était de bien respecter les tailles et le responsive. Ce qui était assez complexe, surtout avec aucune expérience. J'ai pu m'en sortir avec les outils pour développeur et la documentation CSS !",
        github:"https://github.com/cdouziech/P2-HTML-Booki",
        logos :[{ "index":1, src : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt:"HTML icon"},{index: 2 ,src: "https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-programming-langugae-language-pack-logos-icons-1175237.png?f=webp&w=256", alt: "CSS icon"}, {index: 3,src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",alt: "VSCode icon"}, {index:4,src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",alt: "github icon"}]
    },
    { id: 2, title: "Mon vieux grimoire", image: MVGBanner, 
        description: "Un projet entièrement back-end ! J'ai pu créer ma base de donnée avec MongoDB et apprendre à faire fonctionner des API avec Node.js et Express. La grosse difficulté ici était de comprendre le fonctionnement d'un API et le lexique associé aux applications express. Beaucoup de lecture de documentation en somme...",
        logos :[{ "index":1, src : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js icon" },{ index: 2, src: "https://img.icons8.com/color/512/express-js.png", alt: "Express icon" },{ index: 3, src: "https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8", alt: "Postman icon" },{ index: 4, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB icon" },{ index: 5, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript icon" }],
        github:"https://github.com/cdouziech/P6-Node-MonVieuxGrimmoire",
    },
    { id: 3, title: "Kasa", image: kasaBanner, 
        description: "Mon projet préféré ! Le but était de réalisé le front-end d'un site en React, nottamment en récupérer des données du back-end (avec fetch) pour les afficher. Il fallait faire attention à tout, et c'est pour ca que ce projet très complet m'a plu ! ",
        logos :[{ "index":1, src : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt:"react icon"},{ index: 2, src : "https://vitejs.dev/logo-with-shadow.png", alt: "Vite icon" },{ index: 3, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png", alt: "Sass icon" }],
        github:"https://github.com/cdouziech/P5-React-Kasa",
    },
    { id: 4, title: "Nina Carducci", image: ninaBanner, 
        description: "Lors de ce projet, j'ai pu optimisé un site déjà existant presque entèrement. Ce site souffrait de plusieurs défauts : long à démarer, buggé, mal référencé. Un projet assez technique et exigeant, il a fallu prendre en main les outils pour en profiter le plus", 
        logos :[{ "index":1, src : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Google_Lighthouse_logo.svg/1200px-Google_Lighthouse_logo.svg.png", alt:"lighthouse icon"}, { index: 2, src : "https://img.crx4chrome.com/28/ce/ba/jbbplnpkjmmeebjpijfedlgcdilocofh-logo.webp", alt: "WAVE extension icon" },] ,
        github:"https://github.com/cdouziech/P4-Optimisation-NinaCarducci",
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
                    github={selectedProject.github}
                />
            )}
        </div>
    );
}

export default ProjectsPage;
