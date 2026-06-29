export interface Project {
  id: string;
  title: string;
  category: "Landing Page" | "Company Profile" | "E-Commerce" | "Web App";
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: "Basic" | "Medium" | "Premium";
  price: string;
  isPopular?: boolean;
  features: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "nina-diamond",
    title: "Nina Diamond - Top Up Games",
    category: "Web App",
    description: "Website modern untuk top up game online, dilengkapi dengan fitur transaksi otomatis, pembayaran instan terlengkap, dan visual gaming yang futuristik.",
    image: "/images/Full%20Page%20Preview.png"
    tags: ["Vite", "React", "Tailwind CSS"],
    link: "https://nina-diamond-topup-games-website-in.vercel.app/"
  },
  {
    id: "ninapedia",
    title: "Ninapedia - Ensiklopedia Bebas",
    category: "Web App",
    description: "Platform ensiklopedia digital interaktif dengan sistem pencarian pintar, manajemen konten yang rapi, serta visual modern berstandar premium.",
    image: "/images/screencapture-id-wikipedia-org-wiki-Halaman-Utama-2026-06-23-16_10_20.png"
    tags: ["React", "Typescript", "Tailwind CSS"],
    link: "https://ninapedia-ensiklopedia.vercel.app/"
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Adhi Wicaksono",
    role: "Owner",
    company: "Dapoer kiri",
    text: "I've been using this service to my UMKM and it is very cool! The website is user friendly and the service quality to hear the instruction is very good job. This should be standard that every web developer had to maintain the customers need. Keep up the good work 🤝🏽👨🏽‍💻",
    rating: 5
  },
  {
    id: "2",
    name: "Ratih Dewi",
    role: "Marketing Manager",
    company: "Kopi Bintang 3",
    text: "Sangat profesional dan sesuai harapan. Sebagai client saya puas dengan projectnya. Saya akan rekomendasikan ke teman saya yang butuh jasa website juga. Thank you <3",
    rating: 5
  },
  {
    id: "3",
    name: "Akmal Adhi Nugroho",
    role: "Founder",
    company: "Angganu Project",
    text: "Mantap. Hasilnya memuaskan. Akhirnya punya website buat branding kami! Komunikasi responsif dan penyelesaian tepat waktu.",
    rating: 5
  },
  {
    id: "4",
    name: "Moreno Hibatullah",
    role: "CEO",
    company: "Vinasa",
    text: "Website sesuai ekspektasi. Pesan dan tema yang disampaikan juga sudah sesuai. Support pasca-pengerjaan juga sangat luar biasa.",
    rating: 5
  },
  {
    id: "5",
    name: "Yunan Faila",
    role: "CEO & SEO Specialist",
    company: "VCONK",
    text: "Keren kak, sekarang organisasi kami jadi punya company profile. Rekomen banget untuk jasa pembuatan website yang rapi dan cepat!",
    rating: 5
  }
];

