import './skillsPage.scss';
import SkillsTable from '../../components/SkilssTable/SkillsTable.jsx';

function SkillsPage(){
    return(
        <div className='skills-page'>
            <div className='go-tos'>
                <div className='CV'></div>
                <div className='projects'></div>
            </div>
            <div className='skills-table'>
                <SkillsTable></SkillsTable>
            </div>
        </div>
    )
}

export default SkillsPage;