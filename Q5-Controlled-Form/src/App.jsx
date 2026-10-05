import React, { useState } from 'react';

const INITIAL_FORM_STATE = {
  name: 'Taha Badami',
  email: 'example@gmail.com',
  course: 'MCA',
  phone: '9876543210',
  city: 'Pune',
};

export default function App() {
  // Controlled component state held in React useState
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [submittedBanner, setSubmittedBanner] = useState(false);

  // Single generic onChange handler updating state dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSubmittedBanner(false);
  };

  // Reset form handler
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      course: '',
      phone: '',
      city: '',
    });
    setSubmittedBanner(false);
  };

  // Submit handler (pure client-side)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedBanner(true);
  };

  return (
    <div className="app-container">
      {/* Assignment Header */}
      <header className="assignment-header">
        <div className="badge">Practical Assignment 05</div>
        <h1>Controlled React Form</h1>
        <p className="subtitle">
          Synchronizing HTML inputs with React state via <code>value</code> and <code>onChange</code>.
        </p>
      </header>

      {/* Main Grid: Form on Left, Real-Time Preview on Right */}
      <div className="layout-grid">
        {/* Controlled Form Card */}
        <section className="form-card">
          <div className="card-header">
            <div className="header-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              <h2>Student Enrollment Form</h2>
            </div>
            <span className="state-badge">useState Controlled</span>
          </div>

          <form className="form-body" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />
            </div>

            {/* Course Input / Select */}
            <div className="form-group">
              <label htmlFor="course">Course / Degree</label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="e.g. MCA, B.Tech, MSc"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                maxLength={10}
                required
              />
            </div>

            {/* City Input */}
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city (e.g. Pune)"
                required
              />
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={handleReset}>
                Reset
              </button>
              <button type="submit" className="btn btn-primary">
                Save Details
              </button>
            </div>
          </form>

          {submittedBanner && (
            <div className="submission-banner">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Form submitted and logged into React component state!</span>
            </div>
          )}
        </section>

        {/* Real-Time Live Preview Card */}
        <section className="preview-card">
          <div className="preview-header">
            <div className="live-indicator">
              <span className="live-dot"></span>
              <span className="live-text">Live Preview</span>
            </div>
            <span className="sync-note">Instant State Sync</span>
          </div>

          <div className="preview-body">
            <h3 className="preview-title">Entered Information</h3>
            <p className="preview-subtitle">
              As you type in any input, React re-renders this preview instantly from state.
            </p>

            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">{formData.name || <em className="placeholder">—</em>}</span>
              </div>

              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value email-value">{formData.email || <em className="placeholder">—</em>}</span>
              </div>

              <div className="info-item">
                <span className="info-label">Course:</span>
                <span className="info-value">{formData.course || <em className="placeholder">—</em>}</span>
              </div>

              <div className="info-item">
                <span className="info-label">Phone:</span>
                <span className="info-value phone-value">{formData.phone || <em className="placeholder">—</em>}</span>
              </div>

              <div className="info-item">
                <span className="info-label">City:</span>
                <span className="info-value">{formData.city || <em className="placeholder">—</em>}</span>
              </div>
            </div>

            {/* Current State JSON inspector */}
            <div className="state-snippet">
              <div className="snippet-title">React State Object:</div>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
          </div>
        </section>
      </div>

      {/* Concepts Section */}
      <section className="concepts-card">
        <div className="concepts-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <h2>Concepts Used</h2>
        </div>
        <div className="concepts-grid">
          <div className="concept-item">
            <div className="concept-icon">&#9881;</div>
            <div className="concept-info">
              <h3>Controlled Components</h3>
              <p>Form inputs don't maintain their own DOM state; they are completely controlled by React.</p>
            </div>
          </div>

          <div className="concept-item">
            <div className="concept-icon">{`{ }`}</div>
            <div className="concept-info">
              <h3>useState</h3>
              <p>Holds the single source of truth for the entire form object across re-renders.</p>
            </div>
          </div>

          <div className="concept-item">
            <div className="concept-icon">v</div>
            <div className="concept-info">
              <h3>value &amp; onChange</h3>
              <p><code>value</code> binds input text to state; <code>onChange</code> updates state on each keystroke.</p>
            </div>
          </div>

          <div className="concept-item">
            <div className="concept-icon">&#9889;</div>
            <div className="concept-info">
              <h3>Real-Time Rendering</h3>
              <p>Any state change triggers a reactive render pass that updates the preview instantly.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="assignment-footer">
        <p>Web Development Practical Lab &bull; Question 5 &bull; Independent Vite + React App</p>
      </footer>
    </div>
  );
}
