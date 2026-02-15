
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// High Tech button variants
const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-900/20 border border-white/10",
    secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-sm",
    outline: "border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300",
    ghost: "hover:bg-white/5 text-gray-300 hover:text-white",
    link: "text-blue-400 underline-offset-4 hover:underline hover:text-blue-300",
    destructive: "bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20",
    glow: "bg-blue-600 text-white shadow-[0_0_20px_-5px_var(--color-brand-primary)] hover:shadow-[0_0_30px_-5px_var(--color-brand-primary)] transition-shadow duration-300 border border-blue-400/50"
}

const sizes = {
    default: "h-11 px-6 py-2",
    sm: "h-9 rounded-md px-3 text-xs",
    lg: "h-14 rounded-lg px-8 text-lg tracking-wide",
    icon: "h-10 w-10 p-0 items-center justify-center",
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof variants
    size?: keyof typeof sizes
    asChild?: boolean
    href?: string
    fullWidth?: boolean
    target?: string
    rel?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", asChild = false, href, fullWidth, target, rel, ...props }, ref) => {

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const Comp = asChild ? "span" : "button"
        const classes = cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-95",
            variants[variant],
            sizes[size],
            fullWidth && "w-full",
            className
        )

        if (href) {
            return (
                <Link href={href} className={classes} target={target} rel={rel}>
                    {props.children}
                </Link>
            )
        }

        return (
            <button
                className={classes}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
