import React from "react";
import {  Link } from "react-router-dom";
import './Page2.css'
import Course from "../Course/Course";
import a from  '../assets/certis.jpg'
import b from '../assets/project.png'
import  c from '../assets/workplace.webp'
import d from '../assets/Charts-bro.png'




const Page2 = () => {
  return (

  
    <div id="page2">
    <div id="title"></div>
    <Link style={{textDecoration: 'none'}} to='/certifications' ><Course id="co1" imgSrc={a} /></Link>
    <Link style={{textDecoration: 'none'}} to='/projects' ><Course id="co2" imgSrc={b} /></Link>
    <Link style={{textDecoration: 'none'}} to='/internships' ><Course id="co3" imgSrc={c} /></Link>
    <Course id="co4" imgSrc={d} />
  </div>    

    
  );
};

// const CourseCertificates = () => (
//   <div>
//     <h2>Course Certificates</h2>
//     <p>Details about course certificates...</p>
//   </div>
// );

// const Projects = () => (
//   <div>
//     <h2>Projects</h2>
//     <p>Details about projects...</p>
//   </div>
// );

// const Internships = () => (
//   <div>
//     <h2>Internships</h2>
//     <p>Details about internships...</p>
//   </div>
// );

// const Competitions = () => (
//   <div>
//     <h2>Competitions</h2>
//     <p>Details about competitions...</p>
//   </div>
// );

export default Page2;
