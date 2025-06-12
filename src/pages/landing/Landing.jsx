import './landing.scss';
import { useNavigate} from "react-router";
import Caroussel from '../../components/carrousel/crsl';
import img1 from '../../imgs/booki.png';
import img2 from '../../imgs/CV4.png';
const imgs = [img1, img2];
const titles = ['Voir mes projets', 'Voir mon CV'];
import portrait_path from '../../imgs/portrait.jpg';

function LandingPage(langIsEnglish){
    const navigate = useNavigate();

    const onClicks = [
        () => navigate('/projects/'), 
        () => navigate('/cv/')
    ];

    return(
        <div className='Landing'>
            <div className='qui'>
                <h1>Qui suis-je ?</h1>
                <div className='bar'></div>
                <div>
                    <img className='portrait' src={portrait_path} alt="portrait of me" />
                    <aside>
                        <p>Bienvenue sur mon site ! <br></br> Je suis Clotaire Douziech, j'ai 20 ans et je suis développeur web</p>
                        <h2>Mes réseaux</h2>
                        <div className='networks-container'>

                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;