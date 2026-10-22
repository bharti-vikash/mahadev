import React from 'react';

export default function Footer({ setActivePage, onOpenTerms }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-tertiary-container text-surface-bright pt-16 pb-28 md:pb-12 border-t border-surface-container-highest/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Mahadev Construction Brand Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Uz_B-a7hc-ydqmRw564RZa8AmBozVuq3wtkDnl-ePtYp-KwM7ZLSs5cp7W2lR0WYuGlBTmV6ojwOFnX1E0syFc-i3dkKmRPCaqv9zQUyclF2NAR7BYKkhwISBdMfbwpfmLfzc7W_AGQOjVI2h1-I_8DaqXtu9ioVo69U33kRLfSoHlL5aox5JRg5RTUH3KgVeeP2G5e4rNQDyZC0dCM8ovP7xbcWnycKijr281IBQKzF2zPPcePYSlqz8"
              />
              <span className="font-headline-sm text-headline-sm tracking-tight text-surface-bright font-bold">
                MAHADEV
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-surface-dim leading-relaxed">
              Master construction contractors and precision tile-fitting specialists based in Begowal, Kapurthala, Punjab. Delivering structural masonry, luxury villa builds, and zero-lippage marble installations.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-inverse-surface border border-outline-variant/30 text-surface-bright text-xs">
                <span className="material-symbols-outlined text-secondary-fixed text-sm icon-fill">verified</span>
                <span className="font-label-caps text-label-caps uppercase">15 Yrs Mastery</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-inverse-surface border border-outline-variant/30 text-surface-bright text-xs">
                <span className="material-symbols-outlined text-secondary-fixed text-sm icon-fill">star</span>
                <span className="font-label-caps text-label-caps uppercase">5.0 Justdial Rated</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-label-caps text-label-caps uppercase text-secondary-fixed tracking-widest mb-4 font-bold">
              Quick Links
            </p>
            <ul className="space-y-2.5 font-body-sm text-body-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-surface-dim hover:text-surface-bright transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-surface-dim hover:text-surface-bright transition-colors cursor-pointer text-left"
                >
                  Services & Projects Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about-contact')}
                  className="text-surface-dim hover:text-surface-bright transition-colors cursor-pointer text-left"
                >
                  About the Contractor
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about-contact')}
                  className="text-surface-dim hover:text-surface-bright transition-colors cursor-pointer text-left text-secondary-fixed-dim font-medium"
                >
                  Get a Free Site Quotation
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="text-surface-dim hover:text-surface-bright transition-colors cursor-pointer text-left"
                >
                  Quality Guarantee & Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <p className="font-label-caps text-label-caps uppercase text-secondary-fixed tracking-widest mb-4 font-bold">
              Core Services
            </p>
            <ul className="space-y-2.5 font-body-sm text-body-sm text-surface-dim">
              <li>Residential Construction & Framing</li>
              <li>Floor & Wall Tile Fitting (GVT/PGVT)</li>
              <li>Bathroom & Kitchen Waterproof Tiling</li>
              <li>Marble & Italian Bookmatch Flooring</li>
              <li>Exterior Front Elevation Cladding</li>
              <li>Turnkey Renovation & Structural Repairs</li>
            </ul>
          </div>

          {/* Contact & Direct Connect */}
          <div>
            <p className="font-label-caps text-label-caps uppercase text-secondary-fixed tracking-widest mb-4 font-bold">
              Contact & Direct Connect
            </p>
            <ul className="space-y-3 font-body-sm text-body-sm text-surface-dim">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-lg shrink-0 mt-0.5">call</span>
                <a className="hover:text-surface-bright transition-colors font-medium" href="tel:+919451039323">
                  +91 94510 39323
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-lg shrink-0 mt-0.5">pin_drop</span>
                <span>Begowal, Kapurthala, Punjab 144621, India</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#25D366] text-lg shrink-0 mt-0.5">chat</span>
                <a
                  className="hover:text-surface-bright transition-colors text-[#25D366]"
                  href="https://wa.me/919451039323?text=Hello%20Mahadev%20Contractor,%20I%20would%20like%20to%20discuss%20my%20site%20construction%20and%20tile%20fitting."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Direct WhatsApp Connect
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-lg shrink-0 mt-0.5">open_in_new</span>
                <a
                  className="text-secondary-fixed hover:underline transition-all"
                  href="https://www.justdial.com/Kapurthala/Mahadev-Construction---Tiles-Fitting-Contractor-Begowal/9999P1822-1822-260929104805-W2Y4_BZDET"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Verified Justdial Profile (5.0★)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="border-t border-surface-container-highest/20 pt-8 flex flex-col md:flex-row items-center justify-between text-body-sm font-body-sm text-surface-dim gap-4 text-center md:text-left">
          <p>© {currentYear} Mahadev Construction & Tiles Fitting Contractor. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-outline">
            <span>Begowal · Bholath · Kapurthala · Jalandhar Region</span>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-surface-bright underline cursor-pointer">
              Zero-Lippage Guarantee Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
