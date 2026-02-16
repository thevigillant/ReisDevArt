
import { CheckCircle, Code, Layout, ShieldCheck, Zap } from "lucide-react"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/Section"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Reveal } from "@/components/ui/Reveal"
import { Badge } from "@/components/ui/Badge"

export const metadata = {
    title: "Sobre Mim",
    description: "Conheça Bruno Reis, Analista Full-Stack e Designer focado em gerar valor através da tecnologia.",
}

const techStack = [
    {
        category: "Frontend",
        skills: ["React & Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]
    },
    {
        category: "Backend & DB",
        skills: ["Node.js", "PostgreSQL", "MySQL", "REST APIs"]
    },
    {
        category: "Design",
        skills: ["Figma", "UI/UX Design", "Branding", "Visual Identity"]
    },
    {
        category: "Ferramentas",
        skills: ["Git & GitHub", "Docker", "Vercel / Hosting", "CI/CD"]
    }
]

const differentials = [
    {
        icon: Zap,
        title: "Objetividade e Entrega",
        description: "Sem enrolação técnica. Foco total em resolver seu problema no menor tempo possível com qualidade."
    },
    {
        icon: CheckCircle,
        title: "Foco em Conversão",
        description: "Cada pixel é pensado para vender. Design bonito é bom, design que vende é essencial."
    },
    {
        icon: Code,
        title: "Código Limpo",
        description: "Sites que carregam rápido, são seguros e fáceis de manter. Performance nota 100 no Google."
    },
    {
        icon: Layout,
        title: "Design Consistente",
        description: "Identidade visual forte e coerente em todos os pontos de contato da sua marca."
    }
]

export default function AboutPage() {
    return (
        <div className="pt-32 pb-16">
            <Container>
                <SectionTitle
                    title="Quem é Bruno Reis"
                    subtitle="Analista Full-Stack & Designer focado em resultados."
                />

                {/* Bio Section */}
                <div className="grid gap-12 md:grid-cols-2 items-center mb-32">
                    <Reveal delay={0.2}>
                        <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl bg-[#030712] border border-blue-500/30 group ring-1 ring-blue-500/20 isolate transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:border-blue-400/50">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-blue-600/20 blur-[60px] -z-10 group-hover:bg-blue-500/30 transition-colors duration-700" />

                            <img
                                src="/brunoreis.jpeg"
                                alt="Bruno Reis - Analista Full-Stack & Designer"
                                className="w-full h-full object-cover object-top transition-transform duration-700 scale-100 group-hover:scale-105"
                            />

                            {/* High Tech Overlay (Cyan Tint) - Removed on Hover */}
                            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />

                            {/* Scanline Effect (Subtle) */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20 group-hover:opacity-0 transition-opacity duration-500" />

                            {/* Dark Gradient at Bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90 pointer-events-none z-20" />

                            {/* Name Badge (Always Visible but interactive) */}
                            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-xl z-30 group-hover:bg-blue-900/20 group-hover:border-blue-500/30 transition-all duration-500 shadow-lg">
                                <p className="text-white font-bold text-lg drop-shadow-md group-hover:text-blue-200 transition-colors">Bruno Reis</p>
                                <p className="text-blue-400 text-xs uppercase tracking-widest font-mono group-hover:text-blue-300">Analista & Designer</p>
                            </div>
                        </div>
                    </Reveal>

                    <div className="space-y-8">
                        <Reveal delay={0.3}>
                            <Badge variant="neon">Analista Full-Stack & Designer</Badge>
                            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">Olá! Sou Bruno Reis.</h2>
                            <div className="h-1 w-20 bg-blue-500 mb-8 rounded-full" />

                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Ajudo empresas a vender mais com <span className="text-blue-400 font-medium">páginas rápidas</span> e a reduzir trabalho manual com <span className="text-violet-400 font-medium">automações inteligentes</span>.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Com experiência como Analista Full-Stack e Designer, crio soluções completas: desde a identidade visual que atrai até o sistema que gerencia seus contatos.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Meu objetivo é simples: tirar a complexidade da tecnologia da sua frente e entregar ferramentas que funcionam pro seu negócio crescer.
                            </p>

                            <div className="pt-8 flex gap-4">
                                <Button href="/portfolio" variant="glow">Ver meus trabalhos</Button>
                                <Button href="/contato" variant="outline" className="border-white/20 text-white hover:bg-white/10">Falar comigo</Button>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Differentials */}
                <SectionTitle
                    title="Por que trabalhar comigo?"
                    subtitle="Diferenciais que garantem o sucesso do seu projeto."
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {differentials.map((item, i) => (
                        <Reveal key={item.title} delay={i * 0.1}>
                            <Card className="text-center h-full bg-white/5 border-white/5 hover:border-blue-500/30 group transition-all duration-300">
                                <CardHeader className="flex flex-col items-center pt-8">
                                    <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 text-blue-400 mb-6 group-hover:from-blue-500 group-hover:to-violet-500 group-hover:text-white transition-all duration-500 ring-1 ring-white/10 shadow-lg shadow-blue-500/5">
                                        <item.icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="text-xl mb-4 text-white group-hover:text-blue-300">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300">{item.description}</p>
                                </CardContent>
                            </Card>
                        </Reveal>
                    ))}
                </div>

                {/* Tech Stack Section */}
                <div className="mt-32">
                    <SectionTitle
                        title="Arsenal Tecnológico"
                        subtitle="Ferramentas e tecnologias que utilizo para construir soluções de alta performance."
                        align="center"
                    />

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {techStack.map((tech, i) => (
                            <Reveal key={tech.category} delay={i * 0.1}>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/20 group transition-all duration-300 h-full">
                                    <h3 className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">{tech.category}</h3>
                                    <ul className="space-y-2">
                                        {tech.skills.map(skill => (
                                            <li key={skill} className="text-gray-300 font-medium flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-500 transition-colors" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Expertise Focus / Value Props */}
                <div className="mt-32 border-t border-white/5 pt-32">
                    <div className="grid gap-16 md:grid-cols-2 items-center">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                                Minha Missão é <span className="text-blue-500">Transformar</span> Ideias em <span className="text-violet-500">Impacto Digital.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                Acredito que a tecnologia deve ser invisível e eficiente. Meu trabalho é garantir que sua marca tenha uma presença digital tão poderosa quanto a qualidade dos seus produtos.
                            </p>
                        </Reveal>

                        <div className="grid gap-6">
                            {[
                                { title: "Performance Extrema", desc: "Sites que carregam em milissegundos, garantindo que você não perca nenhum cliente." },
                                { title: "Design que Converte", desc: "Interfaces focadas em guiar o usuário para a ação desejada." },
                                { title: "Código Escalável", desc: "Sistemas preparados para crescer junto com o seu negócio." }
                            ].map((focus, i) => (
                                <Reveal key={focus.title} delay={i * 0.1}>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-colors relative group">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <h4 className="text-white font-bold mb-2">{focus.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{focus.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final CTA in About Page */}
                <Reveal delay={0.4}>
                    <div className="mt-32 p-12 rounded-3xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 border border-white/10 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                        <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Pronto para elevar o nível do seu projeto?</h3>
                        <p className="text-gray-300 mb-10 max-w-2xl mx-auto relative z-10 font-light">
                            Vamos conversar sobre como posso te ajudar a alcançar seus objetivos digitais com design premium e engenharia de ponta.
                        </p>
                        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contato" size="lg" variant="glow" className="px-12 rounded-full h-14 text-lg">
                                Iniciar Projeto
                            </Button>
                        </div>
                    </div>
                </Reveal>

            </Container>
        </div>
    )
}
