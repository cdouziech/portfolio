import './modale.scss';
import { useEffect } from "react";
function Modale({ project, onClose, logos, github}) {
    useEffect(() => {
        // Désactive le scroll du body quand la modale s'ouvre
        document.body.style.overflow = 'hidden';
        
        // Réactive le scroll du body quand la modale se ferme
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (
        <div className="shadow" onClick={onClose}>
            <div className="modale" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>Fermer</button>
                <div className='modale-content'>
                    <img src={project.image} alt={project.title} />
                    <div className='modale-text-and-icons'>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <a href={github}>Voir sur GitHub</a>
                        <div className='icons'>
                            {logos.map((logo)=>
                                <img key={logo.index} src={logo.src} alt={logo.alt}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modale;
