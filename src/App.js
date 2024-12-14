import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Accueil from './pages/accueil/Accueil';
import Services from './pages/services/Services';
import Realizations from './pages/realizations/Realizations';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import MentionsLegales from './pages/mentions/mentions';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <div>        
        <Routes>          
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realizations" element={<Realizations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/mentions" element={<MentionsLegales />} />
        </Routes>        
      </div>
      <Footer />
    </Router>
  );
};

export default App;
