import './projectsPage.scss';
import ProjectCard from '../../components/projectCard/projectCard';
import { useState } from "react";
import Modale from "../../components/modale/Modale.jsx"; 

import bookiBanner from '../../imgs/banners/booki.png';
import MVGBanner from '../../imgs/banners/mon_vieux_grimoire1.webp';
import ninaBanner from '../../imgs/banners/nina.webp';
import kasaBanner from '../../imgs/banners/kasa.webp';
// Ajoute d'autres bannières ici si besoin

const projects = [
    { id: 1, title: "Booki", image: bookiBanner, description: "Site de réservation d'hébergements." },
    { id: 2, title: "Mon vieux grimoire", image: MVGBanner, description: "Autre description." },
    { id: 3, title: "Kasa", image: kasaBanner, description: "Encore un projet." },
    { id: 4, title: "Portfolio de Nina Carducci", image: ninaBanner, description: "Dernier projet." }
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
                />
            )}
        </div>
    );
}

export default ProjectsPage;
