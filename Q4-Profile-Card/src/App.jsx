import React, { useState } from 'react';
import ProfileCard from './ProfileCard.jsx';

// Sample profile datasets to demonstrate component reusability via Props
const SAMPLE_PROFILES = [
  {
    id: 1,
    name: 'Taha Badami',
    role: 'MCA Student & Full Stack Aspirant',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80',
    description: 'MCA student interested in cybersecurity, web development, and modern cloud architectures.',
    skills: ['Cybersecurity', 'React', 'Node.js', 'Python', 'Tailwind'],
    location: 'Pune, Maharashtra',
  },
  {
    id: 2,
    name: 'Sara Jenkins',
    role: 'Frontend UI/UX Specialist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&auto=format&fit=crop&q=80',
    description: 'Design technologist focused on design systems, micro-interactions, and accessible web standards.',
    skills: ['Figma', 'React', 'TypeScript', 'CSS Animation'],
    location: 'Bangalore, India',
  },
  {
    id: 3,
    name: 'Alex Rivera',
    role: 'Backend & Systems Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80',
    description: 'Passionate about distributed microservices, REST APIs, PostgreSQL optimization, and Docker containers.',
    skills: ['Go', 'PostgreSQL', 'Docker', 'GraphQL'],
    location: 'Hyderabad, India',
  },
];

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProfile = SAMPLE_PROFILES[selectedIdx];

  return (
    <div className="app-container">
      {/* Assignment Header */}
      <header className="assignment-header">
        <div className="badge">Practical Assignment 04</div>
        <h1>React Profile Card with Props</h1>
        <p className="subtitle">
          Demonstrating component reusability and unidirectional data flow using React Props.
        </p>
      </header>

      {/* Profile Selector Tabs */}
      <div className="profile-selector">
        <span className="selector-label">Select Profile Prop Data:</span>
        <div className="profile-tab-buttons">
          {SAMPLE_PROFILES.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              className={`tab-btn ${selectedIdx === idx ? 'active' : ''}`}
              onClick={() => setSelectedIdx(idx)}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main ProfileCard Demonstration (Props passed from parent App) */}
      <main className="card-stage">
        <ProfileCard
          name={activeProfile.name}
          role={activeProfile.role}
          image={activeProfile.image}
          description={activeProfile.description}
          skills={activeProfile.skills}
          location={activeProfile.location}
        />
      </main>

      <footer className="assignment-footer">
        <p>Web Development Practical Lab &bull; Question 4 &bull; Independent Vite + React App</p>
      </footer>
    </div>
  );
}
