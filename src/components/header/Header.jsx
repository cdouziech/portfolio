import './header.scss'
import { NavLink } from "react-router";

function Header(){
    return(
        <div className='header'>
            <div className='name'>
                <h1>Clotaire Douziech</h1>
            </div>
            <div className='charge-bar'></div>
            <nav>
                <NavLink className="link" to='/'>Accueil</NavLink>
                <NavLink className="link" to='/projects'>Projets</NavLink>
                <NavLink className="link" to='/skills'>Compétences</NavLink>
                <NavLink className="link" to='/contact'>Contact</NavLink>
            </nav>
        </div>
    )
}

export default Header;