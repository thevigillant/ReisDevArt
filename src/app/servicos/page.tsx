
import { CheckCircle, Zap, Shield, Database, Layout } from "lucide-react"
import { services, packages } from "@/data/services"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/Section"
import { Badge } from "@/components/ui/Badge"
import { profile } from "@/data/profile"
import { Reveal } from "@/components/ui/Reveal"
import { Card } from "@/components/ui/Card"

export const metadata = {
    title: "Serviços & Preços",
    description: "Conheça meus serviços de desenvolvimento web e automação.",
}

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-16">
            <Container>
                <SectionTitle
                    title="Soluções Sob Medida"
                    subtitle="Escolha o pacote ideal para o momento do seu negócio."
                />

                {/* Services Detail List */}
                <div className="grid gap-8 md:grid-cols-2 mb-32">
                    {services.map((service, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="flex flex-col gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/10 group h-full">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400 group-hover:text-blue-300 group-hover:shadow-[0_0_15px_-5px_theme(colors.blue.500)] transition-all">
                                        <Zap className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                                        {service.title}
                                    </h3>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>

                                <div className="mt-auto space-y-6 pt-6 border-t border-white/5">
                                    <div>
                                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Para quem é</span>
                                        <p className="text-sm mt-2 text-gray-300">{service.details.para}</p>
                                    </div>

                                    <div>
                                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">O que inclui</span>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                                            {service.details.inclui.map((item) => (
                                                <li key={item} className="flex items-center text-sm text-gray-400">
                                                    <CheckCircle className="h-4 w-4 mr-2 text-blue-500/80 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg">
                                        <span className="text-xs font-medium text-gray-500 uppercase">Prazo estimado</span>
                                        <span className="text-sm font-bold text-white">{service.details.prazo}</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Pricing Packages */}
                <SectionTitle
                    title="Pacotes Populares"
                    subtitle="Investimento transparente e entrega garantida."
                    className="mb-16"
                />

                <div className="grid gap-8 md:grid-cols-3 items-start relative">
                    {/* Background Glow for Packages */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-900/10 blur-[100px] -z-10 rounded-full pointer-events-none" />

                    {packages.map((pkg, i) => (
                        <Reveal key={pkg.id} delay={i * 0.15}>
                            <div
                                className={`relative p-8 rounded-2xl border flex flex-col h-full transition-all duration-300 ${pkg.highlight ? 'bg-white/10 border-blue-500/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] md:-translate-y-4' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
                            >
                                {pkg.highlight && (
                                    <div className="absolute -top-4 inset-x-0 flex justify-center">
                                        <Badge variant="neon" className="bg-blue-600 text-white border-none shadow-[0_0_15px_rgba(37,99,235,0.5)]">Mais Escolhido</Badge>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                                    <p className="text-sm text-gray-400 mt-3 h-10 leading-relaxed">{pkg.description}</p>
                                </div>

                                <div className="mb-8 flex items-baseline">
                                    <span className="text-4xl font-bold text-white tracking-tight">{pkg.price}</span>
                                    {pkg.price !== "Consulte" && <span className="text-sm text-gray-500 ml-2">/projeto</span>}
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start text-sm group">
                                            <CheckCircle className={`h-5 w-5 mr-3 shrink-0 ${pkg.highlight ? 'text-blue-400' : 'text-gray-600 group-hover:text-gray-400 transition-colors'}`} />
                                            <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    href={`${profile.whatsapp}&text=Olá! Tenho interesse no pacote ${pkg.name}.`}
                                    target="_blank"
                                    variant={pkg.highlight ? "glow" : "outline"}
                                    className="w-full"
                                >
                                    Escolher {pkg.name}
                                </Button>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <div className="mt-24 text-center bg-gradient-to-br from-blue-900/20 to-violet-900/20 p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-4">Precisa de algo personalizado?</h3>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                            Tenho também pacotes de manutenção mensal e serviços avulsos (design, correções, consultoria).
                        </p>
                        <Button href="/contato" variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/10">Falar com Bruno</Button>
                    </div>
                </Reveal>

            </Container>
        </div>
    )
}
