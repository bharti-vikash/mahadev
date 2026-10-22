import React, { useState, useEffect } from 'react';
import { FAQS } from '../data/faqs';

export default function AboutContactPage({ preFillData, onClearPreFill }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    projectLocation: 'Begowal, Kapurthala',
    serviceType: '',
    projectArea: '',
    projectNotes: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle pre-filled data passed from ProjectModal
  useEffect(() => {
    if (preFillData) {
      setFormData((prev) => ({
        ...prev,
        serviceType: preFillData.service || prev.serviceType,
        projectArea: preFillData.area || prev.projectArea,
        projectNotes: preFillData.notes || prev.projectNotes
      }));
      // Scroll smoothly to form
      const el = document.getElementById('contact-form-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [preFillData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Hello Mahadev Contractor,
I am submitting a project quotation request:
*Name:* ${formData.fullName || 'Client'}
*Phone:* ${formData.phoneNumber || 'Not provided'}
*Location:* ${formData.projectLocation}
*Service Required:* ${formData.serviceType || 'General Construction / Tiling'}
*Approximate Area:* ${formData.projectArea || 'To be measured'}
*Notes / Details:* ${formData.projectNotes || 'Site inspection requested'}`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919725695099?text=${encoded}`;

    setToastMessage('Enquiry prepared successfully! Opening WhatsApp to send your specifications directly to Contractor Mahadev.');

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      if (onClearPreFill) onClearPreFill();
    }, 600);
  };

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HEADER / INTRO */}
      <section className="relative w-full bg-surface-bright pt-12 pb-16 lg:pb-24 px-6 lg:px-12 overflow-hidden border-b border-surface-container-high">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-start max-w-3xl space-y-4">
            {/* Gold Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary shadow-sm border border-secondary/20">
              <span className="material-symbols-outlined text-[16px] text-secondary icon-fill">verified</span>
              <span className="font-label-caps text-label-caps tracking-widest uppercase font-semibold">
                ESTABLISHED 2010 · 15 YEARS IN BUSINESS
              </span>
            </div>
            <h1 className="font-display-hero text-3xl sm:text-4xl md:text-headline-lg lg:text-display-hero tracking-tight text-on-surface font-bold">
              Built on Trust. Finished with Precision.
            </h1>
            <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant max-w-2xl pt-2 leading-relaxed">
              Meet the master craftsmen delivering high-durability residential civil construction and flawless architectural tile fitting in Begowal, Kapurthala, and across Punjab.
            </p>

            {/* Fast highlights strip */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-body-sm font-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">architecture</span>
                <span className="font-medium text-on-surface">Laser-Level Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">group</span>
                <span className="font-medium text-on-surface">Direct Contractor Supervision</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px] icon-fill">shield_with_heart</span>
                <span className="font-medium text-on-surface">Zero Lippage Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE CONTRACTOR & STORY */}
      <section className="w-full bg-surface py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Side: Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl bg-surface-container border border-surface-container-highest">
                <img
                  className="w-full h-[460px] md:h-[540px] object-cover"
                  alt="Experienced Indian tile mason in Begowal Kapurthala carefully installing large format tile with modern leveling clips"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Ag6dsDaCmzoui1SkesWNwzvk9nCAMH6AhXS9jLAV_mbHNbQkEpQCE5H68A-5Emei-mRJzaMTq4t1NGupYA9-jBVKwrBcnzUT-YE2ghlRoBDIEnMSI4LxLdkbyspWl1l4EhNP2S3x0bARnSiHYvAvMV_XGxk0LBpYB_jkSdUECdbMr5TEVDx4a5fVuHmT4YipKffxEXtXZzaGoYHZ8IO9s-9MH8dGXPd0RqqjO8hT7EgYKHmtCQP7cA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>

                {/* Bottom Image Meta Box */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md shadow-md flex items-center justify-between border border-surface-container-highest">
                  <div>
                    <p className="font-label-caps text-label-caps text-secondary uppercase font-bold">
                      Precision Craft
                    </p>
                    <p className="font-headline-sm text-base sm:text-headline-sm text-on-surface leading-tight font-bold">
                      600×1200mm to Italian Slabs
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[28px]">straighten</span>
                </div>
              </div>

              {/* Floating Overlaid Experience Chip */}
              <div className="hidden sm:flex absolute -top-6 -right-6 bg-primary-container text-on-primary p-5 rounded-xl shadow-xl flex-col items-center justify-center max-w-[170px] text-center border border-white/10">
                <span className="material-symbols-outlined text-secondary-fixed text-[32px] mb-1">
                  workspace_premium
                </span>
                <span className="font-headline-sm text-headline-sm leading-tight text-surface-bright font-bold">
                  15+ Years
                </span>
                <span className="font-label-caps text-label-caps text-secondary-fixed-dim uppercase tracking-wider mt-1 font-semibold">
                  Active in Punjab
                </span>
              </div>
            </div>

            {/* Right Side: Story & Facts */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-8 bg-secondary"></span>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
                  Master Masonry & Tile Fitting
                </span>
              </div>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg tracking-tight text-on-surface font-bold">
                Over 15 Years of Dedicated On-Site Experience
              </h2>

              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  <strong className="text-on-surface font-semibold">Mahadev Construction & Tiles Fitting Contractor</strong>{' '}
                  has spent over a decade and a half establishing an unyielding standard for structural robustness and artisanal tile fitting across the Doaba region.
                </p>
                <p>
                  Operating directly out of <strong className="text-on-surface font-semibold">Begowal, Kapurthala</strong>, we partner with discerning homeowners, luxury villa builders, and commercial clients who reject sloppy joints, uneven floors, or hollow tile adhesive work.
                </p>
                <p>
                  We firmly reject the hands-off middleman model. Our contractor leads remain on-site daily, supervising mortar mixes, screed levels, perimeter expansion gaps, and structural curing schedules. This direct oversight prevents costly redesigns, keeps material wastage under 4%, and guarantees completion on schedule.
                </p>
              </div>

              {/* Core Commitments Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-lg bg-surface-container-low shadow-sm border border-surface-container">
                  <div className="w-10 h-10 rounded-md bg-surface-container-high flex items-center justify-center text-secondary mb-3">
                    <span className="material-symbols-outlined text-[22px]">format_align_center</span>
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface mb-1 font-bold">Zero-Lippage Guarantee</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Precision mechanical leveling clips guarantee 100% flush tile transitions throughout your home.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-surface-container-low shadow-sm border border-surface-container">
                  <div className="w-10 h-10 rounded-md bg-surface-container-high flex items-center justify-center text-secondary mb-3">
                    <span className="material-symbols-outlined text-[22px]">receipt_long</span>
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface mb-1 font-bold">Direct Transparency</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Detailed written scope with transparent labor charges, adhesive grades, and zero hidden markups.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-surface-container-low shadow-sm border border-surface-container">
                  <div className="w-10 h-10 rounded-md bg-surface-container-high flex items-center justify-center text-secondary mb-3">
                    <span className="material-symbols-outlined text-[22px]">terrain</span>
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface mb-1 font-bold">Local Punjab Expertise</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    15 years mastering regional soil settling, groundwater seepage, and seasonal temperature shifts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS HIGHLIGHTS & CREDENTIALS BAR */}
      <section className="w-full bg-primary-container text-on-primary py-12 px-6 lg:px-12 shadow-inner border-y border-surface-container-highest/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex flex-col p-6 rounded-xl bg-surface-container-highest/10 backdrop-blur-sm border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-secondary-fixed">15+</span>
                <span className="material-symbols-outlined text-secondary-fixed-dim text-[24px]">history</span>
              </div>
              <span className="font-title-md text-title-md font-semibold text-surface-bright">Years In Business</span>
              <span className="font-body-sm text-body-sm text-surface-variant mt-1">Verified local operational presence</span>
            </div>

            <div className="flex flex-col p-6 rounded-xl bg-surface-container-highest/10 backdrop-blur-sm border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-secondary-fixed">5.0</span>
                  <span className="material-symbols-outlined text-secondary-fixed text-[24px] icon-fill">star</span>
                </div>
                <span className="material-symbols-outlined text-secondary-fixed-dim text-[24px]">verified_user</span>
              </div>
              <span className="font-title-md text-title-md font-semibold text-surface-bright">Justdial Rating</span>
              <span className="font-body-sm text-body-sm text-surface-variant mt-1">100% verified customer reviews</span>
            </div>

            <div className="flex flex-col p-6 rounded-xl bg-surface-container-highest/10 backdrop-blur-sm border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-secondary-fixed">Begowal</span>
                <span className="material-symbols-outlined text-secondary-fixed-dim text-[24px]">location_on</span>
              </div>
              <span className="font-title-md text-title-md font-semibold text-surface-bright">Kapurthala Base</span>
              <span className="font-body-sm text-body-sm text-surface-variant mt-1">Serving all Doaba towns</span>
            </div>

            <div className="flex flex-col p-6 rounded-xl bg-surface-container-highest/10 backdrop-blur-sm border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-secondary-fixed">100%</span>
                <span className="material-symbols-outlined text-secondary-fixed-dim text-[24px]">handshake</span>
              </div>
              <span className="font-title-md text-title-md font-semibold text-surface-bright">Direct Contract</span>
              <span className="font-body-sm text-body-sm text-surface-variant mt-1">Zero broker commission</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & CONSULTATION SECTION */}
      <section className="w-full bg-surface-container-low py-16 lg:py-24 px-6 lg:px-12" id="contact-form-section">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
              Get In Touch
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg tracking-tight text-on-surface mt-1 font-bold">
              Let’s Discuss Your Next Project.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Fill in the enquiry form below or reach out directly via call or WhatsApp. We respond within 24 hours to schedule an accurate site visit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* LEFT COLUMN: Contact Details & Justdial Verification */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm space-y-6 border border-surface-container">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Direct Contact Points</h3>
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-semibold">
                        Direct Calling Line
                      </span>
                      <a
                        className="font-title-md text-title-md text-on-surface hover:text-secondary font-bold transition-colors"
                        href="tel:+919725695099"
                      >
                        +91 97256 95099
                      </a>
                      <span className="text-body-sm font-body-sm text-on-surface-variant">
                        Available 7 days a week for urgent consultations
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-semibold">
                        Head Office & Operational Yard
                      </span>
                      <span className="font-body-md text-body-md text-on-surface font-semibold">
                        Begowal, Kapurthala
                      </span>
                      <span className="text-body-sm font-body-sm text-on-surface-variant">
                        Punjab, India — 144621
                      </span>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">schedule</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-semibold">
                        Operating Schedule
                      </span>
                      <span className="font-body-md text-body-md text-on-surface font-semibold">
                        Mon – Sun: 8:00 AM – 8:00 PM
                      </span>
                      <span className="text-body-sm font-body-sm text-on-surface-variant">
                        Site evaluations scheduled seven days a week
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons Inside Left Column */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-[#25D366] text-white hover:opacity-95 transition-opacity font-label-md text-label-md font-semibold uppercase tracking-wider shadow-sm"
                    href="https://wa.me/919725695099?text=Hello%20Mahadev%20Contractor%2C%20I%20have%20a%20project%20inquiry%20in%20Begowal%2FKapurthala."
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 transition-colors font-label-md text-label-md font-semibold uppercase tracking-wider shadow-sm"
                    href="tel:+919725695099"
                  >
                    <span className="material-symbols-outlined text-[20px]">call</span>
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Justdial Verified Seal Card */}
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col space-y-4 border border-surface-container">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[24px] icon-fill">verified</span>
                    <span className="font-title-md text-title-md text-on-surface font-bold">
                      Justdial Verified Contractor
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-caps font-label-caps font-bold">
                    5.0 RATED
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Mahadev Construction & Tiles Fitting Contractor is an established enterprise with verified physical operating credentials and client reviews on Justdial Kapurthala.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md hover:underline font-semibold"
                  href="https://www.justdial.com/Kapurthala/Mahadev-Construction---Tiles-Fitting-Contractor-Begowal/9999P1822-1822-260929104805-W2Y4_BZDET"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>View Verified Justdial Profile</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>

              {/* Regional Scope Note */}
              <div className="p-4 rounded-lg bg-surface-container text-body-sm font-body-sm text-on-surface-variant flex items-start gap-3 border border-surface-container-high">
                <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">travel_explore</span>
                <span>
                  <strong>Service Catchment:</strong> Serving Begowal, Bholath, Kapurthala city, Kartarpur, Jalandhar rural outskirts, and surrounding villages. In-person site survey available upon request.
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: Project Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest p-8 sm:p-10 rounded-xl shadow-md border border-surface-container">
                <div className="mb-6">
                  <h3 className="font-headline-md text-xl sm:text-headline-md text-on-surface font-bold">
                    Request a Free Quotation & Site Visit
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Provide preliminary details about your property; contractor Mahadev will formulate an honest scope and estimate.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="font-label-caps text-label-caps text-on-surface uppercase font-semibold" htmlFor="fullName">
                        Full Name *
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded bg-surface text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary/50 shadow-inner border border-surface-container"
                        id="fullName"
                        name="fullName"
                        placeholder="e.g. Gurpreet Singh"
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="font-label-caps text-label-caps text-on-surface uppercase font-semibold" htmlFor="phoneNumber">
                        Phone Number *
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded bg-surface text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary/50 shadow-inner border border-surface-container"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="+91 98XXX XXXXX"
                        required
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Project Location */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="font-label-caps text-label-caps text-on-surface uppercase font-semibold" htmlFor="projectLocation">
                        Project Location / City *
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded bg-surface text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary/50 shadow-inner border border-surface-container"
                        id="projectLocation"
                        name="projectLocation"
                        placeholder="e.g. Begowal, Kapurthala"
                        required
                        type="text"
                        value={formData.projectLocation}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Service Required */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="font-label-caps text-label-caps text-on-surface uppercase font-semibold" htmlFor="serviceType">
                        Service Required *
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary/50 shadow-inner border border-surface-container"
                        id="serviceType"
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                      >
                        <option disabled value="">Select Service</option>
                        <option value="Residential Construction">Residential Civil Construction</option>
                        <option value="Commercial Construction">Commercial Building Construction</option>
                        <option value="Floor and Wall Tile Fitting">Floor & Wall Tile Fitting (GVT/PGVT)</option>
                        <option value="Bathroom and Kitchen Tiling">Bathroom & Kitchen Waterproof Tiling</option>
                        <option value="Marble and Granite Flooring">Italian Marble & Granite Flooring</option>
                        <option value="Renovation and Repairs">Renovation & Structural Repairs</option>
                        <option value="Other">Other Specific Scope</option>
                      </select>
                    </div>
                  </div>

                  {/* Approximate Area / Size */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="font-label-caps text-label-caps text-on-surface uppercase font-semibold" htmlFor="projectArea">
                      Approximate Area / Size
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded bg-surface text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary/50 shadow-inner border border-surface-container"
                      id="projectArea"
                      name="projectArea"
                      placeholder="e.g. 2,500 sq. ft. or 4-room villa"
                      type="text"
                      value={formData.projectArea}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="font-label-caps text-label-caps text-on-surface uppercase font-semibold" htmlFor="projectNotes">
                      Project Details & Special Requirements
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded bg-surface text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary/50 shadow-inner resize-y border border-surface-container"
                      id="projectNotes"
                      name="projectNotes"
                      placeholder="Tell us about your project timeline, tile preferences (vitrified, marble, porcelain), structural requirements, or current construction stage..."
                      rows="4"
                      value={formData.projectNotes}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {/* Buttons Container */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md uppercase tracking-wider font-semibold shadow-md transition-all cursor-pointer disabled:opacity-50"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit Enquiry'}</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                    <button
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors cursor-pointer border border-surface-container-high"
                      onClick={handleFormSubmit}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[#25D366] text-[18px]">chat</span>
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>

                  {/* Toast */}
                  {toastMessage && (
                    <div className="mt-4 p-4 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-between shadow border border-secondary-fixed-dim">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[20px] text-secondary icon-fill">
                          check_circle
                        </span>
                        <span className="font-label-md text-label-md font-semibold">
                          {toastMessage}
                        </span>
                      </div>
                      <button
                        onClick={() => setToastMessage(null)}
                        className="text-on-secondary-fixed hover:opacity-75 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    </div>
                  )}

                  {/* Privacy Notice */}
                  <p className="font-body-sm text-body-sm text-on-surface-variant pt-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
                    <span>Your contact details are strictly used to schedule your consultation and formulate your estimate. No promotional spam.</span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="w-full bg-surface-bright py-16 lg:py-24 px-6 lg:px-12 border-t border-surface-container-high">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
              Common Questions
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg tracking-tight text-on-surface mt-1 font-bold">
              Frequently Asked Questions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Clear, straightforward answers about how we operate, price, and deliver projects in Punjab.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-surface-container transition-colors"
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    onClick={() => toggleFaq(faq.id)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="font-title-md text-base sm:text-title-md text-on-surface font-semibold pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-secondary transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-body-md font-body-md text-on-surface-variant leading-relaxed border-t border-surface-container-low animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
