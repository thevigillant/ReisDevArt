
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { profile } from "@/data/profile"
import { Loader2, Mail, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        whatsapp: "",
        empresa: "",
        servico: "Landing Page",
        urgencia: "Normal",
        mensagem: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate loading
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Build mailto link
        const subject = `Novo Orçamento: ${formData.servico} - ${formData.nome}`
        const body = `
Nome: ${formData.nome}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Empresa: ${formData.empresa || "N/A"}
Serviço: ${formData.servico}
Urgência: ${formData.urgencia}

Mensagem:
${formData.mensagem}
    `.trim()

        window.location.href = `mailto:${profile.email || "contato@brunoreis.dev"}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        setIsLoading(false)
    }

    const inputClasses = "flex h-12 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:border-blue-500 focus-visible:bg-blue-900/10 transition-all disabled:cursor-not-allowed disabled:opacity-50"
    const labelClasses = "text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block"

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="nome" className={labelClasses}>Nome *</label>
                    <input id="nome" name="nome" required placeholder="Seu nome completo" className={inputClasses} value={formData.nome} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="empresa" className={labelClasses}>Empresa</label>
                    <input id="empresa" name="empresa" placeholder="Nome da sua empresa (opcional)" className={inputClasses} value={formData.empresa} onChange={handleChange} />
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="email" className={labelClasses}>Email *</label>
                    <input id="email" name="email" type="email" required placeholder="seu@email.com" className={inputClasses} value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="whatsapp" className={labelClasses}>WhatsApp *</label>
                    <input id="whatsapp" name="whatsapp" required placeholder="(00) 00000-0000" className={inputClasses} value={formData.whatsapp} onChange={handleChange} />
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="servico" className={labelClasses}>Tipo de Serviço</label>
                    <select
                        id="servico"
                        name="servico"
                        className={cn(inputClasses, "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-no-repeat bg-[right_0.5rem_center]")}
                        value={formData.servico}
                        onChange={handleChange}
                    >
                        <option className="bg-slate-900">Landing Page</option>
                        <option className="bg-slate-900">Página de Vendas com Banco</option>
                        <option className="bg-slate-900">Automação de Sistemas</option>
                        <option className="bg-slate-900">Design Profissional</option>
                        <option className="bg-slate-900">Outro</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="urgencia" className={labelClasses}>Urgência</label>
                    <select
                        id="urgencia"
                        name="urgencia"
                        className={cn(inputClasses, "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-no-repeat bg-[right_0.5rem_center]")}
                        value={formData.urgencia}
                        onChange={handleChange}
                    >
                        <option className="bg-slate-900">Normal (2-4 semanas)</option>
                        <option className="bg-slate-900">Urgente (imediato)</option>
                        <option className="bg-slate-900">Sem pressa</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="mensagem" className={labelClasses}>Mensagem</label>
                <textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Conte um pouco sobre seu projeto..."
                    className={cn(inputClasses, "min-h-[150px] resize-y")}
                    value={formData.mensagem}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Button type="submit" variant="glow" className="w-full sm:w-auto h-12 px-8" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
                        </>
                    ) : (
                        <>
                            <Mail className="mr-2 h-4 w-4" /> Enviar por E-mail
                        </>
                    )}
                </Button>

                <Button
                    type="button"
                    variant="secondary"
                    className="w-full sm:w-auto h-12 bg-green-500/10 text-green-400 hover:bg-green-500/20 border-green-500/20 hover:border-green-500/50"
                    onClick={() => window.open(profile.whatsapp, '_blank')}
                >
                    <MessageSquare className="mr-2 h-4 w-4" /> Chamar no WhatsApp
                </Button>
            </div>
        </form>
    )
}
