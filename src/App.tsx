import React, { useState } from 'react';
import {
  Calculator,
  CheckSquare,
  ClipboardCheck,
  UserSquare2,
  FileEdit,
  Binary,
  FolderTree,
  Terminal,
  ExternalLink,
  BookOpen,
  Code2,
  Layers,
  Sparkles,
  ChevronRight,
  MonitorCheck,
  RefreshCw
} from 'lucide-react';

interface AssignmentMeta {
  id: string;
  number: string;
  title: string;
  category: 'vanilla' | 'react';
  folder: string;
  description: string;
  icon: React.ElementType;
  tech: string[];
  concepts: string[];
  runCommand: string;
  previewUrl?: string;
  keyFiles: string[];
}

const ASSIGNMENTS: AssignmentMeta[] = [
  {
    id: 'q1',
    number: 'Q1',
    title: 'JavaScript Calculator',
    category: 'vanilla',
    folder: 'Q1-Calculator',
    description: 'Arithmetic calculator using functions, switch control flow, division-by-zero validation, and DOM manipulation.',
    icon: Calculator,
    tech: ['HTML5', 'CSS3', 'Vanilla JS'],
    concepts: ['JavaScript Functions', 'Switch Statement', 'DOM Manipulation', 'Arithmetic Operators'],
    runCommand: 'open Q1-Calculator/index.html',
    previewUrl: '/Q1-Calculator/index.html',
    keyFiles: ['Q1-Calculator/index.html', 'Q1-Calculator/style.css', 'Q1-Calculator/script.js'],
  },
  {
    id: 'q2',
    number: 'Q2',
    title: 'DOM-Based To-Do List',
    category: 'vanilla',
    folder: 'Q2-Todo-List',
    description: 'Dynamic task manager using document.createElement(), appendChild(), classList, and node.remove() with smooth CSS animations.',
    icon: CheckSquare,
    tech: ['HTML5', 'CSS3', 'DOM API'],
    concepts: ['DOM Manipulation', 'createElement()', 'appendChild()', 'classList', 'remove()', 'Event Listeners'],
    runCommand: 'open Q2-Todo-List/index.html',
    previewUrl: '/Q2-Todo-List/index.html',
    keyFiles: ['Q2-Todo-List/index.html', 'Q2-Todo-List/style.css', 'Q2-Todo-List/script.js'],
  },
  {
    id: 'q3',
    number: 'Q3',
    title: 'JavaScript Form Validation',
    category: 'vanilla',
    folder: 'Q3-Form-Validation',
    description: 'Student registration form with real-time Regex email & phone validation, password length & match checking, and password show/hide.',
    icon: ClipboardCheck,
    tech: ['HTML5', 'CSS3', 'RegEx', 'DOM Events'],
    concepts: ['JavaScript Validation', 'Regular Expressions', 'DOM Manipulation', 'Event Handling', 'Form Handling'],
    runCommand: 'open Q3-Form-Validation/index.html',
    previewUrl: '/Q3-Form-Validation/index.html',
    keyFiles: ['Q3-Form-Validation/index.html', 'Q3-Form-Validation/style.css', 'Q3-Form-Validation/script.js'],
  },
  {
    id: 'q4',
    number: 'Q4',
    title: 'React Profile Card (Props)',
    category: 'react',
    folder: 'Q4-Profile-Card',
    description: 'Independent Vite + React application demonstrating unidirectional data flow and component reusability via React Props.',
    icon: UserSquare2,
    tech: ['React 19', 'Vite', 'JSX', 'Props'],
    concepts: ['React Props', 'Component Reusability', 'JSX Attribute Passing', 'Clean Styling'],
    runCommand: 'cd Q4-Profile-Card && npm install && npm run dev',
    previewUrl: '/Q4-Profile-Card/index.html',
    keyFiles: ['Q4-Profile-Card/package.json', 'Q4-Profile-Card/src/ProfileCard.jsx', 'Q4-Profile-Card/src/App.jsx'],
  },
  {
    id: 'q5',
    number: 'Q5',
    title: 'Controlled React Form',
    category: 'react',
    folder: 'Q5-Controlled-Form',
    description: 'Independent Vite + React application featuring inputs bound to useState via value and onChange with instant live preview.',
    icon: FileEdit,
    tech: ['React 19', 'Vite', 'useState', 'Controlled Inputs'],
    concepts: ['Controlled Components', 'useState', 'value & onChange', 'Real-Time Rendering'],
    runCommand: 'cd Q5-Controlled-Form && npm install && npm run dev',
    previewUrl: '/Q5-Controlled-Form/index.html',
    keyFiles: ['Q5-Controlled-Form/package.json', 'Q5-Controlled-Form/src/App.jsx', 'Q5-Controlled-Form/src/index.css'],
  },
  {
    id: 'q6',
    number: 'Q6',
    title: 'React Counter (useState)',
    category: 'react',
    folder: 'Q6-Counter',
    description: 'Independent Vite + React app implementing a reactive counter with increment, decrement, reset, step intervals, and dynamic color states.',
    icon: Binary,
    tech: ['React 19', 'Vite', 'useState', 'State Updates'],
    concepts: ['useState', 'State Updates', 'Event Handling', 'Component Re-rendering'],
    runCommand: 'cd Q6-Counter && npm install && npm run dev',
    previewUrl: '/Q6-Counter/index.html',
    keyFiles: ['Q6-Counter/package.json', 'Q6-Counter/src/App.jsx', 'Q6-Counter/src/index.css'],
  },
];

