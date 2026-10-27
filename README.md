# E-Portfolio Interaktif Profesional (2026 Edition)

Website e-portfolio personal bergaya **Modern Minimalist & Editorial Design** yang dirancang khusus untuk **Creative Technologist, UI/UX Designer, dan Frontend Engineer**.

## Fitur & Keunggulan Utama

1. **Identitas Visual Editorial**:
   - Palet warna: Off-white (`#F7F6F2`), Near-black (`#171717`), Muted gray (`#777777`), Card white (`#FFFFFF`), dan aksen terarah Electric Lime (`#C8F169`), dilengkapi mode gelap (**Dark Mode**) yang selaras.
   - Tipografi ekspresif: **Space Grotesk** (Heading), **DM Sans** (Body), dan **JetBrains Mono** (Metadata & Label).
2. **Pemisahan Data & Komponen UI (`src/data/portfolioData.ts`)**:
   - Seluruh placeholder (`[NAMA LENGKAP]`, `[PROFESI ATAU BIDANG MINAT]`, `[DESKRIPSI SINGKAT]`, `[FOTO PROFIL]`, `[DAFTAR PROYEK]`, `[SKILLS]`, `[EMAIL]`, `[LINKEDIN]`, `[GITHUB]`, `[SOCIAL MEDIA]`) ditempatkan dalam satu file terstruktur sehingga mudah diedit tanpa perlu mengubah kode komponen UI.
3. **Interaksi Nyata & Aksesibel**:
   - **Navigation Bar**: Indikator section aktif otomatis saat scroll (scroll-spy), smooth scrolling, Dark/Light mode toggle, dan menu mobile responsif.
   - **Hero Section**: Staggered text reveal, identitas utama, CTA interaktif, serta komposisi visual Creative Technologist dengan switcher disiplin (*Design*, *Code*, *System*).
   - **Selected Works & Case Study Modal**: Filter proyek per kategori secara real-time, tata letak asimetris, dan modal **Case Study** lengkap (8 bagian: *Overview*, *Problem Statement*, *Goals*, *Research*, *Process*, *Tools*, *Final Result*, *Lessons Learned*) dengan navigasi *Prev/Next* dan dukungan tombol `ESC`.
   - **Skills & Tools**: Dikelompokkan ke dalam *Design*, *Development*, *Tools*, dan *Soft Skills* dengan kartu ringkas interaktif tanpa bar persentase subjektif.
   - **My Learning Journey**: Timeline interaktif yang menampilkan kontribusi dan hal yang dipelajari.
   - **Contact Section**: Tombol *Copy Email* dengan umpan balik visual, serta formulir dengan validasi klien penuh dan alur transparan (*mailto* & *Copy Draft*).
   - **Motion & A11y**: Menghormati preferensi sistem `prefers-reduced-motion`, dilengkapi *skip-to-content* link dan custom cursor kontekstual di desktop.

## Cara Menjalankan Proyek

```bash
cd C:\Users\User\e-portfolio
npm run dev
```

Untuk membuat build produksi:

```bash
npm run build
npm run preview
```
