import React from "react";
import eyecare from '../assets/images/eyecare.webp';
import skincheck from '../assets/images/skincheck.webp';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer" onClick={(e) => e.preventDefault()}><img src={eyecare} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>EyeCare / Netra Raksa</h2></a>
                <p className="project-tagline">Early detection app for eye diseases using ML</p>
                <p>
                    Developed a mobile app for early detection of eye diseases, using the YOLO algorithm for
                    object detection and segmentation to achieve over 90% accuracy, with precise cataract
                    severity categorization and an integrated chatbot for reliable second opinions.
                </p>

                <h3 className="project-subheading">Key Features</h3>
                <ul className="project-list">
                    <li>Cataract Severity Detection</li>
                    <li>Eye Disease Detection</li>
                    <li>Color Blind Test</li>
                    <li>EyeCare Chatbot</li>
                    <li>Find Nearest Eye Healthcare</li>
                    <li>Articles</li>
                    <li>Multi-language</li>
                    <li>Authentication</li>
                </ul>

                <h3 className="project-subheading">Technologies</h3>
                <ul className="project-tech-list">
                    <li>Langchain</li>
                    <li>OpenAI</li>
                    <li>Python</li>
                    <li>FastAPI</li>
                    <li>Docker</li>
                    <li>GCP</li>
                </ul>

                <h3 className="project-subheading">Project Links</h3>
                <div className="project-links">
                    <a href="https://docs.google.com/presentation/d/1kZ2WMP8D5-_9G0_oUQ20K7_VC0-QJVPE/edit?usp=sharing&ouid=114270833960464480443&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="project-link-btn">View Presentation and Demo</a>
                    <a href="https://www.figma.com/proto/fGuMsGrItENby4Z93NaMTv/Netra-Raksa" target="_blank" rel="noreferrer" className="project-link-btn">View Prototype</a>
                    <a href="https://drive.google.com/drive/folders/1RQ_E3Iw4UdWbjP_E-SO6rMHgrA1fwLFm" target="_blank" rel="noreferrer" className="project-link-btn">Watch Demo</a>
                    <a href="https://app.maze.co/report/Netra-Raksa/5mln9tlv9nwz7k/intro" target="_blank" rel="noreferrer" className="project-link-btn">View Analytics</a>
                </div>
            </div>

            <div className="project">
                <a href="#" target="_blank" rel="noreferrer" onClick={(e) => e.preventDefault()}><img src={skincheck} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>SkinCheck.AI</h2></a>
                <p className="project-tagline">AI-powered skincare diagnosis and recommendations</p>
                <p>
                    SkinCheck.AI leverages advanced machine learning to provide accurate skin diagnoses and
                    tailored product recommendations. It features Online Consultation, a Product Marketplace,
                    Progress Tracking, and Gamification, offering a comprehensive and engaging user experience.
                    With scalable cloud infrastructure, the company aims to lead the skincare industry and
                    deliver innovative solutions for facial care.
                </p>

                <h3 className="project-subheading">Key Features</h3>
                <ul className="project-list">
                    <li>Face Analysis</li>
                    <li>Skincare Recommendations</li>
                    <li>Skincare Routine Cards</li>
                    <li>Progress Tracker (log)</li>
                    <li>Skincare Tips</li>
                    <li>Skincare Product Marketplace</li>
                </ul>

                <h3 className="project-subheading">Technologies</h3>
            <ul className="project-tech-list">
                <li>Ultralytics</li>
                <li>YOLOv8</li>
                <li>Python</li>
                <li>FastAPI</li>
                <li>Docker</li>
                <li>GCP</li>
            </ul>

            <h3 className="project-subheading">Project Links</h3>
            <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.kreatiftek.nusantara.dermaai" target="_blank" rel="noreferrer" className="project-link-btn">Download on Play Store</a>
                <a href="https://www.instagram.com/skincheck.ai" target="_blank" rel="noreferrer" className="project-link-btn">Follow on Instagram</a>
                <a href="https://www.linkedin.com/company/skincheck-ai/" target="_blank" rel="noreferrer" className="project-link-btn">View on LinkedIn</a>
            </div>
            </div>
        </div>
    </div>
    );
}

export default Project;