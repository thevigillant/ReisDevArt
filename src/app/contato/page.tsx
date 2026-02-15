
import { ContactForm } from "@/components/ContactForm"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/Section"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react"
import { Reveal } from "@/components/ui/Reveal"
import { profile } from "@/data/profile"

export const metadata = {
    title: "Contato & Orçamento",
    description: "Peça um orçamento para seu projeto.",
}

export default function ContactPage() {
    return (
        <div className="pt-32 pb-16">
            <Container>
                <SectionTitle
                    title="Fale Comigo"
                    subtitle="Vamos tirar seu projeto do papel. Respondo em até 24h."
                />

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Info */}
                    <Reveal delay={0.1}>
                        <div className="h-full bg-gradient-to-br from-blue-600/20 to-violet-600/20 text-white border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
                            <div className="p-10 space-y-10">
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">Informações de Contato</h3>
                                    <p className="text-blue-200 text-lg leading-relaxed">Basta preencher o formulário ou me chamar diretamente.</p>
                                </div>

                                <div className="space-y-8 text-lg">
                                    <div className="flex items-center gap-6 group cursor-pointer hover:translate-x-2 transition-transform">
                                        <div className="bg-blue-500/20 p-4 rounded-xl text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-colors">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <span className="font-mono">+55 (34) 98898-0235</span>
                                    </div>

                                    <div className="flex items-center gap-6 group cursor-pointer hover:translate-x-2 transition-transform">
                                        <div className="bg-violet-500/20 p-4 rounded-xl text-violet-400 group-hover:text-white group-hover:bg-violet-500 transition-colors">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <span className="font-mono">contato@brunoreis.dev</span>
                                    </div>

                                    <div className="flex items-center gap-6 group cursor-pointer hover:translate-x-2 transition-transform">
                                        <div className="bg-emerald-500/20 p-4 rounded-xl text-emerald-400 group-hover:text-white group-hover:bg-emerald-500 transition-colors">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <span>Brasil (Remoto)</span>
                                    </div>

                                    <div className="flex items-center gap-6 group cursor-pointer hover:translate-x-2 transition-transform">
                                        <div className="bg-pink-500/20 p-4 rounded-xl text-pink-400 group-hover:text-white group-hover:bg-pink-500 transition-colors">
                                            <Clock className="h-6 w-6" />
                                        </div>
                                        <span>Seg - Sex, 09h às 18h</span>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-white/10">
                                    <p className="mb-6 font-bold uppercase tracking-widest text-sm text-gray-400">Redes Sociais</p>
                                    <div className="flex gap-4">
                                        {/* Social Icons Placeholder */}
                                        <div className="h-12 w-12 bg-white/5 border border-white/10 rounded-full hover:bg-blue-600 hover:border-blue-500 transition-all cursor-pointer flex items-center justify-center text-gray-400 hover:text-white font-bold">in</div>
                                        <div className="h-12 w-12 bg-white/5 border border-white/10 rounded-full hover:bg-violet-600 hover:border-violet-500 transition-all cursor-pointer flex items-center justify-center text-gray-400 hover:text-white font-bold">git</div>
                                        <div className="h-12 w-12 bg-white/5 border border-white/10 rounded-full hover:bg-pink-600 hover:border-pink-500 transition-all cursor-pointer flex items-center justify-center text-gray-400 hover:text-white font-bold">ig</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Form */}
                    <Reveal delay={0.2}>
                        <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-8 sm:p-10">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                                <MessageSquare className="h-6 w-6 text-blue-500" />
                                Envie uma mensagem
                            </h3>
                            <ContactForm />
                        </div>
                    </Reveal>
                </div>
            </Container>
        </div>
    )
}
