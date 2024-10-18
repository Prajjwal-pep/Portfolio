import React from 'react';
import Page2 from '../Page2/Page2';
import Page1 from '../Page1/Page1';
import About from '../About/About';
import fire from '../assets/Firefly-2.png';
import './Main.css';

const Main = () => {
    return (
        <div id="main">
        <img id='pfp' src={fire}></img>
        <Page1 />
        <Page2 />
        <About />
      </div>

    );
  };

  export default Main;