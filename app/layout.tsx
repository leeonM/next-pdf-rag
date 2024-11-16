import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans } from 'next/font/google';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  // Optional: customize the variable name
  variable: '--font-dm-sans',
  // Optional: adjust display behavior
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Link",
  description: `Your AI tour guide, recommending black events around the world. Find out what to do or where to go
  in cities like London, Paris, Dubai, Berlin, Amsterdam and more, find black people wherever you are.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
