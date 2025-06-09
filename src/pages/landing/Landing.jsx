import './landing.scss'

function LandingPage(langIsEnglish){
    return(
        <div className='Landing'>
            <img className='portrait' src="https://sb.ecobnb.net/app/uploads/sites/7/2023/11/Place-de-la-Bourse-1170x490-1.jpg" alt="portrait of me" />
            <div className='ladingRedirect'>
                <div className='projects'>
                    <p>Voir mes projets</p>
                </div>
                <div className='cv'>
                    <p>Voir mon CV</p>
                </div>
                <div className='who'>
                    <p>Qui suis-je ?</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;