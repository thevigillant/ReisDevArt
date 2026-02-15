
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

    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch("https://formsubmit.co/ajax/ceo@reisdev.art", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `Novo Contato do Site: ${formData.nome}`,
                    _template: "table",
                    _captcha: "false"
                })
            })

            if (response.ok) {
                setSuccess(true)
                setFormData({
                    nome: "",
                    email: "",
                    whatsapp: "",
                    empresa: "",
                    servico: "Landing Page",
                    urgencia: "Normal",
                    mensagem: ""
                })
            } else {
                alert("Ocorreu um erro ao enviar. Tente novamente ou chame no WhatsApp.")
            }
        } catch (error) {
            console.error("Erro ao enviar:", error)
            alert("Erro de conexão. Verifique sua internet.")
        } finally {
            setIsLoading(false)
        }
    }

    const inputClasses = "flex h-12 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:border-blue-500 focus-visible:bg-blue-900/10 transition-all disabled:cursor-not-allowed disabled:opacity-50"
    const labelClasses = "text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block"

    if (success) {
        return (
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_theme(colors.green.500)]">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Recebida!</h3>
                <p className="text-gray-400 mb-6">Obrigado pelo contato. Vou analisar seu projeto e retorno em breve no seu email ou WhatsApp.</p>
                <Button onClick={() => setSuccess(false)} variant="outline" className="border-white/10 hover:bg-white/5">
                    Enviar nova mensagem
                </Button>
            </div>
        )
    }

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
