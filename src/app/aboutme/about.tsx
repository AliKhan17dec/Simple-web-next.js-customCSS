// src/pages/page.tsx

import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';
import './style.css'; // Adjust the path as needed

const Page = () => {
  return (
    <div>
      <div className="container">
        <div className="flex-container">
          <div className="title"><span>IT</span> Skills</div>
          <ul className="menu">
            <li className="menu-link">
              <Link href="/">Home</Link>
            </li>
          </ul>        
        </div>
      </div>

      <div id="about" className=" about-section">
        <h2 className="about-heading about-heading-md">About me</h2>
        <p className="about-text">
          Hi, I am Ali Khan, an aspiring DevOps enthusiast with a passion for optimizing software development and delivery processes. 
          With a foundational background in cloud technologies, programming, and infrastructure management, I am eager to dive into 
          real-world projects and contribute to dynamic DevOps environments. My skills span across Linux administration, front-end 
          development, and cloud services like AWS. I am a quick learner, committed to continuous improvement, and excited about 
          collaborating with teams to deliver efficient and scalable solutions. Let’s connect and build something amazing together!
        </p>
      </div>

      <div className="icon-container">
        <a href="mailto:alikhan.dec17@gmail.com" data-aos="zoom-in-up"><AiOutlineMail size={50} /></a>
        <a href="https://github.com/AliKhan17dec" target="_blank" data-aos="zoom-in-up"><FaGithub size={40} /></a>
        <a href="https://www.linkedin.com/in/ali-khan-8694162b7/" target="_blank" data-aos="zoom-in-up"><CiLinkedin size={50} /></a>
      </div>
    </div>
  );
}

export default Page;
