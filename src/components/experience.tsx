

import { Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      period: "2021 – Present",
      role: "Senior Full Stack Software Engineer",
      company: "Pantheon Inc (ExxonMobil Program)",
      location: "Remote / Brazil",
      items: [
				"Worked in a distributed global team, collaborating across regions to deliver scalable software solutions",
        "Designed and developed scalable backend services using ASP.NET Core, EF Core, and NodeJS",
        "Built data-intensive dashboards and UI components using Angular to improve user experience",
        "Integrated Azure services (Service Bus, Key Vault, App Insights) for secure and observable systems",
        "Led application modernization initiatives to align with the latest .NET and Angular LTS versions",
        "Optimized API performance and database queries, significantly reducing response times",
        "Managed CI/CD pipelines via Azure DevOps while mentoring junior developers",
      ],
    },
    {
      period: "2013 – 2020",
      role: "Senior Full Stack Software Engineer",
      company: "Tribunal de Contas do Estado do Espírito Santo (TCE-ES)",
      location: "Brazil",
      items: [
        "Architected the organization's core enterprise system and a standardized digital signature platform",
        "Developed complex APIs, background processing jobs, ETL workflows, and caching layers",
        "Migrated legacy systems to ASP.NET Core and React, improving overall maintainability",
        "Utilized a diverse stack including SQL Server, Redis, Hangfire, Solr, SignalR, and AngularJS",
        "Delivered technical training on Clean Code, SOLID principles, and performance optimization",
      ],
    },
    {
      period: "2007 – 2013",
      role: "Software Developer",
      company: "Various Projects",
      location: "Brazil",
      items: [
        "Developed web applications using C#, PHP, JavaScript, jQuery, and Bootstrap",
        "Delivered custom software solutions for clients in the construction and food industries",
        "Established a strong foundation in software design through game server scripts and desktop apps",
      ],
    },
  ]

  return (
    <section id="experience" className=" flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-sm text-muted-foreground mb-12 uppercase tracking-wider">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span className="uppercase tracking-wider">{exp.period}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
              <p className="text-lg text-primary mb-1">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
              <ul className="space-y-2">
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
