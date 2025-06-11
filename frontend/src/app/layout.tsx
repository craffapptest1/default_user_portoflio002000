import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/hooks/useAuth";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio002000 - Personal Portfolio",
  description: "A very small personal portfolio showcasing skills, projects, and professional background. Discover my work, expertise, and professional journey.",
  keywords: "portfolio, web developer, projects, skills, resume, professional",
  author: "Portfolio002000",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 antialiased`}
      >
        <AuthProvider>
          <Header />
          <main className="flex-grow transition-all duration-300 ease-in-out">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="animate-fade-in">
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}