export const WORKFLOW: Step[] = [
  {
    number: "01",
    title: "Konsultasi & Briefing",
    description: "Sampaikan kebutuhan bisnis Anda kepada kami, mulai dari jenis platform yang ingin dibuat, fitur-fitur utama yang dibutuhkan, hingga target audiens yang ingin dicapai."
  },
  {
    number: "02",
    title: "Rekomendasi Solusi & Paket",
    description: "Tim kami akan menganalisis kebutuhan Anda dan menyarankan jenis website/aplikasi serta paket investasi terbaik yang paling tepat guna dan efisien untuk bisnis Anda."
  },
  {
    number: "03",
    title: "Deal & Pengisian Informasi (DP 50%)",
    description: "Setelah menyetujui proposal, Anda melakukan pembayaran Down Payment (DP) sebesar 50%. Selanjutnya, Anda mengisi data informasi lengkap serta menyerahkan aset (logo, teks, gambar) yang ingin ditampilkan."
  },
  {
    number: "04",
    title: "Pengerjaan & Serah Terima",
    description: "Kami memproses pengerjaan dengan update berkala. Setelah proyek selesai diuji dan disetujui, Anda melakukan pelunasan sisa 50% sebelum website/aplikasi diserahterimakan seutuhnya."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Berapa lama waktu pengerjaan proyek?",
    answer: "Tergantung jenis layenannya. Landing page biasanya selesai dalam 3-5 hari kerja. Company profile 7-14 hari. E-commerce dan sistem informasi 2-6 minggu. Mobile app minimal 4-8 minggu tergantung kompleksitas. Kami selalu memberikan estimasi waktu sebelum proyek dimulai."
  },
  {
    id: "faq-2",
    question: "Apakah ada biaya revisi?",
    answer: "Setiap paket sudah dilengkapi dengan kuota revisi gratis (2x untuk Basic, 4x untuk Medium, dan 7x untuk Premium). Jika membutuhkan revisi tambahan setelah kuota habis, akan dikenakan biaya tambahan yang disepakati bersama."
  },
  {
    id: "faq-3",
    question: "Domain dan hosting sudah termasuk dalam paket?",
    answer: "Ya! Seluruh paket pembuatan website kami sudah termasuk pendaftaran domain (.com/.id/.net) selama 1 tahun dan cloud hosting premium berkecepatan tinggi dengan SSL (HTTPS) gratis untuk keamanan website Anda."
  },
  {
    id: "faq-4",
    question: "Bagaimana cara memulai proyek bersama Ninatech?",
    answer: "Sangat mudah! Anda cukup memilih paket yang diinginkan, klik 'Pilih Paket' atau isi formulir konsultasi gratis di bagian bawah halaman ini. Kami akan menghubungi Anda via WhatsApp untuk berdiskusi lebih detail."
  },
  {
    id: "faq-5",
    question: "Apakah bisa request fitur di luar paket yang ada?",
    answer: "Tentu saja! Kami adalah spesialis custom design & development. Jika Anda memiliki kebutuhan fitur khusus seperti sistem reservasi, multi-bahasa, API integration, atau fitur kustom lainnya, silakan diskusikan bersama kami."
  },
  {
    id: "faq-6",
    question: "Metode pembayaran apa yang tersedia?",
    answer: "Pembayaran dilakukan dengan sistem Down Payment (DP) sebesar 50% di awal proyek sebagai komitmen kerja, dan pelunasan 50% sisanya setelah pengerjaan selesai serta sebelum penyerahan akses (handover) seluruh data proyek."
  },
  {
    id: "faq-7",
    question: "Apakah saya akan mendapatkan source code proyeknya?",
    answer: "Ya, tentu saja. Setelah seluruh proses pelunasan selesai dilakukan, kami akan menyerahkan hak akses penuh terhadap domain, hosting, file source code, serta panduan pengelolaan (dokumentasi) secara transparan."
  },
  {
    id: "faq-8",
    question: "Apakah Ninatech melayani klien dari luar Tuban?",
    answer: "Ya, kami melayani klien dari seluruh wilayah Indonesia bahkan mancanegara secara online. Seluruh proses komunikasi, konsultasi, presentasi progres, hingga serah terima dilakukan secara transparan melalui WhatsApp, Zoom, dan email."
  }
];

export const PRICING_TABS = [
  "Landing Page",
  "Company Profile",
  "E-Commerce",
  "Sistem Informasi",
  "Portofolio",
  "Mobile App"
] as const;

export type PricingTab = typeof PRICING_TABS[number];

