import React from 'react';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-lg border-t border-surface-container-highest p-3 flex md:hidden items-center gap-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <a
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm active:scale-95 transition-transform"
        href="tel:+919451039323"
      >
        <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
        <span>Call Now</span>
      </a>
      <a
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] text-white font-label-md text-label-md shadow-sm active:scale-95 transition-transform"
        href="https://wa.me/919451039323?text=Hello%20Mahadev%20Contractor,%20I%20would%20like%20to%20request%20a%20quotation%20for%20my%20project."
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[18px]">chat</span>
        <span>WhatsApp Us</span>
      </a>
    </div>
  );
}
