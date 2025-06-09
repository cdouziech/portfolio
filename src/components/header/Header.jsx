import './header.scss'
import { NavLink } from "react-router";

function Header(){
    return(
        <div className='header'>
            <div className='name'>
                <h1>Clotaire Douziech</h1>
            </div>
            <div className='charge-bar'>Développeur web junior</div>
            <nav>
                <NavLink className="link" to='/'>Accueil</NavLink>
                <NavLink className="link" to='/About'>A propos</NavLink>
            </nav>
        </div>
    )
}

export default Header;