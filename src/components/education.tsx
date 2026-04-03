import { Award, GraduationCap } from "lucide-react"

export function Education() {
  const academic = [
    {
      degree: "Bachelor's Degree in Information Systems",
      institution: "Universidade Vila Velha (UVV)",
      location: "Brazil",
    },
  ]

  const certifications = [
    {
      name: "Microsoft 10987: Performance Tuning and Optimizing SQL Databases",
      issuer: "Microsoft Certified",
    },
    {
      name: "Microsoft 20768: Developing SQL Data Models",
      issuer: "Microsoft Certified",
    },
    {
      name: "Microsoft 20463: Implementing a Data Warehouse with SQL Server 2014",
      issuer: "Microsoft Certified",
    },
    {
      name: "Advanced Scrum Techniques",
      issuer: "Professional Certification",
    },
  ]

  return (
    <section id="education" className=" flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-sm text-muted-foreground mb-12 uppercase tracking-wider">Education & Certifications</h2>
        
        <div className="space-y-12">
          {/* Academic Education */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Academic Background
            </h3>
            <div className="space-y-6">
              {academic.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/30" />
                  <h4 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-lg text-primary mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border">
                  <p className="font-medium text-foreground mb-1">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
