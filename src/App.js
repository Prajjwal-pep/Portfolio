import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Certifications from './components/Certifications/Certifications';
import './App.css'; // Assuming you have your styles in a separate CSS file
import Internships from './components/Internships/Internships';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
       <div>
     
      <Router>
      <Nav /> 
     <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/internships" element={<Internships />} />
      <Route path="/projects" element={<Projects />} />
      </Routes> 
      </Router>
      
       </div>
  );
};




export default App;
