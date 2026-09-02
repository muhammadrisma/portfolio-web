import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from '../assets/images/profile.jpeg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/muhammadrisma" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/muhammad-risma-1602921bb/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Muhammad Risma</h1>

          <div className="role-row">
            <p>AI Engineer</p>
            
            <a
              href="https://drive.google.com/file/d/1q5BE9XIrWcrw2Rm34x4Rx_41XzSf_oSL/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="cv-download-btn"
            >
              Download CV
            </a>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/muhammadrisma" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/muhammad-risma-1602921bb/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;