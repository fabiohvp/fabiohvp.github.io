import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Vila Velha, Espírito Santo, Brazil",
      href: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+55 (27) 99844-0595",
      href: "tel:+5527998440595",
    },
    {
      icon: Mail,
      label: "Email",
      value: "fabiohvp@hotmail.com",
      href: "mailto:fabiohvp@hotmail.com",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/fabiohvp",
      href: "https://github.com/fabiohvp",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/fabiohvp",
      href: "https://www.linkedin.com/in/fabiohvp",
    },
  ]

  return (
    <section id="contact" className=" flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-sm text-muted-foreground mb-12 uppercase tracking-wider">Contact</h2>

        <div className="mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Let's work together?</h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I'm always open to discussing new projects, creative opportunities, or partnerships. Get in touch through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h4 className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Contact Information</h4>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Social Media</h4>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <div key={link.label} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {link.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Fábio Henriques Viana Pinto. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
