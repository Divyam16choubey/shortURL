import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navabr from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "shortURL - Short links. Smarter sharing.",
  description: "URL Shortening Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navabr />
        {children}
      </body>
    </html>
  );
}
