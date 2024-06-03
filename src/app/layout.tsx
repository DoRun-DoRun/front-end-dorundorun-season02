import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_shared/_components/_layouts/header";
import Footer from "./_shared/_components/_layouts/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
