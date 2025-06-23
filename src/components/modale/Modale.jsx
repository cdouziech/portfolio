import './modale.scss';
function Modale({ project, onClose }) {
    return (
        <div className="shadow" onClick={onClose}>
            <div className="modale" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>Fermer</button>
                <h2>{project.title}</h2>
                <img src={project.image} alt={project.title} />
                <p>{project.description}</p>
            </div>
        </div>
    );
}

export default Modale;
