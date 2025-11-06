import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A flet shqip",
  description:
    "Një platformë interaktive për të mësuar dhe për të ndjerë gjuhën shqipe përmes historive, zërit dhe kulturës.",
  openGraph: {
    title: "A flet shqip",
    description:
      "Zhytesh në bukurinë e gjuhës shqipe me udhëzues interaktiv, ushtrime dhe poezi të përditësuar.",
    url: "https://agentic-e01d1f87.vercel.app",
    siteName: "A flet shqip",
    locale: "sq_AL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
