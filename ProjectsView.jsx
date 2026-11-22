import React, { useState } from 'react';
import { Plus, FolderGit2, ArrowRight, X, Sparkles, Tag } from 'lucide-react';

export default function ProjectsView({
  projects,
  onSelectProject,
  onAddProject,
  isAddModalOpen,
  setIsAddModalOpen
}) {
  // Local state for the Add Project Form
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [techInput, setTechInput] = useState('React, JavaScript, MongoDB');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectName.trim()) return;

    // Parse technologies from comma-separated string
    const technologies = techInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    onAddProject({
      id: Date.now().toString(),
      name: projectName.trim(),
      description: projectDescription.trim() || 'A project developed for technical demonstration and interview preparation.',
      technologies: technologies.length > 0 ? technologies : ['React', 'JavaScript', 'MongoDB']
    });

    // Reset and close
    setProjectName('');
    setProjectDescription('');
    setTechInput('React, JavaScript, MongoDB');
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            My Projects
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Browse and manage your personal projects for technical interviews.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7C5CFC] hover:bg-[#6A46EE] text-white text-sm font-semibold rounded-xl shadow-md shadow-[#7C5CFC]/25 transition-all active:scale-95 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Project</span>
        </button>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group bg-white rounded-2xl border border-purple-100 p-6 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7C5CFC] flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-[#7C5CFC] bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">
                  Ready
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#7C5CFC] transition-colors">
                {project.name}
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium bg-[#FAF9FF] text-[#7C5CFC] px-2 py-0.5 rounded-md border border-purple-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#7C5CFC] group-hover:translate-x-1 transition-transform">
                <span>View Details & Prepare</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Project Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-purple-100 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7C5CFC] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Add New Project</h2>
                <p className="text-xs text-slate-500">Provide details for your college or personal project</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Project Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Student Management System"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#7C5CFC] focus:ring-2 focus:ring-[#7C5CFC]/20 outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Project Description
                </label>
                <textarea
                  rows="3"
                  placeholder="Briefly describe what this project does and key features..."
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#7C5CFC] focus:ring-2 focus:ring-[#7C5CFC]/20 outline-none text-sm transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Technologies Used (Comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="React, JavaScript, MongoDB, Node.js"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#7C5CFC] focus:ring-2 focus:ring-[#7C5CFC]/20 outline-none text-sm transition-all"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">Default tags: React, JavaScript, MongoDB</span>
              </div>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#7C5CFC] hover:bg-[#6A46EE] shadow-md shadow-[#7C5CFC]/25 transition-all active:scale-95"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
