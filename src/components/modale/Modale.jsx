import './modale.scss';
function Modale({ project, onClose, logos}) {
    return (
        <div className="shadow" onClick={onClose}>
            <div className="modale" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>Fermer</button>
                <div className='modale-content'>
                    <img src={project.image} alt={project.title} />
                    <div className='modale-text-and-icons'>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        {logos.map((logo)=>
                            <img key={logo.id} src={logo.src} alt={logo.alt}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modale;
