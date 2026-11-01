import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const sans = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans" });
const serif = Cormorant_Garamond({ subsets: ["latin", "latin-ext"], weight: ["400", "600"], variable: "--font-serif" });

export const metadata: Metadata = { title: `${site.name} – buffet-lounas, kokoustilat ja juhlat`, description: "Arkilounas, kokoustilat ja juhlatarjoilut." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
