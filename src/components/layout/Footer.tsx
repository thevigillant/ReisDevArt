
import Link from "next/link"
import { profile } from "@/data/profile"
import { Container } from "@/components/ui/Container"
import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#020617] py-16 text-gray-400">
            <Container className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start">
                <div className="space-y-6 max-w-sm">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                        <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">BrunoReis</span>.dev
                    </Link>
                    <p className="text-sm leading-relaxed text-gray-500">
                        {profile.subheadline}
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-colors">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-violet-400 transition-colors">
                            <Github size={20} />
                        </Link>
                        <Link href={profile.whatsapp} className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-green-400 transition-colors">
                            <MessageCircle size={20} />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 w-full md:w-auto">
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Serviços</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/servicos" className="hover:text-blue-400 transition-colors">Landing Pages</Link></li>
                            <li><Link href="/servicos" className="hover:text-blue-400 transition-colors">Sistemas Web</Link></li>
                            <li><Link href="/servicos" className="hover:text-blue-400 transition-colors">Automação</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Empresa</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/sobre" className="hover:text-violet-400 transition-colors">Sobre Mim</Link></li>
                            <li><Link href="/portfolio" className="hover:text-violet-400 transition-colors">Portfólio</Link></li>
                            <li><Link href="/contato" className="hover:text-violet-400 transition-colors">Contato</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-gray-200 transition-colors">Privacidade</Link></li>
                            <li><Link href="#" className="hover:text-gray-200 transition-colors">Termos</Link></li>
                        </ul>
                    </div>
                </div>
            </Container>

            <Container className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center justify-between gap-6 md:flex-row">
                <p className="text-xs text-gray-600">
                    © {new Date().getFullYear()} Bruno Reis. Todos os direitos reservados.
                </p>
                <p className="text-xs text-gray-600 flex items-center gap-1">
                    Code meets Art <span className="text-violet-500">⚛</span>
                </p>
            </Container>
        </footer>
    )
}
