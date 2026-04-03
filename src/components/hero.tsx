import { ResumeButton } from "@/components/resume-button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl">
        <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Welcome to my portfolio</p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
          Senior Full Stack Software Engineer
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          19+ years of experience designing, modernizing, and maintaining enterprise-grade, data-driven applications specializing in .NET, NodeJS, Svelte, React, and Angular.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground bg-secondary hover:border-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
          >
            View Experience
          </a>
          <ResumeButton variant="outline" />
        </div>
      </div>
    </section>
  )
}
