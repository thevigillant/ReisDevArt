
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "primary" | "secondary" | "outline" | "neon"
}

export function Badge({ className, variant = "primary", ...props }: BadgeProps) {
    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20",
        secondary: "bg-white/10 text-gray-200 border border-white/10",
        outline: "border border-blue-500/40 text-blue-300 bg-transparent",
        neon: "bg-blue-900/40 text-blue-300 border border-blue-500/50 shadow-[0_0_10px_-2px_rgba(59,130,246,0.4)]"
    }

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors uppercase",
                variants[variant],
                className
            )}
            {...props}
        />
    )
}
