import React from 'react';
import './App.css'; // Assuming you have your styles in a separate CSS file

const App = () => {
  return (
    <div>
      <Nav />
      <Main />
    </div>
  );
};

const Nav = () => {
  return (
    <div id="nav">
      <h1>.Bros&.Bucks</h1>
      <p>Home</p>
      <a href="./courses.html"><p>Courses</p></a>
      <p>Streaks</p>
      <p>About Us</p>
    </div>
  );
};

const Main = () => {
  return (
    <div id="main">
      <video
        autoPlay
        loop
        muted
        src="../assets/pexels-tima-miroshnichenko-5319759 (2160p).mp4"
      />
      <Page1 />
      <Page2 />
      <About />
    </div>
  );
};

const Page1 = () => {
  return (
    <div id="page1">
      <h1>Fear.No.Failure</h1>
      <h3>scubido pumpa something more</h3>
      <p>
        More than something more Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do.
      </p>
      <div id="but">
        <div id="but1">
          <a href="./signin.html">
            <button><h4>Sign in</h4></button>
          </a>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            fill="white"
            className="bi bi-rocket-takeoff-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218..." />
          </svg>
          <h4>Explore</h4>
        </button>
      </div>
    </div>
  );
};

const Page2 = () => {
  return (
    <div id="page2">
      <div id="title"></div>
      <Course id="co1" imgSrc="../assets/Charts-bro.png" />
      <Course id="co2" imgSrc="../assets/Hand coding-bro.png" />
      <Course id="co3" imgSrc="../assets/Charts-bro.png" />
      <Course id="co4" imgSrc="../assets/cyber bullying-bro.png" />
    </div>
  );
};

const Course = ({ id, imgSrc }) => {
  return (
    <div className="course" id={id}>
      <div className={`${id}a`}>
        <div className={`${id}b`}>
          <img src={imgSrc} alt="Course" />
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about">
      <h2>Inception of Your new version...</h2>
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
        <svg xmlns="http://www.w3.org/2000/svg" height="32" fill="white" className="bi bi-lock-fill" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2z" />
          <path d="M3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        </svg>
        <p>Work In Progress...</p>
      </div>
      <div className="last">
        <a href="https://www.linkedin.com/in/prajjwal-pandey-a82b44264/">
          <p>LinkedIn: Prajjwal Pandey</p>
        </a>
        <a href="https://github.com/Prajjwal-pep">
          <p>GitHub: Prajjwal-pep</p>
        </a>
        <p>Discord: _pep</p>
      </div>
    </div>
  );
};

export default App;
