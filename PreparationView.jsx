import React from 'react';
import { BookOpenCheck, CheckCircle2, HelpCircle, Lightbulb, Code, Target, ArrowRight } from 'lucide-react';

export default function PreparationView({ onNavigateToProject }) {
  const prepQuestions = [
    {
      q: 'Can you walk us through the high-level architecture of your project?',
      tip: 'Mention frontend (React), backend API, and database (MongoDB) separation of concerns.'
    },
    {
      q: 'Why did you choose React.js instead of vanilla JavaScript or other frameworks?',
      tip: 'Highlight component reusability, virtual DOM performance, and state management.'
    },
    {
      q: 'What was the most challenging technical hurdle and how did you resolve it?',
      tip: 'Give a concrete example such as state synchronization, database indexing, or responsiveness.'
    },
    {
      q: 'How does your MongoDB database handle relational or referenced student records?',
      tip: 'Explain document schema design, references vs embedding, and validation.'
    }
  ];

  const checklistItems = [
    { title: 'Project Overview Statement', done: true },
    { title: 'Database Schema & Collections Diagram', done: true },
    { title: 'Key Features & API Endpoints Flow', done: true },
    { title: 'Prepared Answers for Edge Cases & Scalability', done: false },
    { title: 'Live Demonstration Walkthrough Ready', done: true }
  ];

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#7C5CFC] bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100 uppercase tracking-wider">
            Viva & Interview Prep
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Preparation Guide
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Standard questions and presentation checklist for your college major project review.
          </p>
        </div>

        <button
          onClick={onNavigateToProject}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#7C5CFC] hover:bg-[#6A46EE] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-[#7C5CFC]/25 transition-all shrink-0"
        >
          <span>Practice on Sample Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid: Questions & Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Core Questions - 2 columns */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#7C5CFC]" />
              <span>Sample Technical Viva Questions</span>
            </h2>
            <span className="text-xs font-medium text-slate-400">4 Core Prompts</span>
          </div>

          <div className="space-y-3">
            {prepQuestions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm hover:border-purple-200 transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-purple-50 text-[#7C5CFC] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 leading-snug">
                      {item.q}
                    </h3>
                    <div className="mt-2.5 p-3 rounded-xl bg-[#FAF9FF] border border-purple-100 flex items-start gap-2 text-xs text-slate-600">
                      <Lightbulb className="w-4 h-4 text-[#7C5CFC] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#7C5CFC]">Suggested Angle: </span>
                        <span>{item.tip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Readiness Checklist - 1 column */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Target className="w-5 h-5 text-[#7C5CFC]" />
            <span>Readiness Checklist</span>
          </h2>

          <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm space-y-4">
            <p className="text-xs text-slate-500">
              Check off these milestones before your final college presentation:
            </p>

            <ul className="space-y-3">
              {checklistItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                    item.done ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className={item.done ? 'text-slate-800' : 'text-slate-400'}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-100">
              <div className="p-3 rounded-xl bg-purple-50 text-xs text-[#7C5CFC] font-medium leading-relaxed">
                🚀 80% Checklist completion. Ready for the presentation mock run!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
