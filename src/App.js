import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './pages/accueil/Accueil';
import Services from './pages/services/Services';
import Realizations from './pages/realizations/Realizations';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';

const App = () => {
  return (
    <Router>
      <div>
        {/* Header component here */}
        <Routes>
          {/* Use 'element' and pass JSX */}
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realizations" element={<Realizations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        {/* Footer component here */}
      </div>
    </Router>
  );
};

export default App;
