import React, { useState } from 'react';
import {
  Calculator,
  CheckSquare,
  ClipboardCheck,
  ExternalLink,
  RefreshCw
} from 'lucide-react';

interface QuestionTab {
  id: string;
  number: string;
  title: string;
  url: string;
  icon: React.ElementType;
}

const QUESTIONS: QuestionTab[] = [
  {
    id: 'q1',
    number: 'Q1',
    title: 'Calculator',
    url: '/Q1-Calculator/index.html',
    icon: Calculator,
  },
  {
    id: 'q2',
    number: 'Q2',
    title: 'To-Do List',
    url: '/Q2-Todo-List/index.html',
    icon: CheckSquare,
  },
  {
    id: 'q3',
    number: 'Q3',
    title: 'Form Validation',
    url: '/Q3-Form-Validation/index.html',
    icon: ClipboardCheck,
  },
];

export default function App() {
  const [activeId, setActiveId] = useState<string>('q1');
  const [iframeKey, setIframeKey] = useState<number>(1);

  const activeQuestion = QUESTIONS.find((q) => q.id === activeId) || QUESTIONS[0];

  const handleRefresh = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="h-screen w-screen bg-slate-950 text-slate-100 flex flex-col font-sans overflow-hidden">
      {/* Streamlined Top Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur px-4 py-3 flex items-center justify-between gap-4 shrink-0 z-20">
        {/* Assignment Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
          {QUESTIONS.map((q) => {
            const Icon = q.icon;
            const isActive = activeId === q.id;
            return (
              <button
                key={q.id}
                onClick={() => setActiveId(q.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="font-mono opacity-80">{q.number}:</span>
                <span>{q.title}</span>
              </button>
            );
          })}
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleRefresh}
            title="Refresh preview"
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-800 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">Reload</span>
          </button>
          <a
            href={activeQuestion.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-medium text-indigo-400 hover:text-indigo-300 px-2.5 py-1 rounded-lg bg-indigo-950/60 border border-indigo-800/50 hover:bg-indigo-900/60 transition"
          >
            <span>Open in Tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </header>

      {/* Full-Height Preview Window */}
      <main className="flex-1 w-full h-full relative bg-white">
        <iframe
          key={`${activeQuestion.id}-${iframeKey}`}
          src={activeQuestion.url}
          title={activeQuestion.title}
          className="w-full h-full border-0 block"
          sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
        />
      </main>
    </div>
  );
}
