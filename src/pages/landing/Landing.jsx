import './landing.scss';
import { useNavigate} from "react-router";
import Caroussel from '../../components/carrousel/crsl';
import img1 from '../../imgs/unknown.png';
import img2 from '../../imgs/CV4-1.png';
const imgs = [img1, img2];

function LandingPage(langIsEnglish){
    const navigate = useNavigate();
    return(
        <div className='Landing'>
            <img className='portrait' src="https://sb.ecobnb.net/app/uploads/sites/7/2023/11/Place-de-la-Bourse-1170x490-1.jpg" alt="portrait of me" />
            <div className='landingCrsl'>
                <Caroussel
                imgsPath = {imgs}
                ></Caroussel>
            </div>
        </div>
    )
}

export default LandingPage;