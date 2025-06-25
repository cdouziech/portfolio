import './landing.scss';

import portrait_path from '../../imgs/portrait.jpg';
import SkillIcon from '../../components/skillIcon/SkillIcon'; 

import linkedinSVG from '../../assets/linkedin.svg';
import githubSVG from '../../assets/github.svg';
import xSVG from '../../assets/x.svg';

function LandingPage(){
    return(
        <div className='Landing'>
            <div className='qui'>
                    <img className='portrait' src={portrait_path} alt="portrait of me" />
                    <aside>
                        <h1>Bienvenue sur mon site !</h1>
                        <p>Je suis Clotaire Douziech, j'ai 20 ans et je suis développeur web.</p>
                        <p>Je suis à la recrche d'une alternance aux alentours de bordeaux pour l'année scolaire 2025/2026 avec l'école Nexa. Trois semaines en entreprise pour une semaine en cours.</p>
                        <h2>Mes réseaux & coordonées</h2>
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
                        <div className='coordonates'>
                            <p> <b>Mail</b> : clotairedouziech@gmail.com</p>
                            <p> <b>Téléphone</b> : 07 60 04 80 57</p>
                        </div>
                        <a  className='CV' href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                            Voir mon CV
                        </a>
                    </aside>
            </div>
        </div>
    )
}

export default LandingPage;