export const PRICING_BY_TAB: Record<PricingTab, PricingPlan[]> = {
  "Landing Page": [
    {
      name: "Basic",
      price: "399 Ribu",
      features: [
        "Domain .com durasi 1 Tahun (Bisa di perpanjang)",
        "1 Halaman/Section Responsif",
        "Basic SEO (Meta tags, title, sitemap)",
        "Integrasi WhatsApp CTA Pintar",
        "2x Revisi Desain & Konten",
        "Support Maintenance 1 Bulan"
      ]
    },
    {
      name: "Medium",
      price: "599 Ribu",
      isPopular: true,
      features: [
        "Semua Keuntungan Paket Basic",
        "Hingga 5 Section Tampilan Utama",
        "Formulir Kontak Terintegrasi Email",
        "Google Analytics & Search Console",
        "Optimalisasi Kecepatan Akses (Speed)",
        "4x Revisi Desain & Konten",
        "Support Maintenance 2 Bulan"
      ]
    },
    {
      name: "Premium",
      price: "999 Ribu",
      features: [
        "Semua Keuntungan Paket Medium",
        "Hingga 8 Section Tampilan Utama",
        "Animasi Halus & Interaktif Custom",
        "Integrasi Pixel (FB & TikTok Pixel)",
        "Integrasi Widget Live Chat / WhatsApp",
        "7x Revisi Desain & Konten",
        "Support Maintenance 3 Bulan"
      ]
    }
  ],
  "Company Profile": [
    {
      name: "Basic",
      price: "599 Ribu",
      features: [
        "Domain .com / .id selama 1 Tahun (Bisa di perpanjang)",
        "3 Halaman Utama (Beranda, Layanan, Tentang Kami)",
        "Standard SEO & Pendaftaran Google",
        "Integrasi WhatsApp Chat",
        "2x Revisi Desain & Konten",
        "Support Maintenance 1 Bulan"
      ]
    },
    {
      name: "Medium",
      price: "899 Ribu",
      isPopular: true,
      features: [
        "Semua Keuntungan Paket Basic",
        "Hingga 6 Halaman Custom",
        "Halaman Portofolio/Galeri Interaktif",
        "Formulir Kontak & Integrasi Maps",
        "Google Analytics & Search Console",
        "4x Revisi Desain & Konten",
        "Support Maintenance 2 Bulan"
      ]
    },
    {
      name: "Premium",
      price: "1.499 Ribu",
      features: [
        "Semua Keuntungan Paket Medium",
        "Hingga 12 Halaman Custom",
        "Animasi Premium & Desain Unik",
        "Sistem Blog / Artikel Berita",
        "Keamanan Cloudflare & Anti-Spam",
        "Unlimited Revisi selama Pengerjaan",
        "Support Maintenance 3 Bulan"
      ]
    }
  ],
  "E-Commerce": [
    {
      name: "Basic",
      price: "899 Ribu",
      features: [
        "Domain .com selama 1 Tahun (Bisa di perpanjang)",
        "Katalog Produk (Max 15 Produk)",
        "Integrasi WhatsApp Checkout",
        "Basic SEO & Integrasi Sosmed",
        "2x Revisi Desain & Konten",
        "Support Maintenance 1 Bulan"
      ]
    },
    {
      name: "Medium",
      price: "1.399 Ribu",
      isPopular: true,
      features: [
        "Semua Keuntungan Paket Basic",
        "Katalog Produk Tidak Terbatas",
        "Fitur Keranjang Belanja & Kupon Diskon",
        "Integrasi Ongkos Kirim Otomatis (RajaOngkir)",
        "Google Analytics & Search Console",
        "4x Revisi Desain & Konten",
        "Support Maintenance 2 Bulan"
      ]
    },
    {
      name: "Premium",
      price: "2.499 Ribu",
      features: [
        "Semua Keuntungan Paket Medium",
        "Sistem Pembayaran Otomatis (Midtrans Payment Gateway)",
        "Sistem Akun Pembeli (Login & History Order)",
        "Laporan Penjualan & Inventaris Barang",
        "Integrasi Pixel (FB, Google & TikTok)",
        "Revisi Sampai Deal",
        "Support Maintenance 3 Bulan"
      ]
    }
  ],
  "Sistem Informasi": [
    {
      name: "Basic",
      price: "1.499 Ribu",
      features: [
        "Dashboard Admin Sederhana",
        "Manajemen Database Klien / Barang",
        "Fitur CRUD (Create, Read, Update, Delete)",
        "Keamanan Enkripsi Standard",
        "3x Revisi Alur Sistem",
        "Support Maintenance 1 Bulan"
      ]
    },
    {
      name: "Medium",
      price: "2.999 Ribu",
      isPopular: true,
      features: [
        "Semua Keuntungan Paket Basic",
        "Dashboard Admin & User (Multi-role)",
        "Sistem Pelaporan & Export PDF / Excel",
        "Grafik & Visualisasi Data Interaktif",
        "Security Audit & Cloud Backup",
        "5x Revisi Alur Sistem",
        "Support Maintenance 3 Bulan"
      ]
    },
    {
      name: "Premium",
      price: "4.999 Ribu",
      features: [
        "Semua Keuntungan Paket Medium",
        "Sistem Kustom Kompleks (API-driven)",
        "Integrasi Multi-Platform",
        "Real-time Notification / WebSockets",
        "Optimasi Database Kecepatan Tinggi",
        "Revisi Sepuasnya Selama Pengembangan",
        "Support Maintenance 6 Bulan"
      ]
    }
  ],
  "Portofolio": [
    {
      name: "Basic",
      price: "299 Ribu",
      features: [
        "Domain .com selama 1 Tahun (Bisa di perpanjang)",
        "Desain Personal Modern (1 Halaman)",
        "Integrasi Link Social Media & CV",
        "Basic SEO Setup",
        "2x Revisi",
        "Support Maintenance 1 Bulan"
      ]
    },
    {
      name: "Medium",
      price: "499 Ribu",
      isPopular: true,
      features: [
        "Semua Keuntungan Paket Basic",
        "Hingga 3 Halaman Utama",
        "Galeri Proyek Interaktif (Filterable)",
        "Animasi Masuk & Transisi Menarik",
        "Form Kontak Pengunjung",
        "4x Revisi",
        "Support Maintenance 2 Bulan"
      ]
    },
    {
      name: "Premium",
      price: "799 Ribu",
      features: [
        "Semua Keuntungan Paket Medium",
        "Hingga 6 Halaman Custom",
        "Interactive Dark/Light Mode",
        "Desain Unik Representasi Karakter",
        "Koneksi Blog Pribadi (Markdown / CMS)",
        "Revisi Sepuasnya",
        "Support Maintenance 3 Bulan"
      ]
    }
  ],
  "Mobile App": [
    {
      name: "Basic",
      price: "1.999 Ribu",
      features: [
        "Desain UI/UX Modern 5 Screen",
        "Aplikasi Android (APK)",
        "Integrasi Database Lokal / Firebase",
        "Notifikasi Push Sederhana",
        "2x Revisi Alur Aplikasi",
        "Maintenance Bug 1 Bulan"
      ]
    },
    {
      name: "Medium",
      price: "3.999 Ribu",
      isPopular: true,
      features: [
        "Semua Keuntungan Paket Basic",
        "Aplikasi Android & iOS (Cross-platform)",
        "Hingga 15 Screen Fungsional",
        "Admin Web Panel untuk Manajemen Data",
        "Integrasi Maps / Payment Gateway",
        "4x Revisi Alur Aplikasi",
        "Maintenance Bug 3 Bulan"
      ]
    },
    {
      name: "Premium",
      price: "7.999 Ribu",
      features: [
        "Semua Keuntungan Paket Medium",
        "Jumlah Screen Custom Sesuai Desain",
        "Arsitektur Aplikasi Skala Besar",
        "Upload ke Google Play Store & Apple App Store",
        "Sistem Chat Real-time / Custom APIs",
        "Revisi Sepuasnya selama Pengerjaan",
        "Maintenance Bug 6 Bulan"
      ]
    }
  ]
};
