
import { CheckCircle, Code, Layout, ShieldCheck, Zap } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/Section"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Reveal } from "@/components/ui/Reveal"
import { Badge } from "@/components/ui/Badge"

export const metadata = {
    title: "Sobre Mim",
    description: "Conheça Bruno Reis, engenheiro full-stack e designer.",
}

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
                        <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-violet-900/40 opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-mono text-2xl tracking-widest bg-[url('/grid.svg')] bg-opacity-20">
                                BRUNO_REIS.jpg
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
                            <Card className="text-center h-full bg-white/5 border-white/5 hover:border-blue-500/30 group">
                                <CardHeader className="flex flex-col items-center pt-8">
                                    <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 text-blue-400 mb-6 group-hover:from-blue-500 group-hover:to-violet-500 group-hover:text-white transition-all duration-500 ring-1 ring-white/10">
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

            </Container>
        </div>
    )
}
