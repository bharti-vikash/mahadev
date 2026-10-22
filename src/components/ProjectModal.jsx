import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose, onSelectForQuote }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Mahadev Contractor, I am interested in your project: "${project.title}" (${project.location}, ${project.size}). Could you provide more details and an estimate for similar work?`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container-highest"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Project Header Image */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-primary-container">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded bg-secondary-fixed-dim text-on-secondary-fixed font-label-caps text-label-caps uppercase font-bold tracking-wider shadow">
              {project.badge || project.categoryLabel}
            </span>
            <span className="px-3 py-1 rounded bg-primary/80 text-surface-bright font-label-caps text-label-caps uppercase tracking-wider backdrop-blur-sm">
              {project.categoryLabel}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <div className="flex items-center gap-2 text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>{project.location}</span>
              <span>•</span>
              <span>{project.size}</span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg font-bold text-surface-bright">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-bold">
              Project Overview
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-surface-container-low border border-surface-container-high">
            <div>
              <span className="block font-label-caps text-xs text-on-surface-variant uppercase">Location</span>
              <span className="font-title-md text-sm sm:text-base font-semibold text-on-surface truncate block">
                {project.location}
              </span>
            </div>
            <div>
              <span className="block font-label-caps text-xs text-on-surface-variant uppercase">Scale / Area</span>
              <span className="font-title-md text-sm sm:text-base font-semibold text-on-surface truncate block">
                {project.size}
              </span>
            </div>
            <div>
              <span className="block font-label-caps text-xs text-on-surface-variant uppercase">Execution Period</span>
              <span className="font-title-md text-sm sm:text-base font-semibold text-on-surface truncate block">
                {project.duration || "Custom Scope"}
              </span>
            </div>
            <div>
              <span className="block font-label-caps text-xs text-on-surface-variant uppercase">Completion</span>
              <span className="font-title-md text-sm sm:text-base font-semibold text-secondary truncate block">
                Verified Handover
              </span>
            </div>
          </div>

          {/* Key Deliverables */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-title-md text-title-md font-bold text-on-surface">
                Engineering Deliverables & Craftsmanship Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-surface border border-surface-container">
                    <span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5 icon-fill">
                      check_circle
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-body-sm font-body-sm text-on-surface-variant text-center sm:text-left">
              Want similar quality execution for your home in Punjab?
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/919451039323?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba59] font-label-md text-label-md uppercase tracking-wider transition-all shadow"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Details</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onSelectForQuote(project);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md uppercase tracking-wider transition-all shadow cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">request_quote</span>
                <span>Get Similar Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
