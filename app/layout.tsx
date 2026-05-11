import type { Metadata } from "next";
import { Inter, Noto_Sans_Myanmar, Noto_Sans_JP } from "next/font/google";
import { LanguageProvider } from "@/app/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansMyanmar = Noto_Sans_Myanmar({
  variable: "--font-noto-myanmar",
  subsets: ["myanmar"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "THURIYA Japanese Education Centre | Myanmar's Bridge to Japan",
  description:
    "Expert guidance for Myanmar students on EJU preparation, Japanese language classes, school applications, and academic consulting for studying in Japan.",
  keywords: [
    "Japanese language school Myanmar",
    "EJU preparation Yangon",
    "study in Japan from Myanmar",
    "university application Japan",
    "THURIYA education centre",
  ],
  openGraph: {
    title: "THURIYA Japanese Education Centre",
    description: "Myanmar's trusted bridge to Japanese education.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansMyanmar.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
