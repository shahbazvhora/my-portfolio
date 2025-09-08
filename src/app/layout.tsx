import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import Header from '@/app/components/Header';
import { ThemeProvider } from '@/context/ThemeContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Mo. Shahbaz A Vhora - Senior Software Engineer',
  description: 'Experienced Full Stack .NET Developer with over 7+ years in designing, implementing, and maintaining scalable web applications and services.',
  keywords: 'Full Stack Developer, .NET, React, Angular, TypeScript, Senior Software Engineer',
  authors: [{ name: 'Mo. Shahbaz A Vhora' }],
  openGraph: {
    title: 'Mo. Shahbaz A Vhora - Senior Software Engineer',
    description: 'Experienced Full Stack .NET Developer with 7+ years of experience',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}