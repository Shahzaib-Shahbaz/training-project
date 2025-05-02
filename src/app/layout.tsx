// src/app/layout.tsx
"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./[locale]/components/navbar";
import "./utils/i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Providers from "./[locale]/providers"; // Import the Providers

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    // Extract language from URL
    const segments = pathname.split("/");
    const lang = segments[1]; // First segment should be the language

    if (lang && ["en", "id"].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [pathname]);

  return (
    <html lang={i18n.language || "en"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <I18nextProvider i18n={i18n}>
            <Navbar />
            <div className="content">{children}</div>
          </I18nextProvider>
        </Providers>
      </body>
    </html>
  );
}
