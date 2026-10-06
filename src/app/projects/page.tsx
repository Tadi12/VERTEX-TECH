import { PageHero } from "@/components/ui/PageHero";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "View our portfolio of digital products and custom software solutions.",
};

const projects = [
  {
    id: "hable-cafe",
    name: "Hable Cafe Digital Ordering Platform",
    description: "A complete digital ordering and restaurant management platform designed to modernize the customer ordering experience and simplify operations.",
    industry: "Hospitality / F&B",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    href: "/projects/hable-cafe",
    image: "/projects/hable-cafe.jpg",
    featured: true
  },
  {
    id: "project-2",
    name: "Enterprise Resource Dashboard",
    description: "Custom internal dashboard for resource allocation, employee tracking, and financial reporting.",
    industry: "Business Services",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "#",
    image: "/projects/dashboard.jpg",
    featured: false
  },
  {
    id: "project-3",
    name: "Retail E-Commerce Platform",
    description: "High-performance headless e-commerce store with advanced product filtering and inventory syncing.",
    industry: "Retail",
    technologies: ["Next.js", "Shopify API", "Tailwind CSS"],
    href: "#",
    image: "/projects/ecommerce.jpg",
    featured: false
  }
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero 
        title="Our Work" 
        description="Explore how we've helped businesses transform their operations and customer experiences through technology."
      />

      <section className="py-20 bg-background min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex flex-col group bg-card border border-border rounded-3xl overflow-hidden ${project.featured ? 'lg:col-span-2' : ''}`}
              >
                {/* Image */}
                <div className={`w-full bg-muted relative overflow-hidden ${project.featured ? 'h-80 md:h-[500px]' : 'h-64'}`}>
                   <Image 
                     src={project.image} 
                     alt={project.name}
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                   />
                   
                   {project.featured && (
                     <div className="absolute top-6 left-6 px-4 py-1.5 bg-background/80 backdrop-blur-sm border border-border rounded-full text-xs font-semibold text-foreground">
                       Featured Case Study
                     </div>
                   )}
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="text-primary font-medium">{project.industry}</span>
                  </div>
                  <h3 className={`font-bold text-foreground mb-4 ${project.featured ? 'text-3xl' : 'text-2xl'}`}>
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    {project.href !== "#" ? (
                      <Link
                        href={project.href}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-foreground text-background hover:bg-foreground/90 h-10 px-6"
                      >
                        View Project
                      </Link>
                    ) : (
                      <span className="inline-flex items-center text-sm font-medium text-muted-foreground">
                        Case study coming soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
