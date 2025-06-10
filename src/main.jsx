// IMPORTS
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './main.scss';

// PAGES
import Landing from './pages/landing/Landing.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import ProjectsPage from './pages/projectsPage/ProjectsPage.jsx';
import cvPage from './pages/cvPage/cvPage.jsx';

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
        <Route path="/cv" element={<cvPage />}/>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
);
