
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${profile.name}`,
    default: `${profile.name} - ${profile.role}`,
  },
  description: profile.subheadline,
  metadataBase: new URL("https://brunoreis.dev"), // Placeholder URL
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: `${profile.name} - ${profile.role}`,
    description: profile.subheadline,
    siteName: profile.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-[#030712] text-gray-100 selection:bg-blue-500/30 selection:text-white`}>
        {/* Global Background Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        </div>

        <Navbar />
        <main className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-transform hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] focus:outline-none animate-pulse"
            aria-label="Falar no WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
        </div>
      </body>
    </html>
  );
}
