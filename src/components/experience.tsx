

import { Calendar, FolderCode, MapPin } from "lucide-react"

interface KeyProject {
  title: string
  description: string
  techStack?: string[]
}

interface ExperienceItem {
  period: string
  role: string
  company: string
  location: string
  items: string[]
  keyProjects?: KeyProject[]
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      period: "Jan 2021 – Present",
      role: "Senior Full Stack Software Engineer",
      company: "Pantheon Inc (ExxonMobil Program)",
      location: "Remote / Brazil",
      items: [
        "Working in a distributed global team, collaborating across regions to deliver scalable software solutions.",
        "Designed and developed scalable backend services using ASP.NET Core, EF Core, Hangfire.",
        "Built data-intensive dashboards and UI components using Angular.",
        "Built the price suggestion dashboard using React.",
        "Built small mobile app to help users to track important KPIs using React Native with Expo.",
        "Integrated Azure services (Service Bus, Storage, SQL Server, Key Vault, App Insights).",
        "Optimized API performance and database queries, significantly reducing (average of 35%) response times.",
        "Managed CI/CD pipelines via Azure DevOps.",
        "Provided mentorship to junior developers.",
      ],
      keyProjects: [
        {
          title: "Sales Dashboard",
          description:
            "Migrated the application through multiple versions of ASP.NET Core, designed the cache layer for the most expensive queries, implemented a large number of UI components, and created and maintained multiple modules and functionalities.",
          techStack: [
            "React",
            "JavaScript",
            "TypeScript",
            "Angular",
            "Svelte",
            "SQL",
            "Azure",
            "Tailwind CSS",
            "Hangfire",
          ],
        },
        {
          title: "Price Suggestion Dashboard",
          description:
            "Designed and created the MVP for this project, then contributed to its evolution into the complete solution.",
          techStack: ["React", "JavaScript", "TypeScript", "ASP.NET", "SQL", "Azure", "Tailwind CSS"],
        },
      ],
    },
    {
      period: "Feb 2013 – Oct 2020",
      role: "Full Stack Software Engineer",
      company: "Tribunal de Contas do Estado do Espírito Santo (TCE-ES)",
      location: "Brazil",
      items: [
        "Architected, in just one month, the organization’s core enterprise system and a standardized digital signature platform that remained in use for over 10 years, saving an estimated BRL 500,000 in development costs and nearly six months of development time compared with the contracted alternative.",
        "Developed complex APIs, background processing jobs, ETL workflows, and caching layers.",
        "Migrated legacy systems to ASP.NET Core and React, improving overall maintainability.",
        "Utilized a diverse stack including SQL Server, Redis, Solr, SignalR, React and AngularJS.",
        "Delivered technical training on Clean Code, SOLID principles, and performance optimization.",
      ],
      keyProjects: [
        {
          title: "TCE-ES (Core Enterprise System)",
          description:
            "Contributed to the development of the project from its early stages, actively participating in architectural and technology selection decisions. Collaborated with the team to define the most suitable technologies and approaches, and was responsible for implementing and integrating key project modules. Worked closely with other team members to ensure code quality, maintainability, and alignment with project requirements.",
          techStack: ["JavaScript", "TypeScript", "Angular", "ASP.NET", "SQL", "Hangfire", "Apache Solr"],
        },
        {
          title: "PDF Compliance",
          description:
            "Sole developer responsible for the end-to-end delivery of the PDF Compliance project. The solution was built with ASP.NET Core and React, providing a web interface for users to submit and analyse PDF documents against the standards and requirements established by the Court. It was also implemented as a microservice exposing a REST API, consumed by other TCE-ES systems to programmatically validate PDF documents and determine whether they comply with the required standards. Responsibilities included architecture, backend and frontend development, API design and implementation, PDF validation logic, and integration with existing TCE-ES systems.",
          techStack: ["React", "JavaScript", "TypeScript", "ASP.NET Core", "Microservices", "REST APIs"],
        },
        {
          title: "Painel de Controle",
          description:
            "Participated in the design and implementation of the data integration and ETL processes: extracting data from multiple sources, transforming and validating datasets, and loading the processed information into the platform. Also contributed to the development and optimisation of data pipelines, ensuring data consistency, reliability, and availability to support the analytical and reporting requirements of the project.",
          techStack: ["Angular", "ASP.NET", "SQL", "Redis", "ETL", "Hangfire"],
        },
      ],
    },
    {
      period: "Jan 2010 – Jan 2013",
      role: "Web Developer",
      company: "TAB Editora e Comunicação",
      location: "Brazil",
      items: [
        "Developed and maintained custom websites and microsites using PHP, MySQL, jQuery, and Bootstrap.",
        "Designed and implemented responsive web interfaces, ensuring compatibility across different devices and browsers.",
        "Participated in the development of a custom Content Management System (CMS) for a construction company, contributing to both functionality and user interface implementation.",
      ],
    },
    {
      period: "2008 – 2010",
      role: "Web Developer Intern",
      company: "Dacasa Financeira",
      location: "Brazil",
      items: [
        "Maintained and enhanced the company's internal CMS using ASP.NET Web Forms and JavaScript.",
        "Introduced and encouraged the use of JavaScript-based solutions as an alternative to relying heavily on Visual Studio's graphical page-building features.",
        "Improved the loading performance and responsiveness of several complex CMS screens containing a large number of UI elements.",
        "Contributed to the evolution of the development team's approach to building more efficient and responsive web interfaces.",
      ],
    },
    {
      period: "2007 – 2007",
      role: "Computer Education Assistant Teacher",
      company: "Centro de Ensino Charles Darwin",
      location: "Brazil",
      items: [
        "Assisted students in learning and using Microsoft Office applications, including Word, Excel, and PowerPoint.",
        "Introduced students to the fundamentals of HTML and web page development.",
        "Taught basic concepts of animation creation using Adobe Flash.",
        "Provided hands-on support and guidance to students during practical exercises and computer lab activities.",
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
              <ul className="space-y-2 mb-6">
                {exp.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {exp.keyProjects && exp.keyProjects.length > 0 && (
                <div className="mt-6 pt-4 border-t border-border/50 space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider">
                    <FolderCode className="h-4 w-4 text-primary" />
                    <span>Key Projects</span>
                  </div>
                  <div className="grid gap-4">
                    {exp.keyProjects.map((project, pIndex) => (
                      <div key={pIndex} className="p-4 rounded-lg bg-card/60 border border-border/60 space-y-2">
                        <h4 className="font-semibold text-foreground">{project.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                        {project.techStack && (
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.techStack.map((tech, tIndex) => (
                              <span
                                key={tIndex}
                                className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-secondary-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
