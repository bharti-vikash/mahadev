import React, { useState } from 'react';
import { SERVICES } from '../data/services';
import { PROJECTS, GALLERY_CATEGORIES } from '../data/projects';

export default function ServicesPage({ setActivePage, onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO BANNER */}
      <section className="relative w-full bg-primary text-on-primary py-20 px-6 lg:px-12 overflow-hidden border-b border-surface-container-highest/15">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="64" id="arch-grid" patternUnits="userSpaceOnUse" width="64">
                <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#f1bf68" strokeWidth="0.8"></path>
              </pattern>
            </defs>
            <rect fill="url(#arch-grid)" height="100%" width="100%"></rect>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto flex flex-col items-start gap-8 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high/15 border border-secondary-fixed-dim/30">
            <span className="material-symbols-outlined text-secondary-fixed text-sm icon-fill">verified_user</span>
            <span className="font-label-caps text-label-caps text-secondary-fixed tracking-widest uppercase font-semibold">
              Our Capabilities & Portfolio
            </span>
          </div>

          <div className="flex flex-col max-w-4xl space-y-4">
            <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-display-hero text-surface-bright tracking-tight leading-none">
              Our Services & <span className="text-secondary-fixed-dim font-bold">Execution Mastery</span>
            </h1>
            <p className="font-body-lg text-base sm:text-body-lg text-surface-variant max-w-2xl leading-relaxed">
              Comprehensive civil contracting, heavy structural masonry, and precision tile-fitting solutions engineered for luxury villas, commercial developments, and bespoke residences across Punjab.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-colors shadow-sm font-semibold"
              href="#services-list"
            >
              <span>Explore Services</span>
              <span className="material-symbols-outlined text-base">arrow_downward</span>
            </a>
            <a
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-surface-container-high/20 border border-secondary-fixed/40 text-surface-bright font-label-md text-label-md uppercase tracking-wider hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all font-semibold"
              href="#gallery-showcase"
            >
              <span>View Project Gallery</span>
              <span className="material-symbols-outlined text-base">photo_library</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 w-full border-t border-surface-container-highest/20 mt-4 text-surface-dim">
            <div>
              <span className="block font-headline-md text-2xl sm:text-headline-md text-secondary-fixed-dim font-bold">15+</span>
              <span className="font-label-caps text-label-caps text-surface-variant uppercase tracking-wider">Years Civil Experience</span>
            </div>
            <div>
              <span className="block font-headline-md text-2xl sm:text-headline-md text-secondary-fixed-dim font-bold">5.0★</span>
              <span className="font-label-caps text-label-caps text-surface-variant uppercase tracking-wider">Justdial Verified Rating</span>
            </div>
            <div>
              <span className="block font-headline-md text-2xl sm:text-headline-md text-secondary-fixed-dim font-bold">0-Lippage</span>
              <span className="font-label-caps text-label-caps text-surface-variant uppercase tracking-wider">Laser Level Calibration</span>
            </div>
            <div>
              <span className="block font-headline-md text-2xl sm:text-headline-md text-secondary-fixed-dim font-bold">100%</span>
              <span className="font-label-caps text-label-caps text-surface-variant uppercase tracking-wider">Waterproof Subflooring</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DETAILED SERVICES SECTION */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12" id="services-list">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-container-high pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-secondary font-label-caps text-label-caps tracking-widest uppercase font-semibold">
                <span className="w-2.5 h-2.5 bg-secondary rounded-full"></span>
                <span>Contracting & Tiling Capabilities</span>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-on-surface tracking-tight font-bold">
                End-to-End Execution with Meticulous Architectural Detail
              </h2>
            </div>
            <div className="max-w-md bg-surface-container-low p-4 rounded border-l-4 border-secondary text-body-sm font-body-sm text-on-surface-variant">
              <strong className="text-on-surface font-semibold block mb-1">Tailored Contract Models:</strong>
              Service packages can be customized for turnkey new builds, complete structural civil contracting, or specialized tile-only labor contracts.
            </div>
          </div>

          {/* 7 Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv, index) => {
              const isFullWidth = index === SERVICES.length - 1; // 7th service spans full row on desktop
              return (
                <div
                  key={srv.id}
                  className={`flex flex-col bg-surface-container-lowest rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-surface-container ${
                    isFullWidth ? 'lg:col-span-3 lg:flex-row' : ''
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden bg-surface-container ${
                      isFullWidth ? 'lg:w-1/3 h-64 lg:h-auto' : 'h-56'
                    }`}
                  >
                    <img
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={srv.image}
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 text-on-primary px-3 py-1 rounded text-label-caps font-label-caps uppercase tracking-wider font-semibold">
                      {srv.badge}
                    </div>
                  </div>

                  <div
                    className={`p-6 flex flex-col flex-grow justify-between space-y-5 ${
                      isFullWidth ? 'lg:w-2/3 lg:p-8 lg:space-y-6' : ''
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-secondary">
                        <span className="material-symbols-outlined text-2xl">{srv.icon}</span>
                        <h3 className="font-headline-sm text-lg sm:text-headline-sm text-on-surface font-bold">
                          {srv.title}
                        </h3>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {srv.fullDescription}
                      </p>

                      <ul className="space-y-2 pt-2 border-t border-surface-container font-body-sm text-body-sm text-on-surface">
                        {srv.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5 icon-fill">
                              check_circle
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-surface-container-high flex items-center justify-between">
                      <a
                        className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-colors font-semibold"
                        href={`https://wa.me/919725695099?text=${encodeURIComponent(
                          `Hello Mahadev Construction, I am enquiring about ${srv.title}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Enquire Now</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </a>
                      <a
                        className="text-on-surface hover:text-secondary p-2 transition-colors"
                        href="tel:+919725695099"
                        title="Direct Call"
                      >
                        <span className="material-symbols-outlined">call</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: DYNAMIC PROJECT GALLERY WITH CATEGORY FILTERS */}
      <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12 border-t border-surface-container-high" id="gallery-showcase">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-secondary font-label-caps text-label-caps tracking-widest uppercase font-semibold">
                <span className="w-2.5 h-2.5 bg-secondary rounded-full"></span>
                <span>Project Showcase</span>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-on-surface tracking-tight font-bold">
                Craftsmanship Across Begowal & Kapurthala
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Browse through execution standards and reference installations completed across modern duplexes, villas, and commercial spaces.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 bg-surface p-1.5 rounded-lg shadow-sm border border-surface-container">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-4 py-2 rounded text-label-md font-label-md uppercase tracking-wider transition-colors cursor-pointer font-semibold ${
                    selectedFilter === cat.id
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProject(item)}
                className="group relative bg-surface rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-surface-container cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-72 w-full overflow-hidden bg-surface-container">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="inline-flex items-center gap-1.5 text-surface-bright font-label-md text-label-md font-semibold uppercase">
                      <span className="material-symbols-outlined text-secondary-fixed">zoom_in</span> Click to Inspect Details
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded text-label-caps font-label-caps uppercase tracking-wider font-semibold">
                    {item.categoryLabel}
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-body-sm font-body-sm text-secondary font-medium mb-1">
                      <span>{item.location}</span>
                      <span>{item.size}</span>
                    </div>
                    <h4 className="font-headline-sm text-lg sm:text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-surface-container flex items-center justify-between">
                    <span className="text-secondary hover:text-primary font-label-md text-label-md uppercase tracking-wider inline-flex items-center gap-1 font-semibold">
                      <span>Request Similar Design</span>
                      <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </span>
                    <span className="text-xs text-outline-variant font-mono">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Note Disclaimer */}
          <div className="p-4 bg-surface rounded flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant shadow-sm border border-surface-container">
            <span className="material-symbols-outlined text-secondary shrink-0">info</span>
            <span>
              <strong className="text-on-surface">Inspection Note:</strong> All photos represent architectural execution typologies and quality benchmarks. Homeowners and architects are invited to schedule live site walk-throughs in Begowal to inspect current ongoing civil and tile installations.
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 4: TECHNICAL CRAFTSMANSHIP & STANDARDS CALLOUT */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12 border-t border-surface-container-high">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-secondary font-label-caps text-label-caps tracking-widest uppercase font-semibold">
              <span className="material-symbols-outlined text-base">architecture</span>
              <span>Execution Protocol</span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-on-surface tracking-tight font-bold">
              How We Ensure 100% Zero-Defect Craftsmanship
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Unlike ordinary subcontracted laborers, our crew executes every project according to rigid engineering standards that eliminate hollow tiles, cracks, and moisture infiltration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Laser Precision */}
            <div className="bg-surface-container-lowest p-8 rounded shadow-sm hover:shadow-md transition-shadow space-y-4 border border-surface-container">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl">straighten</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface font-bold">Laser Precision Alignment</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Every room and hallway is measured with optical cross-line laser transmitters. We utilize mechanical anti-lippage clips and 2mm uniform grout spacers across every single tile joint to ensure totally flush, trip-free surfaces.
              </p>
              <div className="pt-2 text-secondary-fixed-dim flex items-center gap-1.5 font-label-caps text-label-caps uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm text-secondary icon-fill">verified</span>
                <span className="text-secondary font-semibold">Zero Lippage Guarantee</span>
              </div>
            </div>

            {/* 2. Certified Adhesives */}
            <div className="bg-surface-container-lowest p-8 rounded shadow-sm hover:shadow-md transition-shadow space-y-4 border border-surface-container">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl">layers</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface font-bold">Certified Polymer Adhesives</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                We abandon weak sand-cement slurries in favor of premium ISI-certified C2TE grade polymer-modified tile adhesives. This guarantees 100% back-butter coverage, zero hollow sounds, and permanent thermal flexibility.
              </p>
              <div className="pt-2 text-secondary-fixed-dim flex items-center gap-1.5 font-label-caps text-label-caps uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm text-secondary icon-fill">verified</span>
                <span className="text-secondary font-semibold">100% Solid Bed Contact</span>
              </div>
            </div>

            {/* 3. Waterproof Assured */}
            <div className="bg-surface-container-lowest p-8 rounded shadow-sm hover:shadow-md transition-shadow space-y-4 border border-surface-container">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl">water_drop</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface font-bold">Waterproof Subfloor Assurance</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                All wet zones—bathrooms, balconies, and rooftops—receive two coats of elastomeric polymer waterproofing membranes before adhesive application. We test flood levels for 48 hours to confirm watertight integrity.
              </p>
              <div className="pt-2 text-secondary-fixed-dim flex items-center gap-1.5 font-label-caps text-label-caps uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm text-secondary icon-fill">verified</span>
                <span className="text-secondary font-semibold">48-Hour Hydrostatic Test</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ENQUIRY CTA SECTION */}
      <section className="w-full bg-surface-container py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-primary text-on-primary rounded-xl p-8 lg:p-14 overflow-hidden shadow-xl border border-white/10">
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high/20 text-secondary-fixed text-label-caps font-label-caps uppercase tracking-wider font-semibold">
                  <span className="material-symbols-outlined text-sm">support_agent</span>
                  <span>Direct Contractor Consultation</span>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-surface-bright tracking-tight font-bold">
                  Need Expert Guidance for Your Construction or Tile Project?
                </h2>
                <p className="font-body-md text-body-md text-surface-variant max-w-2xl leading-relaxed">
                  Speak directly with master contractor Mahadev to review your floor plans, calculate tile quantity requirements, compare vitrified versus Italian marble costs, and receive an estimated project timeline.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-2 text-body-sm font-body-sm text-surface-dim">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-fixed text-base">pin_drop</span>
                    <span>On-site visits in Begowal, Kapurthala & adjacent towns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-fixed text-base">timer</span>
                    <span>Quotes provided within 24 hours of site survey</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded bg-secondary text-on-secondary hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed font-label-md text-label-md uppercase tracking-wider transition-all shadow-md font-semibold"
                  href="tel:+919725695099"
                >
                  <span className="material-symbols-outlined text-xl">call</span>
                  <span>Call +91 97256 95099</span>
                </a>
                <a
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded bg-[#25D366] text-white hover:bg-[#20ba59] font-label-md text-label-md uppercase tracking-wider transition-all shadow-md font-semibold"
                  href="https://wa.me/919725695099?text=Hello%20Mahadev%20Contractor,%20I%20would%20like%20to%20discuss%20my%20site%20construction%20and%20tile%20fitting%20project."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-xl">chat</span>
                  <span>Chat with Contractor</span>
                </a>
                <button
                  onClick={() => {
                    setActivePage('about-contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-transparent text-surface-bright border border-surface-container-highest hover:bg-surface-container-high/20 font-label-md text-label-md uppercase tracking-wider transition-colors font-semibold cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">calendar_month</span>
                  <span>Book Free On-Site Visit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
