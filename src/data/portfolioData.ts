export type ProjectCategory =
  | 'All'
  | 'UI/UX Design'
  | 'Web Development'
  | 'Academic Projects'
  | 'Creative Design'
  | 'Interactive Media'
  | 'EdTech / B2B SaaS'
  | 'Enterprise Web & Mobile App'
  | 'On-Demand Service & AI';

export interface ProjectCaseStudy {
  overview: string;
  problemStatement: string;
  goalsAndObjectives: string[];
  researchAndPlanning: string;
  designAndDevProcess: string[];
  toolsAndTech: string[];
  finalResult: string;
  lessonsLearned: string;
  metricsOrImpact?: { label: string; value: string }[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  year: string;
  role: string;
  duration: string;
  featuredSize: 'large' | 'regular';
  shortProblem: string;
  shortSolution: string;
  shortResult: string;
  tags: string[];
  accentColor: string;
  visualType: 'dashboard' | 'mobile-ux' | 'mobile-app' | 'interactive-canvas' | 'academic-system' | 'editorial-brand';
  caseStudy: ProjectCaseStudy;
}

export interface SkillGroup {
  id: string;
  category: 'Design' | 'Development' | 'Tools' | 'Soft Skills';
  subtitle: string;
  items: {
    name: string;
    context: string;
    tag: string;
  }[];
}

export interface JourneyItem {
  id: string;
  period: string;
  type: 'Education' | 'Project Milestone' | 'Exploration' | 'Role / Activity';
  title: string;
  organization: string;
  description: string;
  contributionsAndLearnings: string[];
  highlightTag: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'UI/UX & Design' | 'Web & Tech' | 'System & Data' | 'Competition / Event';
  credentialId?: string;
  credentialUrl?: string;
  imageUrl?: string; // Simpan gambar di folder public/certificates/ lalu isi misal "/certificates/sertifikat-1.jpg"
  description: string;
  skillsCovered: string[];
}

export interface PortfolioConfig {
  identity: {
    fullName: string;
    initials: string;
    labelYear: string;
    headline: string;
    professionOrInterest: string;
    shortDescription: string;
    location: string;
    availabilityStatus: string;
    profilePhotoUrl: string; // Kosongkan jika ingin menggunakan komposisi ilustratif interaktif
  };
  about: {
    sectionTitle: string;
    leadParagraph: string;
    bodyParagraphs: string[];
    quickFacts: {
      label: string;
      value: string;
      detail: string;
    }[];
    stats: {
      value: number;
      suffix: string;
      label: string;
      note: string;
    }[];
  };
  contact: {
    headline: string;
    subheadline: string;
    email: string;
    linkedin: { label: string; url: string };
    github: { label: string; url: string };
    socialMedia: { platform: string; handle: string; url: string }[];
  };
  footer: {
    closingQuote: string;
  };
  projects: ProjectItem[];
  skills: SkillGroup[];
  certificates: CertificateItem[];
  journey: JourneyItem[];
}

/**
 * ============================================================================
 * PUSAT DATA PORTOFOLIO (MUDAH DIEDIT TANPA MENGUBAH KOMPONEN UI)
 * ============================================================================
 * Seluruh placeholder diberi label jelas seperti [NAMA LENGKAP] agar Anda
 * dapat menggantinya langsung sesuai profil asli tanpa klaim fiktif.
 */
export const portfolioData: PortfolioConfig = {
  identity: {
    fullName: 'Muhamad Ferdyanto',
    initials: 'MF.',
    labelYear: 'PORTOFOLIO / 2026',
    headline: 'Keep Learning To Grow,Take The Leap To Lead.',
    professionOrInterest: '[Creative Technologist / Frontend Engineer]',
    shortDescription:
      '[Seorang mahasiswa sistem informasi yang gemar menjelajahi hal baru yang berkaitan dengan tekmnologi dan perkembangan zaman,sangat suka mempelajari dan bereksperimen dengan pengalaman-pengalaman baru.]',
    location: 'Indonesia (Remote / Hybrid Ready)',
    availabilityStatus: 'Available for Collaborative Projects & Opportunities',
    profilePhotoUrl: '/baru.jpg', // Isi path foto asli misal "/profile.jpg" atau biarkan kosong untuk menampilkan potret grafis editorial
  },

  about: {
    sectionTitle: 'A Little About Me',
    leadParagraph:
      'Halo.., saya adalah seorang pembelajar dan praktisi di bidang sistem informasi yang percaya bahwa teknologi terbaik adalah teknologi yang terasa intuitif sekaligus meninggalkan kesan visual yang mendalam.',
    bodyParagraphs: [
      'Pendekatan saya berada di persimpangan antara pemikiran desain (Design Thinking) dan rekayasa sistem (Systems Engineering). Saya senang membedah masalah yang kompleks, menyusunnya ke dalam struktur informasi yang jernih, lalu menerjemahkannya menjadi antarmuka web yang interaktif dan responsif.',
      'Melalui berbagai eksplorasi proyek akademik, pengembangan mandiri, dan studi kasus produk digital, saya terus mengasah kepekaan terhadap tipografi, aksesibilitas, mikro-interaksi, serta arsitektur kode yang bersih dan mudah dipelihara.',
    ],
    quickFacts: [
      {
        label: 'Fokus Utama',
        value: 'UI/UX Design, Interactive Web Development & System Architecture',
        detail: 'Menjembatani gap antara desain prototipe di Figma dengan implementasi produksi di browser.',
      },
      {
        label: 'Tools & Ekosistem',
        value: 'Figma, React, TypeScript, Tailwind CSS, Next.js, Git',
        detail: 'Memilih perkakas yang mendukung kecepatan iterasi, konsistensi komponen, dan performa.',
      },
      {
        label: 'Pendekatan Kerja',
        value: 'Research-Driven, Detail-Oriented & Iterative Prototyping',
        detail: 'Mengutamakan kejelasan hierarki konten dan kenyamanan pengguna di setiap ukuran layar.',
      },
      {
        label: 'Tujuan Profesional',
        value: 'Membangun Produk Digital yang Berdampak & Inklusif',
        detail: 'Terbuka untuk kolaborasi riset, magang profesional, proyek freelance, maupun peran full-time.',
      },
    ],
    stats: [
      {
        value: 5,
        suffix: '+',
        label: 'Studi Kasus & Proyek Terdokumentasi',
        note: 'Placeholder jumlah karya yang dikurasi (dapat disesuaikan)',
      },
      {
        value: 4,
        suffix: ' Pilar',
        label: 'Disiplin Keahlian Terintegrasi',
        note: 'Design, Frontend Engineering, Workflow Tools & Problem Solving',
      },
      {
        value: 100,
        suffix: '%',
        label: 'Fokus pada Kode & Desain Aksesibel',
        note: 'Semantic HTML, navigasi keyboard, dan responsivitas lintas perangkat',
      },
    ],
  },

  contact: {
    headline: "Have an Idea? Let's Make It Happen.",
    subheadline:
      'Tertarik berdiskusi tentang proyek baru, kolaborasi riset, peluang karier, atau sekadar bertukar pikiran seputar desain dan teknologi? Mari terhubung.',
    email: 'superhumanfrompluto@email.com',
    linkedin: {
      label: 'linkedin.com/in/Muhamad Ferdyanto',
      url: 'https://www.linkedin.com/in/muhamad-ferdyanto-5b82a6447/',
    },
    github: {
      label: 'github.com/MuhamadFerdyanto1',
      url: 'https://github.com/MuhamadFerdyanto1',
    },
    socialMedia: [
      {
        platform: 'Instagram',
        handle: '@frdy.o_',
        url: 'https://instagram.com/frdy.o_',
      },,
    ],
  },

  footer: {
    closingQuote: 'Designed with curiosity. Built with purpose.',
  },

  projects: [
    {
      id: 'proj-01',
      number: '01',
      title: '[PROYEK 1] — POBE - Platform Orang-orang Belajar Entrepreneur',
      category: 'EdTech / B2B SaaS',
      year: '2026',
      role: 'UI/UX Designer & Frontend Developer',
      duration: '4 Minggu (Fase Prototipe MVP)',
      featuredSize: 'large',
      shortProblem:
        'Mahasiswa Gen Z memiliki minat tinggi untuk berwirausaha, namun sering gagal di tengah jalan akibat burnout, buntu ide, dan merasa terisolasi saat membangun startup.',
      shortSolution:
        'Membangun platform inkubasi virtual berbasis komunitas (Build in Public) yang dilengkapi mekanik gamifikasi (XP, Streak) dan bantuan AI Idea Generator.',
      shortResult:
        'Menghasilkan prototipe React MVP interaktif yang siap ditawarkan (B2B/B2G) ke universitas, lengkap dengan Dasbor Dosen dan integrasi portofolio LinkedIn.',
      tags: ['React', 'Gamification', 'EdTech', 'Tailwind CSS', 'Product Design', 'B2B'],
      accentColor: '#2563EB', // Blue-600 (Warna utama POBE)
      visualType: 'mobile-app', // Karena desainnya dirender dalam frame max-w-[400px]
      caseStudy: {
        overview:
          'POBE adalah studi kasus pengembangan platform edukasi kewirausahaan modern yang menggabungkan psikologi gamifikasi (habit-forming) dengan utilitas produktivitas nyata. Proyek ini memecahkan dilema inkonsistensi Gen Z dalam membangun bisnis.',
        problemStatement:
          'Tingginya angka kegagalan startup mahasiswa di fase awal karena kurangnya validasi ide, manajemen tugas yang berantakan, serta tidak adanya perlindungan HKI (Hak Kekayaan Intelektual) antar anggota tim lintas jurusan yang sering memicu sengketa.',
        goalsAndObjectives: [
          'Merancang sistem retensi pengguna menggunakan elemen gamifikasi (Misi Harian, Papan Peringkat, XP).',
          'Membangun fitur B2B Enterprise (Dashboard Dosen, SSO Kampus .ac.id, dan Perjanjian HKI) untuk kebutuhan lisensi institusi.',
          'Mengintegrasikan AI (Mentor Chatbot & Idea Roulette) sebagai asisten validasi ide.',
        ],
        researchAndPlanning:
          'Menganalisis perilaku Gen Z terhadap aplikasi berbasis komunitas, memetakan User Journey untuk 4 peran berbeda (Hustler, Hipster, Hacker, Dosen), dan menyusun alur pencegahan Cold Start Problem melalui integrasi LinkedIn ekspor.',
        designAndDevProcess: [
          'Tahap 1 — Arsitektur Fitur & UX: Merancang ekosistem loop (Roast/Toast ide di Lounge -> Bentuk Tim -> Kerjakan di Task Board).',
          'Tahap 2 — Kesiapan B2B (Keamanan): Menerapkan simulasi otentikasi OAuth (Google/LinkedIn), validasi email institusi, dan modal Perjanjian HKI secara asinkron.',
          'Tahap 3 — Pengembangan Prototipe (React): Membangun High-Fidelity App menggunakan React dan Tailwind CSS dalam satu basis kode modular dengan state management yang dinamis.',
        ],
        toolsAndTech: ['React (Vite)', 'Tailwind CSS', 'Lucide Icons', 'Simulated API (OAuth & OTP)'],
        finalResult:
          'Prototipe aplikasi web komprehensif yang menampilkan alur Onboarding (Wizard), Beranda Gamifikasi, Komunitas (Laboratorium), Dasbor Admin/Dosen, serta Profil Pengguna yang terhubung dengan LinkedIn.',
        lessonsLearned:
          'Gamifikasi efektif untuk 30 hari pertama, namun utilitas nyata (seperti pembuktian portofolio ke LinkedIn dan pemantauan resmi dari Dosen) adalah kunci retensi jangka panjang dalam produk EdTech B2B.',
        metricsOrImpact: [
          { label: 'Role Ecosystem', value: '4 Peran Spesifik' },
          { label: 'Core Features', value: '5 Modul Utama' },
          { label: 'Status Proyek', value: 'High-Fidelity MVP' },
        ],
      },
    },
    {
      id: 'proj-02',
      number: '02',
      title: '[PROYEK 2] — Sistem Manajemen Aset Keamanan Bandara (PT Angkasa Pura)',
      category: 'Enterprise Web & Mobile App',
      year: '2026',
      role: 'UI/UX Designer & Frontend Engineer',
      duration: '12 Minggu',
      featuredSize: 'regular',
      shortProblem:
        'Pendataan dan mutasi aset keamanan bandara (Avsec) yang masih manual menyebabkan lambatnya proses persetujuan dan risiko aset tidak terlacak saat pergantian shift.',
      shortSolution:
        'Membangun ekosistem aplikasi dua sisi: antarmuka mobile yang ringkas untuk operator di lapangan, dan dashboard web komprehensif untuk Admin melakukan approval & pelaporan.',
      shortResult:
        'Proses peminjaman dan mutasi aset menjadi transparan secara real-time, memangkas waktu birokrasi persetujuan, dan mengotomatisasi pembuatan laporan harian.',
      tags: ['React', 'Mobile-First', 'Dashboard Admin', 'Asset Management', 'RBAC'],
      accentColor: '#005B9F', // Warna biru korporat khas BUMN/Angkasa Pura
      visualType: 'dashboard',
      caseStudy: {
        overview:
          'Pengembangan Sistem Manajemen Aset berbasis digital untuk divisi Keamanan Penerbangan (Aviation Security) di lingkungan PT Angkasa Pura. Proyek ini mendigitalisasi proses serah-terima, peminjaman, dan mutasi barang inventaris krusial (seperti metal detector, radio HT, hingga kendaraan operasional).',
        problemStatement:
          'Proses pencatatan aset menggunakan buku log fisik atau form kertas sering kali memicu selisih data, kehilangan jejak alat rusak, serta menyulitkan Admin dalam merekap laporan akhir bulan. Di sisi lain, operator lapangan butuh alat yang cepat untuk lapor/pinjam alat langsung dari smartphone mereka tanpa harus bolak-balik ke ruang admin.',
        goalsAndObjectives: [
          'Membuat antarmuka PWA (Progressive Web App) yang ringan agar operator lapangan dapat melakukan request peminjaman atau mutasi langsung dari HP.',
          'Membangun Web Dashboard terpusat bagi Admin untuk memberikan approval (persetujuan) satu klik dan memantau status seluruh aset.',
          'Menerapkan sistem Role-Based Access Control (RBAC) yang ketat untuk membedakan hak akses dan pandangan data antara Operator dan Admin.',
        ],
        researchAndPlanning:
          'Melakukan observasi lapangan (shadowing) terhadap alur kerja petugas keamanan bandara saat pergantian shift. Memetakan database relasional untuk riwayat kepemilikan aset, dan merancang wireframe dua versi (Mobile untuk Operator, Desktop untuk Admin).',
        designAndDevProcess: [
          'Tahap 1 — Arsitektur Dua Sisi: Memisahkan UI/UX menjadi Mobile-First view untuk formulir mutasi/peminjaman, dan Data-Heavy Dashboard view untuk tabel approval.',
          'Tahap 2 — Alur Persetujuan (Approval Flow): Membangun logika state management di mana request dari Operator akan memicu notifikasi real-time di Dashboard Admin.',
          'Tahap 3 — Pelaporan & Audit Trail: Mendesain modul generator laporan (PDF/Excel) di sisi Admin yang merangkum data mutasi aset, status perbaikan, dan riwayat peminjam.',
        ],
        toolsAndTech: ['React', 'Tailwind CSS', 'Progressive Web App (PWA)', 'Role-Based Access', 'Data Grid Components'],
        finalResult:
          'Sistem manajemen inventaris tersinkronisasi yang meniadakan penggunaan kertas (paperless). Memungkinkan operator bekerja lebih gesit di terminal bandara sementara admin memegang kendali penuh di *back-office*.',
        lessonsLearned:
          'Tantangan terbesar dalam aplikasi enterprise adalah menyeimbangkan kontras kebutuhan pengguna: Operator butuh UI sesederhana mungkin (tombol besar, proses 2 langkah), sedangkan Admin butuh UI padat data dengan filter kompleks.',
        metricsOrImpact: [
          { label: 'Platform Sisi', value: 'Admin (Web) & Operator (HP)' },
          { label: 'Efisiensi Waktu Approval', value: 'Memangkas birokrasi' },
          { label: 'Status Proyek', value: 'Studi Kasus Enterprise' },
        ],
      },
    },
    {
      id: 'proj-03',
      number: '03',
      title: '[PROYEK 3] — Siram Tumbuh: Aplikasi Jasa Perawatan Taman & Konsultasi AI',
      category: 'On-Demand Service & AI',
      year: '2026',
      role: 'UI/UX Designer & AI Integrator',
      duration: '8 Minggu',
      featuredSize: 'regular',
      shortProblem:
        'Pemilik rumah sering kesulitan mencari jasa perawat taman yang terpercaya dan tidak memiliki pengetahuan botani untuk memilih tanaman yang cocok dengan cuaca/lahan mereka.',
      shortSolution:
        'Membangun platform pemesanan jasa perawatan taman (On-Demand) yang terintegrasi dengan SMART/SSMI Bot AI sebagai asisten konsultan lanskap virtual.',
      shortResult:
        'Pengguna dapat berkonsultasi tentang kondisi taman mereka secara real-time dan langsung memesan paket perawatan atau pembuatan taman yang direkomendasikan oleh AI.',
      tags: ['AI Integration', 'On-Demand App', 'UI/UX', 'Chatbot Interface', 'React'],
      accentColor: '#16A34A', // Warna hijau alam yang segar (Green-600)
      visualType: 'mobile-app',
      caseStudy: {
        overview:
          'Siram Tumbuh adalah aplikasi on-demand untuk layanan pemeliharaan dan pembuatan lanskap taman. Nilai jual utama dari aplikasi ini adalah kehadiran asisten pintar "SMART/SSMI Bot AI" yang membantu menjembatani kesenjangan pengetahuan botani pengguna sebelum mereka memesan layanan.',
        problemStatement:
          'Pengguna awam sering kali bingung harus memesan layanan apa karena tidak tahu nama tanaman, jenis hama yang menyerang, atau tanaman apa yang cocok untuk halaman rumah mereka. Sistem pemesanan konvensional tanpa edukasi sering berujung pada ekspektasi layanan yang tidak sesuai.',
        goalsAndObjectives: [
          'Merancang antarmuka pemesanan jasa (booking system) yang intuitif dari pemilihan paket hingga checkout.',
          'Mengintegrasikan asisten SMART/SSMI Bot AI dengan antarmuka percakapan (chat UI) yang terasa natural dan responsif.',
          'Menciptakan alur pengguna (user flow) yang mulus dari hasil konsultasi AI langsung menuju ke keranjang pemesanan jasa.',
        ],
        researchAndPlanning:
          'Mengumpulkan data permasalahan umum seputar tanaman hias dan taman rumah. Menyusun prompt engineering khusus untuk bot SMART/SSMI agar AI membatasi pembicaraan hanya pada topik botani/lanskap dan selalu mengarahkan solusi ke layanan Siram Tumbuh.',
        designAndDevProcess: [
          'Tahap 1 — Arsitektur Layanan: Merancang katalog jasa perawatan taman (pemotongan rumput, pembasmian hama, desain lanskap) dengan harga yang transparan.',
          'Tahap 2 — Desain Chatbot UI: Mendesain ruang konsultasi AI dengan fitur "Suggested Prompts" (saran pertanyaan) agar pengguna yang kebingungan bisa langsung memulai obrolan.',
          'Tahap 3 — Integrasi SMART/SSMI AI: Menghubungkan antarmuka frontend dengan model bahasa AI, serta melatih bot untuk mampu merekomendasikan layanan yang tepat berdasarkan keluhan pengguna (misal: daun menguning -> bot menyarankan jasa pemupukan).',
        ],
        toolsAndTech: ['React / Vite', 'AI API Integration', 'Tailwind CSS', 'Conversational UI Design', 'State Management'],
        finalResult:
          'Aplikasi layanan taman terpadu yang tidak hanya berfungsi sebagai alat transaksi, tetapi juga sebagai platform edukasi interaktif bagi pecinta tanaman.',
        lessonsLearned:
          'Menggabungkan antarmuka percakapan (Chat UI) dengan antarmuka transaksional (E-commerce UI) membutuhkan transisi yang sangat halus agar pengguna tidak merasa sedang berbicara dengan tenaga pemasar (sales) robotik, melainkan dengan pakar taman yang peduli.',
        metricsOrImpact: [
          { label: 'Integrasi', value: 'SMART/SSMI AI Bot' },
          { label: 'Fokus Utama', value: 'Konsultasi & Pemesanan' },
          { label: 'Status Proyek', value: 'Studi Kasus UI & AI' },
        ],
      },
    },
    {
      id: 'proj-04',
      number: '04',
      title: '[PROYEK 4] — Sistem Informasi Pemantauan Kinerja PT.Satya Haprabu Perkasa',
      category: 'Creative Design',
      year: '2025',
      role: 'Creative Director & Visual Designer',
      duration: '4 Minggu (Placeholder)',
      featuredSize: 'regular',
      shortProblem:
        'Pameran karya digital daring sering kali tampil seperti galeri grid biasa yang gagal menyampaikan narasi kuratorial di balik setiap karya.',
      shortSolution:
        'Menciptakan konsep microsite bergaya majalah editorial dengan komposisi tipografi ekspresif dan alur penceritaan berurutan.',
      shortResult:
        'Identitas visual yang berkarakter kuat dan memberikan pengalaman eksplorasi pameran yang imersif di layar desktop maupun mobile.',
      tags: ['Editorial Layout', 'Typography', 'Visual Identity', 'Art Direction', 'Microsite'],
      accentColor: '#171717',
      visualType: 'editorial-brand',
      caseStudy: {
        overview:
          'Eksplorasi desain visual dan tata letak web eksperimental untuk pameran karya kreatif. Mengambil inspirasi dari desain publikasi cetak Swiss dan menerjemahkannya ke dalam medium web yang dinamis.',
        problemStatement:
          'Bagaimana cara mempertahankan karakter tata letak majalah cetak yang asimetris dan berani, namun tetap nyaman dibaca dan responsif ketika dibuka di berbagai ukuran layar perangkat?',
        goalsAndObjectives: [
          'Menciptakan sistem grid fleksibel yang mendukung tata letak asimetris tanpa merusak keterbacaan.',
          'Memadukan tipografi judul berkarakter tegas dengan teks narasi yang nyaman dibaca panjang.',
          'Menjaga keseimbangan antara elemen dekoratif dan kecepatan pemuatan halaman.',
        ],
        researchAndPlanning:
          'Mengkaji referensi desain editorial modern, melakukan eksperimen pasangan huruf (font pairing), dan membuat moodboard arah visual.',
        designAndDevProcess: [
          'Tahap 1 — Tipografi & Grid: Menentukan rasio ukuran teks menggunakan fluid typography (clamp).',
          'Tahap 2 — Komposisi Visual: Menyusun urutan cerita (storyboarding) dari bagian pembuka hingga katalog karya.',
          'Tahap 3 — Interaksi Halus: Menambahkan efek reveal gambar dan transisi antar-bab yang tenang.',
        ],
        toolsAndTech: ['Figma', 'Fluid CSS Grid', 'Editorial Typography', 'SVG Illustration'],
        finalResult:
          'Konsep identitas visual dan microsite interaktif yang menonjolkan keunikan setiap karya tanpa mendominasi konten utamanya.',
        lessonsLearned:
          'Keterbatasan palet warna justru mendorong kreativitas yang lebih tinggi dalam memainkan proporsi, ruang negatif, dan kontras tipografi.',
        metricsOrImpact: [
          { label: 'Konsep Visual', value: 'Editorial Minimalist' },
          { label: 'Tipografi', value: 'Fluid Scale' },
          { label: 'Status Proyek', value: 'Creative Placeholder' },
        ],
      },
    },
  ],

  skills: [
    {
      id: 'skill-design',
      category: 'Design',
      subtitle: 'Merancang pengalaman produk yang terstruktur, estetis, dan berpusat pada manusia.',
      items: [
        {
          name: 'UI & Editorial Layout Design',
          context: 'Tipografi ekspresif, sistem grid asimetris, dan hierarki visual yang bersih.',
          tag: 'Visual Craft',
        },
        {
          name: 'UX Research & Information Architecture',
          context: 'Pemetaan alur pengguna, wireframing, dan penyederhanaan struktur navigasi.',
          tag: 'Strategy',
        },
        {
          name: 'Design Systems & Component Tokens',
          context: 'Penyusunan komponen modular yang konsisten dan siap diterjemahkan ke kode.',
          tag: 'Scalability',
        },
        {
          name: 'Interactive Prototyping & Motion Concept',
          context: 'Simulasi transisi antarmuka dan mikro-interaksi yang bermakna.',
          tag: 'Interaction',
        },
      ],
    },
    {
      id: 'skill-dev',
      category: 'Development',
      subtitle: 'Menerjemahkan konsep desain menjadi aplikasi web yang cepat, responsif, dan terawat.',
      items: [
        {
          name: 'React & Modern JavaScript (ES6+)',
          context: 'Pengembangan antarmuka berbasis komponen, pengelolaan state, dan hooks.',
          tag: 'Frontend Core',
        },
        {
          name: 'TypeScript Architecture',
          context: 'Penulisan kode yang aman terhadap tipe data, terstruktur, dan mudah dikembangkan.',
          tag: 'Reliability',
        },
        {
          name: 'Tailwind CSS & Responsive Styling',
          context: 'Implementasi tata letak presisi dari layar smartphone hingga monitor ultra-wide.',
          tag: 'Styling',
        },
        {
          name: 'Web Accessibility & Semantic HTML',
          context: 'Navigasi keyboard, atribut ARIA, kontras warna, dan dukungan reduced-motion.',
          tag: 'Inclusivity',
        },
      ],
    },
    {
      id: 'skill-tools',
      category: 'Tools',
      subtitle: 'Ekosistem perangkat kerja sehari-hari untuk kolaborasi desain dan pengembangan sistem.',
      items: [
        {
          name: 'Figma & FigJam',
          context: 'Eksplorasi konsep, auto-layout, variabel desain, dan kolaborasi tim.',
          tag: 'Design Tool',
        },
        {
          name: 'Git & GitHub Workflow',
          context: 'Kontrol versi, dokumentasi repositori, dan manajemen perubahan kode.',
          tag: 'Version Control',
        },
        {
          name: 'VS Code & Modern Build Tools (Vite)',
          context: 'Lingkungan pengembangan cepat dengan linting dan debugging terintegrasi.',
          tag: 'Dev Environment',
        },
        {
          name: 'System Modeling & Documentation',
          context: 'Penyusunan diagram alur sistem, struktur data, dan spesifikasi teknis.',
          tag: 'Analysis',
        },
      ],
    },
    {
      id: 'skill-soft',
      category: 'Soft Skills',
      subtitle: 'Karakter kerja dan pola pikir dalam menyelesaikan masalah maupun berkolaborasi.',
      items: [
        {
          name: 'Analytical Problem Solving',
          context: 'Memecah persoalan besar menjadi langkah-langkah logis yang dapat dieksekusi.',
          tag: 'Mindset',
        },
        {
          name: 'Cross-Disciplinary Communication',
          context: 'Menjembatani bahasa visual desainer dengan logika teknis pengembang.',
          tag: 'Collaboration',
        },
        {
          name: 'Adaptability & Continuous Learning',
          context: 'Cepat mempelajari teknologi, pola desain, dan metodologi baru.',
          tag: 'Growth',
        },
        {
          name: 'Attention to Detail & Craftsmanship',
          context: 'Peduli terhadap kerapian spasi, konsistensi interaksi, dan kualitas kode.',
          tag: 'Quality',
        },
      ],
    },
  ],

  certificates: [
    {
      id: 'cert-01',
      title: '[NAMA SERTIFIKAT 1] — Data Management',
      issuer: '[Badan Nasional Sertifikasi Profesi]',
      date: '2026',
      category: 'Database Administrator',
      credentialId: 'CRED-ID-001',
      credentialUrl: '', // Isi link verifikasi sertifikat jika ada (misal: https://...)
      imageUrl: '/certificates/sertifdatabase.png', // Simpan foto/scan sertifikat di public/certificates/ lalu isi misal: "/certificates/sertifikat-1.jpg"
      description:
        'Sertifikasi kompetensi perancangan database.',
      skillsCovered: ['Database Design', 'SQL Query Optimization', 'Data Modeling', 'ETL Processes'],
    },
    {
      id: 'cert-02',
      title: '[NAMA SERTIFIKAT 2] — Data Analys',
      issuer: '[Badan Nasional Sertifikasi Profesi]',
      date: '2026',
      category: 'Analyst & Data Visualization',
      credentialId: 'CRED-ID-002',
      credentialUrl: '',
      imageUrl: '',
      description:
        'Pengembangan aplikasi web modern berbasis komponen yang responsif, aksesibel, dan terintegrasi dengan REST API serta pengelolaan state yang terstruktur.',
      skillsCovered: ['React', 'JavaScript ES6+', 'Responsive Web', 'Tailwind CSS'],
    },
  ],

  journey: [
    {
      id: 'journey-01',
      period: '2026 — Sekarang',
      type: 'Exploration',
      title: '[FOKUS SAAT INI] — Eksplorasi Creative Technology & Produk Digital Interaktif',
      organization: 'Pengembangan Mandiri & Studi Kasus Terbuka',
      description:
        'Memperdalam integrasi antara rekayasa frontend modern, sistem desain terukur, dan gerakan interaktif di web untuk membangun portofolio produk berstandar industri.',
      contributionsAndLearnings: [
        'Merancang dan membangun arsitektur web interaktif menggunakan React, TypeScript, dan Framer Motion.',
        'Melakukan studi kasus komprehensif mulai dari riset masalah hingga implementasi kode yang aksesibel.',
        'Membangun sistem dokumentasi proyek yang terstruktur agar mudah ditinjau oleh kolaborator dan perekrut.',
      ],
      highlightTag: 'Current Chapter',
    },
    {
      id: 'journey-02',
      period: '2025 — 2026',
      type: 'Project Milestone',
      title: '[PROYEK & KOLABORASI] — Pengembangan Sistem & Antarmuka Aplikasi Web',
      organization: 'Proyek Akademik & Inisiatif Kolaboratif (Placeholder)',
      description:
        'Terlibat dalam perancangan analisis sistem, pembuatan prototipe UI/UX, serta pengembangan antarmuka web responsif untuk berbagai kebutuhan studi kasus.',
      contributionsAndLearnings: [
        'Menerjemahkan kebutuhan pengguna dan aturan proses bisnis menjadi diagram sistem serta wireframe antarmuka.',
        'Mengimplementasikan validasi data, filter dinamis, dan tata letak responsif yang ramah pengguna mobile.',
        'Berlatih bekerja secara iteratif berdasarkan umpan balik pengujian pengguna dan evaluasi rekan tim.',
      ],
      highlightTag: 'Applied Practice',
    },
    {
      id: 'journey-03',
      period: '2023 — Sekarang',
      type: 'Education',
      title: '[PENDIDIKAN / PROGRAM STUDI] —  Sistem Informasi',
      organization: '[UNIVERSITAS BINA SARANA INFORMATIKA PONTIANAK]',
      description:
        'Menempuh pendidikan formal dengan fokus pada pengembangan perangkat lunak, analisis sistem informasi, interaksi manusia-komputer, dan rekayasa web.',
      contributionsAndLearnings: [
        'Mempelajari fondasi algoritma, struktur data, rekayasa perangkat lunak, dan analisis perancangan sistem.',
        'Mendalami prinsip Human-Centered Design serta cara mengevaluasi kegunaan (usability) sebuah antarmuka.',
        'Aktif mengembangkan proyek praktikum yang menggabungkan ketepatan logika pemrograman dengan kenyamanan visual.',
      ],
      highlightTag: 'Academic Foundation',
    },
    {
      id: 'journey-04',
      period: '2022 — 2023',
      type: 'Role / Activity',
      title: '[AWAL PERJALANAN] — Fondasi Desain Visual & Pemrograman Web Dasar',
      organization: 'Eksplorasi Mandiri & Komunitas Belajar',
      description:
        'Titik awal ketertarikan pada bagaimana sebuah halaman web dirancang dan dibangun dari nol menggunakan kode.',
      contributionsAndLearnings: [
        'Menguasai fondasi Semantic HTML, CSS modern (Flexbox & Grid), serta logika dasar JavaScript.',
        'Mempelajari prinsip dasar komposisi visual, tipografi, hierarki warna, dan penggunaan Figma.',
        'Menemukan passion di bidang Creative Technology yang menyatukan sisi estetika dan sisi logika.',
      ],
      highlightTag: 'Where It Started',
    },
  ],
};
