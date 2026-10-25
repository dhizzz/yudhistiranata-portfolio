// Case studies are written from each project's repository (README, dependencies, routes, commits)
// and its live site. Fictional brands are named as such; nothing here claims clients or results
// that the source material does not show.

import type { Localized } from "./projects";

export interface CaseStudy {
  context: Localized;
  approach: Localized;
  features: { en: string[]; id: string[] };
  outcome: Localized;
  stack: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
  "valea-tirta-nusantara": {
    context: {
      en: "VALEA is the mineral water brand of PT Valea Tirta Nusantara, sourced from mountain springs. The company needed a profile site that could win over two audiences at once: families choosing a drinking water, and shop owners deciding whether to become distributors.",
      id: "VALEA adalah brand air mineral milik PT Valea Tirta Nusantara yang bersumber dari mata air pegunungan. Perusahaan membutuhkan situs profil yang bisa meyakinkan dua kelompok sekaligus: keluarga yang memilih air minum, dan pemilik toko yang menimbang untuk menjadi distributor.",
    },
    approach: {
      en: "Water is hard to photograph in a way that feels alive, so I let it move instead. The hero is a Three.js water surface with a droplet field, paired with Lenis smooth scrolling and Framer Motion reveals. Because 3D can punish cheap phones, a device-tier hook detects low-end hardware and swaps the scene for a static fallback. The client's real product photos, staff photos and certification logos replaced placeholders wherever they existed.",
      id: "Air sulit difoto agar terasa hidup, jadi saya membuatnya bergerak. Hero-nya adalah permukaan air Three.js dengan partikel tetesan, dipadukan dengan smooth scrolling Lenis dan reveal Framer Motion. Karena 3D bisa memberatkan ponsel murah, sebuah hook mendeteksi perangkat low-end dan menggantinya dengan tampilan statis. Foto produk, foto karyawan, dan logo sertifikasi asli dari klien menggantikan placeholder di mana pun tersedia.",
    },
    features: {
      en: [
        "Seven pages: home, about, products, production process, certification, partners and contact",
        "Three.js water hero and droplet field, with an automatic static fallback on low-end devices",
        "Product lineup from 600 ml bottles to gallons, using the client's own product photography",
        "Production process timeline and a certification page for BPOM, SNI, Halal MUI and ISO 22000",
        "Distributor registration form and a contact page with a map",
      ],
      id: [
        "Tujuh halaman: beranda, tentang, produk, proses produksi, sertifikasi, mitra, dan kontak",
        "Hero air Three.js dan partikel tetesan, dengan fallback statis otomatis di perangkat low-end",
        "Lini produk dari botol 600 ml hingga galon, memakai foto produk milik klien",
        "Timeline proses produksi dan halaman sertifikasi BPOM, SNI, Halal MUI, dan ISO 22000",
        "Formulir pendaftaran distributor dan halaman kontak dengan peta",
      ],
    },
    outcome: {
      en: "The site is live as VALEA's company profile, with a clear path for both audiences: families can browse the products and see the certifications, and prospective partners can register as distributors directly.",
      id: "Situs ini aktif sebagai profil perusahaan VALEA, dengan jalur yang jelas untuk kedua audiens: keluarga dapat melihat produk dan sertifikasinya, dan calon mitra dapat langsung mendaftar sebagai distributor.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "React Three Fiber", "Framer Motion", "Lenis"],
  },

  ezbloc: {
    context: {
      en: "Most blockchain explainers open with theory and lose beginners by the second slide. EZBloc starts from the opposite idea: let people break a blockchain with their own hands first, then explain why it broke.",
      id: "Kebanyakan materi blockchain dibuka dengan teori dan kehilangan pemula di slide kedua. EZBloc berangkat dari ide sebaliknya: biarkan orang merusak blockchain dengan tangannya sendiri dulu, baru jelaskan kenapa itu rusak.",
    },
    approach: {
      en: "Every lesson is an interactive step rather than a page of text. Hashing runs for real in the browser with the Web Crypto API, so changing one character visibly breaks the chain. A mascot called Blocky appears after each experiment to explain what just happened, in casual Indonesian. I grew the course one chapter at a time, adding FAQ accordions and previous/next navigation as the steps multiplied.",
      id: "Setiap materi adalah langkah interaktif, bukan halaman teks. Hashing berjalan sungguhan di browser dengan Web Crypto API, sehingga mengubah satu karakter langsung merusak chain di depan mata. Maskot bernama Blocky muncul setelah setiap eksperimen untuk menjelaskan apa yang baru terjadi, dengan bahasa Indonesia santai. Saya mengembangkan kursusnya bab demi bab, lalu menambahkan FAQ dan navigasi sebelumnya/berikutnya seiring bertambahnya langkah.",
    },
    features: {
      en: [
        "Eleven chapters and 37 hands-on steps, from hashing and mining to DeFi, smart contracts and regulation",
        "Live SHA-256 hashing, RSA-OAEP encryption and key signing through the browser's Web Crypto API",
        "Mining, proof-of-work versus proof-of-stake and seed-phrase simulations",
        "Progress tracking saved in the browser, with no account required",
        "A digital completion certificate drawn on canvas, with its own QR code",
      ],
      id: [
        "Sebelas bab dan 37 langkah praktik, dari hashing dan mining hingga DeFi, smart contract, dan regulasi",
        "Hashing SHA-256, enkripsi RSA-OAEP, dan tanda tangan kunci secara langsung lewat Web Crypto API browser",
        "Simulasi mining, proof-of-work versus proof-of-stake, dan seed phrase",
        "Progres belajar tersimpan di browser, tanpa perlu akun",
        "Sertifikat kelulusan digital yang digambar di canvas, lengkap dengan QR code",
      ],
    },
    outcome: {
      en: "EZBloc is live as a complete course that a total beginner can finish in the browser, ending with a certificate generated in the browser. It is the project where interface state carries the teaching.",
      id: "EZBloc aktif sebagai kursus lengkap yang bisa diselesaikan pemula total langsung di browser, diakhiri dengan sertifikat yang dibuat langsung di browser. Ini proyek di mana state antarmuka menjadi alat mengajarnya.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Framer Motion", "Web Crypto API"],
  },

  tukangkebon: {
    context: {
      en: "Tukangkebon sells rare aquascape plants such as Eriocaulon, Bucephalandra and Cryptocoryne. Its buyers are collectors who care about exact species, placement in a layout and how demanding a plant is to keep alive.",
      id: "Tukangkebon menjual tanaman aquascape langka seperti Eriocaulon, Bucephalandra, dan Cryptocoryne. Pembelinya adalah kolektor yang peduli pada spesies yang tepat, posisi tanaman di layout, dan seberapa sulit tanaman itu dirawat.",
    },
    approach: {
      en: "I treated it as a specialist catalog rather than a generic shop. The product data came from a plant database spreadsheet and is organised by where a plant sits in a tank: foreground, midground, background, centerpiece and epiphyte. Each plant has a detail page with a gallery and care specifications, and a care guide section answers the questions collectors ask before they buy. Orders go through a cart that hands off to WhatsApp, which is how this kind of shop actually closes a sale.",
      id: "Saya memperlakukannya sebagai katalog spesialis, bukan toko umum. Data produk berasal dari spreadsheet database tanaman dan dikelompokkan berdasarkan posisinya di akuarium: foreground, midground, background, centerpiece, dan epiphyte. Setiap tanaman punya halaman detail dengan galeri dan spesifikasi perawatan, dan bagian care guide menjawab pertanyaan yang biasa diajukan kolektor sebelum membeli. Pesanan melewati keranjang yang diteruskan ke WhatsApp, cara toko seperti ini benar-benar menutup penjualan.",
    },
    features: {
      en: [
        "Catalog with category filters based on tank placement, plus equipment",
        "Product detail pages with galleries, rarity badges and care specifications",
        "Cart drawer that turns the order into a WhatsApp message",
        "Care guide articles and an FAQ written for collectors",
        "Indonesian and English versions of the product and guide content",
      ],
      id: [
        "Katalog dengan filter kategori berdasarkan posisi di akuarium, ditambah peralatan",
        "Halaman detail produk dengan galeri, badge kelangkaan, dan spesifikasi perawatan",
        "Keranjang yang mengubah pesanan menjadi pesan WhatsApp",
        "Artikel care guide dan FAQ yang ditulis untuk kolektor",
        "Versi bahasa Indonesia dan Inggris untuk konten produk dan panduan",
      ],
    },
    outcome: {
      en: "The shop is live with its catalog, care guide and WhatsApp ordering, presenting a niche product line with the detail its collectors expect.",
      id: "Toko ini aktif dengan katalog, care guide, dan pemesanan via WhatsApp, menampilkan lini produk niche dengan detail yang diharapkan para kolektornya.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },

  "wana-regal-furniture": {
    context: {
      en: "PT Wana Regal Furniture makes classic, carved furniture in Jepara and presents itself as a workshop active since 1998. Its site had to feel as considered as the furniture, and serve buyers in both English and Indonesian.",
      id: "PT Wana Regal Furniture membuat furnitur klasik berukir di Jepara dan memperkenalkan diri sebagai bengkel yang aktif sejak 1998. Situsnya harus terasa sepadan dengan furniturnya, dan melayani pembeli dalam bahasa Inggris maupun Indonesia.",
    },
    approach: {
      en: "I built it as a React and Vite single-page app with React Router, keeping every line of copy in one bilingual content file so both languages stay in step. The company's official emblem was cleaned into a transparent logo. Motion is kept to what suits a heritage brand: scroll reveals, a slow hero parallax and counters on the about page.",
      id: "Saya membangunnya sebagai single-page app React dan Vite dengan React Router, dan menyimpan seluruh teks dalam satu file konten dwibahasa agar kedua bahasa selalu sejalan. Emblem resmi perusahaan dirapikan menjadi logo transparan. Motion dibatasi pada yang cocok untuk brand heritage: reveal saat scroll, parallax hero yang pelan, dan counter di halaman tentang.",
    },
    features: {
      en: [
        "Seven pages: home, products, production process, gallery, about, testimonials and contact",
        "Full English and Indonesian versions with a language toggle",
        "Gallery lightbox and a testimonials carousel",
        "Production process page that walks through the workshop's steps",
        "Contact form with front-end validation",
      ],
      id: [
        "Tujuh halaman: beranda, produk, proses produksi, galeri, tentang, testimoni, dan kontak",
        "Versi bahasa Inggris dan Indonesia lengkap dengan toggle bahasa",
        "Lightbox galeri dan carousel testimoni",
        "Halaman proses produksi yang menelusuri tahapan kerja bengkel",
        "Formulir kontak dengan validasi di sisi front-end",
      ],
    },
    outcome: {
      en: "The profile is live in both languages, with every line of copy managed from a single bilingual content file.",
      id: "Profil ini aktif dalam dua bahasa, dengan seluruh teks dikelola dari satu file konten dwibahasa.",
    },
    stack: ["React", "Vite", "React Router", "Framer Motion", "Swiper"],
  },

  "cru-cacao": {
    context: {
      en: "Cru Cacao is a single-origin chocolate bakery selling cakes, bonbons and gift boxes. The brand's argument is that chocolate deserves the same respect as wine, so the site had to tell a story before it showed a price.",
      id: "Cru Cacao adalah bakery cokelat single-origin yang menjual kue, bonbon, dan gift box. Argumen brand-nya adalah cokelat layak dihargai seperti wine, jadi situsnya harus bercerita dulu sebelum menampilkan harga.",
    },
    approach: {
      en: "I structured the home page like a short film. After an opening statement, a four-chapter journey follows a bean from its origin in Ecuador to the harvest, the kitchen and the hand finish. Only then do the signature products appear, followed by the brand philosophy and a note from the founder. The site runs on next-intl with locale routes, so every page exists in English and Indonesian.",
      id: "Saya menyusun beranda seperti film pendek. Setelah pernyataan pembuka, perjalanan empat bab mengikuti biji kakao dari asalnya di Ekuador ke panen, dapur, dan sentuhan akhir. Baru setelah itu produk andalan muncul, diikuti filosofi brand dan catatan dari pendirinya. Situs ini memakai next-intl dengan route per bahasa, sehingga setiap halaman tersedia dalam bahasa Inggris dan Indonesia.",
    },
    features: {
      en: [
        "A four-chapter 'journey of a bean' section that carries the brand story",
        "Menu with product detail modals across cakes, bonbons, gift boxes and seasonal items",
        "Order form and FAQ on the contact page",
        "English and Indonesian locale routes with a language switcher",
      ],
      id: [
        "Bagian 'perjalanan sebutir biji' empat bab yang membawa cerita brand",
        "Menu dengan modal detail produk untuk kue, bonbon, gift box, dan menu musiman",
        "Formulir pemesanan dan FAQ di halaman kontak",
        "Route bahasa Inggris dan Indonesia dengan pengalih bahasa",
      ],
    },
    outcome: {
      en: "The site is live and reads as a story first and a shop second, which is exactly the order the brand asked for.",
      id: "Situs ini aktif dan terbaca sebagai cerita terlebih dahulu, baru kemudian toko, persis urutan yang diinginkan brand-nya.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl"],
  },

  "mina-rizki-barokah": {
    context: {
      en: "Mina Rizki Barokah is a farm supply and pet shop in Tangerang that sells more than 650 products, from animal medicine and feed to pesticides, seeds and tools. Prices change often, and the owner needed to update them without calling a developer.",
      id: "Mina Rizki Barokah adalah toko saprotan dan pet shop di Tangerang yang menjual lebih dari 650 produk, dari obat hewan dan pakan hingga pestisida, benih, dan alat. Harganya sering berubah, dan pemilik toko perlu memperbaruinya tanpa harus menghubungi developer.",
    },
    approach: {
      en: "I generated the catalog from the shop's own product spreadsheet into six categories, with search and pagination so a long list stays usable on a phone. Prices live in Supabase and are edited through a password-protected admin dashboard; the database is locked with row-level security so only the server can read or write it. Ordering avoids anything the shop cannot support: there is no online payment. Customers build a cart, choose store pickup or delivery to an address, pick cash at the store or bank transfer, and check out as a pre-filled WhatsApp message. The site says plainly that availability, shipping and the final total are confirmed on WhatsApp.",
      id: "Saya membangun katalog dari spreadsheet produk milik toko ke dalam enam kategori, dengan pencarian dan paginasi agar daftar panjang tetap nyaman di ponsel. Harga disimpan di Supabase dan diubah lewat dashboard admin berpassword; database dikunci dengan row-level security sehingga hanya server yang bisa membaca atau menulisnya. Pemesanan menghindari apa pun yang tidak bisa didukung toko: tidak ada pembayaran online. Pelanggan menyusun keranjang, memilih ambil di toko atau diantar ke alamat, memilih bayar tunai di toko atau transfer bank, lalu checkout sebagai pesan WhatsApp yang sudah terisi. Situsnya menyatakan dengan jelas bahwa ketersediaan, ongkir, dan total akhir dikonfirmasi lewat WhatsApp.",
    },
    features: {
      en: [
        "Catalog of 657 products in six categories, with search and pagination",
        "Admin login and a price editor backed by Supabase",
        "Cart with quantity controls, pickup or delivery, cash or bank transfer, and WhatsApp checkout",
        "Indonesian and English versions, plus a sitemap and social preview images",
      ],
      id: [
        "Katalog 657 produk dalam enam kategori, dengan pencarian dan paginasi",
        "Login admin dan editor harga yang terhubung ke Supabase",
        "Keranjang dengan pengatur jumlah, pilihan ambil atau antar, tunai atau transfer, dan checkout via WhatsApp",
        "Versi bahasa Indonesia dan Inggris, ditambah sitemap dan gambar pratinjau media sosial",
      ],
    },
    outcome: {
      en: "The catalog is live with its own logo and store details, and the shop manages its own prices from the admin page. It is the first project in this archive with a real database and an authenticated back office.",
      id: "Katalognya aktif dengan logo dan detail tokonya sendiri, dan toko mengelola harganya sendiri dari halaman admin. Ini proyek pertama di arsip ini yang memakai database sungguhan dan back office dengan autentikasi.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "next-intl", "Framer Motion"],
  },

  "dapur-mamaza": {
    context: {
      en: "Dapur Mamaza is a home kitchen in Serpong, South Tangerang, known for its biryani rice bowls starting at an affordable price. Most of its orders already come through GoFood, GrabFood and ShopeeFood, so the site's job is to introduce the kitchen and point people to the right place to order.",
      id: "Dapur Mamaza adalah dapur rumahan di Serpong, Tangerang Selatan, yang dikenal dengan nasi biryani berharga terjangkau. Sebagian besar pesanannya sudah datang dari GoFood, GrabFood, dan ShopeeFood, jadi tugas situsnya adalah memperkenalkan dapur ini dan mengarahkan orang ke tempat pemesanan yang tepat.",
    },
    approach: {
      en: "I kept the page warm and simple, led by the signature Nasi Biryani Perintis. The menu reflects the kitchen's five actual biryani items, and a small cart lets visitors put an order together before sending it on WhatsApp. A dedicated 'how to order' page lists every channel side by side.",
      id: "Saya membuat halamannya hangat dan sederhana, dibuka dengan Nasi Biryani Perintis sebagai menu andalan. Menunya memuat lima menu biryani yang sebenarnya, dan keranjang kecil memungkinkan pengunjung menyusun pesanan sebelum mengirimnya lewat WhatsApp. Halaman 'cara order' menampilkan semua kanal pemesanan berdampingan.",
    },
    features: {
      en: [
        "Menu of the kitchen's biryani items with a cart",
        "Order handoff to WhatsApp, plus links to GoFood, GrabFood and ShopeeFood",
        "About, gallery, how-to-order and contact pages",
        "Indonesian and English versions with a language toggle",
      ],
      id: [
        "Menu biryani milik dapur dengan keranjang belanja",
        "Pesanan diteruskan ke WhatsApp, ditambah tautan ke GoFood, GrabFood, dan ShopeeFood",
        "Halaman tentang, galeri, cara order, dan kontak",
        "Versi bahasa Indonesia dan Inggris dengan toggle bahasa",
      ],
    },
    outcome: {
      en: "The site is live and gives a small kitchen a proper home online, with every ordering channel one tap away.",
      id: "Situs ini aktif dan memberi dapur kecil ini rumah yang layak di internet, dengan setiap kanal pemesanan hanya satu ketukan jauhnya.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion"],
  },

  "gidot-agency": {
    context: {
      en: "Gidot Agency, first built under the name Versa Digital, offers websites, SEO, digital ads and social media management to Indonesian small businesses (UMKM). Its audience is owners who are new to digital marketing and wary of agencies that talk down to them.",
      id: "Gidot Agency, yang awalnya dibangun dengan nama Versa Digital, menawarkan jasa website, SEO, iklan digital, dan manajemen media sosial untuk UMKM Indonesia. Audiensnya adalah pemilik usaha yang baru mengenal pemasaran digital dan waspada terhadap agensi yang terkesan menggurui.",
    },
    approach: {
      en: "The copy speaks the owner's language and every call to action leads to a free consultation on WhatsApp rather than a long form. I organised the site around the four services, followed by packages, a portfolio of sample designs and an FAQ. Content lives in JSON and dictionary files so services and portfolio items can be updated without touching components. That paid off when the agency rebranded: the change came down to new colour tokens for a bolder violet and lime look, the brand copy in the two dictionary files and the supplied logo artwork. No page had to be rebuilt.",
      id: "Teksnya memakai bahasa pemilik usaha, dan setiap ajakan bertindak mengarah ke konsultasi gratis via WhatsApp, bukan formulir panjang. Saya menyusun situsnya di sekitar empat layanan, diikuti paket, portofolio contoh desain, dan FAQ. Konten disimpan dalam file JSON dan kamus agar layanan dan portofolio bisa diperbarui tanpa menyentuh komponen. Keputusan itu terbayar saat agensi ini berganti nama: perubahannya cukup berupa token warna baru untuk tampilan ungu dan lime yang lebih berani, teks brand di dua file kamus, dan logo yang disediakan. Tidak ada halaman yang perlu dibangun ulang.",
    },
    features: {
      en: [
        "Seven pages: home, services, portfolio, testimonials, about, FAQ and contact",
        "Service packages presented as comparable cards",
        "WhatsApp consultation buttons throughout, plus a contact form",
        "Indonesian and English versions",
        "A full rebrand from Versa Digital to Gidot Agency through theme tokens and content files",
      ],
      id: [
        "Tujuh halaman: beranda, layanan, portofolio, testimoni, tentang, FAQ, dan kontak",
        "Paket layanan yang disajikan sebagai kartu yang mudah dibandingkan",
        "Tombol konsultasi WhatsApp di seluruh halaman, ditambah formulir kontak",
        "Versi bahasa Indonesia dan Inggris",
        "Rebrand penuh dari Versa Digital ke Gidot Agency lewat token tema dan file konten",
      ],
    },
    outcome: {
      en: "The site is live as Gidot Agency, with a single, low-pressure next step on every page and a structure that already survived one full rebrand.",
      id: "Situs ini aktif sebagai Gidot Agency, dengan satu langkah lanjut yang ringan di setiap halamannya dan struktur yang sudah teruji melewati satu kali rebrand penuh.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },

  dhistracker: {
    context: {
      en: "Crypto traders often want to know how a wallet has actually performed: what it holds, what it paid on average and whether it is up or down. Most tools either ask you to connect a wallet or hide how their numbers are calculated. DhisTracker takes a public address and shows its work.",
      id: "Trader kripto sering ingin tahu performa sebenarnya sebuah wallet: apa yang dipegang, berapa harga beli rata-ratanya, dan apakah sedang untung atau rugi. Kebanyakan alat meminta Anda menghubungkan wallet atau menyembunyikan cara angkanya dihitung. DhisTracker cukup memakai alamat publik dan menunjukkan cara kerjanya.",
    },
    approach: {
      en: "I started with Solana and later extended the same pipeline to Base, Ethereum and BSC. The hardest part was recognising trades: data providers often mislabel swaps, so trades are detected from how tokens actually flowed rather than from their labels. Profit and loss use average cost, where every buy moves the average and every sell realises against it. Where data runs out, the dashboard says so instead of guessing, and the calculation logic is covered by unit tests.",
      id: "Saya memulai dari Solana lalu memperluas pipeline yang sama ke Base, Ethereum, dan BSC. Bagian tersulitnya adalah mengenali trade: penyedia data sering salah memberi label swap, jadi trade dikenali dari arus token yang sebenarnya, bukan dari labelnya. Untung rugi dihitung dengan metode average cost, di mana setiap pembelian menggeser rata-rata dan setiap penjualan direalisasikan terhadapnya. Ketika data tidak cukup, dashboard menyatakannya alih-alih menebak, dan logika perhitungannya dilindungi unit test.",
    },
    features: {
      en: [
        "Wallet lookup on Solana, Base, Ethereum and BSC with no sign-in",
        "Holdings, average buy price, realised and unrealised PnL, and win rate",
        "Charts for allocation, top movers and 30-day portfolio value",
        "Bookmarked wallets, CSV export, light and dark themes, English and Indonesian",
        "Server-side API routes with caching, retries and rate limiting, so API keys never reach the browser",
      ],
      id: [
        "Pencarian wallet di Solana, Base, Ethereum, dan BSC tanpa login",
        "Aset, harga beli rata-rata, PnL terealisasi dan belum terealisasi, serta win rate",
        "Grafik alokasi, token dengan pergerakan terbesar, dan nilai portofolio 30 hari",
        "Bookmark wallet, ekspor CSV, tema terang dan gelap, bahasa Inggris dan Indonesia",
        "API route di sisi server dengan cache, retry, dan rate limit, sehingga API key tidak pernah sampai ke browser",
      ],
    },
    outcome: {
      en: "DhisTracker is live and works on any public wallet across four networks. It is the most data-heavy project in this archive, and the one where I documented every calculation and limitation openly.",
      id: "DhisTracker aktif dan bisa dipakai untuk wallet publik mana pun di empat jaringan. Ini proyek dengan data paling berat di arsip ini, dan proyek di mana saya mendokumentasikan setiap perhitungan serta batasannya secara terbuka.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Recharts", "Zustand", "next-intl", "Vitest"],
  },

  "kilau-rasa-nusantara": {
    context: {
      en: "Kilau is a fictional instant food and beverage brand that I created as a portfolio project. The goal was to build the kind of corporate site a national FMCG company would run: products, food safety, sustainability, store locations and news.",
      id: "Kilau adalah brand makanan dan minuman instan fiktif yang saya buat sebagai proyek portofolio. Tujuannya membangun situs korporat seperti yang dimiliki perusahaan FMCG nasional: produk, keamanan pangan, keberlanjutan, lokasi toko, dan berita.",
    },
    approach: {
      en: "I followed the brief's palette but added two darker greens after measuring that the original pairs failed WCAG AA contrast. The logo was rebuilt from the brief's written description because the file was missing. Because Kilau is not a real company, I drew original seal artwork instead of reproducing the real BPOM and Halal marks, which would have been a false compliance claim. Every string lives in typed English and Indonesian content files that must match in shape.",
      id: "Saya mengikuti palet dari brief, tetapi menambahkan dua warna hijau yang lebih gelap setelah mengukur bahwa pasangan warna aslinya tidak lolos kontras WCAG AA. Logonya dibangun ulang dari deskripsi tertulis di brief karena filenya tidak tersedia. Karena Kilau bukan perusahaan sungguhan, saya menggambar segel orisinal alih-alih meniru logo BPOM dan Halal asli, yang akan menjadi klaim sertifikasi palsu. Setiap teks disimpan dalam file konten bahasa Inggris dan Indonesia bertipe yang strukturnya harus sama.",
    },
    features: {
      en: [
        "Nine routes: home, about, products, quality, sustainability, where to buy, news, news articles and contact",
        "An Indonesia map on the store locator page",
        "Product range across four categories and more than thirty varieties",
        "Contact form built with React Hook Form",
        "English and Indonesian toggle, sitemap and social previews",
      ],
      id: [
        "Sembilan route: beranda, tentang, produk, kualitas, keberlanjutan, lokasi pembelian, berita, artikel, dan kontak",
        "Peta Indonesia di halaman pencari toko",
        "Rangkaian produk dalam empat kategori dan lebih dari tiga puluh varian",
        "Formulir kontak yang dibangun dengan React Hook Form",
        "Toggle bahasa Inggris dan Indonesia, sitemap, dan pratinjau media sosial",
      ],
    },
    outcome: {
      en: "The site is live as a complete corporate profile for a brand that does not exist, and it shows the judgement calls behind a credible one, from contrast fixes to not faking certifications.",
      id: "Situs ini aktif sebagai profil korporat lengkap untuk brand yang tidak ada, dan menunjukkan pertimbangan di balik situs yang kredibel, dari perbaikan kontras hingga tidak memalsukan sertifikasi.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form", "Embla Carousel"],
  },

  "inti-semikonduktor-nusantara": {
    context: {
      en: "Inti Semiconductor is a fictional Indonesian chip manufacturer, built as a portfolio project. The challenge was to make a technical, business-to-business company readable to buyers, engineers and job seekers alike.",
      id: "Inti Semiconductor adalah produsen chip Indonesia fiktif yang dibangun sebagai proyek portofolio. Tantangannya adalah membuat perusahaan B2B yang teknis tetap mudah dipahami oleh pembeli, insinyur, maupun pencari kerja.",
    },
    approach: {
      en: "The visual language borrows from the product itself: a circuit-trace background, hexagonal photo frames and a process-node chart. Product lines are presented with spec tables for engineers, while the home page stays at the level of sectors and capabilities. I added automated checks that keep the English and Indonesian files identical in structure and block stray dashes from the copy.",
      id: "Bahasa visualnya meminjam dari produknya sendiri: latar jalur sirkuit, bingkai foto heksagonal, dan grafik process node. Lini produk disajikan dengan tabel spesifikasi untuk insinyur, sementara beranda tetap di tingkat sektor dan kapabilitas. Saya menambahkan pengecekan otomatis yang menjaga struktur file bahasa Inggris dan Indonesia tetap identik serta mencegah tanda pisah yang tidak diinginkan di teks.",
    },
    features: {
      en: [
        "Eight pages including technology, quality, sustainability and careers",
        "Five product lines with specification tables",
        "Careers page with a CV submission dialog and a validated contact form",
        "Lenis smooth scrolling, tilt effects and an Indonesia map",
        "English and Indonesian content kept in sync by a script",
      ],
      id: [
        "Delapan halaman termasuk teknologi, kualitas, keberlanjutan, dan karier",
        "Lima lini produk dengan tabel spesifikasi",
        "Halaman karier dengan dialog pengiriman CV dan formulir kontak tervalidasi",
        "Smooth scrolling Lenis, efek tilt, dan peta Indonesia",
        "Konten bahasa Inggris dan Indonesia yang dijaga tetap sinkron oleh skrip",
      ],
    },
    outcome: {
      en: "The profile is live and presents a deeply technical company without losing a non-technical reader. Both forms tell visitors plainly that they are a demo.",
      id: "Profil ini aktif dan menampilkan perusahaan yang sangat teknis tanpa kehilangan pembaca awam. Kedua formulirnya memberi tahu pengunjung dengan jelas bahwa itu adalah demo.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis", "React Hook Form"],
  },

  "adikarya-cement": {
    context: {
      en: "Adikarya Cement, trading name of PT Semen Adikarya Mandiri, is a fictional cement manufacturer that I built as a portfolio project. Industrial companies like this sell to contractors and developers, who look for product specs, quality standards and whether supply can reach their site.",
      id: "Adikarya Cement, nama dagang PT Semen Adikarya Mandiri, adalah produsen semen fiktif yang saya bangun sebagai proyek portofolio. Perusahaan industri seperti ini menjual ke kontraktor dan pengembang, yang mencari spesifikasi produk, standar kualitas, dan apakah pasokan bisa menjangkau lokasi proyek mereka.",
    },
    approach: {
      en: "I answered those three questions in the page structure: products, quality and plants each have their own page, and the home page previews all three. A distribution map shows provincial reach, and an auto-scrolling strip carries the certifications. English copy is the source of the dictionary type, so the Indonesian version cannot drift out of sync.",
      id: "Saya menjawab tiga pertanyaan itu lewat struktur halaman: produk, kualitas, dan pabrik masing-masing punya halamannya sendiri, dan beranda menampilkan cuplikan ketiganya. Peta distribusi menunjukkan jangkauan per provinsi, dan strip yang bergulir otomatis menampilkan sertifikasi. Teks bahasa Inggris menjadi sumber tipe kamus, sehingga versi bahasa Indonesia tidak bisa keluar dari sinkron.",
    },
    features: {
      en: [
        "Eight pages plus news articles: products, quality, sustainability, plants, news and contact",
        "Cement range from OPC and PCC to PPC and white cement",
        "Distribution map and an auto-scrolling certification strip",
        "Bilingual English and Indonesian content with a typed dictionary",
        "Quote request form built with React Hook Form",
      ],
      id: [
        "Delapan halaman ditambah artikel berita: produk, kualitas, keberlanjutan, pabrik, berita, dan kontak",
        "Rangkaian semen dari OPC dan PCC hingga PPC dan semen putih",
        "Peta distribusi dan strip sertifikasi yang bergulir otomatis",
        "Konten dwibahasa Inggris dan Indonesia dengan kamus bertipe",
        "Formulir permintaan penawaran yang dibangun dengan React Hook Form",
      ],
    },
    outcome: {
      en: "The site is live as a full industrial company profile in two languages, organised around what a contractor needs to know before calling.",
      id: "Situs ini aktif sebagai profil perusahaan industri lengkap dalam dua bahasa, disusun berdasarkan apa yang perlu diketahui kontraktor sebelum menghubungi.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis", "Embla Carousel", "React Hook Form"],
  },

  "toko-bola-mang-yayat": {
    context: {
      en: "Toko Bola Mang Yayat is a portfolio project imagining a football and futsal gear shop in Tangerang that grew from selling boots to friends into a full store. Its customers are players and local teams who want gear and matching custom jerseys.",
      id: "Toko Bola Mang Yayat adalah proyek portofolio yang membayangkan toko perlengkapan sepak bola dan futsal di Tangerang yang tumbuh dari berjualan sepatu ke teman-teman menjadi toko lengkap. Pelanggannya adalah pemain dan tim lokal yang mencari perlengkapan serta jersey custom yang seragam.",
    },
    approach: {
      en: "The design is loud on purpose, with bold condensed type and a red diagonal that matches the tagline 'Main serius. Tampil garang.' Beyond the catalog, the key feature is a custom jersey builder: teams upload a logo, choose a fabric, fill in each player's name and number, and see an estimated price before the order continues on WhatsApp. A blog answers practical buying questions like choosing a ball size.",
      id: "Desainnya sengaja lantang, dengan huruf tebal yang rapat dan diagonal merah yang selaras dengan tagline 'Main serius. Tampil garang.' Selain katalog, fitur utamanya adalah pembuat jersey custom: tim mengunggah logo, memilih bahan, mengisi nama dan nomor tiap pemain, lalu melihat estimasi harga sebelum pesanan berlanjut di WhatsApp. Blog-nya menjawab pertanyaan praktis sebelum membeli, seperti memilih ukuran bola.",
    },
    features: {
      en: [
        "Catalog across boots, jerseys, balls and accessories, with product pages",
        "Custom jersey builder with logo upload, player roster and live price estimate",
        "Blog, FAQ, testimonials and about pages",
        "Indonesian and English versions",
      ],
      id: [
        "Katalog sepatu, jersey, bola, dan aksesoris, dengan halaman produk",
        "Pembuat jersey custom dengan unggah logo, daftar pemain, dan estimasi harga langsung",
        "Halaman blog, FAQ, testimoni, dan tentang",
        "Versi bahasa Indonesia dan Inggris",
      ],
    },
    outcome: {
      en: "The shop concept is live, and its jersey builder turns what is usually a long WhatsApp back-and-forth into a single structured order.",
      id: "Konsep toko ini aktif, dan pembuat jersey-nya mengubah percakapan WhatsApp yang biasanya panjang menjadi satu pesanan yang terstruktur.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion"],
  },

  "trans-horizon-logistics": {
    context: {
      en: "Trans Horizon Logistics is a fictional international container freight forwarder, built as a portfolio project. Freight buyers care about routes, reliability and who is accountable for their cargo, so the site needed to make a complex service feel straightforward.",
      id: "Trans Horizon Logistics adalah perusahaan freight forwarding kontainer internasional fiktif yang dibangun sebagai proyek portofolio. Pembeli jasa pengiriman peduli pada rute, keandalan, dan siapa yang bertanggung jawab atas kargonya, jadi situsnya harus membuat layanan yang rumit terasa sederhana.",
    },
    approach: {
      en: "I split the offer into five services that can be booked alone or together, and gave the trade lanes their own page with a world map. A shipment tracking widget and a quote form sit where a customer would look for them, both clearly front-end demos. Photography was added to every section afterwards, with credits recorded.",
      id: "Saya membagi layanannya menjadi lima jenis yang bisa dipesan terpisah atau sekaligus, dan memberi jalur perdagangan halamannya sendiri lengkap dengan peta dunia. Widget pelacakan pengiriman dan formulir penawaran ditempatkan di mana pelanggan biasa mencarinya, keduanya jelas merupakan demo front-end. Fotografi kemudian ditambahkan ke setiap bagian, dengan kredit yang dicatat.",
    },
    features: {
      en: [
        "Seven pages: home, about, services, global network, fleet and containers, insights and contact",
        "Five services from ocean freight to door-to-door delivery",
        "World map of trade lanes and a mock shipment tracking widget",
        "Quote form built with React Hook Form",
        "English and Indonesian toggle",
      ],
      id: [
        "Tujuh halaman: beranda, tentang, layanan, jaringan global, armada dan kontainer, insight, dan kontak",
        "Lima layanan dari ocean freight hingga pengiriman door-to-door",
        "Peta dunia jalur perdagangan dan widget pelacakan pengiriman tiruan",
        "Formulir penawaran yang dibangun dengan React Hook Form",
        "Toggle bahasa Inggris dan Indonesia",
      ],
    },
    outcome: {
      en: "The site is live and presents an end-to-end logistics offer in a form a first-time shipper can follow.",
      id: "Situs ini aktif dan menyajikan layanan logistik menyeluruh dalam bentuk yang bisa diikuti pengirim pemula.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form"],
  },

  "cliqo-household": {
    context: {
      en: "Cliqo Household is a fictional maker of food containers, kitchenware, storage and plastic furniture, created for my portfolio. Household plastics are bought on trust, so the site had to explain safety and durability without sounding like a lab report.",
      id: "Cliqo Household adalah produsen fiktif wadah makanan, peralatan dapur, penyimpanan, dan furnitur plastik yang saya buat untuk portofolio. Produk plastik rumah tangga dibeli karena kepercayaan, jadi situsnya harus menjelaskan keamanan dan ketahanan tanpa terdengar seperti laporan laboratorium.",
    },
    approach: {
      en: "The tagline 'Click. Store. Live easier.' sets a friendly tone, carried through soft colours and food photography. Products are grouped into four families, and a separate production process page walks through seven steps from raw resin to finished container, which is where the trust argument is made.",
      id: "Tagline 'Click. Store. Live easier.' membangun nada yang ramah, dibawa lewat warna lembut dan fotografi makanan. Produk dikelompokkan dalam empat keluarga, dan halaman proses produksi tersendiri menelusuri tujuh tahap dari resin mentah hingga wadah jadi, tempat argumen kepercayaan itu dibangun.",
    },
    features: {
      en: [
        "Seven pages: home, about, products, production process, quality and sustainability, gallery and contact",
        "Four product families presented on one catalog page",
        "Seven-step production process page",
        "Page transitions and scroll motion with Framer Motion",
      ],
      id: [
        "Tujuh halaman: beranda, tentang, produk, proses produksi, kualitas dan keberlanjutan, galeri, dan kontak",
        "Empat keluarga produk yang disajikan dalam satu halaman katalog",
        "Halaman proses produksi tujuh tahap",
        "Transisi halaman dan motion saat scroll dengan Framer Motion",
      ],
    },
    outcome: {
      en: "The profile is live and makes the case for an everyday product through process and quality rather than slogans.",
      id: "Profil ini aktif dan meyakinkan pengunjung tentang produk sehari-hari lewat proses dan kualitas, bukan slogan.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },

  "nomina-motion-co": {
    context: {
      en: "Nomina Motion Co. is a fictional product photography and videography studio, built as a portfolio project. A studio's site is its portfolio, so the work had to lead and the interface had to stay out of the way.",
      id: "Nomina Motion Co. adalah studio fotografi dan videografi produk fiktif yang dibangun sebagai proyek portofolio. Situs sebuah studio adalah portofolionya, jadi karyanya harus tampil paling depan dan antarmukanya tidak boleh mengganggu.",
    },
    approach: {
      en: "I went with a dark, cinematic look to match the tagline 'Every frame tells a story', using a serif and italic display face and slow Lenis scrolling. The services are split into stills, motion and model direction, and a process page explains how a shoot moves from brief to delivery. The contact form asks about the brand, the product and the mood, because the studio promises a concept rather than just a quote.",
      id: "Saya memilih tampilan gelap dan sinematik yang selaras dengan tagline 'Every frame tells a story', memakai huruf display serif dan italic serta scroll Lenis yang pelan. Layanannya dibagi menjadi foto, video, dan pengarahan model, dan halaman proses menjelaskan bagaimana sebuah sesi berjalan dari brief hingga pengiriman. Formulir kontaknya menanyakan brand, produk, dan suasana yang dicari, karena studio ini menjanjikan konsep, bukan sekadar penawaran harga.",
    },
    features: {
      en: [
        "Seven pages: home, about, services, portfolio, process, clients and contact",
        "Featured work on the home page and a full portfolio page",
        "Client marquee and count-up figures",
        "Brief-style contact form built with React Hook Form",
      ],
      id: [
        "Tujuh halaman: beranda, tentang, layanan, portofolio, proses, klien, dan kontak",
        "Karya unggulan di beranda dan halaman portofolio lengkap",
        "Marquee klien dan angka count-up",
        "Formulir kontak bergaya brief yang dibangun dengan React Hook Form",
      ],
    },
    outcome: {
      en: "The studio site is live and lets the imagery set the tone, with a contact flow designed around the creative brief.",
      id: "Situs studio ini aktif dan membiarkan visualnya membangun suasana, dengan alur kontak yang dirancang di sekitar brief kreatif.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis", "Embla Carousel", "React Hook Form"],
  },

  "literally-warkop": {
    context: {
      en: "Literally Warkop is a fictional South Jakarta coffee stall for the hybrid-work crowd, built as a personal portfolio project. The brand's voice is 'Jaksel' talk, where English and Indonesian share one sentence, so the language itself became part of the design.",
      id: "Literally Warkop adalah warkop fiktif di Jakarta Selatan untuk generasi kerja hybrid, dibangun sebagai proyek portofolio pribadi. Suara brand-nya adalah gaya bicara 'Jaksel', di mana bahasa Inggris dan Indonesia bercampur dalam satu kalimat, sehingga bahasanya sendiri menjadi bagian dari desain.",
    },
    approach: {
      en: "I wrote the copy in that voice and then built a full bilingual system around it with next-intl, with content collections such as the menu, events and blog stored as bilingual objects. The look is neon on dark, with Framer Motion micro-interactions. There is no payment gateway: every order, reservation, RSVP and membership signup opens a pre-filled WhatsApp message, which keeps the concept honest.",
      id: "Saya menulis teksnya dengan gaya itu, lalu membangun sistem dwibahasa lengkap dengan next-intl, dengan koleksi konten seperti menu, acara, dan blog disimpan sebagai objek dwibahasa. Tampilannya neon di atas latar gelap, dengan micro-interaction Framer Motion. Tidak ada payment gateway: setiap pesanan, reservasi, RSVP, dan pendaftaran membership membuka pesan WhatsApp yang sudah terisi, sehingga konsepnya tetap jujur.",
    },
    features: {
      en: [
        "Eleven pages including menu, locations, events, coworking, membership, merch and a blog",
        "English and Indonesian versions of every page and collection",
        "WhatsApp handoff for orders, reservations, event RSVPs and membership",
        "Neon micro-interactions and page transitions",
      ],
      id: [
        "Sebelas halaman termasuk menu, lokasi, acara, coworking, membership, merchandise, dan blog",
        "Versi bahasa Inggris dan Indonesia untuk setiap halaman dan koleksi",
        "Pesanan, reservasi, RSVP acara, dan membership diteruskan ke WhatsApp",
        "Micro-interaction neon dan transisi halaman",
      ],
    },
    outcome: {
      en: "The site is live and is the largest hospitality concept in this archive, showing how far a small brand can extend: coworking, memberships, events and merchandise, all in two languages.",
      id: "Situs ini aktif dan menjadi konsep hospitalitas terbesar di arsip ini, menunjukkan seberapa jauh brand kecil bisa berkembang: coworking, membership, acara, dan merchandise, semuanya dalam dua bahasa.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion"],
  },

  "mister-water": {
    context: {
      en: "Mister Water is a refill drinking-water depot in Cikupa, Tangerang, offering reverse osmosis and mineral water with delivery across the regency. Its customers are households who want water brought to the door without having to call and explain their order.",
      id: "Mister Water adalah depo air minum isi ulang di Cikupa, Tangerang, yang menyediakan air reverse osmosis dan mineral dengan layanan antar se-kabupaten. Pelanggannya adalah rumah tangga yang ingin air diantar ke rumah tanpa harus menelepon dan menjelaskan pesanan.",
    },
    approach: {
      en: "I built it as a small shop rather than a brochure. Customers choose between refilling their own gallon or buying a new sealed one, add items to a cart kept with Zustand and complete a checkout form. Product photos are served from local files so real photos could replace the placeholders, which they later did.",
      id: "Saya membangunnya sebagai toko kecil, bukan brosur. Pelanggan memilih antara isi ulang galon sendiri atau membeli galon baru tersegel, menambahkan produk ke keranjang yang dikelola dengan Zustand, lalu mengisi formulir checkout. Foto produk disajikan dari file lokal agar foto asli bisa menggantikan placeholder, dan itu kemudian dilakukan.",
    },
    features: {
      en: [
        "Shop with product pages for refills and new gallons",
        "Cart and checkout flow",
        "Ordering guide, testimonials, location and opening hours",
        "Promotional banner for free delivery and bundle offers",
        "Indonesian and English versions",
      ],
      id: [
        "Toko dengan halaman produk untuk isi ulang dan galon baru",
        "Keranjang dan alur checkout",
        "Panduan pemesanan, testimoni, lokasi, dan jam operasional",
        "Banner promo untuk gratis ongkir dan penawaran paket",
        "Versi bahasa Indonesia dan Inggris",
      ],
    },
    outcome: {
      en: "The depot's shop is live with real product photos, and customers can place a delivery order in a few taps.",
      id: "Toko depo ini aktif dengan foto produk asli, dan pelanggan bisa memesan antar dalam beberapa ketukan.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "next-intl", "Framer Motion"],
  },

  floryn: {
    context: {
      en: "Floryn makes handmade chenille flowers, bag charms and souvenirs in Citra Raya, Tangerang. Every piece is small and tactile, and many orders are custom, so the site had to show the craft up close and make special requests easy.",
      id: "Floryn membuat bunga chenille, bag charm, dan suvenir handmade di Citra Raya, Tangerang. Setiap produknya kecil dan penuh detail, dan banyak pesanan bersifat custom, jadi situsnya harus menampilkan kerajinannya dari dekat dan memudahkan permintaan khusus.",
    },
    approach: {
      en: "I kept the design soft and light so the products carry the colour. The catalog groups items by category with recommendations on the home page, and each product has its own page. A dedicated custom page collects the details of a special request, and the cart checks out through WhatsApp.",
      id: "Saya membuat desainnya lembut dan terang agar warna datang dari produknya. Katalog mengelompokkan produk per kategori dengan rekomendasi di beranda, dan setiap produk punya halamannya sendiri. Halaman custom khusus mengumpulkan detail permintaan, dan keranjang diselesaikan lewat WhatsApp.",
    },
    features: {
      en: [
        "Catalog with categories, including keychains, and product detail pages",
        "Cart with WhatsApp checkout",
        "Custom order form with an 'other' option for unusual requests",
        "Floating WhatsApp button on every page",
      ],
      id: [
        "Katalog dengan kategori, termasuk gantungan kunci, dan halaman detail produk",
        "Keranjang dengan checkout via WhatsApp",
        "Formulir pesanan custom dengan opsi 'lainnya' untuk permintaan khusus",
        "Tombol WhatsApp melayang di setiap halaman",
      ],
    },
    outcome: {
      en: "The catalog is live, with prices and copy updated after launch, and gives a handmade business a clear way to take both ready-made and custom orders.",
      id: "Katalog ini aktif, dengan harga dan teks yang diperbarui setelah peluncuran, dan memberi usaha handmade jalur yang jelas untuk pesanan siap jual maupun custom.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },

  "mr-udin": {
    context: {
      en: "Mr. Udin is a fruit shop selling local and imported fruit for home delivery. Fruit is an impulse buy, so the site needed to look fresh enough to make people hungry and make ordering take seconds.",
      id: "Mr. Udin adalah toko buah yang menjual buah lokal dan impor dengan layanan antar ke rumah. Buah adalah pembelian impulsif, jadi situsnya harus terlihat cukup segar untuk membuat orang lapar dan membuat pemesanan hanya butuh hitungan detik.",
    },
    approach: {
      en: "I went bright and warm, with a citrus hero and a few floating fruit shapes that give the page some life without getting in the way. Featured fruits sit on the home page, the full range lives on a products page by category, and a cart drawer collects the order before sending it through WhatsApp. A short section on the health benefits of fruit gives visitors a reason to add one more item.",
      id: "Saya memilih nuansa cerah dan hangat, dengan hero bernuansa jeruk dan beberapa bentuk buah melayang yang menghidupkan halaman tanpa mengganggu. Buah unggulan tampil di beranda, seluruh produk ada di halaman produk per kategori, dan keranjang geser mengumpulkan pesanan sebelum dikirim lewat WhatsApp. Bagian singkat tentang manfaat buah memberi pengunjung alasan untuk menambah satu barang lagi.",
    },
    features: {
      en: [
        "Home, products, about and contact pages",
        "Product listing by category with featured fruit on the home page",
        "Cart drawer with WhatsApp checkout",
        "Four-step ordering guide and animated sections",
      ],
      id: [
        "Halaman beranda, produk, tentang, dan kontak",
        "Daftar produk per kategori dengan buah unggulan di beranda",
        "Keranjang geser dengan checkout via WhatsApp",
        "Panduan pemesanan empat langkah dan bagian beranimasi",
      ],
    },
    outcome: {
      en: "The shop is live and turns browsing into a WhatsApp order in a few taps.",
      id: "Toko ini aktif dan mengubah aktivitas melihat-lihat menjadi pesanan WhatsApp dalam beberapa ketukan.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },

  "cakra-radial-indonesia": {
    context: {
      en: "PT Cakra Radial Indonesia is presented as a tyre manufacturer in Cikarang producing tyres for motorcycles, cars and heavy vehicles. Its visitors are distributors and fleet buyers who want to know the product range, the standards and how to become a partner.",
      id: "PT Cakra Radial Indonesia ditampilkan sebagai produsen ban di Cikarang yang memproduksi ban motor, mobil, dan kendaraan besar. Pengunjungnya adalah distributor dan pembeli armada yang ingin mengetahui rangkaian produk, standarnya, dan cara menjadi mitra.",
    },
    approach: {
      en: "I built this one without a framework, as hand-written static HTML, CSS and JavaScript, to keep it fast and simple to host. The bold, condensed headline 'Mencengkeram setiap jalan' sets an industrial tone. Each vehicle type has its own product page, and the whole site exists twice, in Indonesian and in an English folder, with privacy, terms and a custom 404 page included.",
      id: "Saya membangunnya tanpa framework, sebagai HTML, CSS, dan JavaScript statis yang ditulis manual, agar cepat dan mudah di-hosting. Judul tebal 'Mencengkeram setiap jalan' membangun nada industrial. Setiap jenis kendaraan punya halaman produknya sendiri, dan seluruh situs tersedia dua kali, dalam bahasa Indonesia dan dalam folder bahasa Inggris, lengkap dengan halaman privasi, ketentuan, dan 404 khusus.",
    },
    features: {
      en: [
        "Separate product pages for motorcycle, car and heavy-vehicle tyres",
        "About, facilities, FAQ and contact pages",
        "Full Indonesian and English versions",
        "Privacy policy, terms and a custom 404 page",
        "Count-up statistics written in plain JavaScript",
      ],
      id: [
        "Halaman produk terpisah untuk ban motor, mobil, dan kendaraan besar",
        "Halaman tentang, fasilitas, FAQ, dan kontak",
        "Versi bahasa Indonesia dan Inggris lengkap",
        "Kebijakan privasi, ketentuan, dan halaman 404 khusus",
        "Statistik count-up yang ditulis dengan JavaScript murni",
      ],
    },
    outcome: {
      en: "The site is live as a complete bilingual company profile with no build step, a reminder that not every project needs a framework.",
      id: "Situs ini aktif sebagai profil perusahaan dwibahasa lengkap tanpa proses build, pengingat bahwa tidak setiap proyek membutuhkan framework.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
  },

  "shinwa-electric": {
    context: {
      en: "PT Shinwa Electric Indonesia is presented as a maker of wiring harnesses and electrical components for two- and four-wheeled vehicles, working with Japanese manufacturing discipline. The audience is OEM and aftermarket buyers who judge a supplier on precision and process.",
      id: "PT Shinwa Electric Indonesia ditampilkan sebagai produsen wiring harness dan komponen kelistrikan untuk kendaraan roda dua dan roda empat, dengan disiplin manufaktur Jepang. Audiensnya adalah pembeli OEM dan aftermarket yang menilai pemasok dari presisi dan prosesnya.",
    },
    approach: {
      en: "I designed it as one long, well-ordered page, because the story is linear: capability, philosophy, products, facilities, certifications and contact. The name Shinwa (真和, 'true harmony') became the anchor of the about section, linking the Japanese heritage to the idea of reliable connections. A hero carousel cycles through the production lines, and products are split clearly between two-wheel and four-wheel components.",
      id: "Saya merancangnya sebagai satu halaman panjang yang tersusun rapi, karena ceritanya linear: kapabilitas, filosofi, produk, fasilitas, sertifikasi, dan kontak. Nama Shinwa (真和, 'harmoni sejati') menjadi jangkar bagian tentang kami, menghubungkan warisan Jepang dengan gagasan sambungan yang andal. Carousel hero menampilkan lini produksi secara bergantian, dan produk dibagi jelas antara komponen roda dua dan roda empat.",
    },
    features: {
      en: [
        "Single-page profile with anchored navigation",
        "Autoplay hero carousel of production capabilities",
        "Product sections for two-wheel and four-wheel components",
        "Facilities, certifications and a contact form",
      ],
      id: [
        "Profil satu halaman dengan navigasi berjangkar",
        "Carousel hero otomatis yang menampilkan kapabilitas produksi",
        "Bagian produk untuk komponen roda dua dan roda empat",
        "Fasilitas, sertifikasi, dan formulir kontak",
      ],
    },
    outcome: {
      en: "The profile is live and reads top to bottom like a supplier presentation, which is how its buyers evaluate a partner.",
      id: "Profil ini aktif dan terbaca dari atas ke bawah seperti presentasi pemasok, cara pembelinya menilai calon mitra.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Embla Carousel"],
  },

  nutrifood: {
    context: {
      en: "PT Nutrifood Global Industries is presented as an integrated food producer with a large family of consumer brands. A group like this speaks to distributors, consumers and investors at once, and has to show many brands without looking cluttered.",
      id: "PT Nutrifood Global Industries ditampilkan sebagai produsen pangan terintegrasi dengan banyak brand konsumen. Grup seperti ini berbicara kepada distributor, konsumen, dan investor sekaligus, dan harus menampilkan banyak brand tanpa terlihat berantakan.",
    },
    approach: {
      en: "I built it as a React and Vite single-page app with React Router. The home page opens with a slider on export and partnership, then three pillars that explain the group. The brand portfolio is the centre of the site: brands are grouped by category and shown in a scrolling strip and a dedicated portfolio page, so the breadth reads as order rather than noise.",
      id: "Saya membangunnya sebagai single-page app React dan Vite dengan React Router. Beranda dibuka dengan slider tentang ekspor dan kemitraan, lalu tiga pilar yang menjelaskan grup ini. Portofolio brand menjadi pusat situs: brand dikelompokkan per kategori dan ditampilkan dalam strip bergulir serta halaman portofolio khusus, sehingga keragamannya terbaca sebagai keteraturan, bukan kekacauan.",
    },
    features: {
      en: [
        "Home, about, brand portfolio and contact pages",
        "Hero slider and a scrolling strip of brands",
        "Brands grouped by product category",
        "Scroll reveals with Framer Motion",
      ],
      id: [
        "Halaman beranda, tentang, portofolio brand, dan kontak",
        "Slider hero dan strip brand yang bergulir",
        "Brand dikelompokkan berdasarkan kategori produk",
        "Reveal saat scroll dengan Framer Motion",
      ],
    },
    outcome: {
      en: "The site is live and gives a multi-brand group a single, orderly front door.",
      id: "Situs ini aktif dan memberi grup multi-brand satu pintu depan yang tertata.",
    },
    stack: ["React", "Vite", "React Router", "Framer Motion"],
  },

  "sinar-kertas-abadi": {
    context: {
      en: "PT Sinar Kertas Abadi is presented as a paper and office stationery manufacturer built around recycling. The site had to cover a lot of ground for a manufacturer: production, sustainability, products, careers and news.",
      id: "PT Sinar Kertas Abadi ditampilkan sebagai produsen kertas dan alat tulis kantor yang berfokus pada daur ulang. Situsnya harus mencakup banyak hal untuk sebuah produsen: produksi, keberlanjutan, produk, karier, dan berita.",
    },
    approach: {
      en: "I organised the story around the recycling loop, from collecting used paper bales to fibre recovery, so sustainability is shown as a process rather than a claim. The site uses next-intl with locale routes, added after the first build so every page exists in Indonesian and English. The careers page lists openings and includes an application form built with React Hook Form.",
      id: "Saya menyusun ceritanya di sekitar siklus daur ulang, dari pengumpulan bal kertas bekas hingga pemulihan serat, sehingga keberlanjutan ditampilkan sebagai proses, bukan klaim. Situs ini memakai next-intl dengan route per bahasa, yang ditambahkan setelah versi pertama sehingga setiap halaman tersedia dalam bahasa Indonesia dan Inggris. Halaman karier menampilkan lowongan dan formulir lamaran yang dibangun dengan React Hook Form.",
    },
    features: {
      en: [
        "Eight pages: home, about, production process, sustainability, products, careers, news and contact",
        "News list with individual article pages",
        "Careers page with job listings and an application form",
        "Indonesian and English locale routes",
      ],
      id: [
        "Delapan halaman: beranda, tentang, proses produksi, keberlanjutan, produk, karier, berita, dan kontak",
        "Daftar berita dengan halaman artikel masing-masing",
        "Halaman karier dengan daftar lowongan dan formulir lamaran",
        "Route bahasa Indonesia dan Inggris",
      ],
    },
    outcome: {
      en: "The site is live with its full structure in both languages. The copy is marked in the repository as a draft to be finalised before a real launch.",
      id: "Situs ini aktif dengan struktur lengkap dalam dua bahasa. Teksnya ditandai di repositori sebagai draf yang perlu difinalkan sebelum peluncuran sesungguhnya.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "next-intl", "React Hook Form"],
  },

  "linen-and-brew": {
    context: {
      en: "Linen & Brew is a fictional café and reading room in Bandung, a personal portfolio project rather than client work. The idea was a place for slow mornings, so the site itself had to feel unhurried.",
      id: "Linen & Brew adalah kafe dan ruang baca fiktif di Bandung, proyek portofolio pribadi, bukan pekerjaan klien. Idenya adalah tempat untuk pagi yang pelan, jadi situsnya sendiri harus terasa tidak terburu-buru.",
    },
    approach: {
      en: "I used a minimalist Scandinavian direction: soft neutrals, lots of space and quiet motion. Books are treated as seriously as coffee, with a shelf of real book covers next to the menu, and events such as a book club and a writing workshop get their own page. I replaced placeholders step by step with a real logo, dish photos and event photos, swapped the map embed for an illustrated map and finished the full Indonesian translation.",
      id: "Saya memakai arah minimalis Skandinavia: warna netral lembut, ruang lega, dan motion yang tenang. Buku diperlakukan sama seriusnya dengan kopi, dengan rak sampul buku asli di samping menu, dan acara seperti klub buku serta workshop menulis punya halamannya sendiri. Placeholder saya ganti bertahap dengan logo asli, foto hidangan, dan foto acara, embed peta diganti dengan peta ilustrasi, dan terjemahan bahasa Indonesia saya selesaikan.",
    },
    features: {
      en: [
        "Six pages: home, about, menu, books, events and contact",
        "Book shelf with real covers and a menu with dish photos",
        "Events page for the book club and writing workshop",
        "English and Indonesian toggle",
      ],
      id: [
        "Enam halaman: beranda, tentang, menu, buku, acara, dan kontak",
        "Rak buku dengan sampul asli dan menu dengan foto hidangan",
        "Halaman acara untuk klub buku dan workshop menulis",
        "Toggle bahasa Inggris dan Indonesia",
      ],
    },
    outcome: {
      en: "The site is live and holds its calm from the first page to the last, which was the whole brief.",
      id: "Situs ini aktif dan menjaga ketenangannya dari halaman pertama hingga terakhir, yang memang menjadi inti brief-nya.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "next-intl"],
  },

  "rossy-pink": {
    context: {
      en: "Rossy Pink is a strawberry dessert café selling cakes, sundaes and drinks. Its customers find it on social media, so the site had to be as photogenic as the desserts and answer the practical questions that come after.",
      id: "Rossy Pink adalah kafe dessert stroberi yang menjual kue, sundae, dan minuman. Pelanggannya menemukannya lewat media sosial, jadi situsnya harus sefotogenik dessert-nya dan menjawab pertanyaan praktis yang muncul setelahnya.",
    },
    approach: {
      en: "The brand is playful, so I leaned in: soft pinks, rounded type and small floating decorations. Behind the charm sits a practical structure with a filterable menu, a gallery lightbox and separate pages for catering, events, promotions, location and FAQ, so a visitor who arrives from a photo can book or order without messaging to ask.",
      id: "Brand-nya ceria, jadi saya menguatkannya: merah muda lembut, huruf membulat, dan dekorasi kecil yang melayang. Di balik kesan manis itu ada struktur praktis dengan menu yang bisa difilter, lightbox galeri, dan halaman terpisah untuk katering, acara, promo, lokasi, dan FAQ, sehingga pengunjung yang datang dari sebuah foto bisa memesan tanpa perlu bertanya lewat pesan.",
    },
    features: {
      en: [
        "Eleven pages including menu, catering, events, promo, location and FAQ",
        "Menu with category filters",
        "Gallery with a lightbox",
        "English and Indonesian toggle",
      ],
      id: [
        "Sebelas halaman termasuk menu, katering, acara, promo, lokasi, dan FAQ",
        "Menu dengan filter kategori",
        "Galeri dengan lightbox",
        "Toggle bahasa Inggris dan Indonesia",
      ],
    },
    outcome: {
      en: "The site is live and pairs a playful look with the full set of practical pages a busy dessert café needs.",
      id: "Situs ini aktif dan memadukan tampilan ceria dengan seluruh halaman praktis yang dibutuhkan kafe dessert yang ramai.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "next-intl"],
  },

  "the-marrow": {
    context: {
      en: "The Marrow is a dry-aged steakhouse in Jakarta whose whole identity is patience: beef aged for weeks and finished over charcoal. A premium restaurant site has one real job, to get a table booked.",
      id: "The Marrow adalah steakhouse dry-aged di Jakarta yang seluruh identitasnya adalah kesabaran: daging yang diperam berminggu-minggu lalu dipanggang di atas arang. Situs restoran premium punya satu tugas utama, yaitu membuat orang memesan meja.",
    },
    approach: {
      en: "I used a dark, fire-lit palette and let the home page explain the dry-age process in three steps before showing the signature cuts. A 'Reserve a table' button stays in the navigation on every page and leads to a reservation page that continues on WhatsApp. The site runs in English and Indonesian.",
      id: "Saya memakai palet gelap bernuansa api dan membiarkan beranda menjelaskan proses dry-age dalam tiga langkah sebelum menampilkan potongan daging andalan. Tombol 'Reserve a table' selalu ada di navigasi setiap halaman dan mengarah ke halaman reservasi yang berlanjut di WhatsApp. Situs ini tersedia dalam bahasa Inggris dan Indonesia.",
    },
    features: {
      en: [
        "Six pages: home, menu, about, gallery, reservation and contact",
        "Reservation flow that continues on WhatsApp",
        "Persistent 'Reserve a table' action and a floating WhatsApp button",
        "English and Indonesian toggle",
      ],
      id: [
        "Enam halaman: beranda, menu, tentang, galeri, reservasi, dan kontak",
        "Alur reservasi yang berlanjut di WhatsApp",
        "Tombol 'Reserve a table' yang selalu tampil dan tombol WhatsApp melayang",
        "Toggle bahasa Inggris dan Indonesia",
      ],
    },
    outcome: {
      en: "The site is live and keeps the booking one click away from any page, while the story of the process does the persuading.",
      id: "Situs ini aktif dan menjaga pemesanan meja hanya satu klik dari halaman mana pun, sementara cerita prosesnya yang meyakinkan pengunjung.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "next-intl"],
  },

  deskdrip: {
    context: {
      en: "DeskDrip is a café and coworking space for freelancers, remote workers and small teams. Its visitors are deciding where to spend a working day, so they need to know about the space, the wifi and the membership before the coffee.",
      id: "DeskDrip adalah kafe sekaligus coworking space untuk freelancer, pekerja remote, dan tim kecil. Pengunjungnya sedang memutuskan di mana akan bekerja seharian, jadi mereka perlu tahu tentang ruangan, wifi, dan membership sebelum kopinya.",
    },
    approach: {
      en: "I organised the space into three zones, quiet, collaborative and lounge, so people can pick by their focus level. Membership tiers, a menu of 'signature drips' and a visit page with an FAQ complete the picture. The site uses next-intl with locale routing and automatic language detection, with page transitions and a parallax gallery for atmosphere.",
      id: "Saya membagi ruangannya menjadi tiga zona, tenang, kolaboratif, dan lounge, sehingga orang bisa memilih sesuai tingkat fokusnya. Paket membership, menu 'signature drips', dan halaman kunjungan dengan FAQ melengkapi gambarannya. Situs ini memakai next-intl dengan routing per bahasa dan deteksi bahasa otomatis, serta transisi halaman dan galeri parallax untuk membangun suasana.",
    },
    features: {
      en: [
        "Five pages: home, menu, space, membership and visit",
        "Three work zones described by focus level",
        "Membership tiers, FAQ and a contact form",
        "English and Indonesian locale routes with automatic detection",
      ],
      id: [
        "Lima halaman: beranda, menu, ruang, membership, dan kunjungan",
        "Tiga zona kerja yang dijelaskan berdasarkan tingkat fokus",
        "Paket membership, FAQ, dan formulir kontak",
        "Route bahasa Inggris dan Indonesia dengan deteksi otomatis",
      ],
    },
    outcome: {
      en: "The site is live and answers the questions a remote worker asks before choosing a place to work for the day.",
      id: "Situs ini aktif dan menjawab pertanyaan yang diajukan pekerja remote sebelum memilih tempat bekerja hari itu.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion"],
  },

  "warsun-bu-euis": {
    context: {
      en: "Warsun Bu Euis is a Sundanese home-cooking stall run by Bu Euis herself. Its customers are neighbours and passers-by, and it needed a simple site that feels as homely as the food.",
      id: "Warsun Bu Euis adalah warung masakan Sunda rumahan yang dikelola langsung oleh Bu Euis. Pelanggannya adalah warga sekitar dan orang yang lewat, dan warung ini membutuhkan situs sederhana yang terasa serumah masakannya.",
    },
    approach: {
      en: "I kept it deliberately light: five static HTML pages with no framework, quick to load on any phone. The copy leans into Sundanese hospitality, starting with 'Mangga, calik heula' ('please, have a seat'), and the home page is built around three principles: real spices, fresh ingredients and family recipes. A gallery and a contact page with a map help people find the stall.",
      id: "Saya sengaja membuatnya ringan: lima halaman HTML statis tanpa framework, cepat dimuat di ponsel apa pun. Teksnya mengangkat keramahan Sunda, dibuka dengan 'Mangga, calik heula', dan beranda disusun di sekitar tiga prinsip: bumbu asli, bahan segar, dan resep keluarga. Galeri dan halaman kontak dengan peta membantu orang menemukan warungnya.",
    },
    features: {
      en: [
        "Five pages: home, menu, about, gallery and contact",
        "Signature dishes and a full menu page",
        "Contact page with a map",
        "Plain HTML, CSS and JavaScript with no build step",
      ],
      id: [
        "Lima halaman: beranda, menu, tentang, galeri, dan kontak",
        "Menu andalan dan halaman menu lengkap",
        "Halaman kontak dengan peta",
        "HTML, CSS, dan JavaScript murni tanpa proses build",
      ],
    },
    outcome: {
      en: "The site is live and gives a small neighbourhood stall a warm, fast-loading presence online.",
      id: "Situs ini aktif dan memberi warung kecil di lingkungan sekitar kehadiran online yang hangat dan cepat dimuat.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
  },

  "toko-buku-pak-joko": {
    context: {
      en: "Toko Buku Pak Joko is an independent bookshop in Yogyakarta with a story going back to 1978. Its appeal is the opposite of online retail: hand-picked titles and a place to linger, so the site had to carry that feeling while still letting people buy.",
      id: "Toko Buku Pak Joko adalah toko buku independen di Yogyakarta dengan cerita yang bermula sejak 1978. Daya tariknya justru kebalikan dari toko online: buku yang dipilih tangan dan tempat untuk berlama-lama, jadi situsnya harus membawa perasaan itu sambil tetap memungkinkan orang membeli.",
    },
    approach: {
      en: "The design borrows from the shop itself, with deep green and brass tones like an old reading room, and books drawn as spines and covers in code rather than stock images. The catalog can be filtered by category, and each book has its own page. The cart and checkout end in a WhatsApp message to the shop, which fits how a small bookshop actually handles orders.",
      id: "Desainnya meminjam suasana tokonya sendiri, dengan nuansa hijau tua dan kuningan seperti ruang baca lama, serta buku yang digambar sebagai punggung dan sampul lewat kode, bukan foto stok. Katalognya bisa difilter per kategori, dan setiap buku punya halamannya sendiri. Keranjang dan checkout berakhir sebagai pesan WhatsApp ke toko, sesuai cara toko buku kecil benar-benar menangani pesanan.",
    },
    features: {
      en: [
        "Catalog with category filters and a page for each book",
        "Book spines and covers rendered as components",
        "Cart and checkout that hand off to WhatsApp",
        "About page telling the shop's history",
      ],
      id: [
        "Katalog dengan filter kategori dan halaman untuk setiap buku",
        "Punggung dan sampul buku yang dirender sebagai komponen",
        "Keranjang dan checkout yang diteruskan ke WhatsApp",
        "Halaman tentang yang menceritakan sejarah toko",
      ],
    },
    outcome: {
      en: "The site is live and feels like the shop it describes, while giving readers a straightforward way to order.",
      id: "Situs ini aktif dan terasa seperti toko yang digambarkannya, sambil memberi pembaca cara memesan yang sederhana.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },

  pinegrove: {
    context: {
      en: "Pinegrove sells outdoor and hiking gear chosen for Indonesia's highland trails. Its line, 'Not the summit photo, but the walk there', speaks to people who hike often, and those buyers research before they spend.",
      id: "Pinegrove menjual perlengkapan outdoor dan hiking yang dipilih untuk jalur pegunungan Indonesia. Kalimatnya, 'Not the summit photo, but the walk there', ditujukan kepada orang yang sering mendaki, dan pembeli seperti ini melakukan riset sebelum membeli.",
    },
    approach: {
      en: "I built the shop and the research side together. Alongside the catalog, a journal covers topics such as choosing a first pair of boots or packing for a three-day trek, and a size guide uses proper tables. I started from a design system and shared components before building pages, then added the full Indonesian translation, fixed a bug where items disappeared after filtering or infinite scroll, and swapped in the real logo.",
      id: "Saya membangun sisi toko dan sisi riset secara bersamaan. Selain katalog, ada jurnal yang membahas topik seperti memilih sepatu pertama atau mengemas carrier untuk pendakian tiga hari, dan panduan ukuran yang memakai tabel yang rapi. Saya memulai dari design system dan komponen bersama sebelum membangun halaman, lalu menambahkan terjemahan bahasa Indonesia lengkap, memperbaiki bug produk yang hilang setelah difilter atau infinite scroll, dan memasang logo asli.",
    },
    features: {
      en: [
        "Eleven routes including shop, categories, product pages, journal, size guide, FAQ and CSR events",
        "Product filtering with infinite scroll",
        "Journal articles and a size guide with data tables",
        "English and Indonesian versions of every page",
      ],
      id: [
        "Sebelas route termasuk toko, kategori, halaman produk, jurnal, panduan ukuran, FAQ, dan acara CSR",
        "Filter produk dengan infinite scroll",
        "Artikel jurnal dan panduan ukuran dengan tabel data",
        "Versi bahasa Inggris dan Indonesia untuk setiap halaman",
      ],
    },
    outcome: {
      en: "The shop is live and gives a researching buyer the guides and sizing they need before choosing gear.",
      id: "Toko ini aktif dan memberi pembeli yang sedang riset panduan serta ukuran yang mereka butuhkan sebelum memilih perlengkapan.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },

  barberbangarip: {
    context: {
      en: "BarberBangArip is a neighbourhood barbershop built around three barbers and regular customers. For a barbershop, the site's main job is simple: help people pick a style and a barber, then book a slot without waiting.",
      id: "BarberBangArip adalah barbershop lingkungan yang dibangun di sekitar tiga barber dan pelanggan tetapnya. Untuk barbershop, tugas utama situsnya sederhana: membantu orang memilih gaya dan barber, lalu memesan jadwal tanpa menunggu.",
    },
    approach: {
      en: "I built it as one landing page where every section feeds the booking. Choosing a service or a barber anywhere on the page pre-selects it in the booking form through a shared context. The form then collects the date and time and sends everything as a WhatsApp message. A before-and-after slider and a style catalog help people decide what to ask for.",
      id: "Saya membangunnya sebagai satu landing page di mana setiap bagian mengarah ke pemesanan. Memilih layanan atau barber di bagian mana pun langsung mengisi form booking lewat context bersama. Form kemudian mengumpulkan tanggal dan jam lalu mengirim semuanya sebagai pesan WhatsApp. Slider before-after dan katalog gaya rambut membantu orang memutuskan potongan yang diminta.",
    },
    features: {
      en: [
        "Booking form for service, barber, date and time that sends a WhatsApp message",
        "Service and barber choices that pre-fill the booking form",
        "Before-and-after comparison slider and a style catalog",
        "Services and pricing, barber profiles, FAQ and location",
      ],
      id: [
        "Form booking layanan, barber, tanggal, dan jam yang mengirim pesan WhatsApp",
        "Pilihan layanan dan barber yang otomatis mengisi form booking",
        "Slider perbandingan before-after dan katalog gaya rambut",
        "Layanan dan harga, profil barber, FAQ, dan lokasi",
      ],
    },
    outcome: {
      en: "The page is live and turns browsing styles into a complete booking request in one flow.",
      id: "Halaman ini aktif dan mengubah aktivitas melihat gaya rambut menjadi permintaan booking yang lengkap dalam satu alur.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },

  "kadu-coffeeshop": {
    context: {
      en: "Kadu is a small coffee shop that roasts its own local beans, made for working quietly or talking for hours. Its visitors mostly want to know what is on the menu, where it is and when it is open.",
      id: "Kadu adalah kedai kopi kecil yang menyangrai sendiri biji kopi lokalnya, tempat untuk bekerja dengan tenang atau mengobrol berjam-jam. Pengunjungnya umumnya ingin tahu menu, lokasi, dan jam buka.",
    },
    approach: {
      en: "I answered those three questions on a single page with no framework, in plain HTML, CSS and JavaScript. The copy is casual Indonesian, matching how the shop talks to its regulars. Warm wood tones and afternoon light in the imagery set the mood, and a WhatsApp button handles table reservations and menu questions.",
      id: "Saya menjawab tiga pertanyaan itu dalam satu halaman tanpa framework, dengan HTML, CSS, dan JavaScript murni. Teksnya memakai bahasa Indonesia santai, sesuai cara kedai berbicara kepada pelanggan tetapnya. Nuansa kayu hangat dan cahaya sore pada gambar membangun suasananya, dan tombol WhatsApp menangani reservasi meja serta pertanyaan menu.",
    },
    features: {
      en: [
        "Single page covering the story, menu, gallery, location and testimonials",
        "Address, opening hours and contact in one section",
        "WhatsApp button for reservations and questions",
        "Plain HTML, CSS and JavaScript",
      ],
      id: [
        "Satu halaman yang memuat cerita, menu, galeri, lokasi, dan testimoni",
        "Alamat, jam operasional, dan kontak dalam satu bagian",
        "Tombol WhatsApp untuk reservasi dan pertanyaan",
        "HTML, CSS, dan JavaScript murni",
      ],
    },
    outcome: {
      en: "The page is live and gives a small coffee shop everything a first-time visitor needs on one screen-friendly page.",
      id: "Halaman ini aktif dan memberi kedai kopi kecil semua yang dibutuhkan pengunjung baru dalam satu halaman yang nyaman di layar ponsel.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
  },

  "solvara-chemicals": {
    context: {
      en: "Solvara Chemicals is a fictional manufacturer of specialty and industrial chemicals, built as a portfolio project. Its buyers are factories, formulators and distributors, who do not browse a shop: they send a specification and ask for a quote.",
      id: "Solvara Chemicals adalah produsen bahan kimia spesialti dan industri fiktif yang dibangun sebagai proyek portofolio. Pembelinya adalah pabrik, formulator, dan distributor, yang tidak berbelanja seperti di toko: mereka mengirim spesifikasi lalu meminta penawaran.",
    },
    approach: {
      en: "I removed everything a shop would have. There is no cart, no checkout and no price, and a banner at the top says supply is B2B only. The calls to action are Request a Quote, Become a Distributor and Download TDS. Sixteen products sit under five families, each with its own page, and the home page explains the process as batch traceability and agreed specifications rather than slogans. Motion is heavier here than on most of my sites, with Lenis smooth scrolling and GSAP ScrollTrigger over a hero drawn around a single circle.",
      id: "Saya membuang semua yang biasa ada di toko. Tidak ada keranjang, tidak ada checkout, dan tidak ada harga, dan banner di bagian atas menyatakan bahwa pasokan hanya untuk B2B. Ajakan bertindaknya adalah Request a Quote, Become a Distributor, dan Download TDS. Enam belas produk tersusun dalam lima keluarga, masing-masing punya halamannya, dan beranda menjelaskan prosesnya lewat ketertelusuran batch dan spesifikasi yang disepakati, bukan slogan. Motion di sini lebih berat daripada kebanyakan situs saya, dengan smooth scrolling Lenis dan GSAP ScrollTrigger di atas hero yang dibangun di sekitar satu lingkaran.",
    },
    features: {
      en: [
        "Eight routes: home, about, products, product detail, industries, capabilities, sustainability and contact",
        "Sixteen products with their own pages, grouped into five families",
        "Quote, distributor and technical data sheet actions, all front-end demos",
        "Forms validated with React Hook Form and Zod, posting to a mock endpoint that stores nothing",
        "English and Indonesian copy in two files with identical structure, enforced by TypeScript",
        "A photo fallback that draws a gradient with the brand mark if an image fails",
      ],
      id: [
        "Delapan route: beranda, tentang, produk, detail produk, industri, kapabilitas, keberlanjutan, dan kontak",
        "Enam belas produk dengan halaman masing-masing, dikelompokkan dalam lima keluarga",
        "Aksi penawaran, distributor, dan lembar data teknis, semuanya demo front-end",
        "Formulir tervalidasi dengan React Hook Form dan Zod, dikirim ke endpoint tiruan yang tidak menyimpan apa pun",
        "Teks bahasa Inggris dan Indonesia di dua file dengan struktur identik, dijaga oleh TypeScript",
        "Fallback foto yang menggambar gradien dengan tanda brand jika sebuah gambar gagal dimuat",
      ],
    },
    outcome: {
      en: "The site is live and reads like a supplier a procurement team could shortlist. Its sustainability figures and numbers are portfolio placeholders, and the repository says so.",
      id: "Situs ini aktif dan terbaca seperti pemasok yang bisa masuk daftar pendek tim pengadaan. Angka keberlanjutan dan angka lainnya adalah placeholder portofolio, dan repositorinya menyatakan hal itu.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Lenis", "React Hook Form", "Zod"],
  },

  "kawa-roasters": {
    context: {
      en: "Kawa Roasters is a concept specialty roastery in Bandung that sells to cafes, restaurants and hotels rather than to individual drinkers. A cafe owner wants to know three things: can they get the same taste every time, how small an order can start, and where the beans come from.",
      id: "Kawa Roasters adalah konsep roastery kopi spesialti di Bandung yang menjual ke kafe, restoran, dan hotel, bukan ke peminum perorangan. Pemilik kafe ingin tahu tiga hal: apakah rasanya konsisten setiap kali, seberapa kecil pesanan bisa dimulai, dan dari mana biji kopinya berasal.",
    },
    approach: {
      en: "The home page answers those in order. A four-step strip (source, roast, cup, deliver) shows the process, four featured coffees give the range, and the home page names a low starting quantity: five kilograms. A dark look built on a photo of beans in a burlap sack, with a serif headline, sets the tone, and Embla carousels and Lenis scrolling keep the longer pages moving. The header carries a Request a Quote action.",
      id: "Beranda menjawab ketiganya secara berurutan. Strip empat langkah (source, roast, cup, deliver) menunjukkan prosesnya, empat kopi unggulan memberi gambaran rangkaian produk, dan beranda menyebut jumlah awal yang kecil: lima kilogram. Tampilan gelap berlatar foto biji kopi di karung goni, dengan judul serif, membangun nadanya, dan carousel Embla serta scroll Lenis menjaga halaman yang panjang tetap bergerak. Header memuat aksi Request a Quote.",
    },
    features: {
      en: [
        "Eight pages: home, about, coffee, roastery, sourcing and quality, wholesale, partners and contact",
        "Four featured coffees with tasting notes, including two blends for espresso and milk drinks",
        "A quote request form validated with React Hook Form and Zod, working as a front-end demo",
        "Embla carousels, Lenis smooth scrolling and Framer Motion reveals",
        "English and Indonesian versions with a toggle",
      ],
      id: [
        "Delapan halaman: beranda, tentang, kopi, roastery, sourcing dan kualitas, wholesale, mitra, dan kontak",
        "Empat kopi unggulan dengan catatan rasa, termasuk dua blend untuk espresso dan minuman susu",
        "Formulir permintaan penawaran yang divalidasi dengan React Hook Form dan Zod, berfungsi sebagai demo front-end",
        "Carousel Embla, smooth scrolling Lenis, dan reveal Framer Motion",
        "Versi bahasa Inggris dan Indonesia dengan toggle",
      ],
    },
    outcome: {
      en: "The site is live and speaks to a cafe owner's actual questions instead of describing coffee in general. The quote form does not send anywhere yet.",
      id: "Situs ini aktif dan menjawab pertanyaan nyata pemilik kafe, bukan menggambarkan kopi secara umum. Formulir penawarannya belum mengirim ke mana pun.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis", "Embla Carousel", "React Hook Form", "Zod"],
  },

  "badot-ngacir-store": {
    context: {
      en: "Badot Ngacir Store is a fictional running shop in South Tangerang, a personal portfolio project. Its joke is the name: \"Badot\" means stocky, and \"ngacir\" means running fast. The idea behind it is a running store that says plainly it is for every body shape.",
      id: "Badot Ngacir Store adalah toko perlengkapan lari fiktif di Tangerang Selatan, proyek portofolio pribadi. Candaannya ada di namanya: \"Badot\" berarti gempal, dan \"ngacir\" berarti lari kencang. Gagasannya adalah toko lari yang menyatakan terang-terangan bahwa tokonya untuk semua bentuk badan.",
    },
    approach: {
      en: "It is the most complete shop in this archive. Eighty fictional products across eight categories live in one data file, and the catalog supports filtering, sorting, search and load more. Product pages feed a cart held in Zustand and saved in the browser, which leads to a checkout that simulates couriers, shipping, and payment by transfer, a fake QRIS code or cash on delivery, then issues an order number. Nothing is charged and nothing leaves the browser, and the repository says so. The voice is written in casual Indonesian throughout, with ten bilingual blog posts and a community page for the Sunday dawn run.",
      id: "Ini toko paling lengkap di arsip ini. Delapan puluh produk fiktif di delapan kategori disimpan dalam satu file data, dan katalognya mendukung filter, pengurutan, pencarian, dan load more. Halaman produk mengalir ke keranjang yang dipegang Zustand dan tersimpan di browser, lalu ke checkout yang mensimulasikan kurir, ongkir, dan pembayaran lewat transfer, kode QRIS tiruan, atau bayar di tempat, kemudian menerbitkan nomor pesanan. Tidak ada yang ditagih dan tidak ada data yang keluar dari browser, dan repositorinya menyatakan hal itu. Gaya tulisannya memakai bahasa Indonesia santai di seluruh situs, dengan sepuluh artikel blog dwibahasa dan halaman komunitas untuk lari subuh tiap Minggu.",
    },
    features: {
      en: [
        "Catalog of 80 products in 8 categories with filtering, sorting, search and load more",
        "Product detail pages, a cart and a simulated checkout ending in an order confirmation",
        "Ten blog articles in two languages, plus community, about and contact pages with a real map",
        "Bold condensed type, a running marquee, staggered hero and page transitions, all respecting reduced motion",
        "Indonesian and English with a toggle that remembers the choice",
      ],
      id: [
        "Katalog 80 produk di 8 kategori dengan filter, pengurutan, pencarian, dan load more",
        "Halaman detail produk, keranjang, dan checkout simulasi yang berakhir di konfirmasi pesanan",
        "Sepuluh artikel blog dalam dua bahasa, plus halaman komunitas, tentang, dan kontak dengan peta sungguhan",
        "Huruf tebal yang rapat, marquee berjalan, hero bertahap, dan transisi halaman, semuanya menghormati pengaturan reduced motion",
        "Bahasa Indonesia dan Inggris dengan toggle yang mengingat pilihan",
      ],
    },
    outcome: {
      en: "The store is live end to end, from browsing to an order number. I also fixed product photos that showed real brands and a products page that was falling back to client-side rendering.",
      id: "Tokonya aktif dari ujung ke ujung, dari menelusuri produk sampai nomor pesanan. Saya juga memperbaiki foto produk yang menampilkan merek asli dan halaman produk yang jatuh ke client-side rendering.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Zustand", "React Hook Form", "Zod"],
  },

  auvelle: {
    context: {
      en: "Auvelle presents itself as an Indonesian skincare manufacturer and brand. That means one site with two audiences: a founder looking for a lab to make their product, and a shopper putting together a routine.",
      id: "Auvelle memperkenalkan diri sebagai produsen sekaligus brand skincare Indonesia. Artinya satu situs untuk dua audiens: pendiri brand yang mencari lab untuk memproduksi produknya, dan pembeli yang menyusun rutinitas perawatan kulit.",
    },
    approach: {
      en: "The first screen splits the visitor: Partner with our lab for brands, Shop Auvelle for everyone else. The manufacturing side explains private label, OEM and ODM as five steps from brief to delivery, and a lab page and a journal carry the technical detail. The shop is organised around a four-step routine (cleanse, treat, moisturize, protect). Checkout takes no payment: customers send an order request and the team confirms stock, shipping and payment by email or WhatsApp. The enquiry and order endpoints validate on the server and ignore submissions that fill a hidden honeypot field, and until an email service is configured they accept the request and send nothing. All copy lives in matching English and Indonesian files, and the build fails if one language misses a key.",
      id: "Layar pertama langsung membagi pengunjung: Partner with our lab untuk brand, Shop Auvelle untuk semua orang lainnya. Sisi manufaktur menjelaskan private label, OEM, dan ODM sebagai lima langkah dari brief hingga pengiriman, dan halaman lab serta jurnal memuat detail teknisnya. Tokonya disusun di sekitar rutinitas empat langkah (cleanse, treat, moisturize, protect). Checkout tidak menerima pembayaran: pelanggan mengirim permintaan pesanan dan tim mengonfirmasi stok, ongkir, dan pembayaran lewat email atau WhatsApp. Endpoint pertanyaan dan pesanan memvalidasi di server dan mengabaikan kiriman yang mengisi kolom honeypot tersembunyi, dan selama layanan email belum dikonfigurasi, endpoint hanya menerima permintaan tanpa mengirim apa pun. Seluruh teks tersimpan di file bahasa Inggris dan Indonesia yang bentuknya sama, dan build gagal jika salah satu bahasa kehilangan kunci.",
    },
    features: {
      en: [
        "Home, about, manufacturing, lab, shop, product, checkout, journal, contact, privacy and terms pages",
        "Private label, OEM and ODM manufacturing explained as a five-step process",
        "A shop of eleven items built around a four-step routine, including a ritual set, with a cart and an order-request checkout",
        "Six journal articles and a separate lab page",
        "Server-validated forms with a honeypot field and optional email delivery through Resend",
        "English and Indonesian copy kept in matching files, checked by the TypeScript build",
        "Motion and Lenis smooth scrolling",
      ],
      id: [
        "Halaman beranda, tentang, manufaktur, lab, toko, produk, checkout, jurnal, kontak, privasi, dan ketentuan",
        "Manufaktur private label, OEM, dan ODM yang dijelaskan sebagai proses lima langkah",
        "Toko sebelas item yang disusun di sekitar rutinitas empat langkah, termasuk satu set ritual, dengan keranjang dan checkout permintaan pesanan",
        "Enam artikel jurnal dan satu halaman lab tersendiri",
        "Formulir yang divalidasi di server dengan kolom honeypot dan pengiriman email opsional lewat Resend",
        "Teks bahasa Inggris dan Indonesia di file yang bentuknya sama, diperiksa oleh build TypeScript",
        "Motion dan smooth scrolling Lenis",
      ],
    },
    outcome: {
      en: "The site is live with its shop, manufacturing pages and journal in two languages. Checkout collects order requests rather than payments, and the forms send nothing until an email service is connected.",
      id: "Situs ini aktif dengan toko, halaman manufaktur, dan jurnal dalam dua bahasa. Checkout mengumpulkan permintaan pesanan, bukan pembayaran, dan formulirnya belum mengirim apa pun sampai layanan email dihubungkan.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Lenis", "React Hook Form", "Zod"],
  },

  "kadu-developer": {
    context: {
      en: "Kadu Developer is a fictional independent game studio from Tangerang, built as a portfolio project. A studio site has to sell a feeling before it sells a game, so the brief was a personality: spiky outside, sweet inside, with a durian as the mascot.",
      id: "Kadu Developer adalah studio game independen fiktif dari Tangerang, dibangun sebagai proyek portofolio. Situs studio harus menjual perasaan sebelum menjual game, jadi brief-nya berupa kepribadian: berduri di luar, manis di dalam, dengan durian sebagai maskot.",
    },
    approach: {
      en: "Everything here is made to be played with. Headlines reveal word by word inside masks, pages change with a thorn-shaped wipe, and game cards bend under the cursor through an SVG displacement filter that only runs with a fine pointer and without reduced motion. The site is fully static with no backend, and the language toggle works on the client, so the server pages are thin wrappers around client views. I switched off two Next.js 16 caching features that the scaffold enabled, because keeping hidden routes alive fought the page transition and ScrollTrigger. A notes file lists every placeholder: the download counts, ratings, release dates, store links and privacy text are invented, and the privacy page is marked as a template.",
      id: "Semua di sini dibuat untuk dimainkan. Judul muncul kata demi kata di dalam mask, halaman berganti dengan wipe berbentuk duri, dan kartu game melengkung mengikuti kursor lewat filter displacement SVG yang hanya berjalan dengan pointer halus dan tanpa reduced motion. Situs ini sepenuhnya statis tanpa backend, dan toggle bahasanya bekerja di client, jadi halaman server hanyalah pembungkus tipis untuk tampilan client. Saya mematikan dua fitur caching Next.js 16 yang diaktifkan scaffold, karena menjaga route tersembunyi tetap hidup bertabrakan dengan transisi halaman dan ScrollTrigger. File catatan mendaftar setiap placeholder: jumlah unduhan, rating, tanggal rilis, link toko, dan teks privasi adalah rekaan, dan halaman privasinya ditandai sebagai template.",
    },
    features: {
      en: [
        "Home, games, game detail, devlog, about, press, contact and privacy pages",
        "Eight fictional games across Android and PC, with status labels from announced to released",
        "A devlog with individual posts",
        "A press page with wordmark and mascot SVGs",
        "Word-by-word headline reveals, a thorn-shaped page transition and a displacement hover effect",
        "GSAP ScrollTrigger, Lenis and Framer Motion, with English and Indonesian through next-intl",
      ],
      id: [
        "Halaman beranda, game, detail game, devlog, tentang, press, kontak, dan privasi",
        "Delapan game fiktif di Android dan PC, dengan label status dari diumumkan hingga dirilis",
        "Devlog dengan pos tersendiri",
        "Halaman press dengan SVG wordmark dan maskot",
        "Judul yang muncul kata demi kata, transisi halaman berbentuk duri, dan efek displacement saat hover",
        "GSAP ScrollTrigger, Lenis, dan Framer Motion, dengan bahasa Inggris dan Indonesia lewat next-intl",
      ],
    },
    outcome: {
      en: "The site is live as a complete studio presence. Its numbers, store links and legal text are placeholders by design, listed in the repository so none of them can pass for real.",
      id: "Situs ini aktif sebagai kehadiran studio yang lengkap. Angka, link toko, dan teks hukumnya adalah placeholder yang disengaja, didaftar di repositori agar tidak ada yang bisa dianggap asli.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Lenis", "next-intl"],
  },

  "tenuva-textiles": {
    context: {
      en: "Tenuva Textiles is a fictional integrated textile manufacturer that I built as a portfolio project, a sibling of Solvara Chemicals in structure. Its buyers are garment makers, brands and distributors, who judge a mill by whether the cloth behaves the same in every lot.",
      id: "Tenuva Textiles adalah produsen tekstil terintegrasi fiktif yang saya bangun sebagai proyek portofolio, saudara Solvara Chemicals dari sisi struktur. Pembelinya adalah pembuat garmen, brand, dan distributor, yang menilai sebuah pabrik dari apakah kainnya berperilaku sama di setiap lot.",
    },
    approach: {
      en: "I used the same B2B approach as Solvara: no prices, cart or checkout, and a banner saying supply is B2B only. What changes is the content. Sixteen fabrics sit under yarn, woven, knit, denim and twill, and technical families, named by construction and weight, such as cotton twill 240 and indigo denim 12 oz. The buying process is told from the buyer's side as brief, swatch and lab dip, sampling, production and delivery, under a line about holding the cloth first. Forms validate on the client and post to a mock endpoint that stores nothing. English is the source of truth for the dictionary and Indonesian is typed against it, so a missing key fails the type check. Photos fall back to a gradient with the weave mark if one fails to load, and the site ships a sitemap, a robots file and a generated Open Graph image. Certification wording, statistics and sustainability targets are illustrative, and the repository says so.",
      id: "Saya memakai pendekatan B2B yang sama dengan Solvara: tanpa harga, keranjang, atau checkout, dan banner yang menyatakan pasokan hanya untuk B2B. Yang berbeda adalah isinya. Enam belas kain tersusun dalam keluarga benang, tenun, rajut, denim dan twill, serta teknis, dinamai menurut konstruksi dan bobot, seperti cotton twill 240 dan indigo denim 12 oz. Proses pembelian diceritakan dari sisi pembeli sebagai brief, swatch dan lab dip, sampling, produksi, dan pengiriman, di bawah kalimat tentang memegang kainnya lebih dulu. Formulir divalidasi di client dan dikirim ke endpoint tiruan yang tidak menyimpan apa pun. Bahasa Inggris menjadi sumber kebenaran kamus dan bahasa Indonesia diketik terhadapnya, sehingga kunci yang hilang membuat pemeriksaan tipe gagal. Foto jatuh ke gradien dengan tanda tenun jika gagal dimuat, dan situs ini menyertakan sitemap, file robots, dan gambar Open Graph yang dihasilkan otomatis. Kata-kata sertifikasi, statistik, dan target keberlanjutan hanya ilustrasi, dan repositorinya menyatakan hal itu.",
    },
    features: {
      en: [
        "Eight routes: home, about, products, product detail, industries, capabilities, sustainability and contact",
        "Sixteen fabrics across five families, each with its own page",
        "A swatch and lab dip step in the buying process, with swatches requested from the sales team",
        "Quote and contact forms built with React Hook Form and Zod, posting to a mock endpoint",
        "A weave-pattern hero with GSAP ScrollTrigger and Lenis smooth scrolling",
        "Sitemap, robots file and a generated Open Graph image",
        "English and Indonesian files with identical structure, enforced by TypeScript",
      ],
      id: [
        "Delapan route: beranda, tentang, produk, detail produk, industri, kapabilitas, keberlanjutan, dan kontak",
        "Enam belas kain di lima keluarga, masing-masing dengan halamannya sendiri",
        "Langkah swatch dan lab dip dalam proses pembelian, dengan swatch yang diminta lewat tim sales",
        "Formulir penawaran dan kontak dengan React Hook Form dan Zod, dikirim ke endpoint tiruan",
        "Hero bermotif tenun dengan GSAP ScrollTrigger dan smooth scrolling Lenis",
        "Sitemap, file robots, dan gambar Open Graph yang dihasilkan otomatis",
        "File bahasa Inggris dan Indonesia dengan struktur identik, dijaga oleh TypeScript",
      ],
    },
    outcome: {
      en: "The site is live and reads like a mill a buyer could shortlist. Its statistics and sustainability targets are illustrative, and nothing is stored or sent.",
      id: "Situs ini aktif dan terbaca seperti pabrik yang bisa masuk daftar pendek pembeli. Statistik dan target keberlanjutannya hanya ilustrasi, dan tidak ada yang disimpan maupun dikirim.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Lenis", "React Hook Form", "Zod"],
  },

  "sweta-sugar": {
    context: {
      en: "Sweta Sugar presents itself as an integrated cane sugar mill and refinery in Central Lampung that supplies businesses only: food and beverage makers, bakeries, hotels, cafes, distributors and export traders. A buyer like that wants consistency and paperwork, not a shop window.",
      id: "Sweta Sugar memperkenalkan diri sebagai pabrik dan kilang gula tebu terintegrasi di Lampung Tengah yang hanya memasok bisnis: produsen makanan dan minuman, toko roti, hotel, kafe, distributor, dan pedagang ekspor. Pembeli seperti itu menginginkan konsistensi dan dokumen, bukan etalase.",
    },
    approach: {
      en: "I built it as a server-rendered Flask 3 site with Jinja2 templates, with English at the root and Indonesian under /id. All copy sits in YAML files with the same keys in both languages, and each product carries its own English and Indonesian block. The page structure follows a buyer's questions: the range of eight products, the process from cane to crystal, quality as testing at every stage, traceability to the lot with a certificate of analysis, then sustainability and a partnership page for quote requests. A script optimises the source photos into WebP files with a manifest, an Open Graph image and a touch icon, and a lint script renders every route in both languages and checks the output and the content files.",
      id: "Saya membangunnya sebagai situs Flask 3 yang dirender di server dengan template Jinja2, berbahasa Inggris di root dan bahasa Indonesia di bawah /id. Seluruh teks tersimpan di file YAML dengan kunci yang sama di kedua bahasa, dan setiap produk membawa blok bahasa Inggris dan Indonesianya sendiri. Susunan halaman mengikuti pertanyaan pembeli: rangkaian delapan produk, proses dari tebu hingga kristal, kualitas berupa pengujian di setiap tahap, ketertelusuran hingga lot dengan sertifikat analisis, lalu keberlanjutan dan halaman kemitraan untuk permintaan penawaran. Sebuah skrip mengoptimalkan foto sumber menjadi file WebP lengkap dengan manifes, gambar Open Graph, dan ikon sentuh, dan skrip lint merender setiap route di kedua bahasa lalu memeriksa hasil dan file kontennya.",
    },
    features: {
      en: [
        "Home, about, products, product detail, process, quality, sustainability, partnership, contact and legal pages",
        "Eight products, from refined white, caster and icing sugar to golden cane, soft brown and liquid cane, and portion packs",
        "English at the root and Indonesian under /id, with matching keys in both content files",
        "An image pipeline that writes WebP files, a manifest, an Open Graph image and a touch icon",
        "A lint script that renders every route in both languages",
        "Deployed on Vercel as a Flask app with no build command",
      ],
      id: [
        "Halaman beranda, tentang, produk, detail produk, proses, kualitas, keberlanjutan, kemitraan, kontak, dan legal",
        "Delapan produk, dari gula putih halus, caster, dan icing hingga gula tebu keemasan, gula merah lembut, dan gula tebu cair, serta kemasan porsi",
        "Bahasa Inggris di root dan bahasa Indonesia di bawah /id, dengan kunci yang sama di kedua file konten",
        "Pipeline gambar yang menghasilkan file WebP, manifes, gambar Open Graph, dan ikon sentuh",
        "Skrip lint yang merender setiap route di kedua bahasa",
        "Di-deploy di Vercel sebagai aplikasi Flask tanpa perintah build",
      ],
    },
    outcome: {
      en: "The site is live as a calm, quote-led supplier profile in two languages, written in Python rather than JavaScript.",
      id: "Situs ini aktif sebagai profil pemasok yang tenang dan berbasis permintaan penawaran dalam dua bahasa, ditulis dengan Python, bukan JavaScript.",
    },
    stack: ["Python", "Flask", "Jinja2", "YAML"],
  },

  "teduh-tea": {
    context: {
      en: "Teduh Tea presents itself as a highland tea producer in West Java that grows, withers, rolls and packs its leaves in one place. It sells to tea lovers and also to cafes, hotels and shops, so the site had to feel like a quiet moment and still carry a wholesale route.",
      id: "Teduh Tea memperkenalkan diri sebagai produsen teh dataran tinggi di Jawa Barat yang menanam, melayukan, menggulung, dan mengemas daunnya di satu tempat. Produknya dijual ke penikmat teh dan juga ke kafe, hotel, dan toko, jadi situsnya harus terasa seperti momen tenang sekaligus punya jalur grosir.",
    },
    approach: {
      en: "The name means the cool calm of shade, so the design is slow: a hillside photo, a preloader and a serif headline with an italic accent. The ten teas sit in five categories (black, green, scented, white and oolong, herbal) and can also be found by moment of day, with a short list for morning, afternoon and evening. The process is told as seven quiet steps, and a brew guide covers the cup itself. The wholesale enquiry form validates on the server. When Supabase credentials are set it saves each enquiry to a table; without them it only logs the submission, so the form never fails for a missing database. The site is a Flask app with English and Indonesian locale files, and two scripts check that the locale files match and that the text follows the writing rules.",
      id: "Namanya berarti ketenangan teduh di bawah naungan, jadi desainnya pelan: foto lereng bukit, preloader, dan judul serif dengan aksen italic. Sepuluh teh tersusun dalam lima kategori (hitam, hijau, beraroma, putih dan oolong, herbal) dan bisa juga ditemukan menurut waktu minum, dengan daftar singkat untuk pagi, siang, dan malam. Prosesnya diceritakan sebagai tujuh langkah yang tenang, dan panduan seduh membahas cangkirnya sendiri. Formulir pertanyaan grosir divalidasi di server. Ketika kredensial Supabase diatur, setiap pertanyaan disimpan ke tabel; tanpa itu, kiriman hanya dicatat di log, sehingga formulir tidak pernah gagal karena database tidak ada. Situsnya adalah aplikasi Flask dengan file locale bahasa Inggris dan Indonesia, dan dua skrip memeriksa bahwa file locale cocok dan bahwa teksnya mengikuti aturan penulisan.",
    },
    features: {
      en: [
        "Home, teas, tea detail, process, quality, brew guide, about and contact pages",
        "Ten teas in five categories, with a finder by moment of day",
        "A seven-step process page and a brew guide",
        "A wholesale enquiry form validated on the server, saved to Supabase when configured and logged otherwise",
        "English and Indonesian locale files, with a script that checks they match",
        "An image script that produces responsive widths",
      ],
      id: [
        "Halaman beranda, teh, detail teh, proses, kualitas, panduan seduh, tentang, dan kontak",
        "Sepuluh teh dalam lima kategori, dengan pencari menurut waktu minum",
        "Halaman proses tujuh langkah dan panduan seduh",
        "Formulir pertanyaan grosir yang divalidasi di server, disimpan ke Supabase jika dikonfigurasi dan dicatat di log jika tidak",
        "File locale bahasa Inggris dan Indonesia, dengan skrip yang memeriksa kecocokannya",
        "Skrip gambar yang menghasilkan beberapa lebar responsif",
      ],
    },
    outcome: {
      en: "The site is live with the full tea range and a wholesale route, and it keeps working without a database because enquiries fall back to the log.",
      id: "Situs ini aktif dengan seluruh rangkaian teh dan jalur grosir, dan tetap bekerja tanpa database karena pertanyaan jatuh ke log.",
    },
    stack: ["Python", "Flask", "Jinja2", "Supabase"],
  },

  meridex: {
    context: {
      en: "Meridex is a personal portfolio project: a non-custodial crypto exchange demo. There are no real funds, no custody and no real order execution. The goal was to show how a trading interface can feel fast and clear while staying honest that it is a demo.",
      id: "Meridex adalah proyek portofolio pribadi: demo exchange kripto non-custodial. Tidak ada dana sungguhan, tidak ada penyimpanan aset, dan tidak ada eksekusi order sungguhan. Tujuannya menunjukkan bagaimana antarmuka trading bisa terasa cepat dan jelas sambil tetap jujur bahwa ini demo.",
    },
    approach: {
      en: "Every order runs against a virtual balance of 10,000 USDT kept in the browser. Live prices come through an API route, the charts use lightweight-charts with indicators, and the swap uses a constant-product formula. A small Python FastAPI layer calculates indicators, swap quotes, order book simulation and earn projections, and each of those features has a TypeScript fallback, so every page still works without the Python server. The testnet wallet view reads Ethereum Sepolia and Base Sepolia through wagmi, viem and RainbowKit and never writes. The site is dark first, respects reduced motion, and includes a small academy that explains exchanges, wallets and scams.",
      id: "Setiap order berjalan terhadap saldo virtual 10.000 USDT yang disimpan di browser. Harga langsung datang lewat sebuah API route, grafiknya memakai lightweight-charts dengan indikator, dan swap memakai rumus constant-product. Lapisan Python FastAPI yang kecil menghitung indikator, kutipan swap, simulasi order book, dan proyeksi earn, dan setiap fitur itu punya cadangan TypeScript, sehingga semua halaman tetap berfungsi tanpa server Python. Tampilan wallet testnet membaca Ethereum Sepolia dan Base Sepolia lewat wagmi, viem, dan RainbowKit dan tidak pernah menulis. Situs ini mengutamakan mode gelap, menghormati reduced motion, dan menyertakan akademi kecil yang menjelaskan exchange, wallet, dan penipuan.",
    },
    features: {
      en: [
        "Markets and trade pages with candlestick charts and indicators",
        "Paper trading on a virtual 10,000 USDT balance stored in the browser",
        "A swap priced with a constant-product formula, and an earnings calculator",
        "A read-only testnet wallet view for Ethereum Sepolia and Base Sepolia",
        "Learn pages on exchanges, wallets and spotting scams",
        "A Python layer with its own tests, and a TypeScript fallback for each feature",
        "English and Indonesian versions with a toggle",
      ],
      id: [
        "Halaman pasar dan trade dengan grafik candlestick dan indikator",
        "Paper trading dengan saldo virtual 10.000 USDT yang disimpan di browser",
        "Swap yang dihitung dengan rumus constant-product, dan kalkulator pendapatan",
        "Tampilan wallet testnet read-only untuk Ethereum Sepolia dan Base Sepolia",
        "Halaman belajar tentang exchange, wallet, dan mengenali penipuan",
        "Lapisan Python dengan tes sendiri, dan cadangan TypeScript untuk setiap fitur",
        "Versi bahasa Inggris dan Indonesia dengan toggle",
      ],
    },
    outcome: {
      en: "The demo is live and says so plainly, starting with a banner at the top of the site that reads demo mode, no real funds.",
      id: "Demo ini aktif dan menyatakannya dengan jelas, dimulai dari banner di bagian atas situs yang menyebut mode demo, tanpa dana sungguhan.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Lenis", "wagmi", "Python", "FastAPI"],
  },

  embun: {
    context: {
      en: "Embun presents itself as a natural soap brand from Bogor, West Java, selling bar and liquid soaps coloured only by pigments from nature. With a range of 77 soaps, the site had to read as a calm brand story and still make a large catalog easy to enter.",
      id: "Embun memperkenalkan diri sebagai brand sabun alami dari Bogor, Jawa Barat, yang menjual sabun batang dan cair dengan warna yang hanya berasal dari pigmen alam. Dengan 77 jenis sabun, situsnya harus terbaca sebagai cerita brand yang tenang dan tetap membuat katalog besar mudah dimasuki.",
    },
    approach: {
      en: "The story starts with what touches the skin: plant oils, real botanicals and colours such as turmeric, spirulina, butterfly pea, hibiscus, bamboo charcoal and undyed oat, each given its own place on the ingredients page. A featured collection of six soaps opens the catalog, and the process is shown as select, craft, test. The site is built with Next.js 15 and statically generates its routes. Scripts keep it honest: one checks that the English and Indonesian dictionaries match key by key, one fails on em dashes and banned placeholder wording, one requests every image (36 site photos and 77 product photos) and fails if any is gone, and one runs the type and lint checks together.",
      id: "Ceritanya dimulai dari apa yang menyentuh kulit: minyak nabati, bahan botani asli, dan warna seperti kunyit, spirulina, bunga telang, hibiscus, arang bambu, dan oat tanpa pewarna, masing-masing punya tempat sendiri di halaman bahan. Koleksi unggulan enam sabun membuka katalog, dan prosesnya ditampilkan sebagai pilih, buat, uji. Situs ini dibangun dengan Next.js 15 dan menghasilkan route-nya secara statis. Skrip menjaga kejujurannya: satu memeriksa bahwa kamus bahasa Inggris dan Indonesia cocok kunci demi kunci, satu gagal jika ada tanda pisah panjang atau kata placeholder terlarang, satu meminta setiap gambar (36 foto situs dan 77 foto produk) dan gagal jika ada yang hilang, dan satu menjalankan pemeriksaan tipe dan lint sekaligus.",
    },
    features: {
      en: [
        "Home, products, product detail, ingredients, process, quality, about and where-to-buy pages",
        "A range of 77 soaps with product photos",
        "An ingredients page built around plant pigments such as turmeric, spirulina and butterfly pea",
        "An instant English and Indonesian switch, checked by a script for matching keys",
        "A script that requests every site and product image",
        "Canonical URLs, a sitemap, robots file and structured data",
      ],
      id: [
        "Halaman beranda, produk, detail produk, bahan, proses, kualitas, tentang, dan tempat membeli",
        "Rangkaian 77 sabun dengan foto produk",
        "Halaman bahan yang dibangun di sekitar pigmen tumbuhan seperti kunyit, spirulina, dan bunga telang",
        "Pergantian bahasa Inggris dan Indonesia seketika, diperiksa skrip untuk kecocokan kunci",
        "Skrip yang meminta setiap gambar situs dan produk",
        "URL kanonik, sitemap, file robots, dan data terstruktur",
      ],
    },
    outcome: {
      en: "The profile is live in two languages, with a catalog of 77 soaps and checks that fail loudly if a translation or an image goes missing.",
      id: "Profil ini aktif dalam dua bahasa, dengan katalog 77 sabun dan pemeriksaan yang gagal dengan jelas jika terjemahan atau gambar hilang.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Lenis", "Embla Carousel", "React Hook Form", "Zod"],
  },

  arunika: {
    context: {
      en: "Arunika presents itself as a smartphone maker in Cikarang, West Java, with two lines: Fajar for every day and Petir for play. The site leans on a point of view rather than a spec sheet: phones made slowly, in the best way.",
      id: "Arunika memperkenalkan diri sebagai pembuat ponsel di Cikarang, Jawa Barat, dengan dua lini: Fajar untuk sehari-hari dan Petir untuk bermain. Situsnya bersandar pada sudut pandang, bukan lembar spesifikasi: ponsel yang dibuat pelan-pelan, dengan cara terbaik.",
    },
    approach: {
      en: "The home page gives the idea one headline, then splits into the two families, each with its own character and its own page. The process is walked through from design and component sourcing to the sealed box, and quality is told through testing, under a headline about breaking phones so you do not have to. People who use the phones appear in a section on the home page, campaigns have their own page, and another section helps visitors find stores. The site runs on Next.js 16 with next-intl, English at the root and Indonesian under /id, Motion and Lenis for movement, and a contact form that sends email through Resend only when the keys are set.",
      id: "Beranda memberi gagasannya satu judul, lalu terbagi menjadi dua keluarga, masing-masing dengan karakter dan halamannya sendiri. Prosesnya ditelusuri dari desain dan pengadaan komponen sampai kotak tersegel, dan kualitas diceritakan lewat pengujian, di bawah judul tentang merusak ponsel agar pelanggan tidak perlu. Orang-orang yang memakai ponselnya tampil di satu bagian di beranda, kampanye punya halaman sendiri, dan bagian lain membantu pengunjung menemukan toko. Situs ini berjalan di Next.js 16 dengan next-intl, bahasa Inggris di root dan bahasa Indonesia di bawah /id, Motion dan Lenis untuk gerakan, dan formulir kontak yang mengirim email lewat Resend hanya ketika kuncinya diatur.",
    },
    features: {
      en: [
        "Home, phones, phone detail, gaming, process, quality, campaigns, about and contact pages",
        "Two phone families, Fajar and Petir, each with its own detail pages",
        "A process section from design to sealed box, and a quality page built around testing",
        "A store-finder section and a separate campaigns page",
        "English at the root and Indonesian under /id through next-intl",
        "A contact form that sends email through Resend when configured",
      ],
      id: [
        "Halaman beranda, ponsel, detail ponsel, gaming, proses, kualitas, kampanye, tentang, dan kontak",
        "Dua keluarga ponsel, Fajar dan Petir, masing-masing dengan halaman detailnya",
        "Bagian proses dari desain hingga kotak tersegel, dan halaman kualitas yang berpusat pada pengujian",
        "Bagian pencari toko dan halaman kampanye",
        "Bahasa Inggris di root dan bahasa Indonesia di bawah /id lewat next-intl",
        "Formulir kontak yang mengirim email lewat Resend jika dikonfigurasi",
      ],
    },
    outcome: {
      en: "The site is live in both languages, and the contact form degrades quietly when no email key is configured.",
      id: "Situs ini aktif dalam kedua bahasa, dan formulir kontaknya tetap tenang ketika kunci email belum dikonfigurasi.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Lenis", "next-intl", "Resend"],
  },

  "bad-kerning": {
    context: {
      en: "Bad Kerning presents itself as a streetwear label from Bandung whose whole idea is being wrong on purpose. The site had to look deliberately off while working properly: a typographic joke that never gets in the way of buying a hoodie.",
      id: "Bad Kerning memperkenalkan diri sebagai label streetwear dari Bandung yang seluruh idenya adalah sengaja salah. Situsnya harus terlihat sengaja janggal sambil tetap berfungsi dengan benar: lelucon tipografi yang tidak pernah menghalangi orang membeli hoodie.",
    },
    approach: {
      en: "I built it with no framework: plain HTML pages, CSS and native ES modules, with GSAP vendored locally. Clean free photos of plain garments do not exist, so every garment base is a flat SVG drawing and a print renderer lays HTML and CSS artwork on top, which lets all 24 products appear in every listed colourway. The hero wordmark has bad kerning that fixes itself, briefly, when the mouse moves, and stickers such as NOT FINAL and TEMP stay in English in the Indonesian version because they are part of the look. Orders end as a WhatsApp message. The header and footer fill in from a module before first paint, into placeholders with reserved heights so nothing shifts, and the fonts are self-hosted. A handover note lists every value to replace before launch, including the WhatsApp number, which is still a placeholder.",
      id: "Saya membangunnya tanpa framework: halaman HTML murni, CSS, dan modul ES native, dengan GSAP yang disertakan secara lokal. Foto bersih gratis untuk garmen polos tidak ada, jadi setiap dasar garmen adalah gambar SVG datar dan sebuah renderer cetak menumpuk karya HTML dan CSS di atasnya, sehingga ke-24 produk bisa tampil di setiap pilihan warna. Wordmark di hero punya kerning buruk yang memperbaiki dirinya sendiri, sebentar, ketika mouse bergerak, dan stiker seperti NOT FINAL dan TEMP tetap berbahasa Inggris di versi Indonesia karena menjadi bagian dari tampilan. Pesanan berakhir sebagai pesan WhatsApp. Header dan footer diisi oleh sebuah modul sebelum paint pertama, ke dalam placeholder dengan tinggi yang sudah dipesan agar tidak ada yang bergeser, dan fontnya di-host sendiri. Catatan serah terima mendaftar setiap nilai yang harus diganti sebelum peluncuran, termasuk nomor WhatsApp yang masih berupa placeholder.",
    },
    features: {
      en: [
        "Home, shop, product, drops, lookbook, journal, article, about, info, contact, cart, legal and 404 pages",
        "24 products with per-colourway, per-size stock, each drawn as an SVG garment with a print layer",
        "A drop countdown and a next-drop value kept in one config file",
        "Cart and ordering by WhatsApp message",
        "English by default and Indonesian on toggle, with decorative text left in English on purpose",
        "Product and article structured data generated in JavaScript",
        "Self-hosted fonts and a header and footer that load without layout shift",
      ],
      id: [
        "Halaman beranda, toko, produk, drop, lookbook, jurnal, artikel, tentang, info, kontak, keranjang, legal, dan 404",
        "24 produk dengan stok per warna dan per ukuran, masing-masing digambar sebagai garmen SVG dengan lapisan cetak",
        "Hitung mundur drop dan nilai drop berikutnya yang disimpan di satu file konfigurasi",
        "Keranjang dan pemesanan lewat pesan WhatsApp",
        "Bahasa Inggris sebagai bawaan dan bahasa Indonesia lewat toggle, dengan teks dekoratif sengaja dibiarkan berbahasa Inggris",
        "Data terstruktur produk dan artikel yang dihasilkan di JavaScript",
        "Font yang di-host sendiri serta header dan footer yang dimuat tanpa pergeseran layout",
      ],
    },
    outcome: {
      en: "The store is live and works end to end as a static site, and its handover notes record a production check and everything left to replace.",
      id: "Tokonya aktif dan bekerja dari ujung ke ujung sebagai situs statis, dan catatan serah terimanya memuat pemeriksaan produksi serta semua yang masih harus diganti.",
    },
    stack: ["HTML", "CSS", "JavaScript", "GSAP"],
  },

  hanasari: {
    context: {
      en: "Hanasari presents itself as a Japanese-Indonesian restaurant in Senopati, Jakarta, cooking washoku technique with Nusantara spice and running an eight-seat omakase counter. The site had to sell a mood and answer practical questions: what is on the menu, can I book, and what the kitchen does and does not serve.",
      id: "Hanasari memperkenalkan diri sebagai restoran Jepang-Indonesia di Senopati, Jakarta, yang memasak dengan teknik washoku dan rempah Nusantara serta punya meja omakase delapan kursi. Situsnya harus menjual suasana dan menjawab pertanyaan praktis: apa isi menunya, bisakah saya memesan, dan apa yang disajikan dan tidak disajikan dapurnya.",
    },
    approach: {
      en: "The home page opens with one idea, Wa meets Nusantara, then a ribbon of ingredients (sambal matah, yuzu, kecap manis, dashi, shiso, kecombrang) and six signature dishes that each keep a Japanese method and an Indonesian heart, such as gyoza rendang and soto ramen. An omakase page covers the eight-course, eight-seat counter, a story section follows dashi, spice, rice and citrus, and a private dining page takes group enquiries. The reservation and private-dining forms hand off to WhatsApp, using a number set as an environment variable, and a reserve bar stays within reach on mobile. The hero states plainly that the kitchen is pork-free and serves no alcohol. It is built with Next.js, next-intl, Motion and Lenis, with a script that checks the English and Indonesian message files.",
      id: "Beranda dibuka dengan satu gagasan, Wa meets Nusantara, lalu pita bahan (sambal matah, yuzu, kecap manis, dashi, shiso, kecombrang) dan enam hidangan andalan yang masing-masing menjaga metode Jepang dan hati Indonesia, seperti gyoza rendang dan soto ramen. Halaman omakase membahas meja delapan hidangan dan delapan kursi, satu bagian cerita mengikuti dashi, rempah, nasi, dan jeruk, dan halaman private dining menerima pertanyaan kelompok. Formulir reservasi dan private dining diteruskan ke WhatsApp, memakai nomor yang diatur sebagai environment variable, dan bar reservasi tetap mudah dijangkau di ponsel. Hero menyatakan terang-terangan bahwa dapurnya bebas babi dan tidak menyajikan alkohol. Dibangun dengan Next.js, next-intl, Motion, dan Lenis, dengan skrip yang memeriksa file pesan bahasa Inggris dan Indonesia.",
    },
    features: {
      en: [
        "Home, menu, omakase, story, gallery, private dining and reserve pages",
        "Six signature dishes that pair a Japanese method with an Indonesian flavour",
        "An omakase page for the eight-seat counter",
        "Reservation and private-dining forms that hand off to WhatsApp",
        "A reserve bar that stays within reach on mobile",
        "English and Indonesian through next-intl, checked by a script",
      ],
      id: [
        "Halaman beranda, menu, omakase, cerita, galeri, private dining, dan reservasi",
        "Enam hidangan andalan yang memadukan metode Jepang dengan rasa Indonesia",
        "Halaman omakase untuk meja delapan kursi",
        "Formulir reservasi dan private dining yang diteruskan ke WhatsApp",
        "Bar reservasi yang tetap mudah dijangkau di ponsel",
        "Bahasa Inggris dan Indonesia lewat next-intl, diperiksa oleh skrip",
      ],
    },
    outcome: {
      en: "The site is live and answers the three questions a diner has before booking: what is served, what is excluded, and how to reserve.",
      id: "Situs ini aktif dan menjawab tiga pertanyaan tamu sebelum memesan: apa yang disajikan, apa yang tidak, dan bagaimana cara reservasi.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Lenis", "next-intl"],
  },

  "nadi-athletic-club": {
    context: {
      en: "NADI presents itself as an athletic club on Jalan Gunawarman in South Jakarta: serious strength coaching, a reformer Pilates studio, a women-only floor, a recovery suite and a fuel bar, across five floors. Its audience is busy people who train before or after the office, so the site is built around time.",
      id: "NADI memperkenalkan diri sebagai klub atletik di Jalan Gunawarman, Jakarta Selatan: pelatihan kekuatan yang serius, studio Pilates reformer, lantai khusus perempuan, ruang pemulihan, dan fuel bar, di lima lantai. Audiensnya adalah orang sibuk yang berlatih sebelum atau sesudah kantor, jadi situsnya dibangun di sekitar waktu.",
    },
    approach: {
      en: "The home page is organised as a day at the club, from doors open to evening recovery, with a five-floor section that pins as you scroll and a line showing today's opening hours and how busy the club usually is. Classes, trainers, events and journal posts each have their own detail pages. Membership is shown as three tiers (Core, Plus, Signature) with a comparison, and the three-day free trial has its own form that hands off to WhatsApp. The Fuel Bar has a page with an order tray. The look is bold condensed type with one italic accent word in each headline, driven by Motion and Lenis, with English and Indonesian through next-intl.",
      id: "Beranda disusun sebagai satu hari di klub, dari pintu dibuka hingga pemulihan malam, dengan bagian lima lantai yang menempel saat di-scroll dan satu baris yang menunjukkan jam buka hari ini serta seberapa ramai klub biasanya. Kelas, pelatih, acara, dan artikel jurnal masing-masing punya halaman detail. Keanggotaan ditampilkan sebagai tiga paket (Core, Plus, Signature) dengan perbandingan, dan uji coba gratis tiga hari punya formulir sendiri yang diteruskan ke WhatsApp. Fuel Bar punya halaman dengan nampan pesanan. Tampilannya memakai huruf tebal yang rapat dengan satu kata aksen italic di setiap judul, digerakkan Motion dan Lenis, dengan bahasa Inggris dan Indonesia lewat next-intl.",
    },
    features: {
      en: [
        "More than twenty routes, with classes, trainers, events and journal posts each on their own detail pages",
        "A home page that pins a five-floor section while you scroll",
        "Three membership tiers with a comparison",
        "A free-trial form that hands off to WhatsApp",
        "A Fuel Bar page with an order tray",
        "Pages for a women-only floor, corporate memberships and house rules",
        "English and Indonesian through next-intl",
      ],
      id: [
        "Lebih dari dua puluh route, dengan kelas, pelatih, acara, dan artikel jurnal masing-masing di halaman detailnya",
        "Beranda dengan bagian lima lantai yang menempel saat di-scroll",
        "Tiga paket keanggotaan dengan perbandingan",
        "Formulir uji coba gratis yang diteruskan ke WhatsApp",
        "Halaman Fuel Bar dengan nampan pesanan",
        "Halaman untuk lantai khusus perempuan, keanggotaan korporat, dan aturan klub",
        "Bahasa Inggris dan Indonesia lewat next-intl",
      ],
    },
    outcome: {
      en: "The site is live and built to answer one question quickly: where does this fit into my day.",
      id: "Situs ini aktif dan dibangun untuk menjawab satu pertanyaan dengan cepat: di mana ini cocok dalam hari saya.",
    },
    stack: ["Next.js", "TypeScript", "Motion", "Lenis", "next-intl"],
  },

  lunetra: {
    context: {
      en: "Lunetra presents itself as an opticians and eyewear atelier on Jalan Senopati in Jakarta, open since 1998, with unhurried eye exams and hand-finished frames. Eyewear is bought by looking and trying, so the site had to make browsing frames feel like standing in the shop.",
      id: "Lunetra memperkenalkan diri sebagai optik dan atelier kacamata di Jalan Senopati, Jakarta, sejak 1998, dengan pemeriksaan mata yang tidak terburu-buru dan bingkai yang difinishing tangan. Kacamata dibeli dengan melihat dan mencoba, jadi situsnya harus membuat menjelajahi bingkai terasa seperti berdiri di dalam toko.",
    },
    approach: {
      en: "I built it as a static multi-page site with Vite, plain HTML, CSS and JavaScript, and GSAP for motion, with clean URLs such as /frames/kawi working in development too. The fourteen frames are grouped into four collections (Heritage, Lumen, Solstice, Studio), and a frame finder page and a lenses page with prices help a visitor choose. The eye exam is told as talk, test, fit, and appointments are made on a dedicated page. Every business detail, from the WhatsApp number to the opening hours, lives in one config file. The hours drive an open-now status, and any contact field left empty is hidden across the site, so nothing links to a dead number. Every piece of text has English and Indonesian versions with identical keys, and the writing rules are checked before every build.",
      id: "Saya membangunnya sebagai situs multi-halaman statis dengan Vite, HTML, CSS, dan JavaScript murni, serta GSAP untuk gerakan, dengan URL bersih seperti /frames/kawi yang juga berjalan di mode pengembangan. Empat belas bingkai dikelompokkan dalam empat koleksi (Heritage, Lumen, Solstice, Studio), dan halaman pencari bingkai serta halaman lensa dengan harga membantu pengunjung memilih. Pemeriksaan mata diceritakan sebagai bicara, uji, pasang, dan janji temu dibuat di halaman tersendiri. Setiap detail bisnis, dari nomor WhatsApp hingga jam buka, ada di satu file konfigurasi. Jam buka menggerakkan status buka sekarang, dan kolom kontak yang dikosongkan disembunyikan di seluruh situs, sehingga tidak ada tautan ke nomor yang mati. Setiap teks punya versi bahasa Inggris dan Indonesia dengan kunci yang identik, dan aturan penulisan diperiksa sebelum setiap build.",
    },
    features: {
      en: [
        "Home, collections, frame detail, frame finder, eye care, lenses, atelier, journal, visit, appointment, privacy and terms pages",
        "Fourteen frames in four collections, each with a detail page",
        "A frame finder page and a lenses page with prices",
        "Opening hours that drive an open-now status",
        "Contact details in one config file, with empty fields hidden everywhere",
        "English and Indonesian text with identical keys, checked before every build",
      ],
      id: [
        "Halaman beranda, koleksi, detail bingkai, pencari bingkai, perawatan mata, lensa, atelier, jurnal, kunjungan, janji temu, privasi, dan ketentuan",
        "Empat belas bingkai di empat koleksi, masing-masing dengan halaman detail",
        "Halaman pencari bingkai dan halaman lensa dengan harga",
        "Jam buka yang menggerakkan status buka sekarang",
        "Detail kontak di satu file konfigurasi, dengan kolom kosong disembunyikan di mana-mana",
        "Teks bahasa Inggris dan Indonesia dengan kunci identik, diperiksa sebelum setiap build",
      ],
    },
    outcome: {
      en: "The site is live as a static build with no server. The WhatsApp number in its config is still empty, which the repository marks as a value to fill in.",
      id: "Situs ini aktif sebagai build statis tanpa server. Nomor WhatsApp di konfigurasinya masih kosong, yang oleh repositori ditandai sebagai nilai yang harus diisi.",
    },
    stack: ["Vite", "HTML", "CSS", "JavaScript", "GSAP"],
  },

  "aurea-clinic": {
    context: {
      en: "Aurea presents itself as a doctor-led aesthetic and dermatology clinic in South Jakarta. People choosing a clinic worry about being sold things they do not need, so the whole site is built around calm and listening first.",
      id: "Aurea memperkenalkan diri sebagai klinik estetika dan dermatologi yang dipimpin dokter di Jakarta Selatan. Orang yang memilih klinik khawatir ditawari hal yang tidak mereka butuhkan, jadi seluruh situs dibangun di sekitar ketenangan dan mendengarkan lebih dulu.",
    },
    approach: {
      en: "The copy says it plainly: every plan begins with a conversation, with no pressure and no packages you do not need. The site lists six treatment areas and then explains a first visit as consultation, skin analysis, your plan, and treatment with follow-up. Doctors have their own page, and a journal covers routines, sunscreen in the tropics and what to expect before a first laser session. Technically it is a Flask 3 app with Jinja2, plain CSS variables and small vanilla JavaScript modules, with no build step and no database: all content lives in bilingual Python modules, and the app deploys on Vercel as a single function. Contact details come from environment variables. When no WhatsApp number is set, the floating button is hidden and every booking button leads to the contact page instead of a dead link, and the site sends noindex until indexing is switched on. I also added metric-matched fallback fonts so the layout does not jump when the real fonts arrive.",
      id: "Teksnya menyatakannya terang-terangan: setiap rencana dimulai dari percakapan, tanpa tekanan dan tanpa paket yang tidak Anda butuhkan. Situs mendaftar enam bidang perawatan lalu menjelaskan kunjungan pertama sebagai konsultasi, analisis kulit, rencana Anda, serta perawatan dan tindak lanjut. Dokter punya halaman sendiri, dan jurnal membahas rutinitas, tabir surya di daerah tropis, dan apa yang perlu diketahui sebelum sesi laser pertama. Secara teknis ini adalah aplikasi Flask 3 dengan Jinja2, variabel CSS biasa, dan modul JavaScript vanilla yang kecil, tanpa langkah build dan tanpa database: seluruh konten ada di modul Python dwibahasa, dan aplikasinya di-deploy di Vercel sebagai satu function. Detail kontak datang dari environment variable. Ketika nomor WhatsApp belum diatur, tombol melayang disembunyikan dan setiap tombol pemesanan mengarah ke halaman kontak, bukan tautan mati, dan situs mengirim noindex sampai pengindeksan dinyalakan. Saya juga menambahkan font cadangan dengan metrik yang sama agar layout tidak melompat ketika font aslinya tiba.",
    },
    features: {
      en: [
        "Home, treatments, treatment detail, doctors, about, journal, article, contact and privacy pages",
        "Six treatment areas, from medical facials and laser to injectables, contouring, acne and scar care, and skin boosters",
        "A first-visit explanation in four steps",
        "Booking that uses WhatsApp when a number is set and falls back to email or the contact page",
        "noindex by default until indexing is enabled",
        "English by default and Indonesian under /id, with metric-matched fallback fonts",
      ],
      id: [
        "Halaman beranda, perawatan, detail perawatan, dokter, tentang, jurnal, artikel, kontak, dan privasi",
        "Enam bidang perawatan, dari facial medis dan laser hingga injectable, contouring, perawatan jerawat dan bekas luka, serta skin booster",
        "Penjelasan kunjungan pertama dalam empat langkah",
        "Pemesanan yang memakai WhatsApp ketika nomor diatur dan beralih ke email atau halaman kontak jika tidak",
        "noindex secara bawaan sampai pengindeksan diaktifkan",
        "Bahasa Inggris sebagai bawaan dan bahasa Indonesia di bawah /id, dengan font cadangan berbasis metrik",
      ],
    },
    outcome: {
      en: "The site is live and handles missing configuration gracefully, and it stays out of search engines until indexing is deliberately turned on.",
      id: "Situs ini aktif dan menangani konfigurasi yang belum ada dengan baik, serta tidak muncul di mesin pencari sampai pengindeksan sengaja dinyalakan.",
    },
    stack: ["Python", "Flask", "Jinja2", "CSS", "JavaScript"],
  },

  "pilar-material": {
    context: {
      en: "Pilar Material presents itself as a building materials store in Cikupa, Tangerang, supplying cement, rebar, timber, roofing, paint and more to homes, schools, offices and housing projects. A contractor does not check out a basket: they send a list and ask for a price.",
      id: "Pilar Material memperkenalkan diri sebagai toko bahan bangunan di Cikupa, Tangerang, yang memasok semen, besi beton, kayu, atap, cat, dan lainnya untuk rumah, sekolah, kantor, dan proyek perumahan. Kontraktor tidak melakukan checkout keranjang: mereka mengirim daftar dan meminta harga.",
    },
    approach: {
      en: "The site is built around that behaviour. It lists 85 products in 12 categories and six project types, from family homes to warehouses, each with a checklist of materials. A wall and concrete calculator estimates quantities, with its coefficients and their sources kept in the code. Visitors build a quote list in the browser, kept in localStorage, and it leaves the browser only as a WhatsApp message. There is no database, no login and no analytics. It is a Flask 3 app with Jinja2, hand-written CSS and vanilla JavaScript and no Node build step, with English at the root and Indonesian under /id. A test suite checks routes, content and a set of hard rules, including that the only third-party origin is the font host, and I later self-hosted the typeface. The README states that the phone and WhatsApp numbers are not working lines and the prices are indicative, to be replaced with the owner's.",
      id: "Situs ini dibangun di sekitar perilaku itu. Situs mendaftar 85 produk di 12 kategori dan enam jenis proyek, dari rumah keluarga hingga gudang, masing-masing dengan daftar periksa material. Kalkulator dinding dan beton memperkirakan kuantitas, dengan koefisien beserta sumbernya tersimpan di kode. Pengunjung menyusun daftar penawaran di browser, disimpan di localStorage, dan daftar itu hanya keluar dari browser sebagai pesan WhatsApp. Tidak ada database, tidak ada login, dan tidak ada analitik. Ini adalah aplikasi Flask 3 dengan Jinja2, CSS tulisan tangan, dan JavaScript vanilla tanpa langkah build Node, dengan bahasa Inggris di root dan bahasa Indonesia di bawah /id. Suite tes memeriksa route, konten, dan sekumpulan aturan keras, termasuk bahwa satu-satunya origin pihak ketiga adalah host font, dan kemudian saya meng-host typeface-nya sendiri. README menyatakan bahwa nomor telepon dan WhatsApp bukan saluran yang aktif dan harganya hanya indikatif, untuk diganti dengan milik pemilik.",
    },
    features: {
      en: [
        "Home, products, category, product, solutions, calculator, services, quote, about, contact and privacy pages",
        "85 products in 12 categories",
        "Six project types, each with a material checklist",
        "A wall and concrete calculator with documented coefficients",
        "A quote list kept in the browser that is sent as a WhatsApp message",
        "English at the root and Indonesian under /id, with a test suite for routes and content",
      ],
      id: [
        "Halaman beranda, produk, kategori, produk, solusi, kalkulator, layanan, penawaran, tentang, kontak, dan privasi",
        "85 produk di 12 kategori",
        "Enam jenis proyek, masing-masing dengan daftar periksa material",
        "Kalkulator dinding dan beton dengan koefisien yang terdokumentasi",
        "Daftar penawaran yang disimpan di browser dan dikirim sebagai pesan WhatsApp",
        "Bahasa Inggris di root dan bahasa Indonesia di bawah /id, dengan suite tes untuk route dan konten",
      ],
    },
    outcome: {
      en: "The site is live and matches how a builder actually buys, with a list, a quantity estimate and a quote. Its prices are indicative and its contact numbers are placeholders by design.",
      id: "Situs ini aktif dan sesuai dengan cara pembangun benar-benar membeli, dengan daftar, perkiraan kuantitas, dan penawaran. Harganya indikatif dan nomor kontaknya adalah placeholder yang disengaja.",
    },
    stack: ["Python", "Flask", "Jinja2", "CSS", "JavaScript"],
  },

  panenku: {
    context: {
      en: "Panenku presents itself as a farm-to-table produce marketplace for Jabodetabek: vegetables harvested within a day and delivered in crates to events, schools and offices, with fair prices for farmers. Its buyers are kitchens placing one-off or recurring orders, not shoppers filling a basket.",
      id: "Panenku memperkenalkan diri sebagai marketplace hasil panen dari kebun ke meja untuk Jabodetabek: sayuran yang dipanen dalam sehari dan diantar dalam peti ke acara, sekolah, dan kantor, dengan harga yang adil bagi petani. Pembelinya adalah dapur yang memesan sekali atau berulang, bukan pembeli yang mengisi keranjang.",
    },
    approach: {
      en: "The site is organised by who is buying, with a page each for events, schools and offices, a farmers page and a produce page. A four-step explanation (tell us what you need, we confirm with the farm, harvested and packed, delivered) replaces a checkout. The request form validates its input and then redirects to WhatsApp, and the tests cover both behaviours in both languages. It is a Flask 3 app with server-rendered Jinja templates. Tailwind CSS is compiled once with the standalone CLI and the output is committed, so Vercel needs no build step. Fraunces and DM Sans are self-hosted with metric-matched fallbacks, photos come from a script that crops them to WebP and writes blur placeholders, and produce, farmers and testimonials live in JSON files.",
      id: "Situs ini disusun menurut siapa yang membeli, dengan satu halaman untuk acara, sekolah, dan kantor, halaman petani, dan halaman hasil panen. Penjelasan empat langkah (beri tahu kebutuhan Anda, kami konfirmasi ke kebun, dipanen dan dikemas, diantar) menggantikan checkout. Formulir permintaan memvalidasi isinya lalu mengalihkan ke WhatsApp, dan tes mencakup kedua perilaku itu di kedua bahasa. Ini adalah aplikasi Flask 3 dengan template Jinja yang dirender di server. Tailwind CSS dikompilasi sekali dengan CLI standalone dan hasilnya di-commit, sehingga Vercel tidak membutuhkan langkah build. Fraunces dan DM Sans di-host sendiri dengan font cadangan berbasis metrik, foto datang dari skrip yang memotongnya menjadi WebP dan menulis placeholder blur, dan hasil panen, petani, dan testimoni tersimpan di file JSON.",
    },
    features: {
      en: [
        "Home, produce, events, schools, offices, farmers, about, contact and request pages",
        "A request form with server validation and a WhatsApp redirect",
        "A four-step explanation that replaces a checkout",
        "Compiled Tailwind CSS committed to the repository, so Vercel needs no build step",
        "Self-hosted fonts with metric-matched fallbacks",
        "English and Indonesian, with scripts that check matching keys and that every page renders in both",
      ],
      id: [
        "Halaman beranda, hasil panen, acara, sekolah, kantor, petani, tentang, kontak, dan permintaan",
        "Formulir permintaan dengan validasi di server dan pengalihan ke WhatsApp",
        "Penjelasan empat langkah yang menggantikan checkout",
        "Tailwind CSS terkompilasi yang di-commit ke repositori, sehingga Vercel tidak butuh langkah build",
        "Font yang di-host sendiri dengan font cadangan berbasis metrik",
        "Bahasa Inggris dan Indonesia, dengan skrip yang memeriksa kecocokan kunci dan bahwa setiap halaman bisa dirender di keduanya",
      ],
    },
    outcome: {
      en: "The site is live and turns a farm-to-kitchen order into a validated request and a WhatsApp message, with nothing in between to maintain.",
      id: "Situs ini aktif dan mengubah pesanan dari kebun ke dapur menjadi permintaan yang tervalidasi dan pesan WhatsApp, tanpa apa pun di antaranya yang perlu dirawat.",
    },
    stack: ["Python", "Flask", "Jinja2", "Tailwind CSS", "GSAP"],
  },

  bytewright: {
    context: {
      en: "Bytewright presents itself as a computer shop in Gading Serpong, Tangerang, selling ready-made and custom PCs, parts and Macs, with a service desk. People buy a PC by asking someone they trust, so the site is organised like a conversation that starts with one question: what do you need it for?",
      id: "Bytewright memperkenalkan diri sebagai toko komputer di Gading Serpong, Tangerang, yang menjual PC jadi dan rakitan, suku cadang, dan Mac, dengan meja servis. Orang membeli PC dengan bertanya kepada orang yang dipercaya, jadi situsnya disusun seperti percakapan yang dimulai dari satu pertanyaan: untuk apa Anda membutuhkannya?",
    },
    approach: {
      en: "The home page starts there, with builds named for their use (Play Core, Play Pro, Create Plus, Learn Code, Work Pro) next to a MacBook Air, and a custom-build route for people who want something specific. A service page tells the repair process in seven steps, with a written quote promised before any repair, and journal articles give plain guides such as how to choose a power supply without overpaying. There is no backend, database or login. WhatsApp is the way to order or ask, and when no number is configured the buttons fall back to the message form on the contact page, so the site builds and runs with no environment variables at all. It is built with Next.js, framer-motion, Lenis and next-intl, with Vercel Analytics added.",
      id: "Beranda dimulai dari sana, dengan build yang dinamai menurut kegunaannya (Play Core, Play Pro, Create Plus, Learn Code, Work Pro) di samping sebuah MacBook Air, dan jalur rakitan khusus untuk orang yang menginginkan sesuatu yang spesifik. Halaman servis menceritakan proses perbaikan dalam tujuh langkah, dengan penawaran tertulis yang dijanjikan sebelum perbaikan apa pun, dan artikel jurnal memberi panduan sederhana seperti cara memilih power supply tanpa membayar berlebihan. Tidak ada backend, database, atau login. WhatsApp adalah cara memesan atau bertanya, dan ketika nomor belum dikonfigurasi, tombolnya beralih ke formulir pesan di halaman kontak, sehingga situs bisa di-build dan berjalan tanpa environment variable sama sekali. Dibangun dengan Next.js, framer-motion, Lenis, dan next-intl, dengan Vercel Analytics ditambahkan.",
    },
    features: {
      en: [
        "Home, builds, build detail, Mac, parts, custom, service, journal, article, about, policies and contact pages",
        "Ready-made builds named by use, plus a custom-build page",
        "A seven-step service page with a written quote promised before repair",
        "Journal articles written as plain guides",
        "WhatsApp ordering with a fallback to the contact form when no number is set",
        "English and Indonesian through next-intl, with no backend at all",
      ],
      id: [
        "Halaman beranda, build, detail build, Mac, suku cadang, rakitan khusus, servis, jurnal, artikel, tentang, kebijakan, dan kontak",
        "Build jadi yang dinamai menurut kegunaan, plus halaman rakitan khusus",
        "Halaman servis tujuh langkah dengan penawaran tertulis yang dijanjikan sebelum perbaikan",
        "Artikel jurnal yang ditulis sebagai panduan sederhana",
        "Pemesanan lewat WhatsApp dengan cadangan ke formulir kontak ketika nomor belum diatur",
        "Bahasa Inggris dan Indonesia lewat next-intl, tanpa backend sama sekali",
      ],
    },
    outcome: {
      en: "The site is live and runs with no configuration, which makes it easy to hand over: add a WhatsApp number and an email address and the rest is already in place.",
      id: "Situs ini aktif dan berjalan tanpa konfigurasi, sehingga mudah diserahkan: tambahkan nomor WhatsApp dan alamat email, dan sisanya sudah tersedia.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis", "next-intl"],
  },
};
