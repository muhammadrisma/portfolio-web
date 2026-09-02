import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "YOLO",
    "MobileNetV2",
    "Computer Vision",
    "Stable Diffusion",
    "ComfyUI",
    "CLIP",
];

const labelsSecond = [
    "LangGraph",
    "LangChain",
    "RAG",
    "Gemini API",
    "OpenAI",
    "Qdrant",
    "Vanna AI",
    "NLP",
    "LLMs",
];

const labelsThird = [
    "FastAPI",
    "WebSocket",
    "Docker",
    "Nginx",
    "ClickHouse",
    "PostgreSQL",
    "pgvector",
    "Redis",
    "MongoDB",
    "CI/CD",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning & Computer Vision</h3>
                    <p>I train vision models with transfer learning, YOLO, and MobileNetV2 — including 97% accuracy acne classification — and run real-time generation in ComfyUI with Stable Diffusion for background replacement, clothing swaps, and beautification.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>NLP, LLMs & Agentic AI</h3>
                    <p>I design multi-agent systems with LangGraph and LangChain, plus RAG with hybrid search and reranking, Text-to-SQL, and chatbots for enterprise and WhatsApp workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>MLOps & Production Systems</h3>
                    <p>I serve those models as FastAPI and WebSocket APIs behind Docker and Nginx, with ClickHouse, PostgreSQL, Redis, and MongoDB — CI/CD, GPU batch pipelines, and up to 3× throughput with a 62% efficiency gain.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
