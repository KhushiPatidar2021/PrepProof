import React from 'react';
import { Layers, ArrowRight, CheckCircle2, Code2, Sparkles, FolderGit2, BookOpenCheck } from 'lucide-react';

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-[#FAF9FF] via-[#F4F2FF] to-white flex flex-col justify-between">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full text-center">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#7C5CFC]/15 blur-3xl pointer-events-none rounded-full" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/80 text-[#7C5CFC] text-xs sm:text-sm font-semibold mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 text-[#7C5CFC]" />
          <span>College Major Project Prototype</span>
        </div>

        {/* Logo Icon Showcase */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#7C5CFC] to-[#9E86FA] flex items-center justify-center text-white shadow-xl shadow-[#7C5CFC]/30 border border-white/40">
            <Layers className="w-10 h-10" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="mb-3">
          <span className="text-sm font-bold tracking-widest text-[#7C5CFC] uppercase">
            PREPPROOF PLATFORM
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-none max-w-4xl mx-auto mb-6">
          Where Your <span className="text-[#7C5CFC] underline decoration-purple-300 decoration-wavy decoration-2">Project</span> Meets Your <span className="text-[#7C5CFC]">Preparation</span>
        </h1>

        {/* Short Description */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Master your technical interviews by thoroughly preparing and explaining your personal projects.
          Turn your academic codebases into confident, job-ready project stories.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#7C5CFC] hover:bg-[#6A46EE] rounded-2xl shadow-lg shadow-[#7C5CFC]/30 hover:shadow-xl hover:shadow-[#7C5CFC]/40 transition-all duration-200 active:scale-95 group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Value Proposition Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-purple-100 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#7C5CFC]" />
            <span className="font-medium">Project Architecture Clarity</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-purple-100 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#7C5CFC]" />
            <span className="font-medium">Interview Defense Practice</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-purple-100 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#7C5CFC]" />
            <span className="font-medium">Curated Technical Tags</span>
          </div>
        </div>

        {/* 3 Overview Cards for Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7C5CFC] flex items-center justify-center mb-4 border border-purple-100">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">1. Connect Your Project</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Register your personal and academic projects like student portals, full-stack apps, or utility tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7C5CFC] flex items-center justify-center mb-4 border border-purple-100">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">2. Articulate Architecture</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Explain the challenges, technical decisions, and database schemas with guided structured inputs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7C5CFC] flex items-center justify-center mb-4 border border-purple-100">
              <BookOpenCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">3. Ace The Interview</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Walk into college major project vivas and company technical rounds fully equipped to defend your code.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-100 bg-white/70 py-6 text-center text-xs text-slate-500">
        <p>© 2026 PREPPROOF • College Major Project Prototype Demonstration</p>
      </footer>
    </div>
  );
}
