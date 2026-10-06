import { PageHero } from "@/components/ui/PageHero";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Technology solutions built around your specific business needs.",
};

const solutions = [
  {
    id: "restaurant",
    title: "Restaurant & Cafe Solutions",
    problem: "Inefficient ordering processes, high staff costs, and lack of customer data make it difficult to scale hospitality businesses.",
    solution: "A complete digital ordering and management ecosystem that connects customers, front-of-house, and kitchen staff.",
    features: ["QR Code Digital Menus", "Customer Self-Ordering via Mobile", "Kitchen Display Systems (KDS)", "Waiter Routing & Management", "Sales & Inventory Analytics"],
    benefits: ["Reduce order errors by 90%", "Increase table turnover rate", "Lower staffing requirements", "Build customer databases for marketing"]
  },
  {
    id: "business",
    title: "Business Management",
    problem: "Relying on scattered spreadsheets, paper trails, and disconnected software creates operational bottlenecks and data silos.",
    solution: "Unified custom management software tailored precisely to how your business operates.",
    features: ["Custom CRM Systems", "Inventory & Asset Tracking", "Automated Reporting", "Employee Portals", "Document Management"],
    benefits: ["Single source of truth for data", "Eliminate manual data entry", "Streamline inter-department communication", "Make data-driven decisions faster"]
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    problem: "Generic storefronts fail to convert visitors, while technical limitations prevent scaling product lines or entering new markets.",
    solution: "High-performance, custom e-commerce platforms designed for conversion and seamless operational integration.",
    features: ["Custom Shopping Experiences", "Advanced Product Filtering", "Secure Payment Gateways", "Order Fulfillment Integration", "Abandoned Cart Recovery"],
    benefits: ["Higher conversion rates", "Faster page load times", "Simplified inventory management", "Better mobile shopping experience"]
  },
  {
    id: "education",
    title: "Education",
    problem: "Managing student data, course materials, and administrative tasks manually drains resources from actual teaching.",
    solution: "Comprehensive digital platforms and management systems for educational organizations.",
    features: ["Student Information Systems", "Learning Management (LMS)", "Online Assessment Tools", "Parent/Student Portals", "Attendance Tracking"],
    benefits: ["Centralized academic records", "Improved student engagement", "Automated administrative tasks", "Secure data handling"]
  },
  {
    id: "hospitality",
    title: "Hospitality",
    problem: "Fragmented booking systems and poor guest communication lead to missed revenue and sub-optimal guest experiences.",
    solution: "Integrated hospitality platforms managing everything from reservations to on-property services.",
    features: ["Direct Booking Engines", "Property Management Integration", "Digital Concierge", "Automated Guest Communication", "Housekeeping Management"],
    benefits: ["Increase direct bookings", "Enhance guest satisfaction", "Optimize room turnover", "Upsell amenities digitally"]
  },
  {
    id: "custom",
    title: "Custom Business Software",
    problem: "Off-the-shelf software doesn't fit your unique business model, forcing you to change your processes to match the software.",
    solution: "Bespoke software designed specifically around your unique requirements and workflows.",
    features: ["Tailored Workflows", "Third-party API Integrations", "Role-based Access Control", "Scalable Architecture", "Custom Analytics Dashboards"],
    benefits: ["Software fits the business perfectly", "No unnecessary feature bloat", "Complete ownership of data", "Competitive operational advantage"]
  }
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero 
        title="Solutions for Your Industry" 
        description="We focus on solving business problems, building the right technology for your specific operational challenges."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {solutions.map((solution) => (
              <div key={solution.id} id={solution.id} className="scroll-mt-32">
                <div className="border-l-4 border-primary pl-6 md:pl-10 py-2 mb-8">
                  <h2 className="text-3xl font-bold text-foreground">{solution.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-card border border-border rounded-3xl p-8 md:p-12">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">The Problem</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {solution.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-green-500 uppercase tracking-wider mb-3">The Solution</h3>
                      <p className="text-foreground text-lg leading-relaxed font-medium">
                        {solution.solution}
                      </p>
                    </div>
                    <div className="pt-4">
                       <Link
                        href={`/contact?solution=${solution.id}`}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                      >
                        Discuss this solution
                      </Link>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="bg-muted/50 rounded-2xl p-6">
                      <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {solution.features.map(feature => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="text-primary mt-1 font-bold">✓</span>
                            <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-muted/50 rounded-2xl p-6">
                      <h3 className="font-semibold text-foreground mb-4">Business Benefits</h3>
                      <ul className="space-y-3">
                        {solution.benefits.map(benefit => (
                          <li key={benefit} className="flex items-start gap-2">
                            <span className="text-foreground mt-1 font-bold">→</span>
                            <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
