import React, { useState } from 'react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/95 backdrop-blur-xl border-b border-surface-container-highest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            title="Go to Home"
          >
            <img
              alt="Mahadev Construction Brand Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1Uz_B-a7hc-ydqmRw564RZa8AmBozVuq3wtkDnl-ePtYp-KwM7ZLSs5cp7W2lR0WYuGlBTmV6ojwOFnX1E0syFc-i3dkKmRPCaqv9zQUyclF2NAR7BYKkhwISBdMfbwpfmLfzc7W_AGQOjVI2h1-I_8DaqXtu9ioVo69U33kRLfSoHlL5aox5JRg5RTUH3KgVeeP2G5e4rNQDyZC0dCM8ovP7xbcWnycKijr281IBQKzF2zPPcePYSlqz8"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-[19px] sm:text-headline-sm tracking-tight text-on-surface leading-none group-hover:text-secondary transition-colors font-bold">
                MAHADEV
              </span>
              <span className="font-label-caps text-[10px] sm:text-label-caps tracking-widest text-secondary uppercase font-semibold">
                Construction & Tile Craft
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('home')}
            className={`font-label-md text-label-md uppercase tracking-wider py-2 transition-all cursor-pointer ${
              activePage === 'home'
                ? 'text-secondary border-b-2 border-secondary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className={`font-label-md text-label-md uppercase tracking-wider py-2 transition-all cursor-pointer ${
              activePage === 'services'
                ? 'text-secondary border-b-2 border-secondary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Services & Projects
          </button>
          <button
            onClick={() => handleNavClick('about-contact')}
            className={`font-label-md text-label-md uppercase tracking-wider py-2 transition-all cursor-pointer ${
              activePage === 'about-contact'
                ? 'text-secondary border-b-2 border-secondary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            About & Contact
          </button>
        </nav>

        {/* Action CTAs & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-on-surface hover:text-secondary font-label-md text-label-md transition-colors"
            href="tel:+919725695099"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary">call</span>
            <span className="tracking-tight font-medium">+91 97256 95099</span>
          </a>

          <a
            aria-label="WhatsApp Instant Chat"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-[#25D366] transition-colors"
            href="https://wa.me/919725695099?text=Hello%20Mahadev%20Contractor,%20I%20would%20like%20to%20enquire%20about%20construction%20and%20tile%20fitting."
            rel="noopener noreferrer"
            target="_blank"
            title="Chat on WhatsApp"
          >
            <span className="material-symbols-outlined text-[22px]">chat</span>
          </a>

          <button
            onClick={() => handleNavClick('about-contact')}
            className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-secondary text-on-primary hover:text-on-secondary px-4 lg:px-5 py-2.5 rounded-lg font-label-md text-label-md transition-all shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">request_quote</span>
            <span>Get a Free Quote</span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-container-highest px-6 py-5 shadow-xl transition-all animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-4 py-3 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-colors ${
                activePage === 'home'
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface hover:bg-surface-container'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`text-left px-4 py-3 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-colors ${
                activePage === 'services'
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface hover:bg-surface-container'
              }`}
            >
              Services & Projects
            </button>
            <button
              onClick={() => handleNavClick('about-contact')}
              className={`text-left px-4 py-3 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-colors ${
                activePage === 'about-contact'
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface hover:bg-surface-container'
              }`}
            >
              About & Contact
            </button>

            <div className="pt-3 border-t border-surface-container-high flex flex-col gap-2">
              <a
                href="tel:+919725695099"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
                <span>Call +91 97256 95099</span>
              </a>
              <button
                onClick={() => handleNavClick('about-contact')}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">request_quote</span>
                <span>Request Free Site Quote</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
