import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0B0F",
};

export const metadata: Metadata = {
  title: {
    default: "FIAT — Faso Info Art Technologie | Expert en Solutions Technologiques au Burkina Faso",
    template: "%s | FIAT Technologie",
  },
  description:
    "FIAT (Faso Info Art Technologie) est le leader burkinabè en réseaux Wi-Fi professionnels, vidéosurveillance solaire, automatismes, domotique et matériel informatique. Basé à Ouagadougou, déployé dans toute l'Afrique de l'Ouest.",
  keywords: [
    "technologie Burkina Faso",
    "réseau Wi-Fi Ouagadougou",
    "vidéosurveillance solaire Afrique",
    "équipement sécurité Burkina Faso",
    "intégration réseau Burkina Faso",
    "domotique Ouagadougou",
    "sécurité électronique Burkina",
    "investissement Burkina Faso",
    "surveillance chantier à distance",
    "contrôle accès biométrique Afrique",
    "FIAT technologie",
  ],
  authors: [{ name: "FASO INFO ART TECHNOLOGIE", url: "https://fiat-technologie.com" }],
  creator: "FIAT — Faso Info Art Technologie",
  publisher: "FIAT — Faso Info Art Technologie",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://fiat-technologie.com",
    siteName: "FIAT — Faso Info Art Technologie",
    title: "FIAT — Solutions Technologiques Premium au Burkina Faso",
    description:
      "Réseaux, vidéosurveillance solaire, automatismes et matériel informatique. La technologie qui sécurise vos investissements en Afrique.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "FIAT Technologie — Ouagadougou, Burkina Faso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIAT — Solutions Technologiques Premium au Burkina Faso",
    description:
      "Réseaux, vidéosurveillance solaire, automatismes et matériel informatique par FIAT.",
    images: ["/images/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased text-fiat-text">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
