import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import ProjectModal from './components/ProjectModal';
import TermsModal from './components/TermsModal';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutContactPage from './pages/AboutContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [preFillData, setPreFillData] = useState(null);

  // Sync with initial URL hash if any
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('service') || hash.includes('project')) {
        setActivePage('services');
      } else if (hash.includes('about') || hash.includes('contact')) {
        setActivePage('about-contact');
      } else {
        setActivePage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    if (page === 'home') window.location.hash = '';
    else if (page === 'services') window.location.hash = 'services';
    else if (page === 'about-contact') window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProjectForQuote = (project) => {
    setPreFillData({
      service: project.categoryLabel || 'Residential Construction',
      area: project.size,
      notes: `Referencing completed project: ${project.title} (${project.location}). Please provide cost estimate and timeline for similar layout.`
    });
    handlePageChange('about-contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* 1. Verified Announcement Top Bar */}
      <TopBar />

      {/* 2. Sticky Glassmorphic Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
      />

      {/* 3. Main Dynamic Content View */}
      <main className="flex-1 w-full pb-16 md:pb-0">
        {activePage === 'home' && (
          <HomePage
            setActivePage={handlePageChange}
            onSelectProject={setSelectedProject}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            setActivePage={handlePageChange}
            onSelectProject={setSelectedProject}
          />
        )}

        {activePage === 'about-contact' && (
          <AboutContactPage
            preFillData={preFillData}
            onClearPreFill={() => setPreFillData(null)}
          />
        )}
      </main>

      {/* 4. Architectural Dark Slate Footer */}
      <Footer
        setActivePage={handlePageChange}
        onOpenTerms={() => setIsTermsOpen(true)}
      />

      {/* 5. Mobile Fixed Quick-Connect Bar */}
      <MobileBottomBar />

      {/* 6. Interactive Lightbox Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectForQuote={handleSelectProjectForQuote}
        />
      )}

      {/* 7. Warranty & Zero-Lippage Guarantee Terms Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </div>
  );
}
