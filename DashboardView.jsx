import React from 'react';
import { FolderGit2, CheckCircle, Clock, ArrowRight, Plus, ExternalLink, Sparkles } from 'lucide-react';

export default function DashboardView({ 
  projects, 
  onSelectProject, 
  onNavigateToProjects, 
  onNavigateToPrep,
  onOpenAddModal 
}) {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-white via-purple-50/50 to-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Welcome to PREPPROOF 👋
            </h1>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-purple-100 text-[#7C5CFC]">
              Ready
            </span>
          </div>
          <p className="text-slate-600 text-sm sm:text-base">
            Your personal project hub to prepare, articulate, and ace technical interviews.
          </p>
        </div>
        <button
          onClick={onOpenAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#7C5CFC] hover:bg-[#6A46EE] text-white text-sm font-semibold rounded-xl shadow-md shadow-[#7C5CFC]/25 transition-all active:scale-95 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Project</span>
        </button>
      </div>

      {/* Three Simple Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. My Projects Card */}
        <div 
          onClick={onNavigateToProjects}
          className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Overview</span>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7C5CFC] flex items-center justify-center group-hover:scale-105 transition-transform">
              <FolderGit2 className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-slate-800">My Projects</h3>
          <p className="text-3xl font-extrabold text-slate-900 mt-2">
            {projects.length}
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#7C5CFC] group-hover:translate-x-0.5 transition-transform">
            <span>View all projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* 2. Preparation Progress Card */}
        <div 
          onClick={onNavigateToPrep}
          className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Readiness</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-slate-800">Preparation Progress</h3>
          <div className="flex items-baseline gap-2 mt-2">
            <p className="text-3xl font-extrabold text-slate-900">75%</p>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              On Track
            </span>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
            <div className="bg-[#7C5CFC] h-full rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#7C5CFC] group-hover:translate-x-0.5 transition-transform">
            <span>Open preparation guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* 3. Recent Activity Card */}
        <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Log</span>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">Recent Activity</h3>
          <ul className="space-y-2.5 text-xs text-slate-600">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFC] mt-1.5 shrink-0" />
              <span>Project <strong>Student Management System</strong> registered</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              <span>Reviewed architecture checklist</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
              <span>Prepared technical stack definitions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Featured Sample Project Card Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Featured Sample Project</h2>
            <p className="text-xs text-slate-500">Click the card to review details and write your explanation</p>
          </div>
          <button
            onClick={onNavigateToProjects}
            className="text-xs font-semibold text-[#7C5CFC] hover:underline flex items-center gap-1"
          >
            <span>See all ({projects.length})</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* The required sample project card */}
        {projects.length > 0 && (
          <div
            onClick={() => onSelectProject(projects[0])}
            className="group relative bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all cursor-pointer overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -z-0 opacity-60 group-hover:scale-110 transition-transform" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7C5CFC] flex items-center justify-center font-bold text-base">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#7C5CFC] transition-colors">
                      {projects[0].name}
                    </h3>
                    <span className="text-[11px] font-semibold text-[#7C5CFC] bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                      Sample College Project
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm max-w-2xl mt-2 line-clamp-2">
                  {projects[0].description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  {projects[0].technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-[#FAF9FF] text-[#7C5CFC] border border-purple-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-[#7C5CFC] group-hover:bg-[#7C5CFC] group-hover:text-white rounded-xl text-sm font-semibold transition-all shadow-sm">
                  <span>Open Project</span>
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
