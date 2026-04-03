import { ResumeButton } from "@/components/resume-button"
import { useApp } from "@/contexts/app-context"
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useApp()

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "EDUCATION", href: "#education" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/fabiohvp", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/fabiohvp", label: "LinkedIn" },
    { icon: Mail, href: "mailto:fabiohvp@hotmail.com", label: "Email" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-3 right-3 z-50 lg:hidden bg-secondary p-2 rounded-lg cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full p-8">
          {/* Header */}
          <div className="mb-12 flex flex-col">
            <div className="relative w-32 h-32 mb-6 group mx-auto">
              <div className="absolute -inset-0.5 bg-linear-to-tr from-primary to-primary/50 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-background">
                <img
                  src="/profile.png"
                  alt="Fábio Henriques Viana Pinto"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-1 text-foreground">Fábio Henriques Viana Pinto</h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Senior Full Stack Software Engineer</p>
            <p className="text-xs text-muted-foreground mt-2">Vila Velha, ES, Brazil</p>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 mb-2">
            <ResumeButton />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-2 text-sm font-medium text-foreground bg-secondary hover:border-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-4 w-4" />
                  <span className="pl-2 text-sm font-medium">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" />
                  <span className="pl-2 text-sm font-medium">Dark Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-background/80 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
