import React from 'react';
import './About.css';
import sree from '../assets/sreekesh.jpeg'
import nir from '../assets/neeraj.png'
import tan from '../assets/tanvir7.jpeg'
import {  Link } from "react-router-dom";

const About = () => {
    return (
      <>
        <div className="about">
        <h2>More About Me...</h2>
  
  
  <div className='podcast'>
  <figure className="image-block">
      <img src={sree} />
      <figcaption>
          <h3>
          Sreekesh Iyer: From almost KT to JP Morgan to building global discord communities
          </h3>
          {/* <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> */}
          <Link style={{ textDecoration: 'none' }} target='blank' to='https://open.spotify.com/episode/6tvMS3fnuwlSx3SHprfRFE?si=FlJkcyX_TAOT6HctUvoacA'>
          <button>
              More Info
          </button>
          </Link>
      </figcaption>
  </figure>
  <figure className="image-block">
      <img src={nir} ></img>
      <figcaption>
          <h3>
          Kota, Florida and CSE in India vs US
          </h3>
          {/* <p>Our latest podcast episode is now live, featuring a remarkable guest who not only snagged a whopping 90% scholarship but also self-funded their college fees while hustling in a part-time job in sunny Florida. Learn more on his exciting journey as a student from Kota to Florida and difference in CSE in India vs US. In the podcast we tried to get an insight of how's life in florida and intriguing stories.</p> */}
          <Link style={{ textDecoration: 'none' }} target='blank' to='https://open.spotify.com/episode/4x5LmP0v8pHOfx9af4ySEQ?si=c8f147fe2f9b481a'>
          <button>
              More Info
          </button>
          </Link>
      </figcaption>
  </figure>
  <figure className="image-block">
      <img src={tan} alt="" />
      <figcaption>
          <h3>
          Stoicism, greed, dopamine, pleasure vs satisfaction
          </h3>
          {/* <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> */}
          <Link style={{ textDecoration: 'none' }} target='blank' to='https://open.spotify.com/episode/6wp7oJeDYaTlNOxIjRPN6N?si=pl6YL9rUS_ut1AsHIZjXrA'>
          <button>
              More Info
          </button>
          </Link>
      </figcaption>
  </figure>
  </div>
  
  
  <div className="container">
          <div className="circle0">
            <div className="circle1">
              <div className="circle2">
                <div className="circle3">
                  <div className="circle4">
                    <div className="circle5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>Work In Progress...</p>
        </div>
        <div className="last">
          <Link style={{ textDecoration: 'none' }} target='blank' to="https://www.linkedin.com/in/prajjwal-pandey-a82b44264/">
            <p>LinkedIn: Prajjwal Pandey</p>
          </Link>
          <Link style={{ textDecoration: 'none' }} target='blank' to="https://github.com/Prajjwal-pep">
            <p>GitHub: Prajjwal-pep</p>
          </Link>
          <p>Discord: _pep</p>
        </div>
      </div>
      </>
    );
  };

  export default About;