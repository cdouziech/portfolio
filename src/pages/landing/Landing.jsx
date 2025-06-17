import './landing.scss';
import { useNavigate} from "react-router";
import Caroussel from '../../components/carrousel/crsl';
import img1 from '../../imgs/booki.png';
import img2 from '../../imgs/CV4.png';
const imgs = [img1, img2];
const titles = ['Voir mes projets', 'Voir mon CV'];
import portrait_path from '../../imgs/portrait.jpg';
import SkillIcon from '../../components/skillIcon/SkillIcon'; 

import linkedinSVG from '../../assets/linkedin.svg';
import githubSVG from '../../assets/github.svg';
import xSVG from '../../assets/x.svg';

function LandingPage(langIsEnglish){
    const navigate = useNavigate();

    const onClicks = [
        () => navigate('/projects/'), 
        () => navigate('/cv/')
    ];

    return(
        <div className='Landing'>
            <div className='qui'>
                    <img className='portrait' src={portrait_path} alt="portrait of me" />
                    <aside>
                        <h1>Bienvenue sur mon site !</h1>
                        <p>Je suis Clotaire Douziech, j'ai 20 ans et je suis développeur web.</p>
                        <p>Je suis à la recrche d'une alternance aux alentours de bordeaux pour l'année scolaire 2025/2026 avec l'école Nexa. Trois semaines en entreprise pour une semaine en cours.</p>
                        <h2>Mes réseaux</h2>
                        <div className='networks-container'>
                            <SkillIcon
                                src={linkedinSVG}
                                alt="linkedin icon"
                                onClick={() => window.open('https://www.linkedin.com/in/clotaire-douziech-a34553277/', '_blank')}
                            />
                            <SkillIcon
                                src={githubSVG}
                                alt="github icon"
                                onClick={() => window.open('https://github.com/cdouziech', '_blank')}
                            />
                            <SkillIcon
                                src={xSVG}
                                alt="x icon"
                                onClick={() => window.open('https://x.com/clotairedouz', '_blank')}
                            />
                        </div>  
                    </aside>
            </div>
        </div>
    )
}

export default LandingPage;