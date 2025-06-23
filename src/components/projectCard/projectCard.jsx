import './projectCard.scss';
import SkillIcon from '../skillIcon/SkillIcon.jsx';
import linkedinSVG from '../../assets/linkedin.svg';
import booki from '../../imgs/banners/booki.png';

function ProjectCard({ project, onClick }) {
    return (
        <div className="card" onClick={onClick}>*
            <div className='card-banner'>
                <img src={project.image} alt={project.title} />
            </div>
            <div className='card-content'>
                <h1>{project.title}</h1>
                <p>Voir les détails</p>
            </div>
        </div>
    );
}

export default ProjectCard;
