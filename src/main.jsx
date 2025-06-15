// IMPORTS
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './main.scss';

// PAGES
import Landing from './pages/landing/Landing.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import ProjectsPage from './pages/projectsPage/ProjectsPage.jsx';
import SkillsPage from './pages/skillsPage/SkillsPage.jsx';
import ProjectPage from './pages/projectPage/projectPage.jsx';
import Contact from './pages/Contact/Contact.jsx'

// COMPONENTS
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';

// Rooting
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path="/projects/:id" element={<ProjectPage />}/>
        <Route path="/skills" element={<SkillsPage />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
);
// compténces plutot que cv
// rubrique contact 