// import React from 'react';
// import './Nav.css';


// const Nav = () => {
//     return (
//       <div id="nav">
//         <h1>.Portfolio</h1>
//         <p>Home</p>
//         <p>Courses</p>
//         <p>Streaks</p>
//         <p>About</p>
//       </div>
//     );
//   };
  
//   export default Nav;










import React, { useEffect, useState } from 'react';
import {  Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      console.log(window.scrollY);
      if (scrollTop > 0) {
        setScrolled(true); 
      } else {
        setScrolled(false); 
      }
    };

    
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="nav" className={scrolled ? 'scrolled' : ''}>
      <h1>.Portfolio</h1>
      <Link style={{ textDecoration: 'none' }} to='/'><p id='firstp'>Home</p></Link>
      <Link style={{ textDecoration: 'none' }} to='/certifications'><p>Courses</p></Link>
      <p>Streaks</p>
      <Link style={{ textDecoration: 'none' }} to='/about'><p>About</p></Link>
    </div>
  );
};

export default Nav;


