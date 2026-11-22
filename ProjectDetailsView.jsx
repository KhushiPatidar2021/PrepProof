import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Send, Sparkles, Layers, ShieldCheck, Code2, AlertCircle } from 'lucide-react';

export default function ProjectDetailsView({ project, onBack }) {
  // State for the "Explain Your Project" text area
  const [explanation, setExplanation] = useState(
    'In this project, I designed a multi-tier web application using React on the frontend and MongoDB on the backend. The key architectural highlights include RESTful endpoints, client-side state handling, responsive data tables, and structured database schemas to handle student records efficiently.'
  );

  // State for success message
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!explanation.trim()) return;

    // Simulate quick instant state feedback
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 400);
  };

  if (!project) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-purple-100 text-center">
        <p className="text-slate-600">No project selected.</p>
        <button
          onClick={onBack}
          className="mt-4 px-4 py-2 bg-[#7C5CFC] text-white rounded-xl text-sm font-semibold"
        >
          Return to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto">
      {/* Back Button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#7C5CFC] bg-white px-3.5 py-2 rounded-xl border border-purple-100 shadow-sm hover:shadow transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>
      </div>

      {/* Project Overview Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-bl-full pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#7C5CFC] bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100 uppercase tracking-wider">
                Project Details
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Setup</span>
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {project.name}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Technologies Used Section */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#7C5CFC]" />
              <span>Technologies Used</span>
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies && project.technologies.length > 0 ? (
                project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#FAF9FF] text-[#7C5CFC] border border-purple-200 shadow-sm hover:bg-purple-50 transition-colors"
                  >
                    #{tech}
                  </span>
                ))
              ) : (
                <>
                  <span className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#FAF9FF] text-[#7C5CFC] border border-purple-200">
                    #React
                  </span>
                  <span className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#FAF9FF] text-[#7C5CFC] border border-purple-200">
                    #JavaScript
                  </span>
                  <span className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#FAF9FF] text-[#7C5CFC] border border-purple-200">
                    #MongoDB
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Explain Your Project Section */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#7C5CFC]" />
              <span>Explain Your Project</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Write your project walkthrough, system architecture, and technical challenges for the interview panel.
            </p>
          </div>
        </div>

        {/* Success Alert Banner when submitted */}
        {showSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start justify-between gap-3 animate-fadeIn">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-emerald-900">
                  Project Explanation Submitted Successfully!
                </h4>
                <p className="text-xs text-emerald-700 mt-0.5 leading-relaxed">
                  Your project notes and architecture summary have been saved. You are ready to present this project in your college viva and technical interview rounds!
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="text-xs text-emerald-600 hover:text-emerald-800 font-semibold px-2 py-1 rounded-md hover:bg-emerald-100 transition-colors"
            >
              Dismiss
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <textarea
              rows="8"
              value={explanation}
              onChange={(e) => {
                setExplanation(e.target.value);
                if (showSuccess) setShowSuccess(false);
              }}
              placeholder="Explain your project architecture, your specific contribution, tricky bugs you fixed, and why you selected this technology stack..."
              className="w-full p-4 sm:p-5 rounded-2xl border border-slate-200 focus:border-[#7C5CFC] focus:ring-4 focus:ring-[#7C5CFC]/10 outline-none text-sm text-slate-800 placeholder-slate-400 transition-all font-mono leading-relaxed"
            />
            <div className="flex justify-between items-center text-[11px] text-slate-400 px-1 mt-1">
              <span>Tip: Include database models, API structures, and optimization points.</span>
              <span>{explanation.length} characters</span>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-xs text-slate-500 flex items-center gap-1.5 self-start sm:self-center">
              <div className="w-2 h-2 rounded-full bg-[#7C5CFC]" />
              <span>Simple frontend demonstration mode</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="submit"
                disabled={isSubmitting || !explanation.trim()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#7C5CFC] hover:bg-[#6A46EE] text-white text-sm font-bold rounded-xl shadow-md shadow-[#7C5CFC]/25 transition-all active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Saving...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Explanation</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
