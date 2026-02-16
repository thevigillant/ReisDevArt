
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/data/projects"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/Section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Reveal } from "@/components/ui/Reveal"
import { ArrowUpRight } from "lucide-react"

export const metadata = {
    title: "Portfólio & Cases",
    description: "Veja alguns dos projetos que desenvolvi e os resultados gerados.",
}

export default function PortfolioPage() {
    return (
        <div className="pt-32 pb-16">
            <Container>
                <SectionTitle
                    title="Meus Trabalhos Recentes"
                    subtitle="Projetos focados em performance, conversão e automação."
                />

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <Reveal key={project.id} delay={i * 0.1}>
                            <Card className="h-full bg-white/5 border-white/10 group cursor-pointer hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] transition-all duration-500 overflow-visible">
                                <div className="relative aspect-video bg-black/50 overflow-hidden rounded-t-xl group-hover:bg-blue-900/10 transition-colors">
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
                                    <Badge variant="neon" className="absolute top-4 right-4 backdrop-blur-md bg-black/40 border-white/10 text-white z-20">
                                        {project.category}
                                    </Badge>
                                    <div className="absolute bottom-4 left-4 z-20 pr-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors drop-shadow-md">{project.title}</h3>
                                    </div>
                                </div>

                                <CardContent className="pt-6 relative">
                                    <p className="text-gray-400 mb-6 leading-relaxed text-sm min-h-[60px]">{project.summary}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 rounded text-gray-400 font-mono tracking-tight group-hover:text-blue-200 group-hover:bg-blue-500/10 transition-colors">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="space-y-2 border-t border-white/5 pt-4 text-xs font-mono">
                                        <p><strong className="text-gray-500 uppercase tracking-widest">Problema:</strong> <span className="text-gray-400 line-clamp-1">{project.problem}</span></p>
                                        <p><strong className="text-blue-500 uppercase tracking-widest">Resultado:</strong> <span className="text-blue-300 font-bold">{project.result}</span></p>
                                    </div>
                                </CardContent>

                                <CardFooter>
                                    <Button variant="outline" href={`/portfolio/`} className="w-full border-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white group-hover:border-blue-500/50">
                                        Ver Case Completo <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <div className="mt-24 text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">Quer ver mais ou discutir um projeto específico?</h3>
                        <Button href="/contato" size="lg" variant="glow" className="px-12 rounded-full h-14 text-lg">Entrar em contato</Button>
                    </div>
                </Reveal>
            </Container>
        </div>
    )
}
