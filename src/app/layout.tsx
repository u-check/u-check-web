import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { WaitlistProvider } from "@/context/WaitlistContext";
import WaitlistModal from "@/components/WaitlistModal";
import CookieBanner from "@/components/CookieBanner";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "U-Check – U-Wert von Verglasungen im Bestand messen",
  description:
    "U-Check macht den Ist-U-Wert von 2-fach und 3-fach Verglasungen vor Ort messbar. Datengestützte Entscheidungen statt Tabellenwerten. Warteliste mit Double-Opt-In.",
  metadataBase: new URL("https://u-check.online"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${space.variable} ${inter.variable}`}>
      <body>
        <WaitlistProvider>
          {children}
          <WaitlistModal />
          <CookieBanner />
        </WaitlistProvider>
      </body>
    </html>
  );
}
