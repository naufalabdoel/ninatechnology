import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import NinatechLogo from "./NinatechLogo";
import { 
  Laptop, 
  Smartphone, 
  Database, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  MessageSquare, 
  Check, 
  Sparkles, 
  Cpu, 
  Bell, 
  MapPin, 
  Share2, 
  ShieldCheck, 
  Terminal,
  Activity,
  Award,
  Zap,
  Briefcase
} from "lucide-react";

interface LayananPageProps {
  onNavigateToCostPlanner: (tabName: string) => void;
  onNavigateToConsultation: () => void;
}

type CategoryKey = "landing" | "company" | "ecommerce" | "sisfo" | "portofolio";

export default function LayananPage({ onNavigateToCostPlanner, onNavigateToConsultation }: LayananPageProps) {
  // Section 2: Pembuatan Website categories state
  const [activeCategoryTab, setActiveCategoryTab] = useState<CategoryKey>("landing");

  // Section 4: Pembuatan Aplikasi Mobile active feature state
  const [activeMobileFeature, setActiveMobileFeature] = useState<number>(0);

  // Section 2 categories data
  const categoriesData: Record<CategoryKey, {
    title: string;
    description: string;
    investment: string;
    pricingTab: string;
    features: string[];
  }> = {
    landing: {
      title: "Landing Page",
      description: "Halaman web tunggal kustom yang dirancang khusus untuk memaksimalkan hasil iklan berbayar (Google/Meta/TikTok Ads) dan memfokuskan tindakan pengunjung untuk membeli atau mendaftar.",
      investment: "Rp 399.000",
      pricingTab: "Landing Page",
      features: [
        "Desain responsif & ringan (mobile-first)",
        "Optimasi SEO On-Page tingkat dasar",
        "Integrasi tombol chat & form WhatsApp CTA",
        "Integrasi tracking pixel iklan (Facebook/TikTok/Google)",
        "Kecepatan loading optimal (Core Web Vitals)"
      ]
    },
    company: {
      title: "Company Profile",
      description: "Website representasi bisnis profesional untuk membangun kredibilitas, menampilkan sejarah perusahaan, portofolio kerja, layanan utama, serta informasi kontak resmi.",
      investment: "Rp 599.000",
      pricingTab: "Company Profile",
      features: [
        "Halaman custom interaktif (Home, About, Services)",
        "Galeri foto & portofolio proyek terintegrasi",
        "Formulir kontak & integrasi Google Maps interaktif",
        "Keamanan SSL premium & proteksi anti-spam",
        "Optimasi performa & SEO komprehensif"
      ]
    },
    ecommerce: {
      title: "E-Commerce",
      description: "Toko online canggih untuk mengelola katalog produk, melayani pembelian otomatis, menghitung ongkos kirim real-time, hingga integrasi payment gateway otomatis.",
      investment: "Rp 899.000",
      pricingTab: "E-Commerce",
      features: [
        "Katalog produk & manajemen stok tanpa batas",
        "Fitur shopping cart, kupon diskon, & checkout WA/Email",
        "Integrasi ongkos kirim otomatis (RajaOngkir)",
        "Sistem pembayaran otomatis (Midtrans Gateway)",
        "Sistem akun pembeli & riwayat transaksi lengkap"
      ]
    },
    sisfo: {
      title: "Sistem Informasi",
      description: "Aplikasi berbasis web kustom untuk merampingkan proses bisnis internal Anda, mengotomatisasi input data (CRUD), manajemen stok barang, hingga laporan analitis yang mendalam.",
      investment: "Rp 1.499.000",
      pricingTab: "Sistem Informasi",
      features: [
        "Dashboard admin multi-role & otorisasi aman",
        "Manajemen database barang/klien berkecepatan tinggi",
        "Sistem pelaporan visual & export data (PDF/Excel)",
        "Grafik analitik & statistik interaktif real-time",
        "Sistem backup cloud berkala & log aktivitas"
      ]
    },
    portofolio: {
      title: "Website Portofolio",
      description: "Halaman portofolio digital personal bernilai seni tinggi untuk memamerkan karya terbaik Anda sebagai fotografer, desainer, copywriter, atau profesional lainnya.",
      investment: "Rp 299.000",
      pricingTab: "Portofolio",
      features: [
        "Desain personal estetik dengan micro-interactions",
        "Galeri portofolio interaktif dengan filter kategori",
        "Integrasi Curriculum Vitae (CV) & tombol unduh",
        "Koneksi ke profil sosial media & platform profesional",
        "Waktu muat cepat dengan optimalisasi gambar modern"
      ]
    }
  };

  // Section 4 mobile features data
  const mobileFeatures = [
    {
      title: "Cross-Platform Engine",
      description: "Satu basis kode Flutter/React Native untuk Android & iOS, menghemat waktu pengerjaan dan biaya operasional secara signifikan.",
      icon: Cpu,
      accent: "from-cyan-400 to-blue-500"
    },
    {
      title: "Pemberitahuan Instan",
      description: "Kirim Push Notification promosi, diskon kilat, hingga detail transaksi langsung ke layar kunci handphone pengguna secara instan.",
      icon: Bell,
      accent: "from-pink-500 to-purple-600"
    },
    {
      title: "Akses Hardware & GPS",
      description: "Integrasi fitur perangkat keras ponsel pintar secara mendalam termasuk penentuan lokasi GPS real-time, kamera scan QR code, serta sensor biometrik.",
      icon: MapPin,
      accent: "from-amber-400 to-orange-500"
    },
    {
      title: "Publikasi Play & App Store",
      description: "Pendampingan penuh dari tim Ninatech mulai dari pendaftaran akun developer hingga aplikasi Anda sukses dirilis di Google Play & Apple App Store.",
      icon: Share2,
      accent: "from-emerald-400 to-teal-500"
    },
    {
      title: "Maintenance & Keamanan",
      description: "Sistem pemeliharaan berkala, optimasi database cloud, hosting API berkecepatan tinggi, serta backup sistem mingguan untuk proteksi keamanan penuh.",
      icon: ShieldCheck,
      accent: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <div className="relative z-10">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading and Description */}
            <div className="lg:col-span-10 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/5 text-gray-400 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Solusi IT & Ekosistem Digital
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
                Solusi & <span className="text-neutral-400">Layanan</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                Website, aplikasi mobile — kami wujudkan ekosistem digital terintegrasi untuk mempercepat pertumbuhan bisnis Anda secara profesional.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigateToCostPlanner("Landing Page")}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                >
                  Lihat Simulasi Harga
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onNavigateToConsultation}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-transparent border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  Hubungi Tim Ninatech
                </button>
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* 2. SEKSI DETAIL LAYANAN 1: PEMBUATAN WEBSITE & SISTEM INFORMASI */}
      <section className="py-20 bg-neutral-950/20 border-t border-b border-white/[0.04] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase font-mono">DETAIL LAYANAN 1</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Pembuatan Website <br />& Sistem Informasi
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Pilih kategori di bawah untuk melihat detail lengkap layanan, fitur, dan teknologi kustom yang kami gunakan untuk mendukung pertumbuhan bisnis Anda.
            </p>
          </div>

          {/* Interactive Navigation Tabs for Web Development Categories */}
          <div className="mb-8 border-b border-white/[0.05] pb-px overflow-x-auto scrollbar-none">
            <div className="flex gap-2 min-w-max">
              {(Object.keys(categoriesData) as CategoryKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCategoryTab(key)}
                  className={`px-5 py-3.5 text-xs font-bold tracking-wider uppercase border-b-2 transition-all duration-300 ${
                    activeCategoryTab === key
                      ? "border-white text-white font-extrabold"
                      : "border-transparent text-gray-400 hover:text-white hover:border-white/10"
                  }`}
                >
                  {categoriesData[key].title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Tab Detail Description and Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategoryTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 bg-[#0e1013] p-8 rounded-3xl border border-white/[0.03] shadow-xl"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">KATEGORI LAYANAN</span>
                    <h3 className="text-2xl font-black text-white">{categoriesData[activeCategoryTab].title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {categoriesData[activeCategoryTab].description}
                    </p>
                  </div>

                  {/* Investment Price Tag Banner */}
                  <div className="p-4 bg-white/5 border border-white/[0.05] rounded-xl flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">NILAI INVESTASI</p>
                      <p className="text-sm font-extrabold text-white">MULAI DARI {categoriesData[activeCategoryTab].investment}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded text-[10px] text-gray-400 border border-white/5">
                      <Award className="w-3.5 h-3.5 text-white" />
                      Harga Transparan
                    </div>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={() => onNavigateToCostPlanner(categoriesData[activeCategoryTab].pricingTab)}
                      className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-1.5"
                    >
                      DETAIL SIMULASI
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`https://wa.me/6285804206044?text=${encodeURIComponent(`Halo Ninatech, saya tertarik untuk diskusi proyek pembuatan ${categoriesData[activeCategoryTab].title} untuk bisnis saya.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-transparent border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center gap-1.5"
                    >
                      Mulai Diskusi Proyek
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side: Standard Features & Services List */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0e1013] p-8 rounded-3xl border border-white/[0.03] h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-wider font-mono">
                    LAYANAN & FITUR STANDAR
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Setiap pengerjaan kategori ini sudah dibekali dengan standar pengembangan terbaik dari tim Ninatech:
                  </p>
                  
                  <div className="space-y-3.5 pt-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeCategoryTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        {categoriesData[activeCategoryTab].features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3 text-xs">
                            <span className="w-5 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-white" />
                            </span>
                            <span className="text-gray-300 font-medium leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.03] mt-6 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>SSL SECURE HTTPS</span>
                  <span>MOBILE RESPONSIVE 100%</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SEKSI DETAIL LAYANAN 3: PEMBUATAN APLIKASI MOBILE */}
      <section className="py-20 bg-neutral-950/20 border-t border-b border-white/[0.04] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase font-mono">DETAIL LAYANAN 3</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Pembuatan Aplikasi Mobile
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Kami mengembangkan aplikasi seluler kustom Android & iOS berskala industri dengan performa responsif. Coba klik fitur di bawah untuk mensimulasikan layar aplikasi.
            </p>
          </div>

          {/* Interactive Mobile Feature Grid with Simulated Screen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Fitur list */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-2.5">
                {mobileFeatures.map((feat, index) => {
                  const IconComponent = feat.icon;
                  const isActive = activeMobileFeature === index;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveMobileFeature(index)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                        isActive
                          ? "bg-white text-black border-black shadow-xl"
                          : "bg-[#0e1013] text-gray-400 border-white/[0.03] hover:border-white/10 hover:text-white"
                      }`}
                    >
                      <span className={`p-2.5 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive ? "bg-black text-white" : "bg-white/5 text-gray-400"
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </span>
                      <div className="space-y-1">
                        <h4 className={`text-sm font-extrabold ${isActive ? "text-black" : "text-white"}`}>
                          {feat.title}
                        </h4>
                        <p className={`text-xs leading-relaxed ${isActive ? "text-neutral-700" : "text-gray-400"}`}>
                          {feat.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Tag Investasi & WhatsApp CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[#0e1013] border border-white/[0.03] rounded-2xl">
                <div className="text-center sm:text-left space-y-1">
                  <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">NILAI INVESTASI</p>
                  <p className="text-sm font-bold text-white">INVESTASI MULAI DARI Rp 1.999.000</p>
                </div>
                <a
                  href={`https://wa.me/6285804206044?text=${encodeURIComponent(`Halo Ninatech, saya ingin berdiskusi mengenai penawaran proyek Pembuatan Aplikasi Mobile kustom.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-lg hover:bg-gray-200 transition-all duration-300 shrink-0"
                >
                  Mulai Diskusi Proyek
                </a>
              </div>
            </div>

            {/* Right side: Mockup HP simulation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-[280px] h-[560px] rounded-[40px] border-[10px] border-[#1d1f23] bg-[#0c0d10] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col justify-between p-4 group">
                
                {/* Speaker Notch/Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 rounded-full bg-[#1d1f23] z-50 flex items-center justify-center p-1">
                  <div className="w-2 h-2 rounded-full bg-neutral-900 absolute right-4" />
                  <div className="w-10 h-1 bg-neutral-900 rounded-full" />
                </div>

                {/* Status Bar */}
                <div className="flex justify-between items-center px-4 pt-4 text-[9px] font-mono text-gray-500 z-10 font-bold uppercase select-none">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <div className="w-5 h-2.5 border border-gray-600 rounded-sm p-0.5 flex items-center">
                      <div className="w-3.5 h-full bg-emerald-500 rounded-xs" />
                    </div>
                  </div>
                </div>

                {/* Dynamic Screen Contents */}
                <div className="flex-1 my-4 flex flex-col justify-between overflow-hidden relative p-2 z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMobileFeature}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col justify-between h-full"
                    >
                      {activeMobileFeature === 0 && (
                        /* Cross-Platform Engine Screen */
                        <div className="flex-1 flex flex-col justify-between py-2">
                          <div className="space-y-3">
                            <span className="text-[8px] font-mono tracking-widest text-gray-500 uppercase">ACTIVE COMPILER</span>
                            <div className="p-3 rounded-xl bg-neutral-900 border border-white/5 space-y-1.5">
                              <div className="flex gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                              </div>
                              <p className="text-[8px] text-cyan-400 font-mono leading-relaxed">
                                import 'package:flutter/material.dart';<br />
                                void main() =&gt; runApp(NinatechApp());
                              </p>
                            </div>
                          </div>
                          
                          <div className="text-center space-y-2">
                            <div className="inline-flex gap-2 justify-center text-[10px] bg-white/5 py-1 px-2.5 rounded-full border border-white/5 text-gray-400">
                              <span>Android OS</span>
                              <span className="text-neutral-600">|</span>
                              <span>Apple iOS</span>
                            </div>
                            <p className="text-xs text-white font-extrabold">Dual Platform Ready</p>
                          </div>
                        </div>
                      )}

                      {activeMobileFeature === 1 && (
                        /* Push Notification Lockscreen */
                        <div className="flex-1 flex flex-col justify-between py-2">
                          <div className="space-y-2">
                            <span className="text-[8px] font-mono tracking-widest text-gray-500 uppercase text-center block mb-2">NOTIFICATIONS</span>
                            
                            {/* Notification 1 */}
                            <div className="bg-[#121418] p-2.5 rounded-xl border border-white/5 shadow-lg space-y-1">
                              <div className="flex justify-between items-center text-[8px] text-gray-400 font-bold uppercase font-mono">
                                <span className="flex items-center gap-1 text-white">
                                  <span className="w-1.5 h-1.5 rounded bg-pink-500" />
                                  PROMO FLASHSALE
                                </span>
                                <span>NOW</span>
                              </div>
                              <p className="text-[10px] font-bold text-white">🎁 Diskon 25% Web Dev!</p>
                              <p className="text-[8px] text-gray-400">Pesan website & aplikasi custom hari ini hemat s/d Rp 2 Juta.</p>
                            </div>

                            {/* Notification 2 */}
                            <div className="bg-[#121418] p-2.5 rounded-xl border border-white/5 shadow-lg space-y-1">
                              <div className="flex justify-between items-center text-[8px] text-gray-400 font-bold uppercase font-mono">
                                <span className="flex items-center gap-1 text-white">
                                  <span className="w-1.5 h-1.5 rounded bg-emerald-500" />
                                  TRANSAKSI ONLINE
                                </span>
                                <span>2M AGO</span>
                              </div>
                              <p className="text-[10px] font-bold text-white">🔔 Pembayaran Berhasil</p>
                              <p className="text-[8px] text-gray-400">Invoice #NT-8941 telah divalidasi oleh payment gateway.</p>
                            </div>
                          </div>
                          
                          <p className="text-[8px] font-mono text-center text-gray-500">SWIPE UP TO EXPAND</p>
                        </div>
                      )}

                      {activeMobileFeature === 2 && (
                        /* Hardware GPS Scan Screen */
                        <div className="flex-1 flex flex-col justify-between py-2">
                          <div className="space-y-3">
                            <span className="text-[8px] font-mono tracking-widest text-gray-500 uppercase">GPS LOCATION ENGINE</span>
                            
                            {/* Simulated Futuristic Map */}
                            <div className="h-32 rounded-xl bg-neutral-900 border border-white/5 relative overflow-hidden flex items-center justify-center">
                              {/* Pulse Pin */}
                              <span className="absolute w-12 h-12 rounded-full border border-orange-500 animate-ping opacity-30" />
                              <span className="absolute w-3 h-3 rounded-full bg-orange-500 shadow-md border-2 border-white" />
                              
                              <div className="absolute bottom-2 left-2 right-2 bg-black/60 p-1.5 rounded text-[8px] text-white font-mono flex items-center gap-1 border border-white/5">
                                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                                <span className="truncate">Lat: -7.0298, Lng: 112.0194</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-1 bg-white/5 p-2 rounded-xl border border-white/5 justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[9px] text-white font-bold font-mono">GPS CHIP ONLINE</span>
                          </div>
                        </div>
                      )}

                      {activeMobileFeature === 3 && (
                        /* App Store Submission */
                        <div className="flex-1 flex flex-col justify-between py-2">
                          <div className="space-y-3">
                            <span className="text-[8px] font-mono tracking-widest text-gray-500 uppercase">APP MARKET LISTING</span>
                            
                            <div className="bg-[#121418] p-3 rounded-xl border border-white/5 space-y-2">
                              <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-lg bg-white text-black font-black flex items-center justify-center text-xs">NT</div>
                                <div>
                                  <p className="text-[10px] font-bold text-white">Ninatech Client App</p>
                                  <p className="text-[8px] text-gray-500">Jasa Website & IT Service</p>
                                </div>
                              </div>
                              
                              <div className="flex justify-between items-center text-[8px] text-gray-400 font-mono">
                                <span>⭐⭐⭐⭐⭐ 4.9</span>
                                <span>9.8 MB</span>
                                <span className="text-emerald-400">PUBLISHED</span>
                              </div>

                              <button className="w-full py-1 bg-white text-black font-bold text-[9px] rounded-md tracking-wider uppercase">
                                INSTALL APP
                              </button>
                            </div>
                          </div>
                          
                          <p className="text-[8px] text-center text-gray-500 leading-relaxed font-mono">APP STORE & PLAY STORE READY</p>
                        </div>
                      )}

                      {activeMobileFeature === 4 && (
                        /* Security Firewall Server Terminal */
                        <div className="flex-1 flex flex-col justify-between py-2">
                          <div className="space-y-3">
                            <span className="text-[8px] font-mono tracking-widest text-gray-500 uppercase">SERVER TELEMETRY</span>
                            
                            <div className="bg-neutral-950 p-2.5 rounded-xl border border-white/5 font-mono text-[8px] text-emerald-400 space-y-1">
                              <p className="text-white">root@ninatech:~$ status</p>
                              <p className="text-emerald-500">● FIREWALL ACTIVE</p>
                              <p className="text-emerald-500">● DATABASE ENCRYPTED</p>
                              <p className="text-emerald-500">● UPTIME: 99.99%</p>
                              <p className="text-gray-500">backup process... [100% OK]</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between text-[8px] font-mono text-gray-500 px-1">
                            <span>SSL SECURED</span>
                            <span className="animate-pulse text-white">● OPERATIONAL</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom Bar Indicator */}
                <div className="w-1/3 h-1 bg-white/20 rounded-full mx-auto mt-2 z-10" />
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
