import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Fixed import
import './main.scss';

import Landing from './pages/landing/Landing.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'

import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
);
