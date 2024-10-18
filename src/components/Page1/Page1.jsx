import React from 'react';
import './Page1.css';
import {  Link } from "react-router-dom";

const Page1 = () => {
    return (
      <div id="page1">
        <div  className="info">
        <h1>.GRIT</h1>
        <h3>Dreamer by Day, Designer by Night..</h3>
        <p>
          Hi I'm Prajjwal, from India.
        </p>
        </div>

        <div id="but">
          <div id="but1">
            <Link style={{ textDecoration: 'none' }} to='/contact'><button><h4>Contact</h4></button></Link>
          </div>
          <Link style={{ textDecoration: 'none' }} to='/about'><button><h4>Explore</h4></button></Link>
        </div>
      </div>
    );
  };

  export default Page1;