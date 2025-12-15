import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

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
  title: "U-Check – U-Wert-Messung für Verglasungen im Bestand",
  description:
    "U-Check ist ein mobiles Messsystem zur In-situ-Bewertung von 2- und 3-fach-Verglasungen. Warteliste mit Double-Opt-In.",
  metadataBase: new URL("https://u-check.online"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${space.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
