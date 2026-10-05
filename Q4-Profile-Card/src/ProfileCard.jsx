import React from 'react';

/**
 * ProfileCard Component
 * Receives all student/developer profile data dynamically via React Props.
 * Props:
 * - name: string (Student / User full name)
 * - role: string (Designation or course, e.g. 'MCA Student & Developer')
 * - image: string (Profile image URL)
 * - description: string (Short bio / profile summary)
 * - skills: array of strings (Optional technical skills)
 * - location: string (Optional city / institute)
 */
export default function ProfileCard({
  name,
  role = 'Software Developer',
  image,
  description,
  skills = ['JavaScript', 'React', 'CSS3', 'Git'],
  location = 'Pune, India',
}) {
  return (
    <article className="profile-card">
      {/* Decorative Card Top Banner */}
      <div className="card-banner">
        <span className="banner-badge">Active Scholar</span>
      </div>

      <div className="card-content">
        {/* Profile Avatar with Hover Zoom & Ring */}
        <div className="avatar-wrapper">
          <img
            src={image}
            alt={`${name}'s avatar`}
            className="avatar-img"
            loading="lazy"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80';
            }}
          />
          <span className="online-indicator" title="Online now"></span>
        </div>

        {/* Identity Information (All rendered directly from PROPS) */}
        <div className="profile-identity">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-role">{role}</p>
          <div className="location-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>{location}</span>
          </div>
        </div>

        {/* Short Description passed via Props */}
        <p className="profile-description">{description}</p>

        {/* Dynamic Skills Tag List */}
        {skills && skills.length > 0 && (
          <div className="skills-container">
            <span className="skills-label">Expertise</span>
            <div className="skills-pills">
              {skills.map((skill, idx) => (
                <span key={idx} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Card Action Buttons */}
        <div className="profile-actions">
          <button type="button" className="btn-profile-primary" onClick={() => alert(`Connecting with ${name}!`)}>
            Connect
          </button>
          <button type="button" className="btn-profile-secondary" onClick={() => alert(`Viewing portfolio for ${name}...`)}>
            Portfolio
          </button>
        </div>
      </div>
    </article>
  );
}
