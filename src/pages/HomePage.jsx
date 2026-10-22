import React from 'react';
import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';

export default function HomePage({ setActivePage, onSelectProject }) {
  // First 4 services for the preview grid
  const previewServices = SERVICES.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-primary-container text-surface-bright min-h-[90vh] flex flex-col justify-between">
        {/* Hero Background with Cinematic Contrast Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Architectural modern luxury villa in Begowal Kapurthala by Mahadev Construction"
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000 ease-out"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANlW3As-UmBHvPtA1U6bHCiE1Fp_-wb5gosaSStzgxdW_qgpDzGC_eWVj-pIARWE6yQGFQlv3qGVrPdytOlW4wwkPqbaPMw5jb-zKYuvp5DZtfYeeXImqDQ-fDg_yE8id1Hgm-eLre7gD6E9gxFi0qurthGuE7bDSWW6nAzza6jitbbizMtH1rtlDNaix1xa8wes6y7rEbaEQ1w77ujwQ5L45A6f10wsB4GlehnhEO-Jz3o-SyX3CYkA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121313] via-[#121313]/70 to-[#121313]/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#121313]/90 via-[#121313]/40 to-transparent"></div>
        </div>

        {/* Main Hero Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            {/* Verified Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-bright/10 backdrop-blur-md shadow-sm border border-white/10">
              <span className="material-symbols-outlined text-secondary-fixed text-sm icon-fill">
                verified
              </span>
              <span className="font-label-caps text-label-caps text-secondary-fixed tracking-widest uppercase font-semibold">
                Verified Punjab Contractor · 15 Years Experience
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-display-hero text-surface-bright font-bold tracking-tight leading-[1.08] text-balance">
              Building Your Dreams with{' '}
              <span className="text-secondary-fixed-dim">Quality & Precision</span>.
            </h1>

            {/* Subtitle */}
            <p className="font-body-lg text-base sm:text-body-lg text-surface-dim max-w-2xl font-light leading-relaxed">
              Professional civil construction and master-grade tile fitting services for luxury homes, modern villas, and commercial spaces across Begowal and Kapurthala district.
            </p>

            {/* CTA Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setActivePage('about-contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-secondary-fixed-dim text-on-secondary-fixed font-label-md text-label-md hover:bg-secondary-fixed transition-all shadow-md group cursor-pointer font-semibold uppercase tracking-wider"
              >
                <span>Get a Free Quote</span>
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>

              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-bright/15 hover:bg-surface-bright/25 text-surface-bright backdrop-blur-md font-label-md text-label-md transition-all shadow-sm font-semibold uppercase tracking-wider"
                href="tel:+919451039323"
              >
                <span className="material-symbols-outlined text-lg text-secondary-fixed">call</span>
                <span>Call: +91 94510 39323</span>
              </a>

              <a
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-surface-bright font-label-md text-label-md transition-all shadow-sm font-semibold uppercase tracking-wider"
                href="https://wa.me/919451039323?text=Hello%20Mahadev%20Contractor,%20I%20would%20like%20to%20request%20a%20quotation%20for%20my%20project."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>WhatsApp Us</span>
              </a>

            </div>
          </div>
        </div>

        {/* Floating Glassmorphic Trust Metric Bar */}
        <div className="relative z-10 w-full bg-tertiary-container/85 backdrop-blur-xl py-6 px-6 lg:px-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-secondary-fixed/15 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-fixed text-xl">history_edu</span>
              </div>
              <div className="min-w-0">
                <div className="font-headline-sm text-lg sm:text-headline-sm text-surface-bright font-bold leading-none">
                  15+ Years
                </div>
                <div className="font-body-sm text-xs sm:text-body-sm text-surface-dim truncate mt-1">
                  Proven Civil Experience
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-secondary-fixed/15 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-fixed text-xl icon-fill">star</span>
              </div>
              <div className="min-w-0">
                <div className="font-headline-sm text-lg sm:text-headline-sm text-surface-bright font-bold leading-none">
                  5.0 ★ Rating
                </div>
                <div className="font-body-sm text-xs sm:text-body-sm text-surface-dim truncate mt-1">
                  Verified Justdial Business
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-secondary-fixed/15 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-fixed text-xl">straighten</span>
              </div>
              <div className="min-w-0">
                <div className="font-headline-sm text-lg sm:text-headline-sm text-surface-bright font-bold leading-none">
                  100% Quality
                </div>
                <div className="font-body-sm text-xs sm:text-body-sm text-surface-dim truncate mt-1">
                  Zero-Lippage Leveling
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-secondary-fixed/15 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-fixed text-xl">home_pin</span>
              </div>
              <div className="min-w-0">
                <div className="font-headline-sm text-lg sm:text-headline-sm text-surface-bright font-bold leading-none">
                  Begowal & Kapurthala
                </div>
                <div className="font-body-sm text-xs sm:text-body-sm text-surface-dim truncate mt-1">
                  On-Site Visit Across Punjab
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES PREVIEW SECTION */}
      <section className="w-full py-20 lg:py-24 bg-surface px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-secondary-fixed-dim"></div>
                <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase font-semibold">
                  Our Expertise
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg font-bold text-on-surface tracking-tight">
                Engineered for Durability, Finished with Elegance
              </h2>
            </div>
            <div className="max-w-md bg-surface-container-high p-3.5 rounded-lg border border-surface-container-highest">
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">info</span>
                <span>Custom packages tailored to site specifications. Confirming full scope directly with client on-site.</span>
              </p>
            </div>
          </div>

          {/* 4 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewServices.map((service) => (
              <div
                key={service.id}
                className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-surface-container"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={service.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-secondary-fixed-dim text-on-secondary-fixed font-label-caps text-label-caps uppercase font-bold tracking-wider">
                    {service.badge}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-title-md text-title-md font-bold text-on-surface group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setActivePage('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:text-on-surface transition-colors font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      <span>Explore Scope</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Services Nav Button */}
          <div className="text-center pt-4">
            <button
              onClick={() => {
                setActivePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary text-on-surface font-label-md text-label-md uppercase tracking-wider font-semibold transition-all shadow-sm cursor-pointer"
            >
              <span>View All 7 Capabilities & Execution Protocol</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION */}
      <section className="w-full py-20 lg:py-24 bg-surface-container-low px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual with Overlapping Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-high border border-surface-container-highest">
              <img
                alt="Luxury interior living room with mirror polished Italian marble tile fitting"
                className="w-full h-[440px] sm:h-[520px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxKouST1oCd_PuBNmjVmZMyDWEvWF87W3eNdGD-dFA-B2cOFpugEO1N0dfJOHPQdgv-ewLqinhIlA01jv5k7IuNEJ2krGhLArGpfsJEAbpcslECrWtEpupGACc6Kmrjau5XShaQFblxuiQ925n7KU-dtnQdMORo7JdX01HojR0sQnU7jaMIpP9SbquHTxX8LjlaE0XzkrzzFqkraUw2ors5FBLthSlB1pkhTWqgaqPV0cpoO1Pd15fEQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121313]/60 via-transparent to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-tertiary-container text-surface-bright p-5 rounded-xl shadow-xl max-w-xs flex items-center gap-4 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-secondary-fixed-dim text-on-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl font-bold">handyman</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm font-bold text-secondary-fixed-dim leading-none">
                  15 Years
                </div>
                <div className="font-body-sm text-body-sm text-surface-dim mt-0.5">
                  Of Trusted Service Across Kapurthala
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Quality Mandate */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-secondary-fixed-dim"></div>
                <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase font-semibold">
                  About Mahadev Contractors
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg font-bold text-on-surface tracking-tight">
                Quality Construction. Beautiful Finishing.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              For over 15 years, Mahadev Construction & Tiles Fitting Contractor has set the benchmark for dependable structural masonry and immaculate tile installations in Begowal and surrounding Kapurthala regions.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              From full structural home construction to delicate Italian marble and laser-leveled vitrified tiles, every project is supervised personally. We combine traditional Punjab construction durability with modern leveling tools to ensure floors remain zero-lippage, flush, and enduring for generations.
            </p>

            {/* Value Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5 text-secondary">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <span className="font-body-md text-body-md text-on-surface font-medium">
                  Direct contractor communication with clear milestones & timely daily updates
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5 text-secondary">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <span className="font-body-md text-body-md text-on-surface font-medium">
                  Experienced master masons & skilled tile installers with 15+ years hands-on mastery
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5 text-secondary">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <span className="font-body-md text-body-md text-on-surface font-medium">
                  Accurate cost estimates with zero hidden surprises and verified material standards
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-5">
              <button
                onClick={() => {
                  setActivePage('about-contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-primary text-on-primary hover:bg-secondary font-label-md text-label-md uppercase tracking-wider transition-all shadow-sm cursor-pointer font-semibold"
              >
                <span>Know More About Us</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <a
                className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface hover:text-secondary transition-colors"
                href="tel:+919451039323"
              >
                <span className="material-symbols-outlined text-secondary text-lg">call</span>
                <span className="font-bold">+91 94510 39323</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SHOWCASE */}
      <section className="w-full py-20 lg:py-24 bg-surface px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Showcase Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-secondary-fixed-dim"></div>
                <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase font-semibold">
                  Featured Work
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg font-bold text-on-surface tracking-tight">
                Recent Projects & Architectural Craftsmanship
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Click any project card to inspect deliverables, room dimensions, and request a matching quotation.
              </p>
            </div>
            <button
              onClick={() => {
                setActivePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md uppercase tracking-wider font-semibold transition-all self-start md:self-end cursor-pointer"
            >
              <span>Explore All Projects</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          {/* 6-Item Curated Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative h-80 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer bg-surface-container-high border border-surface-container"
              >
                <img
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="self-end px-3 py-1 rounded bg-secondary-fixed-dim text-on-secondary-fixed font-label-caps text-label-caps uppercase font-bold shadow">
                    {project.badge}
                  </div>
                  <div className="space-y-1">
                    <span className="text-secondary-fixed font-label-caps text-label-caps uppercase tracking-wider">
                      {project.location}
                    </span>
                    <h3 className="font-title-md text-title-md font-bold text-surface-bright">
                      {project.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-surface-dim line-clamp-2">
                      {project.shortDescription}
                    </p>
                    <div className="pt-2 flex items-center gap-1.5 text-secondary-fixed text-xs font-semibold uppercase">
                      <span className="material-symbols-outlined text-sm">zoom_in</span>
                      <span>Click to view details & scope</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reference Photo Note Box */}
          <div className="bg-surface-container-low p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-surface-container">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl">photo_library</span>
              <p className="font-body-sm text-body-sm text-on-surface">
                Looking for specific reference photos? We have extensive on-site video & photo catalogs for ongoing sites in Begowal.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md shrink-0 transition-colors uppercase tracking-wider font-semibold"
              href="https://wa.me/919451039323?text=Hello%20Mahadev%20Contractor,%20please%20share%20your%20recent%20work%20photos%20and%20videos."
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              <span>Request WhatsApp Catalog</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="w-full py-20 lg:py-24 bg-surface-container-low px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-14">
          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2">
              <div className="w-6 h-0.5 bg-secondary-fixed-dim"></div>
              <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase font-semibold">
                Why Clients Trust Us
              </span>
              <div className="w-6 h-0.5 bg-secondary-fixed-dim"></div>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg font-bold text-on-surface tracking-tight">
              Craftsmanship Grounded in 15 Years of Rigor
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We treat every residential build and tile fitting job as a lasting monument of our professional name.
            </p>
          </div>

          {/* 4 Clean Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-4 border border-surface-container">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl icon-fill">verified_user</span>
              </div>
              <h3 className="font-title-md text-title-md font-bold text-on-surface">15 Years Practical Knowledge</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Deep hands-on experience in Punjab's soil conditions, moisture-proofing, and durable structural construction techniques.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-4 border border-surface-container">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl">square_foot</span>
              </div>
              <h3 className="font-title-md text-title-md font-bold text-on-surface">Attention to Finishing Details</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Strict zero-lippage tile alignment, laser-guided level checks, and clean joint treatments with premium epoxy grout.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-4 border border-surface-container">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl">construction</span>
              </div>
              <h3 className="font-title-md text-title-md font-bold text-on-surface">Quality-Focused Workmanship</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Only industry-standard cement mixes, high-grade polymer tile adhesives, and resilient curing cycles applied on every square meter.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-4 border border-surface-container">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl">support_agent</span>
              </div>
              <h3 className="font-title-md text-title-md font-bold text-on-surface">Direct Contractor Access</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Direct access to contractor Mahadev on site. Transparent progress tracking, fair pricing, and reliable handover dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CONVERSION BANNER */}
      <section className="w-full py-20 px-6 lg:px-12 bg-primary">
        <div className="max-w-5xl mx-auto rounded-2xl bg-tertiary-container p-8 md:p-14 text-center space-y-8 relative overflow-hidden shadow-2xl border border-white/10">
          {/* Glow Accent */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-secondary-fixed/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed-dim font-bold">
              Start Your Project With Certainty
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-surface-bright font-bold tracking-tight">
              Planning Your Next Construction Project in Begowal or Kapurthala?
            </h2>
            <p className="font-body-lg text-base sm:text-body-lg text-surface-dim font-light">
              Get in touch today for an on-site visit, detailed scope assessment, and a free, transparent quotation without hidden markups.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-secondary-fixed-dim hover:bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md uppercase tracking-wider font-semibold transition-all shadow-md"
              href="tel:+919451039323"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              <span>Call: +91 94510 39323</span>
            </a>
            <a
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-surface-bright font-label-md text-label-md uppercase tracking-wider font-semibold transition-all shadow-md"
              href="https://wa.me/919451039323?text=Hello%20Mahadev%20Contractor,%20I%20would%20like%20to%20request%20a%20quotation%20for%20my%20project."
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setActivePage('about-contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-surface-bright/10 hover:bg-surface-bright/20 text-surface-bright font-label-md text-label-md uppercase tracking-wider font-semibold backdrop-blur-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              <span>Book Site Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
