import './projectsPage.scss'
import ProjectCard from '../../components/projectCard/projectCard';

function ProjectsPage(){
    return(
        <div className='projectsContainer'>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
        </div>
    )
}

export default ProjectsPage;