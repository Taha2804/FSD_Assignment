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

      {/* Interactive Props Inspector */}
      <section className="props-inspector">
        <div className="inspector-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <h3>Active JSX Props Passed to &lt;ProfileCard /&gt;</h3>
        </div>
        <pre className="code-block">
{`<ProfileCard
  name="${activeProfile.name}"
  role="${activeProfile.role}"
  image="${activeProfile.image.slice(0, 32)}..."
  description="${activeProfile.description}"
  location="${activeProfile.location}"
/>`}
        </pre>
      </section>

      {/* Educational Concepts Section */}
      <section className="concepts-card">
        <div className="concepts-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <h2>Concept Used: React Props</h2>
        </div>
        <div className="concepts-content">
          <p className="concept-explanation">
            <strong>What are Props?</strong> Props (short for <em>properties</em>) are arguments passed into React components. 
            They are passed from parent components (here, <code>App.jsx</code>) down to child components 
            (<code>ProfileCard.jsx</code>) via JSX attributes.
          </p>
          <ul className="concept-bullets">
            <li>
              <strong>Unidirectional Data Flow:</strong> Data travels downward from parent to child. The <code>ProfileCard</code> component does not hardcode user information; it dynamically renders whatever data it receives.
            </li>
            <li>
              <strong>Reusability:</strong> A single component template renders completely different students or team members simply by passing new prop objects.
            </li>
            <li>
              <strong>Immutability:</strong> In React, props are read-only. A child component must never modify its received props directly.
            </li>
          </ul>
        </div>
      </section>

      <footer className="assignment-footer">
        <p>Web Development Practical Lab &bull; Question 4 &bull; Independent Vite + React App</p>
      </footer>
    </div>
  );
}
