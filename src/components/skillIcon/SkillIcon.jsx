import './skillIcon.scss';

function SkillIcon({ src, alt, onClick }) {
    return (
        <img className='icon' src={src} alt={alt} onClick={onClick} />
    );
}

export default SkillIcon;
