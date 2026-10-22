import React, { useEffect } from 'react';

export default function TermsModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container-highest p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-surface-container-high pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-2xl icon-fill">verified_user</span>
            </div>
            <div>
              <h2 className="font-headline-sm text-lg sm:text-headline-sm text-on-surface font-bold">
                Quality Mandate & Service Terms
              </h2>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                Mahadev Construction & Tiles Fitting Contractor · Begowal, Punjab
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content Clauses */}
        <div className="space-y-5 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          <div className="p-4 rounded-xl bg-surface-container-low border-l-4 border-secondary space-y-1">
            <h3 className="font-title-md text-sm sm:text-base font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-base">straighten</span>
              1. Zero-Lippage Precision Guarantee
            </h3>
            <p>
              Every floor and wall installation is executed using mechanical leveling wedges, cross-line lasers, and calibrated 2mm spacing clips. We guarantee that floor transitions remain flush and smooth across all rooms. Any joint exhibiting lippage prior to grouting will be relaid at zero additional labor cost to the client.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-low border-l-4 border-secondary space-y-1">
            <h3 className="font-title-md text-sm sm:text-base font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-base">water_drop</span>
              2. 48-Hour Hydrostatic Wet-Area Testing
            </h3>
            <p>
              For all bathroom sunken slabs, balconies, and open terrace roofs, two coats of elastomeric polymer waterproofing are applied. The area is water-ponded and flood-tested for 48 hours to inspect for zero downward seepage before tile adhesive is laid down.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-low border-l-4 border-secondary space-y-1">
            <h3 className="font-title-md text-sm sm:text-base font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-base">receipt_long</span>
              3. Milestone-Based Transparent Quotation
            </h3>
            <p>
              We operate with clear, written stage milestones (Excavation & Footing, Brickwork, Plastering, Waterproofing, Tile Screed, Grout & Polish). Material wastage is tightly controlled (under 4% on regular cuts). No unapproved extras or surprise markups are billed without prior client authorization.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-low border-l-4 border-secondary space-y-1">
            <h3 className="font-title-md text-sm sm:text-base font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-base">shield</span>
              4. Contractor Supervision & Client Privacy
            </h3>
            <p>
              Master contractor Mahadev supervises ongoing sites directly in Begowal and surrounding Kapurthala towns. Your contact phone number and site address are used solely for arranging evaluations and preparing formal quotations, and are never disclosed to third parties.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-surface-container-high flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md uppercase tracking-wider transition-colors cursor-pointer"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
}
