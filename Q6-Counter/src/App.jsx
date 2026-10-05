import React, { useState } from 'react';

export default function App() {
  // 1. Primary state variable required by assignment
  const [count, setCount] = useState(0);

  // Optional step enhancement with default step of 1
  const [step, setStep] = useState(1);

  // State update handlers
  const handleIncrement = () => {
    setCount((prev) => prev + step);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  // Determine visual state theme based on count value
  const getCountState = () => {
    if (count > 0) return 'positive';
    if (count < 0) return 'negative';
    return 'neutral';
  };

  const stateClass = getCountState();

  return (
    <div className="app-container">
      {/* Assignment Header */}
      <header className="assignment-header">
        <div className="badge">Practical Assignment 06</div>
        <h1>React Counter with useState</h1>
        <p className="subtitle">
          Interactive state management, state updater dispatching, and reactive UI re-rendering.
        </p>
      </header>

      {/* Main Counter Card */}
      <main className={`counter-card ${stateClass}`}>
        <div className="card-top">
          <span className="state-pill">
            {stateClass === 'positive' && '● Positive (+)'}
            {stateClass === 'negative' && '● Negative (−)'}
            {stateClass === 'neutral' && '● Zero (Neutral)'}
          </span>
          <span className="hook-tag">useState Hook</span>
        </div>

        {/* Prominent Counter Value Display */}
        <div className="display-area">
          <div key={count} className="count-value-wrapper">
            <span className="count-value">{count}</span>
          </div>
          <span className="display-label">Current Count</span>
        </div>

        {/* Step Customizer (Optional Enhancement) */}
        <div className="step-selector">
          <label htmlFor="step-input" className="step-label">Step Value:</label>
          <div className="step-buttons">
            {[1, 5, 10].map((val) => (
              <button
                key={val}
                type="button"
                className={`step-btn ${step === val ? 'active' : ''}`}
                onClick={() => setStep(val)}
              >
                &plusmn;{val}
              </button>
            ))}
          </div>
        </div>

        {/* Required Action Buttons */}
        <div className="buttons-grid">
          {/* Decrement Button */}
          <button
            type="button"
            className="btn btn-action btn-dec"
            onClick={handleDecrement}
            aria-label={`Decrement by ${step}`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span className="btn-text">Decrement</span>
            <span className="btn-sub">-{step}</span>
          </button>

          {/* Reset Button */}
          <button
            type="button"
            className="btn btn-action btn-reset"
            onClick={handleReset}
            disabled={count === 0}
            aria-label="Reset to zero"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
            </svg>
            <span className="btn-text">Reset</span>
            <span className="btn-sub">to 0</span>
          </button>

          {/* Increment Button */}
          <button
            type="button"
            className="btn btn-action btn-inc"
            onClick={handleIncrement}
            aria-label={`Increment by ${step}`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span className="btn-text">Increment</span>
            <span className="btn-sub">+{step}</span>
          </button>
        </div>
      </main>

      <footer className="assignment-footer">
        <p>Web Development Practical Lab &bull; Question 6 &bull; Independent Vite + React App</p>
      </footer>
    </div>
  );
}
