
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
                "fixed top-0 z-50 w-full transition-all duration-300 border-b border-white/5",
                scrolled ? "bg-[#030712]/80 backdrop-blur-xl shadow-lg border-white/10" : "bg-transparent"
            )}
        >
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group select-none" onClick={() => setIsOpen(false)}>
                    <div className="relative bg-gradient-to-br from-blue-600 to-violet-600 p-2 rounded-xl group-hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] group-hover:scale-105 transition-all duration-300 border border-white/10">
                        <Rocket className="w-5 h-5 text-white drop-shadow-md" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 group-hover:to-white transition-colors leading-none tracking-tight">
                            Bruno Reis
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.15em] text-blue-400/90 font-semibold group-hover:text-blue-300 transition-colors mt-1">
                            Desenvolvedor & Designer
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        href={profile.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="sm"
                        className="shadow-[0_0_15px_-3px_rgba(59,130,246,0.4)] hover:shadow-[0_0_20px_0px_rgba(139,92,246,0.6)] border border-blue-500/30"
                    >
                        Orçamento
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button onClick={toggle} className="md:hidden p-2 text-gray-300 hover:text-white transition-colors">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl md:hidden animate-in slide-in-from-top-4 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-base font-medium text-gray-300 hover:text-blue-400 hover:pl-2 transition-all py-2 border-b border-white/5 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        href={profile.whatsapp}
                        target="_blank"
                        fullWidth
                        onClick={() => setIsOpen(false)}
                        className="mt-2 bg-gradient-to-r from-blue-600 to-violet-600 border-none"
                    >
                        Orçamento Rápido
                    </Button>
                </div>
            )}
        </header>
    )
}
