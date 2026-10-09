export type ProjectCategory =
  | "ecommerce"
  | "company-profile"
  | "fnb"
  | "immersive"
  | "educational"
  | "tools";

export type Localized = { en: string; id: string };

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  domain: string;
  /** "offline" when the deployment no longer responds; the site is not linked. */
  status: "live" | "offline";
  featured: boolean;
  highlight?: Localized;
}

export const categoryOrder: ProjectCategory[] = [
  "ecommerce",
  "company-profile",
  "fnb",
  "immersive",
  "educational",
  "tools",
];

export const categories: Record<ProjectCategory, Localized> = {
  ecommerce: { en: "E-commerce & Catalog", id: "E-commerce & Katalog" },
  "company-profile": { en: "Company Profile", id: "Profil Perusahaan" },
  fnb: { en: "Food, Beverage & Hospitality", id: "Kuliner & Hospitalitas" },
  immersive: { en: "Immersive & 3D", id: "Imersif & 3D" },
  educational: { en: "Educational Product", id: "Produk Edukasi" },
  tools: { en: "Tools & Web Apps", id: "Alat & Aplikasi Web" },
};

export const projects: Project[] = [
  {
    slug: "wana-regal-furniture",
    name: "Wana Regal Furniture",
    category: "company-profile",
    domain: "wanaregalfurniture.vercel.app",
    status: "live",
    featured: true,
    highlight: {
      en: "A bilingual English and Indonesian profile for a Jepara furniture workshop, with a production process story, gallery lightbox and testimonials.",
      id: "Profil dwibahasa Inggris dan Indonesia untuk bengkel furnitur di Jepara, dengan cerita proses produksi, lightbox galeri, dan testimoni.",
    },
  },
  {
    slug: "dhistracker",
    name: "DhisTracker",
    category: "tools",
    domain: "dhistracker.vercel.app",
    status: "live",
    featured: true,
    highlight: {
      en: "A wallet tracker for Solana, Base, Ethereum and BSC that shows holdings, average buy price, realised and unrealised PnL, and swap history.",
      id: "Pelacak wallet untuk Solana, Base, Ethereum, dan BSC yang menampilkan aset, harga beli rata-rata, PnL terealisasi dan belum terealisasi, serta riwayat swap.",
    },
  },
  {
    slug: "ezbloc",
    name: "EZBloc",
    category: "educational",
    domain: "ezbloc.vercel.app",
    status: "live",
    featured: true,
    highlight: {
      en: "A hands-on blockchain lesson with interactive, state-driven steps built on the Web Crypto API.",
      id: "Materi blockchain praktik langsung dengan langkah interaktif berbasis state, dibangun di atas Web Crypto API.",
    },
  },
  {
    slug: "tukangkebon",
    name: "Tukangkebon",
    category: "ecommerce",
    domain: "tukangkebon.vercel.app",
    status: "live",
    featured: true,
    highlight: {
      en: "A catalog of aquascape plants with filter and category logic for browsing the collection.",
      id: "Katalog tanaman aquascape dengan logika filter dan kategori untuk menelusuri koleksi.",
    },
  },
  {
    slug: "inti-semikonduktor-nusantara",
    name: "Inti Semikonduktor Nusantara",
    category: "company-profile",
    domain: "inti-semikonduktor-nusantara.vercel.app",
    status: "live",
    featured: true,
    highlight: {
      en: "A profile for a fictional chip maker, with product specification tables, a careers CV dialog and English and Indonesian content kept in sync by a script.",
      id: "Profil untuk produsen chip fiktif, dengan tabel spesifikasi produk, dialog pengiriman CV, dan konten bahasa Inggris dan Indonesia yang dijaga sinkron oleh skrip.",
    },
  },
  {
    slug: "valea-tirta-nusantara",
    name: "Valea Tirta Nusantara",
    category: "immersive",
    domain: "valea-blue.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "An immersive company profile built with Three.js, Framer Motion and Lenis smooth scrolling.",
      id: "Profil perusahaan imersif yang dibangun dengan Three.js, Framer Motion, dan smooth scrolling Lenis.",
    },
  },
  {
    slug: "cru-cacao",
    name: "Cru Cacao",
    category: "fnb",
    domain: "cru-cacao.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A single-origin chocolate bakery whose home page tells a four-chapter story, from bean to finished cake.",
      id: "Bakery cokelat single-origin yang berandanya bercerita dalam empat bab, dari biji kakao hingga kue jadi.",
    },
  },
  {
    slug: "mina-rizki-barokah",
    name: "Mina Rizki Barokah",
    category: "ecommerce",
    domain: "minarizkibarokah.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A 657-product farm supply and pet shop catalog with a cart, delivery or pickup options, WhatsApp checkout and an admin price editor.",
      id: "Katalog 657 produk toko saprotan dan pet shop dengan keranjang, pilihan antar atau ambil, checkout via WhatsApp, dan editor harga untuk admin.",
    },
  },
  {
    slug: "dapur-mamaza",
    name: "Dapur Mamaza",
    category: "fnb",
    domain: "dapurmamaza.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A bilingual site for a home kitchen in Serpong, with a menu, cart and WhatsApp ordering.",
      id: "Situs dwibahasa untuk dapur rumahan di Serpong, dengan menu, keranjang, dan pemesanan via WhatsApp.",
    },
  },
  {
    slug: "gidot-agency",
    name: "Gidot Agency",
    category: "company-profile",
    domain: "gidotagency.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "An agency site offering websites, SEO, advertising and social media services to small businesses, rebranded from Versa Digital.",
      id: "Situs agensi yang menawarkan jasa website, SEO, iklan, dan media sosial untuk UMKM, hasil rebrand dari Versa Digital.",
    },
  },
  {
    slug: "kilau-rasa-nusantara",
    name: "Kilau Rasa Nusantara",
    category: "company-profile",
    domain: "kilau-rasa-nusantara.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A company profile for Kilau, a concept instant food brand, covering products, quality and where to buy.",
      id: "Profil perusahaan untuk Kilau, brand makanan instan konsep, mencakup produk, kualitas, dan lokasi pembelian.",
    },
  },
  {
    slug: "adikarya-cement",
    name: "Adikarya Cement",
    category: "company-profile",
    domain: "adikaryacement.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A bilingual English and Indonesian company profile for a concept cement manufacturer.",
      id: "Profil perusahaan dwibahasa Inggris dan Indonesia untuk produsen semen konsep.",
    },
  },
  {
    slug: "toko-bola-mang-yayat",
    name: "Toko Bola Mang Yayat",
    category: "ecommerce",
    domain: "tokobolamangyayat.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A football gear shop in Tangerang with a product catalog and custom jersey ordering.",
      id: "Toko perlengkapan sepak bola di Tangerang dengan katalog produk dan pemesanan jersey custom.",
    },
  },
  {
    slug: "trans-horizon-logistics",
    name: "Trans Horizon Logistics",
    category: "company-profile",
    domain: "transhorizonlogistics.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A logistics company profile presenting services, the global network, and fleet and containers.",
      id: "Profil perusahaan logistik yang menampilkan layanan, jaringan global, serta armada dan kontainer.",
    },
  },
  {
    slug: "cliqo-household",
    name: "Cliqo Household",
    category: "company-profile",
    domain: "cliqo-household.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A brand site for household containers, kitchenware and storage products.",
      id: "Situs brand untuk produk wadah, peralatan dapur, dan penyimpanan rumah tangga.",
    },
  },
  {
    slug: "nomina-motion-co",
    name: "Nomina Motion Co.",
    category: "company-profile",
    domain: "nomina-motion-co.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A studio site for product photography and videography, built around the portfolio.",
      id: "Situs studio fotografi dan videografi produk, disusun di sekitar portofolionya.",
    },
  },
  {
    slug: "literally-warkop",
    name: "Literally Warkop",
    category: "fnb",
    domain: "literally-warkop.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A bilingual site for a concept coffee stall in South Jakarta, built with Framer Motion and next-intl.",
      id: "Situs dwibahasa untuk warkop konsep di Jakarta Selatan, dibangun dengan Framer Motion dan next-intl.",
    },
  },
  {
    slug: "mister-water",
    name: "Mister Water",
    category: "ecommerce",
    domain: "mister-water.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A refill drinking-water depot in Cikupa, Tangerang, with a shop, cart and delivery ordering.",
      id: "Depo air minum isi ulang di Cikupa, Tangerang, dengan toko, keranjang, dan pemesanan antar.",
    },
  },
  {
    slug: "solvara-chemicals",
    name: "Solvara Chemicals",
    category: "company-profile",
    domain: "solvara-chemicals.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A fictional B2B chemicals manufacturer with 16 product pages, a quote-led flow and no cart or prices.",
      id: "Produsen bahan kimia B2B fiktif dengan 16 halaman produk dan alur permintaan penawaran tanpa keranjang atau harga.",
    },
  },
  {
    slug: "kawa-roasters",
    name: "Kawa Roasters",
    category: "company-profile",
    domain: "kawa-roasters.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A concept specialty coffee roastery in Bandung selling wholesale to cafes, with a quote request form.",
      id: "Konsep roastery kopi spesialti di Bandung yang menjual grosir ke kafe, dengan formulir permintaan penawaran.",
    },
  },
  {
    slug: "badot-ngacir-store",
    name: "Badot Ngacir Store",
    category: "ecommerce",
    domain: "badot-ngacir-store.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A fictional running store with 80 products, a working cart, a simulated checkout and a bilingual blog.",
      id: "Toko lari fiktif dengan 80 produk, keranjang yang berfungsi, checkout simulasi, dan blog dwibahasa.",
    },
  },
  {
    slug: "auvelle",
    name: "Auvelle",
    category: "ecommerce",
    domain: "auvelle-psi.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A skincare manufacturer and brand in one site: private label and OEM enquiries on one side, an eleven-item shop with an order-request checkout on the other.",
      id: "Situs produsen sekaligus brand skincare: permintaan private label dan OEM di satu sisi, toko sebelas item dengan checkout permintaan pesanan di sisi lain.",
    },
  },
  {
    slug: "kadu-developer",
    name: "Kadu Developer",
    category: "company-profile",
    domain: "kadu-developer.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A fictional indie game studio site with eight games, a devlog and a press kit, built around a durian mascot and heavy scroll motion.",
      id: "Situs studio game indie fiktif dengan delapan game, devlog, dan press kit, dibangun di sekitar maskot durian dan motion scroll yang kuat.",
    },
  },
  {
    slug: "tenuva-textiles",
    name: "Tenuva Textiles",
    category: "company-profile",
    domain: "tenuva.vercel.app",
    status: "live",
    featured: false,
    highlight: {
      en: "A fictional B2B textile manufacturer with sixteen fabric pages and swatch-led enquiries, with no prices, cart or checkout.",
      id: "Produsen tekstil B2B fiktif dengan enam belas halaman kain dan permintaan yang dimulai dari swatch, tanpa harga, keranjang, atau checkout.",
    },
  },
  {
    slug: "floryn",
    name: "Floryn",
    category: "ecommerce",
    domain: "floryn-one.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "mr-udin",
    name: "Mr. Udin",
    category: "ecommerce",
    domain: "tokobuahmrudin.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "cakra-radial-indonesia",
    name: "Cakra Radial Indonesia",
    category: "company-profile",
    domain: "cakra-radial-indonesia.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "shinwa-electric",
    name: "Shinwa Electric",
    category: "company-profile",
    domain: "shinwaelectric.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "nutrifood",
    name: "Nutrifood",
    category: "company-profile",
    domain: "nutrifood-ten.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "sinar-kertas-abadi",
    name: "Sinar Kertas Abadi",
    category: "company-profile",
    domain: "sinarkertasabadi.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "linen-and-brew",
    name: "Linen & Brew",
    category: "fnb",
    domain: "linen-and-brew.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "rossy-pink",
    name: "Rossy Pink",
    category: "fnb",
    domain: "rossypink.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "the-marrow",
    name: "The Marrow",
    category: "fnb",
    domain: "themarrow-flame.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "deskdrip",
    name: "DeskDrip",
    category: "fnb",
    domain: "deskdrip.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "warsun-bu-euis",
    name: "Warsun Bu Euis",
    category: "fnb",
    domain: "warsunbueuis.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "toko-buku-pak-joko",
    name: "Toko Buku Pak Joko",
    category: "fnb",
    domain: "tokobukupakjoko.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "pinegrove",
    name: "Pinegrove",
    category: "fnb",
    domain: "pinegrove-theta.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "barberbangarip",
    name: "BarberBangArip",
    category: "fnb",
    domain: "barberbangarip.vercel.app",
    status: "live",
    featured: false,
  },
  {
    slug: "kadu-coffeeshop",
    name: "Kadu Coffeeshop",
    category: "fnb",
    domain: "kadu-coffeshop.vercel.app",
    status: "live",
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

/** 1-based position in the archive, used for the "No. 05" editorial index. */
export function getProjectNumber(slug: string) {
  return projects.findIndex((p) => p.slug === slug) + 1;
}

export function countByCategory(category: ProjectCategory) {
  return projects.filter((p) => p.category === category).length;
}

export function padNumber(n: number) {
  return String(n).padStart(2, "0");
}
