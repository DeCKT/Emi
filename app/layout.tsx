import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePageBackground from "./components/HomePageBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your App",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col overflow-x-clip">
        <HomePageBackground />
        <Navbar />
        <main className="max-w-[1350px] w-full h-auto px-3 mx-auto basis-0 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
