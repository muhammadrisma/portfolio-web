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
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;