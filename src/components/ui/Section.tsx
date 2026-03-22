
import { cn } from "@/lib/utils"
import { Container } from "./Container"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    fullWidth?: boolean
    containerClassName?: string
}

export function Section({ className, children, fullWidth = false, containerClassName, ...props }: SectionProps) {
    return (
        <section className={cn("py-20 md:py-32 relative overflow-hidden", className)} {...props}>
            {children}
        </section>
    )
}

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    title: string
    subtitle?: string
    align?: "left" | "center" | "right"
}

export function SectionTitle({ title, subtitle, align = "center", className, ...props }: SectionTitleProps) {
    return (
        <div className={cn("mb-16 space-y-6 relative z-10", align === "center" && "text-center", align === "right" && "text-right", className)}>
            <h2
                className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl text-gradient pb-2 bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent"
                {...props}
            >
                {title}
            </h2>
            {subtitle && (
                <p className="mx-auto max-w-2xl text-lg text-gray-400 font-light leading-relaxed">
                    {subtitle}
                </p>
            )}
            <div className={cn("h-1 w-20 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mt-6", align === "center" && "mx-auto")} />
        </div>
    )
}
