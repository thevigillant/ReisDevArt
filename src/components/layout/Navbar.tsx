
"use client"
import * as React from "react"
import Link from "next/link"
import { Menu, X, Rocket } from "lucide-react"

import { profile } from "@/data/profile"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Serviços", href: "/servicos" },
        { name: "Portfólio", href: "/portfolio" },
        { name: "Sobre", href: "/sobre" },
        { name: "Contato", href: "/contato" },
    ]

    return (
        <header
            className={cn(
                "fixed top-4 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 max-w-7xl mx-auto rounded-2xl",
                scrolled
                    ? "bg-[#030712]/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>
                    {/* Abstract Logo */}
                    <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-tr from-white/10 to-transparent border border-white/10 group-hover:border-blue-500/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white relative z-10 transform group-hover:rotate-12 transition-transform duration-500">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
                        </svg>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-display font-medium text-lg tracking-[0.2em] text-white leading-none group-hover:text-blue-200 transition-colors duration-300">
                            BRUNO REIS
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-light mt-1.5 group-hover:text-white transition-colors duration-300 border-l border-blue-500 pl-2">
                            Engineering & Design
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative px-6 py-2 text-sm font-light tracking-wide text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="w-px h-6 bg-white/10 mx-2" />
                    <Button
                        href={profile.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white text-black hover:bg-blue-50 hover:text-blue-600 border-none font-medium px-6 py-2 tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300"
                    >
                        Iniciar Projeto
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={toggle}
                    className="md:hidden p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                >
                    {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-4 mx-2 p-6 bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-3xl flex flex-col gap-6 shadow-2xl md:hidden animate-in slide-in-from-top-4 fade-in duration-300 z-50">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg font-light tracking-wider text-gray-400 hover:text-white hover:pl-4 transition-all duration-300 py-3 border-b border-white/5 last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Button
                        href={profile.whatsapp}
                        target="_blank"
                        fullWidth
                        onClick={() => setIsOpen(false)}
                        className="bg-white text-black hover:bg-gray-200 border-none rounded-xl py-4 font-medium tracking-widest uppercase text-xs"
                    >
                        Iniciar Projeto
                    </Button>
                </div>
            )}
        </header>
    )
}
