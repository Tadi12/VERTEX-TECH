import { PageHero } from "@/components/ui/PageHero";
import { Globe, Code, ShoppingCart, Layout, Wrench, Cpu, Cloud, Settings } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive digital services from web development to custom software.",
};

const detailedServices = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "Business websites, landing pages, corporate websites and modern web experiences built for performance and scale.",
    included: ["Responsive Design", "SEO Optimization", "CMS Integration", "Performance Tuning"],
    useCases: ["Corporate Websites", "Marketing Landing Pages", "Portfolios", "Blogs"]
  },
  {
    id: "custom-software",
    icon: Code,
    title: "Custom Software",
    description: "Business management systems and custom applications designed around specific workflows and complex requirements.",
    included: ["System Architecture", "API Development", "Database Design", "Security Implementation"],
    useCases: ["Internal Tools", "Client Portals", "SaaS Platforms", "Legacy Migration"]
  },
  {
    id: "e-commerce",
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Modern online stores designed to help businesses sell online with secure payments and inventory management.",
    included: ["Payment Gateway Setup", "Inventory Management", "Shopping Cart", "Order Tracking"],
    useCases: ["Retail Stores", "Digital Products", "Subscription Services", "B2B Commerce"]
  },
  {
    id: "ui-ux",
    icon: Layout,
    title: "UI/UX Design",
    description: "Clean, intuitive and responsive interfaces focused on usability and conversion optimization.",
    included: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
    useCases: ["App Redesigns", "New Product Design", "Conversion Optimization", "Brand Identity"]
  },
  {
    id: "business-automation",
    icon: Settings,
    title: "Business Automation",
    description: "Streamline repetitive tasks and integrate disparate systems to improve operational efficiency.",
    included: ["Workflow Analysis", "API Integration", "Custom Scripts", "Dashboard Creation"],
    useCases: ["Data Entry Automation", "Report Generation", "CRM Integration", "Email Workflows"]
  },
  {
    id: "digital-ordering",
    icon: Cpu,
    title: "Digital Ordering Systems",
    description: "End-to-end ordering platforms for restaurants, cafes, and retail establishments.",
    included: ["QR Menus", "Kitchen Displays", "Payment Processing", "Order Routing"],
    useCases: ["Restaurants", "Cafes", "Delivery Services", "Retail Pickup"]
  },
  {
    id: "cloud-deployment",
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "Scalable infrastructure setup, CI/CD pipelines, and cloud migration services.",
    included: ["AWS/GCP/Azure Setup", "Docker & Kubernetes", "CI/CD Pipelines", "Server Optimization"],
    useCases: ["High-Traffic Applications", "Microservices Architecture", "Automated Deployments"]
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Continuous improvements, maintenance, optimization and technical support to keep your digital assets running smoothly.",
    included: ["Security Updates", "Performance Monitoring", "Bug Fixes", "Feature Enhancements"],
    useCases: ["Ongoing Support", "Legacy System Maintenance", "SLA Agreements"]
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        title="Technology Solutions Designed Around Your Business" 
        description="We don't just write code. We build digital products that solve problems, improve workflows, and drive growth."
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {detailedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-32 border border-border rounded-3xl p-8 md:p-12 bg-card shadow-sm">
                  <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-muted/50 rounded-2xl p-6">
                        <h3 className="font-semibold text-foreground mb-4">What's Included</h3>
                        <ul className="space-y-3">
                          {service.included.map(item => (
                            <li key={item} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-muted/50 rounded-2xl p-6">
                        <h3 className="font-semibold text-foreground mb-4">Typical Use Cases</h3>
                        <ul className="space-y-3">
                          {service.useCases.map(item => (
                            <li key={item} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-border flex justify-end">
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4"
                    >
                      Discuss this service <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Not sure what you need?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Every business is unique. We can help you identify the right technological approach for your specific challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8"
          >
            Let's Discuss Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
