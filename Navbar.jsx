import React from 'react';
import { Layers, ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView }) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => setCurrentView('landing')} 
          className="flex items-center gap-2.5 cursor-pointer group transition-transform active:scale-95"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C5CFC] to-[#9E86FA] flex items-center justify-center text-white shadow-md shadow-[#7C5CFC]/25 group-hover:shadow-lg group-hover:shadow-[#7C5CFC]/35 transition-all">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-[#7C5CFC] transition-colors">
                PREP<span className="text-[#7C5CFC]">PROOF</span>
              </span>
              <span className="text-[10px] font-semibold bg-purple-100 text-[#7C5CFC] px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                Prototype
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">Where Project Meets Preparation</p>
          </div>
        </div>

        {/* Right Navigation Controls */}
        <div className="flex items-center gap-3">
          {currentView === 'landing' ? (
            <button
              onClick={() => setCurrentView('dashboard')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#7C5CFC] hover:bg-[#6A46EE] rounded-xl shadow-md shadow-[#7C5CFC]/20 hover:shadow-lg hover:shadow-[#7C5CFC]/30 transition-all active:scale-95"
            >
              <span>Go to App</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentView('landing')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#7C5CFC] bg-slate-50 hover:bg-purple-50/60 rounded-lg border border-slate-200 hover:border-purple-200 transition-colors"
                title="View Landing Page"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Landing Page</span>
              </button>
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-lg text-xs font-medium text-[#7C5CFC] border border-purple-100">
                <Sparkles className="w-3.5 h-3.5 text-[#7C5CFC]" />
                <span>Major Project Demo</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