export default function App() {
  const [selectedId, setSelectedId] = useState<string>('q1');
  const [activeTab, setActiveTab] = useState<'preview' | 'instructions' | 'tree'>('preview');
  const [iframeKey, setIframeKey] = useState<number>(1);

  const currentAssignment = ASSIGNMENTS.find((a) => a.id === selectedId) || ASSIGNMENTS[0];

  const handleRefreshIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-teal-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg text-white tracking-tight">
                  Web Development Practical Assignment Suite
                </h1>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Lab Practical
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Independent Vanilla Stack (Q1-Q3) &bull; Standalone React Vite Projects (Q4-Q6)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All 6 Assignments Built &amp; Standalone</span>
            </div>
            <button
              onClick={() => setActiveTab('tree')}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition ${
                activeTab === 'tree'
                  ? 'bg-indigo-600 text-white border-indigo-500'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <FolderTree className="w-3.5 h-3.5" />
              <span>Project Tree</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="max-w-7xl mx-auto w-full flex-1 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Assignment Selector (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Architecture Concept Notice */}
          <div className="bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-900/40 rounded-2xl p-4">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Two Distinct Development Architectures</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Part 1 (Q1-Q3):</strong> Zero-framework static HTML/CSS/JS.<br />
              <strong>Part 2 (Q4-Q6):</strong> Fully independent React + Vite applications with their own individual <code>package.json</code> files.
            </p>
          </div>

          {/* Section: Vanilla Assignments */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                Part 1: Vanilla Web Technologies (No React)
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Q1 - Q3</span>
            </div>

            {ASSIGNMENTS.filter((a) => a.category === 'vanilla').map((item) => {
              const Icon = item.icon;
              const isSelected = selectedId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedId(item.id);
                    setActiveTab('preview');
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3.5 group relative ${
                    isSelected
                      ? 'bg-slate-800/90 border-amber-500/50 shadow-md shadow-amber-500/5 ring-1 ring-amber-500/20'
                      : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="font-semibold text-sm text-slate-100 group-hover:text-white">
                        {item.number}: {item.title}
                      </span>
                      <span className="text-[10px] font-mono font-medium px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 shrink-0">
                        {item.folder}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 mb-2">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {item.concepts.slice(0, 2).map((c, i) => (
                        <span key={i} className="text-[10px] bg-slate-950/60 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800/60">
                          {c}
                        </span>
                      ))}
                      {item.concepts.length > 2 && (
                        <span className="text-[10px] text-slate-500 self-center">
                          +{item.concepts.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-0.5' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Section: React Independent Apps */}
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Part 2: Independent React/Vite Apps
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Q4 - Q6</span>
            </div>

            {ASSIGNMENTS.filter((a) => a.category === 'react').map((item) => {
              const Icon = item.icon;
              const isSelected = selectedId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedId(item.id);
                    setActiveTab('preview');
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3.5 group relative ${
                    isSelected
                      ? 'bg-slate-800/90 border-cyan-500/50 shadow-md shadow-cyan-500/5 ring-1 ring-cyan-500/20'
                      : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="font-semibold text-sm text-slate-100 group-hover:text-white">
                        {item.number}: {item.title}
                      </span>
                      <span className="text-[10px] font-mono font-medium px-1.5 py-0.2 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 shrink-0">
                        独立 React
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 mb-2">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {item.concepts.slice(0, 2).map((c, i) => (
                        <span key={i} className="text-[10px] bg-slate-950/60 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800/60">
                          {c}
                        </span>
                      ))}
                      {item.concepts.length > 2 && (
                        <span className="text-[10px] text-slate-500 self-center">
                          +{item.concepts.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Sandbox & Inspection (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {/* Header Bar for Active Item */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {currentAssignment.number}
                </span>
                <h2 className="text-base font-bold text-white">
                  {currentAssignment.title}
                </h2>
                <span className="text-xs text-slate-400 font-mono">
                  ({currentAssignment.folder}/)
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {currentAssignment.description}
              </p>
            </div>

            {/* View switcher tabs */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 shrink-0">
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition ${
                  activeTab === 'preview'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <MonitorCheck className="w-3.5 h-3.5" />
                <span>Live View</span>
              </button>

              <button
                onClick={() => setActiveTab('instructions')}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition ${
                  activeTab === 'instructions'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Run Guide</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Live Sandboxed Preview */}
          {activeTab === 'preview' && (
            <div className="flex flex-col bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex-1 min-h-[580px]">
              {/* Browser Mockup Chrome */}
              <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px] ml-2">
                    {currentAssignment.previewUrl}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRefreshIframe}
                    title="Reload assignment preview"
                    className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={currentAssignment.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] text-indigo-400 hover:text-indigo-300 font-medium px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/50"
                  >
                    <span>Full Tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Sandboxed Iframe Preview */}
              <div className="flex-1 bg-white relative">
                {currentAssignment.previewUrl ? (
                  <iframe
                    key={`${currentAssignment.id}-${iframeKey}`}
                    src={currentAssignment.previewUrl}
                    title={currentAssignment.title}
                    className="w-full h-full min-h-[560px] border-0"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
                  />
                ) : (
                  <div className="p-8 text-center text-slate-600">
                    Preview not available
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 2: Terminal Execution & Concepts Guide */}
          {activeTab === 'instructions' && (
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col gap-6">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>How to Run {currentAssignment.number} Independently</span>
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  This assignment is completely self-contained in <code>/{currentAssignment.folder}</code>. Execute the command below in your terminal:
                </p>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 font-mono text-xs text-emerald-400 flex items-center justify-between">
                  <code>{currentAssignment.runCommand}</code>
                </div>
              </div>

              {/* Concepts Showcase */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Curricular Concepts Evaluated</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentAssignment.concepts.map((concept, idx) => (
                    <div key={idx} className="bg-slate-900 border border-slate-800/80 rounded-lg p-2.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                      <span className="text-xs font-medium text-slate-200">{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Files in this assignment */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  <span>Files Created for {currentAssignment.number}</span>
                </h4>
                <div className="bg-slate-900 border border-slate-800 rounded-xl divide-y divide-slate-800/60 font-mono text-xs">
                  {currentAssignment.keyFiles.map((file, idx) => (
                    <div key={idx} className="px-3.5 py-2 text-slate-300 flex items-center justify-between">
                      <span>/{file}</span>
                      <span className="text-[11px] text-slate-500">Standalone</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Directory Tree View */}
          {activeTab === 'tree' && (
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <FolderTree className="w-4 h-4 text-indigo-400" />
                  <span>Project Architectural Directory Tree</span>
                </h3>
                <span className="text-xs text-slate-500 font-mono">6 Standalone Assignments</span>
              </div>
              <p className="text-xs text-slate-400">
                Notice how Q1-Q3 have no npm packages or Vite overhead, while Q4-Q6 each have their own independent React build setup:
              </p>

              <pre className="bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-xs text-sky-300 leading-relaxed overflow-x-auto">
{`current-folder/
│
├── Q1-Calculator/            [Static HTML/CSS/JavaScript]
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Q2-Todo-List/             [Static HTML/CSS/JavaScript + DOM]
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Q3-Form-Validation/       [Static HTML/CSS/JavaScript + Validation]
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Q4-Profile-Card/          [Independent React/Vite App]
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── App.jsx
│       ├── ProfileCard.jsx
│       ├── main.jsx
│       └── index.css
│
├── Q5-Controlled-Form/       [Independent React/Vite App]
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
└── Q6-Counter/               [Independent React/Vite App]
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── App.jsx
        ├── main.jsx
        └── index.css`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
