
import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import { Container } from "@/components/ui/Container"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/ui/Reveal"
import Link from "next/link"

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.id,
    }))
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = projects.find((p) => p.id === slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="pt-32 pb-24">
            <Container>
                <div className="mb-12">
                    <Button href="/portfolio" variant="ghost" className="pl-0 hover:bg-transparent text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Portfólio
                    </Button>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-8">
                        <Reveal>
                            <div className="flex gap-3 flex-wrap mb-6">
                                <Badge variant="neon">{project.category}</Badge>
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300 font-mono">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">{project.title}</h1>
                            <p className="text-2xl text-blue-200 font-light leading-relaxed">{project.summary}</p>

                            <div className="space-y-10 pt-10 border-t border-white/10">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="w-8 h-1 bg-red-500 rounded-full inline-block"></span> O Desafio
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">{project.problem}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span> A Solução
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">{project.solution}</p>
                                </div>

                                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-500/20 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-3">
                                        <CheckCircle className="h-6 w-6" /> Resultados Alcançados
                                    </h3>
                                    <p className="text-green-300 font-medium text-2xl leading-relaxed">{project.result}</p>
                                </div>
                            </div>

                            <div className="pt-8 flex flex-col sm:flex-row gap-4">
                                <Button href="/contato" size="lg" variant="glow" className="flex-1">
                                    Quero um resultado assim
                                </Button>
                                <Button href="#" variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                                    Visitar site ao vivo <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.2}>
                        <div className="relative aspect-[4/3] bg-black/50 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-20px_rgba(59,130,246,0.2)] lg:sticky lg:top-32">
                            <div className="absolute inset-0 flex items-center justify-center bg-[url('/grid.svg')] opacity-20" />
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-black text-4xl">
                                {/* Placeholder for real project image */}
                                IMAGEM DO PROJETO
                            </div>

                            {/* Floating Elements for Decoration */}
                            <div className="absolute top-10 right-10 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl hidden md:block animate-bounce-slow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-20 bg-gray-700 rounded" />
                                    <div className="h-2 w-16 bg-gray-700 rounded" />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </div>
    )
}
