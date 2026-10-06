import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/config/site";
import { Metadata } from "next";
import { Lightbulb, ShieldCheck, Target, HeartHandshake, Layers, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Vertex Tech and our approach to building digital solutions.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to find better ways to solve problems."
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We communicate honestly, set realistic expectations, and deliver on our promises."
  },
  {
    icon: Target,
    title: "Quality",
    description: "We hold ourselves to high technical standards, ensuring robust, maintainable code."
  },
  {
    icon: Layers,
    title: "Simplicity",
    description: "We strive to make complex systems intuitive and easy to use for the end-user."
  },
  {
    icon: HeartHandshake,
    title: "Customer Focus",
    description: "Our success is measured entirely by the value we create for our clients' businesses."
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Technology moves fast. We commit to continuous education to stay at the forefront."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="Technology With Purpose." 
        description="Vertex Tech is a technology company focused on building modern digital products and software solutions for businesses."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p>
                  Vertex Tech is a growing technology startup founded with a clear objective: to bridge the gap between complex technical capabilities and real business needs. We are developers, designers, and strategists who believe that good software should make business operations smoother, not more complicated.
                </p>
                <p>
                  While many agencies focus purely on delivering code or pretty interfaces, we take a holistic approach. We analyze how your business works, identify the bottlenecks, and engineer digital solutions designed specifically to remove those friction points.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-muted/30 p-8 rounded-3xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with high-quality, custom digital solutions that streamline their operations, enhance their customer experience, and accelerate their growth.
                </p>
              </div>
              <div className="bg-muted/30 p-8 rounded-3xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become a leading technology partner known for building robust, innovative software that solves meaningful problems for organizations of all sizes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground text-balance">
              These principles guide how we work, how we make decisions, and how we interact with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-card border border-border p-8 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Technology Philosophy</h2>
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed bg-card border border-border p-8 md:p-12 rounded-3xl">
              <p>
                <strong className="text-foreground">Right Tool for the Job:</strong> We are not bound to a single framework. We choose the technology stack that best fits the project's requirements for performance, scalability, and maintainability.
              </p>
              <p>
                <strong className="text-foreground">Built to Last:</strong> We write clean, documented code and use established architectural patterns so that our products can be maintained and scaled long after the initial launch.
              </p>
              <p>
                <strong className="text-foreground">User-Centric Design:</strong> The most powerful software is useless if people can't figure out how to use it. We prioritize intuitive interfaces and smooth user experiences.
              </p>
              <p>
                <strong className="text-foreground">Security by Default:</strong> In a world of increasing digital threats, security is not an afterthought. It is integrated into our development lifecycle from day one.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
