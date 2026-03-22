
import Link from "next/link"
import { profile } from "@/data/profile"
import { Container } from "@/components/ui/Container"
import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#020617] py-16 text-gray-400">
            <Container className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start">
                <div className="space-y-6 max-w-sm">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-black tracking-widest text-white group-hover:text-blue-400 transition-colors uppercase leading-none">BRUNO REIS</span>
                            <span className="text-[10px] font-medium tracking-[0.2em] text-gray-500 group-hover:text-gray-400 transition-colors uppercase leading-none mt-1 border-l border-blue-500 pl-2">Desenvolvedor & Designer</span>
                        </div>
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
