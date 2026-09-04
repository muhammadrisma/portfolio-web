import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Dec 2025 - May 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">eDot (Nabati Group), Indonesia</h4>
            <p>
              Built a production-grade Agentic AI platform (LangGraph, LangChain, FastAPI, Docker, Gemini API, ClickHouse) for real-time multi-agent orchestration. Developed Research, Data Analysis, RAG, Presentation, and Text-to-SQL agents (Vanna AI), with state checkpointing, intelligent routing, and retry mechanisms to boost reliability and scalability.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Dec 2024 - Dec 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">PT Midory Cipta Kreasi (Inti Nya Group), Jakarta Utara</h4>
            <p>
              Deployed real-time image generation with Stable Diffusion (CLIP, Flux, UNet, CatVton) in ComfyUI via FastAPI/WebSocket. Built a RAG chatbot with Qdrant, MongoDB, and OpenAI embeddings featuring hybrid search and reranking, plus a GPU-optimized face attribute service achieving 3x performance gains.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2024 - Jan 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Mentor</h3>
            <h4 className="vertical-timeline-element-subtitle">Bangkit Academy, Jakarta</h4>
            <p>
              Guided a cohort of students through machine learning concepts and applications, collaborating with the instructional team to address challenges. Helped 93% of students in the class graduate through personalized mentoring and consistent feedback.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2023 - Jul 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder & ML Engineer Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">Skincheck.AI, Jakarta</h4>
            <p>
              Secured 140 million Rupiah incubation from Google and Dikti. Developed a transfer learning solution with MobileNetV2 and YOLO, achieving 97% accuracy in acne type classification, while collaborating with Mobile and Cloud Computing teams on system integration.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2024 - Jun 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist</h3>
            <h4 className="vertical-timeline-element-subtitle">Kementerian Keuangan Republik Indonesia · Internship, Central Jakarta</h4>
            <p>
              Researched and implemented semantic search for the LNSW Contact Center, combining it with keyword retrieval in a hybrid strategy. Fine-tuned a Retrieval Augmented Generation (RAG) model to raise search relevance by 62% for diverse user queries.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2023 - Dec 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">PT. Yutaka Manufacturing Indonesia (Astra Group) · Internship, Cikarang Barat</h4>
            <p>
              Introduced Leantime for project tracking and collaboration, and built a MERN-based supplier inspection system (MongoDB, Express.js, React, Node.js). Process and communication improvements cut supplier inspection time by 50%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2022 - Jan 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Channel Business Development Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">Alibaba Cloud · Internship</h4>
            <p>
              Generated MQLs and SQLs with Marketing and Solution Architect teams, set sales goals and forecasts, and ran partner meetings to grow pipeline. Earned ACA Business User, ACA Cloud Native, and Alibaba Cloud Clouder certifications and applied them to business processes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Mar 2022 - Jun 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Student Ambassador</h3>
            <h4 className="vertical-timeline-element-subtitle">Alibaba Cloud, Indonesia</h4>
            <p>
              Named among the top 20 Alibaba Cloud Student Ambassadors in Indonesia and later one of four interns from that cohort. Promoted campus events, ran a high-attendance university program, and built a brand campaign to grow student engagement with cloud computing.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;