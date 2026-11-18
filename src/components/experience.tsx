import { Calendar, MapPin } from "lucide-react"

interface ExperienceItem {
  period: string
  role: string
  company: string
  location: string
  items: string[]
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      period: "Jan 2021 – Nov 2026",
      role: "Senior Full Stack Software Engineer",
      company: "Pantheon Inc (ExxonMobil Program)",
      location: "Remote – Brazil",
      items: [
        "Reduced API response times by an average of 35% by optimizing endpoints and database queries.",
        "Designed and developed scalable back-end services with ASP.NET Core, Entity Framework Core, and Hangfire.",
        "Integrated Azure services (Service Bus, Storage, SQL Server, Key Vault, and Application Insights).",
        "Built data-intensive dashboards and UI components in Angular.",
        "Managed CI/CD pipelines in Azure DevOps.",
        "Worked in a distributed global team, collaborating across regions, and mentored junior developers.",
        "Delivered internal technical training on Clean Code, SOLID principles, and performance optimization.",
        "Led the modernization of a legacy .NET analytics API into a CQRS-based modular architecture with strict build-time quality gates (analyzers, nullable, warnings as errors), policy-based authorization and reusable infrastructure libraries, improving maintainability and onboarding of new business units.",
      ],
    },
    {
      period: "Feb 2013 – Oct 2020",
      role: "Full Stack Software Engineer",
      company: "Espírito Santo State Court of Audit (TCE-ES)",
      location: "Brazil",
      items: [
        "Architected the organization's core enterprise system and a standardized digital signature platform, both in use for over 10 years, saving an estimated BRL 500,000 and approximately six months of development time compared with the contracted alternative.",
        "Initiated the migration of legacy systems to ASP.NET Core and React, improving application maintainability.",
        "Developed complex APIs, background processing jobs, ETL workflows, and caching layers with SQL Server, Redis, Solr, and SignalR.",
      ],
    },
    {
      period: "Jan 2010 – Jan 2013",
      role: "Web Developer",
      company: "TAB Editora e Comunicação",
      location: "Brazil",
      items: [
        "Developed and maintained custom, responsive websites and microsites with PHP, MySQL, jQuery, and Bootstrap, ensuring cross-device and cross-browser compatibility.",
        "Contributed to a custom Content Management System (CMS) for a construction company, working on both features and user interface.",
      ],
    },
    {
      period: "2008 – 2009",
      role: "Web Developer Intern",
      company: "Dacasa Financeira",
      location: "Brazil",
      items: [
        "Maintained and enhanced the company's internal CMS with ASP.NET Web Forms and JavaScript, introducing JavaScript-based solutions in place of Visual Studio's visual page-building features.",
        "Improved loading time and responsiveness of complex CMS screens containing a large number of UI elements.",
      ],
    },
    {
      period: "2007",
      role: "Computer Education Assistant Teacher",
      company: "Centro de Ensino Charles Darwin",
      location: "Brazil",
      items: [
        "Supported students in learning Microsoft Office (Word, Excel, and PowerPoint) and taught the fundamentals of HTML, web development, and animation with Adobe Flash.",
      ],
    },
  ]

  return (
    <section id="experience" className="flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-sm text-muted-foreground mb-12 uppercase tracking-wider">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span className="uppercase tracking-wider font-mono">{exp.period}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
              <p className="text-lg text-primary mb-1">{exp.company}</p>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                <MapPin className="h-3.5 w-3.5" />
                <span>{exp.location}</span>
              </div>
              <ul className="space-y-2 mb-2">
                {exp.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}