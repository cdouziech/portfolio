import './skillsPage.scss';
import reactsvg from "../../assets/react.svg";

const technologies = {
  react: {
    id: 1,
    titre: "React.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React icon"
  },
  node: {
    id: 2,
    titre: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js icon"
  },
  express: {
    id: 3,
    titre: "Express",
    image: "https://img.icons8.com/color/512/express-js.png",
    alt: "Express icon"
  },
  html: {
    id: 4,
    titre: "HTML",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "HTML icon"    
  },
  css: {
    id: 5,
    titre: "CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "CSS icon"
  },
  javascript: {
    id: 6,
    titre: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript icon"
  },
  postman: {
    id: 7,
    titre: "Postman",
    image: "https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8",
    alt: "Postman icon"
  },
  mongodb: {
    id: 8,
    titre: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB icon"
  },
  vite: {
    id: 9,
    titre: "Vite",
    image: "https://vitejs.dev/logo-with-shadow.png",
    alt: "Vite icon"
  },
  lighthouse: {
    id: 10,
    titre: "Lighthouse",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Google_Lighthouse_logo.svg/1200px-Google_Lighthouse_logo.svg.png",
    alt: "Lighthouse icon"
  },
  wave: {
    id: 11,
    titre: "WAVE",
    image: "https://img.crx4chrome.com/28/ce/ba/jbbplnpkjmmeebjpijfedlgcdilocofh-logo.webp",
    alt: "WAVE extension icon"
  },
  notion: {
    id: 12,
    titre: "Notion",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png",
    alt: "Notion icon"
  },
  feeder: {
    id: 13,
    titre: "Feedly",
    image: "https://f.hellowork.com/bdmtools/2019/12/feedly-logo-150x150.png",
    alt: "Feedly icon"
  },
  vscode: {
    id: 14,
    titre: "VSCode",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    alt: "VSCode icon"
  },
    Figma: {
    id: 15,
    titre: "Figma",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1365px-Figma-logo.svg.png",
    alt: "Figma icon"
  },
  github: {
    id: 16,
    titre: "GitHub",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
    alt: "github icon"
  },
  sass: {
    id: 17,
    titre: "Sass",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png",
    alt: "Sass icon"
  },
};



const skills = {
  accessibilite: {
    id: 1,
    titre: "Accessibilité",
  },
  seo: {
    id: 2,
    titre: "SEO",
  },
  Veille: {
    id: 3,
    titre: "Veille informationelle",
  },
  agile: {
    id: 4,
    titre: "Méthodes agiles",
  },
  api: {
    id: 5,
    titre: "Implémenter des API",
  },
  nosql: {
    id: 6,
    titre: "Bases de données NoSQL",
  },
  responsive: {
    id: 7,
    titre: "Responsive design",
  },
  maquette: {
    id: 8,
    titre: "Reproduire une maquette",
  },
  Versionning: {
    id: 9,
    titre: "Versionning",
  },
  deploy: {
    id: 10,
    titre: "Déployer un site en ligne",
  },
  crud: {
    id: 11,
    titre: "Opérations CRUD",
  },

};



function SkillsPage(){
    return(
        <div className='skills-page'>
           <div className='technologies-container'>
                <h1>Technologies </h1>
                <div className='box-container'>
                    {Object.values(technologies).map((tech)=> 
                        <div className='box' key={tech.id}>
                            <img src={tech.image} alt={tech.alt} />
                            <p>{tech.titre}</p>
                        </div>
                    )}
                </div>
           </div>
           <div className='skills-container'>
                <h1>Compétences </h1>
                <div className='box-container'>
                    {Object.values(skills).map((skl)=> 
                        <div className='box' key={skl.id}>
                            <p>{skl.titre}</p>
                        </div>
                    )}
                </div>
           </div>
        </div>
    )
}

export default SkillsPage;