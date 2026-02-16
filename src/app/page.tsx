
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, Zap, ShieldCheck, Play, Code, Cpu } from "lucide-react"

import { profile } from "@/data/profile"
import { services } from "@/data/services"
import { projects } from "@/data/projects"
import { testimonials, faqs } from "@/data/content"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/Section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Reveal } from "@/components/ui/Reveal"
// Navbar and Footer are in layout.tsx, no need to import them here.

export default function Home() {
  return (
    <>
      {/* Hero Section - Unique Experience */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[92vh]">
        {/* Atmospheric Background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[100px] mix-blend-screen animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
        </div>

        <Container className="flex flex-col items-center text-center relative z-10">

          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-300 cursor-default group">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-1000"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_theme(colors.emerald.500)]"></span>
              </span>
              <span className="text-sm font-medium text-gray-200 tracking-wide group-hover:text-white transition-colors font-sans">
                Disponível para novos projetos
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="max-w-6xl text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] mb-8 text-white relative">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 pb-4">
                Arquitetura Digital
              </span>
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 animate-gradient-x">
                De Outro Mundo
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="max-w-2xl text-lg sm:text-xl text-gray-400 md:text-2xl mb-12 leading-relaxed font-light mx-auto">
              Não crio apenas sites. Esculpo <span className="text-white font-medium">ecossistemas digitais imersivos</span> que fundem design visceral com performance extrema. Sua marca, elevada ao nível da arte.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-5 w-full max-w-2xl justify-center items-center">
              <Button href={profile.whatsapp} target="_blank" size="lg" variant="glow" className="w-full sm:w-auto min-w-[240px] text-lg h-16 rounded-full px-12 group">
                Começar a Jornada <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/portfolio" variant="ghost" size="lg" className="w-full sm:w-auto text-lg h-16 text-gray-400 hover:text-white hover:bg-white/5 rounded-full px-8">
                Explorar Universo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 border-t border-white/5 pt-8 max-w-3xl mx-auto">
              {[
                { label: "Performance", val: "100/100" },
                { label: "Design", val: "Premium" },
                { label: "Segurança", val: "Blindada" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-black text-white mb-1">{stat.val}</span>
                  <span className="text-xs font-mono text-blue-500/70 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

        </Container>
      </section>

      {/* Services Showcase */}
      <section className="py-24 relative" id="servicos">
        <Container>
          <Reveal>
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 mb-6">
                Arsenal Tecnológico
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Ferramentas de elite para dominar seu mercado.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1}>
                <Card className="h-full group hover:bg-gradient-to-b hover:from-white/10 hover:to-transparent border-white/5 bg-white/5 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 w-fit group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-500 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)]">
                      {/* Icon Placeholder */}
                      <Zap className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-2xl mb-2 text-white group-hover:text-blue-400">{service.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mt-4">
                      {service.details.inclui.slice(0, 3).map(item => (
                        <li key={item} className="flex items-center text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-3 shadow-[0_0_5px_theme(colors.blue.500)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process - "How I Work" */}
      <section className="py-32 bg-black/40 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-white mb-6">
                  Protocolo de Execução
                </h2>
                <p className="text-xl text-gray-400">
                  Método cirúrgico para entregar resultados massivos em tempo recorde.
                </p>
              </div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" href="/sobre">
                Conhecer bastidores
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Scan", desc: "Análise profunda do cenário atual e identificação de gargalos." },
              { step: "02", title: "Blueprint", desc: "Desenho da arquitetura da solução e aprovação do escopo." },
              { step: "03", title: "Build", desc: "Desenvolvimento ágil com código limpo e alta performance." },
              { step: "04", title: "Deploy", desc: "Lançamento oficial, testes finais e monitoramento." }
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.2}>
                <div className="relative p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm group hover:-translate-y-2 transition-transform duration-500 h-full">
                  <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 select-none group-hover:text-blue-500/10 transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                  <p className="text-gray-400 relative z-10 leading-relaxed">{item.desc}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Selected Works - Dark Cards */}
      <section className="py-32 relative">
        <Container>
          <Reveal>
            <div className="flex items-center justify-between mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Projetos em Destaque</h2>
              <Button variant="link" href="/portfolio" className="text-blue-400 hidden md:flex hover:text-blue-300 transition-colors">
                Ver todo o arquivo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-12">
            {projects.slice(0, 2).map((project, i) => (
              <Reveal key={project.id} delay={i * 0.2}>
                <div className="group relative grid md:grid-cols-2 gap-8 items-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/10">
                  <div className="order-2 md:order-1 space-y-6">
                    <div className="flex gap-4 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/30 shadow-[0_0_10px_-4px_theme(colors.blue.500)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {project.summary}
                    </p>
                    <div className="pt-4">
                      <Button variant="outline" className="border-white/20 text-white hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10" href={`/portfolio/`}>
                        Analisar Case
                      </Button>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 relative aspect-video rounded-xl overflow-hidden bg-black/50 border border-white/10 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-shadow">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" href="/portfolio" className="w-full text-white border-white/20">Ver todos os projetos</Button>
          </div>
        </Container>
      </section>

      {/* CTA Section - Final Impact */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20 pointer-events-none" />
        <Container className="relative z-10 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Pronto para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 animate-pulse">Futuro?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Não deixe seu negócio preso no passado. Vamos construir a próxima versão da sua presença digital hoje.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button href={profile.whatsapp} size="lg" variant="glow" className="h-16 px-10 text-xl rounded-full w-full sm:w-auto">
                <Clock className="mr-3 h-6 w-6" /> Agendar Consultoria
              </Button>
              <Button href="/contato" size="lg" variant="secondary" className="h-16 px-10 text-xl rounded-full w-full sm:w-auto border-white/20 text-white hover:bg-white/10">
                Falar por E-mail
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
