import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Ahmed Khalid Profile",
  description:
    "Portfolio website showcasing modern web development skills with Next.js, React, and Three.js",
  keywords: [
    "portfolio",
    "web developer",
    "next.js",
    "react",
    "three.js",
    "frontend",
  ],
  authors: [{ name: "Ahmed Khalid" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PerformanceMonitor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
