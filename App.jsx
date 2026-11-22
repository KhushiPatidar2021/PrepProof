import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import DashboardView from './components/DashboardView';
import ProjectsView from './components/ProjectsView';
import ProjectDetailsView from './components/ProjectDetailsView';
import PreparationView from './components/PreparationView';

export default function App() {
  // Navigation View State: 'landing' | 'dashboard' | 'projects' | 'project-details' | 'preparation'
  const [currentView, setCurrentView] = useState('landing');

  // Sample initial project as required: "Student Management System"
  const [projects, setProjects] = useState([
    {
      id: 'student-mgmt-1',
      name: 'Student Management System',
      description: 'A full-stack CRUD application for managing college student records, course enrollments, attendance, and grade analytics.',
      technologies: ['React', 'JavaScript', 'MongoDB', 'Node.js']
    }
  ]);

  // Selected project for details view
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  // Modal open state for Add Project
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Add project handler using React state
  const handleAddProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
    // Automatically select the new project and open its details
    setSelectedProject(newProject);
  };

  // Select project handler
  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setCurrentView('project-details');
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {/* Main View Router */}
      {currentView === 'landing' ? (
        <LandingPage onGetStarted={() => setCurrentView('dashboard')} />
      ) : (
        <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto">
          {/* Sidebar */}
          <Sidebar currentView={currentView} setCurrentView={setCurrentView} />

          {/* Main Content Area */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
            {currentView === 'dashboard' && (
              <DashboardView
                projects={projects}
                onSelectProject={handleSelectProject}
                onNavigateToProjects={() => setCurrentView('projects')}
                onNavigateToPrep={() => setCurrentView('preparation')}
                onOpenAddModal={() => {
                  setCurrentView('projects');
                  setIsAddModalOpen(true);
                }}
              />
            )}

            {currentView === 'projects' && (
              <ProjectsView
                projects={projects}
                onSelectProject={handleSelectProject}
                onAddProject={handleAddProject}
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
              />
            )}

            {currentView === 'project-details' && (
              <ProjectDetailsView
                project={selectedProject || projects[0]}
                onBack={() => setCurrentView('projects')}
              />
            )}

            {currentView === 'preparation' && (
              <PreparationView
                onNavigateToProject={() => {
                  setSelectedProject(projects[0]);
                  setCurrentView('project-details');
                }}
              />
            )}
          </main>
        </div>
      )}
    </div>
  );
}
