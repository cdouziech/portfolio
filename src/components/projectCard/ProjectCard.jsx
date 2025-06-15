import './projectCard.scss';
import SkillIcon from '../skillIcon/SkillIcon.jsx';
import linkedinSVG from '../../assets/linkedin.svg';
import booki from '../../imgs/booki.png';

function ProjectCard(){
    return(
        <div className='card'>
            <div className='card-banner'>
                <img src={booki} alt="project preview" />
            </div>
            <div className='card-content'>
                <div className='icons-container'>
                    <SkillIcon
                        src={linkedinSVG}
                        alt="linkedin icon"
                        onClick={() => window.location = "https://exampleURL.com/"}
                    />
                    <SkillIcon
                        src={linkedinSVG}
                        alt="linkedin icon"
                        onClick={() => window.location = "https://exampleURL.com/"}
                    />
                </div>
                <p>Voir les détails</p>
            </div>
        </div>
    );
}

export default ProjectCard;
