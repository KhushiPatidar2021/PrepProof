import React from 'react';
import { LayoutDashboard, FolderGit2, BookOpenCheck, ChevronRight, Award } from 'lucide-react';

export default function Sidebar({ currentView, setCurrentView }) {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      description: 'Overview & metrics'
    },
    {
      id: 'projects',
      label: 'My Projects',
      icon: FolderGit2,
      description: 'Manage & view projects'
    },
    {
      id: 'preparation',
      label: 'Preparation',
      icon: BookOpenCheck,
      description: 'Interview readiness'
    }
  ];

  return (
    <aside className="w-full md:w-64 bg-white border-r border-purple-100 flex flex-col justify-between p-4 shrink-0">
      <div>
        {/* Navigation Label */}
        <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Navigation
        </div>

        {/* Menu list */}
        <nav className="space-y-1 mt-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id || (item.id === 'projects' && currentView === 'project-details');

            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl font-medium text-sm transition-all duration-150 ${
                  isActive
                    ? 'bg-purple-50 text-[#7C5CFC] shadow-sm shadow-[#7C5CFC]/10 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#7C5CFC] text-white shadow-sm' : 'bg-slate-100 text-slate-500 group-hover:text-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="leading-none">{item.label}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{item.description}</p>
                  </div>
                </div>
                {isActive && <ChevronRight className="w-4 h-4 text-[#7C5CFC]" />}
              </button>
            );
          })}
        </nav>
      </div>

      {/* College Project Presentation Badge Card */}
      <div className="mt-8 bg-gradient-to-br from-purple-50 via-[#FAF9FF] to-purple-100/60 p-4 rounded-2xl border border-purple-100 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-md bg-[#7C5CFC] text-white flex items-center justify-center">
            <Award className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-[#7C5CFC] tracking-wide uppercase">Major Project</span>
        </div>
        <p className="text-xs font-semibold text-slate-800">PREPPROOF Prototype</p>
        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
          Designed for technical interviews & college viva presentation.
        </p>
      </div>
    </aside>
  );
}
