import React, { useState, useEffect } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import NinatechLogo from "./components/NinatechLogo";
import LayananPage from "./components/LayananPage";
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Check, 
  MessageSquare, 
  Phone, 
  Shield, 
  Star, 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Mail, 
  FileText, 
  ChevronDown, 
  Zap, 
  Database, 
  Smartphone, 
  Laptop, 
  ChevronRight, 
  Sparkles, 
  Globe, 
  Clock,
  ArrowLeft,
  ArrowRight,
  Send,
  Sliders,
  CheckCircle2,
  AlertCircle,
  Instagram
} from "lucide-react";
import { 
  PROJECTS, 
  TESTIMONIALS, 
  WORKFLOW, 
  FAQS, 
  PRICING_TABS, 
  PRICING_BY_TAB, 
  PricingTab,
  Project
} from "./data";

export default function App() {
  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Routing State
  const [currentPage, setCurrentPage] = useState<"home" | "layanan">(
    window.location.pathname === "/layanan" ? "layanan" : "home"
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname === "/layanan" ? "layanan" : "home");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (page: "home" | "layanan", hash?: string) => {
    const path = page === "layanan" ? "/layanan" : "/";
    window.history.pushState({}, "", path + (hash || ""));
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#layanan") {
      navigateTo("layanan");
    } else {
      navigateTo("home", href);
    }
  };

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, serviceName: string) => {
    e.preventDefault();
    let tab: PricingTab = "Landing Page";
    if (serviceName === "Landing Page") tab = "Landing Page";
    else if (serviceName === "Company Profile") tab = "Company Profile";
    else if (serviceName === "E-Commerce") tab = "E-Commerce";
    else if (serviceName === "Sistem Informasi") tab = "Sistem Informasi";
    else if (serviceName === "Mobile Apps" || serviceName === "Mobile App") tab = "Mobile App";
    else if (serviceName === "Portofolio") tab = "Portofolio";
    
    setActivePricingTab(tab);
    navigateTo("home", "#paket-harga");
  };

  const handleNavigateToCostPlanner = (tabName: string) => {
    let tab: PricingTab = "Landing Page";
    if (tabName === "Landing Page") tab = "Landing Page";
    else if (tabName === "Company Profile") tab = "Company Profile";
    else if (tabName === "E-Commerce") tab = "E-Commerce";
    else if (tabName === "Sistem Informasi") tab = "Sistem Informasi";
    else if (tabName === "Portofolio") tab = "Portofolio";
    else if (tabName === "Mobile App" || tabName === "Mobile Apps") tab = "Mobile App";
    
    setActivePricingTab(tab);
    navigateTo("home", "#paket-harga");
  };

  const handleNavigateToConsultation = () => {
    navigateTo("home", "#konsultasi-form");
  };

  // Active Portfolio Filter Category
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  // Active Pricing Tab
  const [activePricingTab, setActivePricingTab] = useState<PricingTab>("Landing Page");

  // FAQ Accordion State (stores active ID, or null if closed)
  const [activeFaqId, setActiveFaqId] = useState<string | null>("faq-1");

  // Testimonial Carousel State
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    service: "Web Dev",
    name: "",
    whatsapp: "",
    email: "",
    details: ""
  });

  // Success state for form visual
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll visibility for Back to Top Button
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filtered Projects
  const filteredProjects = activeCategory === "Semua" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  // Handle Form Submission - visual feedback & WA link redirection
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) {
      alert("Mohon isi Nama Lengkap dan Nomor WhatsApp Anda.");
      return;
    }

    // Construct the WhatsApp text template
    const text = `Halo Min, aku ingin berkonsultasi mengenai proyek website/aplikasi.

*LAYANAN YANG DIBUTUHKAN:*
${formData.service}

*PROFIL SAYA:*
Nama Lengkap: ${formData.name}
No. WhatsApp: ${formData.whatsapp}
Alamat Email: ${formData.email || "Tidak dicantumkan"}

*DETAIL KEBUTUHAN PROYEK:*
${formData.details || "Saya ingin berdiskusi langsung mengenai ide proyek saya."}

ty min :)`;

    const encodedText = encodeURIComponent(text);
    // WhatsApp number: +62 851 9681 1722 -> format: 6285196811722
    const whatsappUrl = `https://wa.me/6285804206044?text=${encodedText}`;
    
    // Set success indicator
    setFormSubmitted(true);

    // Open WhatsApp link
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setFormSubmitted(false);
    }, 1000);
  };

  // Pre-fill form from selected pricing card
  const selectPackage = (planName: string, tabName: string, price: string) => {
    setFormData(prev => ({
      ...prev,
      service: tabName === "Mobile App" ? "Mobile Apps" : "Web Dev",
      details: `Saya tertarik dengan Paket *${planName}* (${tabName}) seharga Rp *${price}*. Mohon informasi lebih lanjut.`
    }));

    // Scroll to consultation form
    const formElement = document.getElementById("konsultasi-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Testimonial Carousel Handlers
  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="matte-black-bg min-h-screen font-sans text-gray-300 overflow-x-hidden selection:bg-neutral-800 selection:text-white">
      
      {/* BACKGROUND GRAPHICS (Sleek minimalist studio lights) */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[10%] w-[350px] h-[350px] rounded-full bg-neutral-900 opacity-40 blur-[100px]" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-neutral-900 opacity-30 blur-[120px]" />
      </div>

      {/* 1. NAVBAR SECTION */}
      <header className="sticky top-0 z-50 w-full bg-[#0b0c0e]/80 backdrop-blur-md border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <a 
                href="#beranda" 
                onClick={(e) => { e.preventDefault(); navigateTo("home", "#beranda"); }}
                className="flex items-center gap-2.5 group"
              >
                <NinatechLogo iconSize="w-10 h-10" textSize="text-xl" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { name: "Beranda", href: "#beranda" },
                { name: "Paket", href: "#paket-harga" },
                { name: "Layanan", href: "#layanan" },
                { name: "Portofolio", href: "#portofolio" },
                { name: "Tentang", href: "#about" },
                { name: "Kontak", href: "#kontak" }
              ].map((item) => {
                const isActive = (item.href === "#layanan" && currentPage === "layanan") || (item.href !== "#layanan" && currentPage === "home");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavLinkClick(e, item.href)}
                    className={`text-sm font-medium transition-colors relative py-2 group ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </a>
                );
              })}
            </nav>

            {/* Desktop Call To Action */}
            <div className="hidden md:flex items-center">
              <a
                href="#konsultasi-form"
                onClick={(e) => { e.preventDefault(); navigateTo("home", "#konsultasi-form"); }}
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-black bg-white rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg border border-neutral-800 gap-1.5"
              >
                Mulai Konsultasi
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-neutral-900 focus:outline-none transition-colors"
                id="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0c0d10] border-b border-white/[0.05]"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {[
                  { name: "Beranda", href: "#beranda" },
                  { name: "Paket", href: "#paket-harga" },
                  { name: "Layanan", href: "#layanan" },
                  { name: "Portofolio", href: "#portofolio" },
                  { name: "Tentang Kami", href: "#about" },
                  { name: "Kontak", href: "#kontak" }
                ].map((item) => {
                  const isActive = (item.href === "#layanan" && currentPage === "layanan") || (item.href !== "#layanan" && currentPage === "home");
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        handleNavLinkClick(e, item.href);
                      }}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive ? "text-white bg-neutral-900" : "text-gray-400 hover:text-white hover:bg-neutral-900"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
                <div className="pt-4 px-4">
                  <a
                    href="#konsultasi-form"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      navigateTo("home", "#konsultasi-form");
                    }}
                    className="flex w-full items-center justify-center px-5 py-3 text-sm font-semibold tracking-wider uppercase text-black bg-white rounded-lg hover:bg-gray-200 transition-all duration-300 gap-2"
                  >
                    Mulai Konsultasi
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {currentPage === "layanan" ? (
        <LayananPage 
          onNavigateToCostPlanner={handleNavigateToCostPlanner} 
          onNavigateToConsultation={handleNavigateToConsultation} 
        />
      ) : (
        <>
          {/* 2. HERO SECTION */}
      <section id="beranda" className="relative pt-12 pb-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              
              {/* Tagline Badge */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-900 text-gray-300 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" />
                  No. 1 IT Service di Tuban
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Jasa Pembuatan <br />
                <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent">
                  Website & Aplikasi
                </span>{" "}
                <br />
                Professional
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
                Kembangkan bisnis Anda di era digital bersama Ninatech. Mulai dari pembuatan landing page, website perusahaan, toko online, hingga sistem informasi khusus berteknologi tinggi.
              </p>

              {/* Two CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#konsultasi-form"
                  className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold tracking-wider uppercase text-black bg-white rounded-xl hover:bg-gray-200 hover:-translate-y-0.5 transition-all duration-300 gap-2 shadow-2xl"
                >
                  <MessageSquare className="w-4.5 h-4.5" />
                  Konsultasi via WhatsApp ↗
                </a>
                <a
                  href="#portofolio"
                  className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold tracking-wider uppercase text-white bg-transparent border border-white/20 rounded-xl hover:bg-white/5 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Lihat Portofolio Kami
                </a>
              </div>

              {/* Subtle platform highlight */}
              <div className="flex items-center gap-6 pt-4 border-t border-white/[0.04]">
                <div className="flex flex-col">
                  <span className="text-white font-extrabold text-2xl tracking-tight">50+</span>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-gray-500">Klien Puas</span>
                </div>
                <div className="w-px h-8 bg-white/[0.08]" />
                <div className="flex flex-col">
                  <span className="text-white font-extrabold text-2xl tracking-tight">99%</span>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-gray-500">On-Time Delivery</span>
                </div>
                <div className="w-px h-8 bg-white/[0.08]" />
                <div className="flex flex-col">
                  <span className="text-white font-extrabold text-2xl tracking-tight">399K</span>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-gray-500">Mulai Dari</span>
                </div>
              </div>
            </div>

            {/* Right side engaging interactive layout */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              
              {/* Main background glow element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-neutral-900 opacity-20 blur-[100px] pointer-events-none" />

              {/* Frame Container */}
              <div className="relative max-w-[340px] sm:max-w-[380px] lg:max-w-none w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/[0.06] bg-[#121316] p-3 group">
                
                {/* Generated Image Asset */}
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src="/src/assets/images/hijab_developer_hero_1782491924399.jpg"
                    alt="Tim Ninatech Professional Developer"
                    className="w-full h-full object-cover scale-102 hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>



              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Column Left: Text & Heading */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase font-mono">ABOUT US</span>
              <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">
                Tentang Ninatech
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Ninatech hadir sebagai studio teknologi independen dan mitra strategis yang berdedikasi membangun website profesional, aplikasi mobile kustom, serta produk digital inovatif yang dirancang khusus untuk mempercepat pertumbuhan bisnis Anda.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Kami menggabungkan seni desain visual modern dengan pemrograman yang solid untuk menghadirkan user experience kelas atas yang meningkatkan reputasi bisnis Anda di mata klien.
              </p>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-neutral-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-extrabold text-neutral-900">100% Transparansi</h4>
                    <p className="text-xs text-neutral-500 mt-1">Alur pengerjaan terpantau penuh tanpa biaya siluman.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-neutral-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-extrabold text-neutral-900">30 Hari Dukungan</h4>
                    <p className="text-xs text-neutral-500 mt-1">Bebas bug & kendala teknis pasca website diluncurkan.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column Right: Subservices breakdown with Pricing Cards */}
            <div id="layanan" className="lg:col-span-7 flex flex-col space-y-8 scroll-mt-24">
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold text-neutral-900">Layanan Unggulan</h3>
                <p className="text-sm text-neutral-500">Kami menawarkan solusi kustom lengkap yang terjangkau.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Website Card */}
                <div className="p-6 rounded-2xl bg-[#fafafa] border border-neutral-200/60 hover:border-neutral-400 hover:bg-white transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-neutral-200">
                      <Laptop className="w-6 h-6 text-neutral-900" />
                    </div>
                    <h4 className="text-lg font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors">Pembuatan Website</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Landing page kilat, website profile bisnis, sistem e-commerce, hingga portal korporat berkecepatan tinggi yang dioptimalkan SEO.
                    </p>
                  </div>
                  <div className="pt-8 border-t border-neutral-200 mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono text-neutral-400 uppercase">INVESTASI MULAI</p>
                      <p className="text-sm font-black text-neutral-900">Rp 299.000</p>
                    </div>
                    <a
                      href="#paket-harga"
                      className="w-9 h-9 rounded-lg bg-neutral-100 hover:bg-neutral-950 hover:text-white flex items-center justify-center transition-all duration-300 border border-neutral-200"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Mobile App Card */}
                <div className="p-6 rounded-2xl bg-[#fafafa] border border-neutral-200/60 hover:border-neutral-400 hover:bg-white transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-neutral-200">
                      <Smartphone className="w-6 h-6 text-neutral-900" />
                    </div>
                    <h4 className="text-lg font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors">Aplikasi Mobile</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Aplikasi mobile multi-platform (Android & iOS) berdesain elegan, performa mulus, terintegrasi database realtime yang andal.
                    </p>
                  </div>
                  <div className="pt-8 border-t border-neutral-200 mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono text-neutral-400 uppercase">INVESTASI MULAI</p>
                      <p className="text-sm font-black text-neutral-900">Rp 1.199.000</p>
                    </div>
                    <a
                      href="#paket-harga"
                      className="w-9 h-9 rounded-lg bg-neutral-100 hover:bg-neutral-950 hover:text-white flex items-center justify-center transition-all duration-300 border border-neutral-200"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. PORTFOLIO SECTION */}
      <section id="portofolio" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase font-mono">SELECTED WORK</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Proyek Running
              </h2>
              <p className="text-sm text-gray-400 max-w-xl">
                Proyek-proyek yang masih dalam pengembangan.
              </p>
            </div>

            {/* Filter Categories */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0 bg-neutral-900/60 p-1.5 rounded-xl border border-white/5 self-start md:self-auto">
              {["Semua", "Landing Page", "Company Profile", "Web App"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-white text-black font-extrabold shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-2xl overflow-hidden bg-[#121316] border border-white/[0.06] hover:border-white/10 shadow-xl flex flex-col group h-full"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-white border border-white/10">
                      {project.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-black text-white group-hover:text-gray-300 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags & Action */}
                    <div className="space-y-4 pt-4 border-t border-white/[0.04]">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-900 text-gray-400 border border-white/[0.02]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={project.link || "#konsultasi-form"}
                        target={project.link ? "_blank" : undefined}
                        rel={project.link ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center text-xs font-bold text-white hover:text-gray-300 gap-1 group/btn mt-2"
                      >
                        {project.link ? "Lihat Live Website" : "Lihat Detail & Hubungi Kami"}
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 5. PRICING PACKAGES */}
      <section id="paket-harga" className="py-24 bg-neutral-950/20 border-t border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase font-mono">PRICING PLANS</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Paket & Investasi Terbaik <br />
              Untuk Bisnis Anda
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Harga transparan tanpa biaya tersembunyi. Pilih jenis platform yang Anda butuhkan di bawah ini, lalu pilih paket investasi yang paling pas dengan skala kebutuhan bisnis Anda.
            </p>

            {/* Interactive Tabs for Service Types */}
            <div className="pt-6 overflow-x-auto pb-2 scrollbar-none">
              <div className="flex justify-center min-w-max md:min-w-0 mx-auto bg-neutral-900/60 p-1.5 rounded-2xl border border-white/5 w-fit gap-1">
                {PRICING_TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActivePricingTab(tab)}
                    className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${
                      activePricingTab === tab
                        ? "bg-white text-black font-extrabold shadow-md"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_BY_TAB[activePricingTab].map((plan, index) => {
              const isPopular = plan.isPopular;
              return (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                    isPopular 
                      ? "bg-[#16171b] border-2 border-white shadow-2xl scale-102 z-10" 
                      : "bg-[#121316] border border-white/[0.06] hover:border-white/20 hover:scale-101"
                  }`}
                >
                  {/* Popular Ribbon Tag */}
                  {isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white text-black border border-black shadow-lg">
                      REKOMENDASI UTAMA
                    </span>
                  )}

                  {/* Header info */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black uppercase tracking-wider text-gray-400 font-mono">
                        {plan.name}
                      </span>
                      {isPopular && (
                        <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-white/10 text-white">
                          Paling Banyak Dipilih
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline gap-1 pt-2">
                      <span className="text-sm text-gray-500 font-bold">Rp</span>
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        {plan.price.split(" ")[0]}
                      </span>
                      <span className="text-sm text-gray-500 font-semibold uppercase">
                        {plan.price.split(" ")[1]}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500">
                      Investasi sekali bayar yang siap mempercepat penjualan & reputasi digital Anda.
                    </p>

                    <div className="w-full h-px bg-white/[0.04] my-6" />

                    {/* Features list */}
                    <div className="space-y-3">
                      <p className="text-[10px] uppercase font-mono tracking-widest text-gray-500 mb-2">FITUR & MANFAAT:</p>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs">
                          <Check className={`w-4 h-4 shrink-0 ${isPopular ? 'text-white' : 'text-gray-400'} mt-0.5`} />
                          <span className={`${isPopular ? 'text-gray-200' : 'text-gray-400'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-8 mt-8 border-t border-white/[0.04]">
                    <button
                      onClick={() => selectPackage(plan.name, activePricingTab, plan.price)}
                      className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                        isPopular
                          ? "bg-white text-black hover:bg-gray-200 shadow-xl"
                          : "bg-neutral-900 text-white hover:bg-neutral-800 border border-white/5"
                      }`}
                    >
                      Pilih Paket {plan.name}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Pricing foot note */}
          <div className="mt-12 text-center text-xs text-gray-500">
            * Butuh kustomisasi fitur khusus di luar spesifikasi di atas?{" "}
            <a href="#konsultasi-form" className="text-white underline hover:text-gray-300">
              Konsultasikan sekarang
            </a>{" "}
            dan dapatkan penawaran harga khusus.
          </div>

        </div>
      </section>

      {/* 6. WORKFLOW SECTION */}
      <section id="proses" className="py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase font-mono">OUR PROCESS</span>
              <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">
                4 Langkah Mudah <br />
                Memulai Proyek Anda
              </h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Ingin mulai membangun proyek Anda? Hubungi kami langsung dengan klik tombol WhatsApp di bawah. Kami akan memandu Anda secara transparan dari briefing kebutuhan hingga serah terima proyek melalui 4 langkah praktis berikut.
              </p>

              {/* Minimal bullet checks */}
              <div className="space-y-2.5 pt-4">
                {[
                  "Alur kerja adaptif & fleksibel",
                  "Diskusi & konsultasi berkala",
                  "Revisi solutif sesuai kesepakatan",
                  "Dukungan penuh setelah proyek rilis"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-4.5 h-4.5 text-neutral-800 shrink-0" />
                    <span className="text-neutral-700 font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/6285804206044?text=Halo%20min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest bg-neutral-950 text-white rounded-xl hover:bg-neutral-800 transition-all duration-300 gap-1.5"
                >
                  Mulai Konsultasi Proyek
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right side steps list */}
            <div className="lg:col-span-7 space-y-6">
              {WORKFLOW.map((step) => (
                <div
                  key={step.number}
                  className="p-6 rounded-2xl bg-[#fafafa] border border-neutral-200/60 hover:border-neutral-400 hover:bg-white transition-all duration-300 flex gap-5 items-start group"
                >
                  {/* Step Number with high contrast */}
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center border border-neutral-200 text-neutral-950 font-mono font-black shrink-0">
                    {step.number}
                  </div>
                  
                  {/* Step details */}
                  <div className="space-y-1.5">
                    <h4 className="text-base font-extrabold text-neutral-950 group-hover:text-neutral-700 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="py-24 bg-neutral-950/40 border-t border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase font-mono">CLIENT REVIEWS</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Apa Kata Klien Kami
              </h2>
              <p className="text-sm text-gray-400 max-w-xl">
                Ulasan jujur dari para pemilik bisnis yang telah mempercayakan platform digital mereka kepada tim Ninatech.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex gap-2.5 mt-6 md:mt-0">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/[0.06] hover:border-white/20 flex items-center justify-center text-white transition-all duration-300"
                aria-label="Testimonial Sebelumnya"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/[0.06] hover:border-white/20 flex items-center justify-center text-white transition-all duration-300"
                aria-label="Testimonial Selanjutnya"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonial Active Display with Smooth Transitions */}
          <div className="relative overflow-hidden min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 shadow-xl"
              >
                {/* Large Quote sign and content */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Star rating */}
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: TESTIMONIALS[currentTestimonialIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <p className="text-base sm:text-lg text-neutral-900 font-medium italic leading-relaxed">
                    "{TESTIMONIALS[currentTestimonialIndex].text}"
                  </p>

                  <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-extrabold text-sm border border-neutral-200">
                      {TESTIMONIALS[currentTestimonialIndex].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-neutral-900">
                        {TESTIMONIALS[currentTestimonialIndex].name}
                      </h4>
                      <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                        {TESTIMONIALS[currentTestimonialIndex].role}, {TESTIMONIALS[currentTestimonialIndex].company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side graphic decoration */}
                <div className="hidden lg:col-span-4 lg:flex flex-col items-center justify-center p-6 border-l border-neutral-200 h-full space-y-2">
                  <span className="text-5xl font-serif text-neutral-200 font-bold leading-none">“</span>
                  <p className="text-xs text-gray-500 text-center uppercase tracking-widest font-mono">
                    VERIFIED CLIENT REVIEW
                  </p>
                  <p className="text-xs text-neutral-500 font-bold">100% Honest Feedback</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial slider indicators */}
          <div className="flex justify-center gap-1.5 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonialIndex(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentTestimonialIndex === idx ? "w-6 bg-white" : "w-1.5 bg-neutral-800"
                }`}
                aria-label={`Lihat review ke ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 8. FAQ SECTION (Accordion) */}
      <section id="faq" className="py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase font-mono">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">
              Ada yang Ingin Ditanyakan?
            </h2>
            <p className="text-sm text-neutral-600 max-w-lg mx-auto">
              Pertanyaan yang paling sering ditanyakan oleh calon klien kami sebelum memulai kerjasama.
            </p>
          </div>

          {/* Expandable Accordion Items */}
          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-neutral-200/60 bg-[#fafafa] overflow-hidden transition-all duration-300 hover:border-neutral-400"
                >
                  <button
                    onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-neutral-100/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-neutral-900 pr-4">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4 text-neutral-800" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 border-t border-neutral-200/60 text-xs sm:text-sm text-neutral-600 leading-relaxed bg-white">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Quick WA Contact help */}
          <div className="mt-12 text-center p-6 rounded-2xl bg-neutral-50 border border-neutral-200/60 max-w-xl mx-auto space-y-3">
            <p className="text-xs text-neutral-500 font-semibold">
              Pertanyaan Anda belum terjawab di atas?
            </p>
            <a
              href="https://wa.me/6285804206044?text=Halo%20min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-neutral-950 hover:text-neutral-700 gap-1"
            >
              Tanyakan via WhatsApp
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 9. FREE CONSULTATION FORM */}
      <section id="kontak" className="py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side text details */}
            <div className="lg:col-span-5 flex flex-col space-y-6 lg:pr-8">
              <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase font-mono">CONSULTATION</span>
              <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight leading-tight">
                Mari Mulai Sesuatu <br />
                yang <span className="underline decoration-neutral-300 decoration-wavy">Luar Biasa</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Ceritakan kebutuhan bisnis Anda kepada kami. Tim kami siap merancang, menganalisis, dan memberikan rekomendasi solusi digital terbaik untuk meningkatkan pertumbuhan digital Anda.
              </p>

              {/* Contact direct card details */}
              <div className="space-y-4 pt-6">
                
                {/* Email link */}
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#fafafa] border border-neutral-200/60 hover:border-neutral-400 hover:bg-white transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center border border-neutral-200 shrink-0 text-neutral-950">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest leading-none mb-1">EMAIL SUPPORT</p>
                    <a href="mailto:ninatechnology28@gmail.com" className="text-sm font-bold text-neutral-950 hover:underline">
                      ninatechnology28@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp link */}
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#fafafa] border border-neutral-200/60 hover:border-neutral-400 hover:bg-white transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center border border-neutral-200 shrink-0 text-neutral-950">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest leading-none mb-1">WHATSAPP CHAT</p>
                    <a href="https://wa.me/6285804206044" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-neutral-950 hover:underline">
                      +62 858 0420 6044
                    </a>
                  </div>
                </div>

                {/* Location details */}
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#fafafa] border border-neutral-200/60">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center border border-neutral-200 shrink-0 text-neutral-950">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest leading-none mb-1">LOKASI UTAMA</p>
                    <p className="text-sm font-bold text-neutral-950">
                      Tuban, Jawa Timur, Indonesia
                    </p>
                  </div>
                </div>

              </div>

              {/* Consultation disclaimer info */}
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-start gap-3">
                <Shield className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-neutral-500 leading-relaxed">
                  Sesi konsultasi awal 100% Gratis & Bebas biaya komitmen apapun. Kami menjaga kerahasiaan ide bisnis dan data Anda dengan aman.
                </p>
              </div>

            </div>

            {/* Right side form */}
            <div className="lg:col-span-7 bg-[#fafafa] rounded-3xl p-6 sm:p-10 border border-neutral-200/60 shadow-lg relative">
              
              <div className="mb-8 space-y-2" id="konsultasi-form">
                <h3 className="text-xl font-bold text-neutral-950">Ceritakan Kebutuhan Anda</h3>
                <p className="text-xs text-neutral-500">
                  (Sesi Konsultasi Gratis - Pesan otomatis dirangkum dan diteruskan via WhatsApp)
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* 1. Services selection */}
                <div className="space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Web Dev", "Mobile Apps", "Lainnya"].map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, service: srv }))}
                        className={`py-3 px-2 text-xs font-bold rounded-xl border transition-all duration-300 ${
                          formData.service === srv
                            ? "bg-neutral-950 text-white border-neutral-950 font-extrabold shadow-md"
                            : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Text fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Nama Lengkap */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-neutral-800 uppercase tracking-wider font-mono">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors"
                    />
                  </div>

                  {/* Nomor WhatsApp */}
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="text-xs font-bold text-neutral-800 uppercase tracking-wider font-mono">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                      placeholder="Contoh: 08123456789"
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors"
                    />
                  </div>

                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-neutral-800 uppercase tracking-wider font-mono">
                    Alamat Email (Opsional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Contoh: budi@perusahaan.com"
                    className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                </div>

                {/* Detail Proyek */}
                <div className="space-y-2">
                  <label htmlFor="details" className="text-xs font-bold text-neutral-800 uppercase tracking-wider font-mono">
                    Detail Proyek *
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                    placeholder="Ceritakan gambaran singkat proyek Anda, tujuan yang ingin dicapai, dan estimasi waktu jika ada..."
                    className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                  />
                </div>

                {/* Form feedback & Action button */}
                <div className="pt-4 border-t border-neutral-200">
                  <button
                    type="submit"
                    className={`w-full py-4 px-6 rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      formSubmitted 
                        ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                        : "bg-neutral-950 text-white hover:bg-neutral-800 shadow-lg"
                    }`}
                    disabled={formSubmitted}
                  >
                    {formSubmitted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-neutral-500 animate-pulse" />
                        Membuka WhatsApp...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Kirim via WhatsApp
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-neutral-400 text-center mt-3">
                    * Setelah klik kirim, WhatsApp web atau aplikasi WhatsApp Anda akan terbuka secara otomatis dengan pesan yang terisi rapi.
                  </p>
                </div>

              </form>

            </div>

          </div>

        </div>
      </section>
        </>
      )}

      {/* 10. FOOTER SECTION */}
      <footer className="bg-neutral-950 pt-20 pb-8 text-xs text-gray-500 border-t border-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Agency short profile */}
            <div className="space-y-6">
              <NinatechLogo iconSize="w-8 h-8" textSize="text-base" />
              <p className="text-gray-400 leading-relaxed">
                Ninatech adalah agency digital asalnya dari Tuban yang fokus membangun produk IT fungsional dan estetis untuk membantu bisnis Anda berkembang secara eksponensial.
              </p>
              <div className="flex gap-3 text-white">
                <a
                  href="https://www.instagram.com/ninatechnology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#121316] border border-white/[0.05] hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@ninatechnology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#121316] border border-white/[0.05] hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label="TikTok"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.85.96 1.94 1.63 3.16 2.02v3.91a11.17 11.17 0 0 1-4.83-1.07V15c.1 2.37-1.09 4.67-3.11 5.86-1.92 1.15-4.38 1.34-6.43.43-2.31-.99-3.93-3.32-3.8-5.84a5.987 5.987 0 0 1 5.91-5.69c.87-.03 1.74.14 2.54.51v3.96a2.031 2.031 0 0 0-2.52-.1c-.96.65-1.4 1.83-1.07 2.94.31 1.05 1.36 1.75 2.46 1.68 1.38-.04 2.45-1.28 2.33-2.66V.02z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Exploration Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-mono">
                EKSPLORASI
              </h4>
              <ul className="space-y-2.5">
                {[
                  { name: "Tentang Kami", href: "#about" },
                  { name: "Layanan Kami", href: "#layanan" },
                  { name: "Portofolio Proyek", href: "#portofolio" },
                  { name: "Proses Kerja", href: "#proses" },
                  { name: "Sesi Kontak", href: "#kontak" }
                ].map((lnk) => (
                  <li key={lnk.name}>
                    <a 
                      href={lnk.href} 
                      onClick={(e) => handleNavLinkClick(e, lnk.href)}
                      className="hover:text-white transition-colors"
                    >
                      {lnk.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Main Services Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-mono">
                LAYANAN UTAMA
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Landing Page",
                  "Company Profile",
                  "E-Commerce",
                  "Sistem Informasi",
                  "Mobile Apps"
                ].map((srv) => (
                  <li key={srv}>
                    <a 
                      href="#paket-harga" 
                      onClick={(e) => handleServiceClick(e, srv)}
                      className="hover:text-white transition-colors"
                    >
                      {srv}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact details */}
            <div className="space-y-4">
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-mono">
                HUBUNGI KAMI
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] uppercase font-mono text-gray-500 leading-none mb-1">EMAIL SUPPORT</p>
                    <a href="mailto:ninatechnology28@gmail.com" className="text-xs font-bold text-white hover:underline">
                      ninatechnology28@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] uppercase font-mono text-gray-500 leading-none mb-1">WHATSAPP CHAT</p>
                    <a href="https://wa.me/6285804206044" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white hover:underline">
                      +62 858 0420 6044
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] uppercase font-mono text-gray-500 leading-none mb-1">LOKASI KANTOR</p>
                    <p className="text-xs text-white">
                      Tuban, Jawa timur, Indonesia
                    </p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright notice at the bottom */}
          <div className="pt-8 border-t border-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-center sm:text-left text-[10px] text-gray-600">
              © 2026 Ninatech. All rights reserved. Jasa Pembuatan Website & Aplikasi Professional.
            </p>
            <div className="flex gap-4 text-[10px] text-gray-600">
              <a href="#faq" className="hover:text-gray-400 transition-colors">Syarat & Ketentuan</a>
              <span className="text-neutral-800">|</span>
              <a href="#faq" className="hover:text-gray-400 transition-colors">Kebijakan Privasi</a>
            </div>
          </div>

        </div>
      </footer>

      {/* STICKY WHATSAPP FLOATING BADGE (Bottom Right) */}
      <a
        href="https://wa.me/6285804206044?text=Halo%20min"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#121316] text-white p-4 rounded-2xl shadow-2xl flex items-center justify-center border border-white/10 hover:scale-105 transition-all duration-300 group"
        aria-label="Konsultasi Langsung via WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-5 h-5 fill-current text-[#25D366] animate-pulse"
        >
          <path d="M12.004 2C6.48 2 2.014 6.47 2.014 12c0 2.18.7 4.2 1.89 5.86L2.03 22l4.29-1.13c1.58.86 3.39 1.3 5.26 1.3 5.53 0 9.99-4.47 9.99-10a9.99 9.99 0 0 0-10.02-10.18zM17.47 16.2c-.24.68-1.2 1.25-1.9 1.34-.54.07-1.25.1-3.64-.89-3.05-1.26-5-4.36-5.15-4.57-.15-.2-1.22-1.63-1.22-3.1 0-1.48.77-2.2 1.04-2.48.24-.25.6-.33.88-.33.1 0 .2 0 .28.02.26.01.39.02.56.43.2.49.71 1.73.77 1.86.06.13.1.28.01.46-.09.18-.2.39-.39.61-.19.22-.4.4-.58.62-.2.24-.4.49-.17.89.24.4 1.06 1.75 2.27 2.83 1.56 1.39 2.87 1.82 3.28 2 .4.17.65.14.9-.15.24-.28 1.03-1.2 1.3-1.62.1-.16.22-.13.37-.08.15.06.97.46 1.14.54.17.09.28.13.32.2.05.07.05.41-.19 1.1z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 ease-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2.5">
          Tanya Kami Sekarang
        </span>
      </a>

      {/* BACK TO TOP FLOATING BUTTON */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-neutral-900 text-white rounded-2xl shadow-2xl flex items-center justify-center border border-white/10 hover:bg-neutral-800 transition-colors"
            aria-label="Kembali ke atas"
          >
            <ChevronDown className="w-5 h-5 rotate-180" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
