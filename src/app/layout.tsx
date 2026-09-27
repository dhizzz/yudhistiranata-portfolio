import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";

// Newsreader: a text face drawn for editorial reading, gives headings the formal, printed voice.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

// IBM Plex Sans: engineered and corporate, keeps body copy sober next to the serif.
const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// IBM Plex Mono: only for domains and index numbers, which are literal URLs and codes.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Yudhistira Nata | Web Developer",
    template: "%s | Yudhistira Nata",
  },
  description:
    "Portfolio of Yudhistira Nata: websites for e-commerce, company profiles, food and beverage brands, and immersive 3D experiences.",
};

// Applies the saved or system theme before first paint to avoid a light flash in dark mode.
const themeScript = `(function(){try{var t=localStorage.getItem("portfolio-theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Providers>
          <SkipLink />
          <Navbar />
          <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
