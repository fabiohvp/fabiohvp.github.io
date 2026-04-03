import { cn } from "@/lib/utils"
import { Download } from "lucide-react"

interface ResumeButtonProps {
  variant?: "primary" | "outline"
  className?: string
}

export function ResumeButton({ variant = "primary", className }: ResumeButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-lg transition-colors text-sm font-medium"
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 p-2 w-full",
    outline: "border border-border text-foreground px-6 py-3 bg-secondary hover:border-primary hover:text-primary-foreground transition-all duration-300",
  }

  return (
    <a
      href="/curriculo.pdf"
      download
      className={cn(baseClasses, variantClasses[variant], className)}
      aria-label="Download Resume PDF"
    >
      <Download className="h-4 w-4" />
      <span>Download Resume (PDF)</span>
    </a>
  )
}
