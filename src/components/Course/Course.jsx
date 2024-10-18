import React from 'react';
import './Course.css'

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

  export default Course;