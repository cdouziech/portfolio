import './footer.scss'
import frenchFlag from '../../assets/french-flag.svg'
import UKFlag from '../../assets/united-kingdom-flag.svg'
function Footer(){
    return(
        <div className='footer'>
            <div className="barber-bar">
                coucou
            </div>
            <div className='flags'>
                <img className='flag' src={frenchFlag} alt="french flag" />
                <img className='flag' src={UKFlag} alt="united kingdom flag" />
            </div>
        </div>
    )
}

export default Footer