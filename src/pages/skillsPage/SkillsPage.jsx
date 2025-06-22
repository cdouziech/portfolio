import './skillsPage.scss';
import SkillsTable from '../../components/skillsTable/SkillsTable.jsx';

function SkillsPage(){
    return(
        <div className='skills-page'>
            <div className='go-tos'>
                <a  className='CV' href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    Voir mon CV
                </a>
                <div className='projects'>
                    Voir mes projets
                </div>
            </div>
            <div className='skills-table-container'>
                <SkillsTable></SkillsTable>
            </div>
        </div>
    )
}

export default SkillsPage;