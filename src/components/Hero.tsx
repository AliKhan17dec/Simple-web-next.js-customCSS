// src/components/Hero.tsx

import React from 'react';
import '../styles/hero.css'; // Adjust the path based on your file structure

const Hero = () => {
  return (
    <div>
      <div className="centered-container">
        <h1 className="main-heading">Web Development Languages</h1>
      </div>

      <div className="section-heading">
        <h2 className="section-heading">Front-End :</h2>
        <ul className="list-container">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
        </ul>
      </div>

      <div className="section-heading">
        <h2 className="section-heading">Back-End :</h2>
        <ul className="list-container">
          <li>Python</li>
          <li>PHP</li>
          <li>Java</li>
          <li>Ruby</li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
