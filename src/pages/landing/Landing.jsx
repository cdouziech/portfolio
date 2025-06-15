import './landing.scss';
import { useNavigate} from "react-router";
import Caroussel from '../../components/carrousel/crsl';
import img1 from '../../imgs/booki.png';
import img2 from '../../imgs/CV4.png';
const imgs = [img1, img2];
const titles = ['Voir mes projets', 'Voir mon CV'];
import portrait_path from '../../imgs/portrait.jpg';
import SkillIcon from '../../components/skillIcon/SkillIcon'; 
import linkedinSVG from '../../assets/linkedin.svg'
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
                        <p>Bienvenue sur mon site ! <br></br> Je suis Clotaire Douziech, j'ai 20 ans et je suis développeur web</p>
                        <h2>Mes réseaux</h2>
                        <div className='networks-container'>
                            <SkillIcon
                                src={linkedinSVG}
                                alt="linkedin icon"
                                onClick={() => window.location = "https://exampleURL.com/"}
                            />
                        </div>  
                    </aside>
            </div>
        </div>
    )
}

export default LandingPage;