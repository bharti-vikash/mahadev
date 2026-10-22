import React from 'react';

export default function TopBar() {
  return (
    <aside className="w-full bg-primary-container text-on-primary py-2 px-4 border-b border-surface-container-highest/20 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-body-sm font-body-sm gap-2">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-surface-variant">
          <span className="material-symbols-outlined text-secondary text-sm">pin_drop</span>
          <span>Begowal, Kapurthala, Punjab</span>
          <span className="text-outline-variant hidden sm:inline">|</span>
          <span className="text-secondary-fixed-dim font-medium">15+ Years of Proven Craftsmanship</span>
        </div>
        <div className="flex items-center gap-3 text-surface-variant">
          <div className="flex items-center gap-1 text-secondary-fixed-dim font-medium">
            <span className="material-symbols-outlined text-sm icon-fill">verified</span>
            <span>5.0/5 Justdial Verified</span>
          </div>
          <span className="text-outline-variant">|</span>
          <a
            className="text-surface-bright hover:text-secondary-fixed transition-colors font-medium flex items-center gap-1"
            href="tel:+919725695099"
          >
            <span className="material-symbols-outlined text-sm text-secondary">call</span>
            <span>+91 97256 95099</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
