"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "Understand the business, users and requirements."
  },
  {
    num: "02",
    title: "Plan",
    description: "Define the solution, features and technical approach."
  },
  {
    num: "03",
    title: "Design",
    description: "Create the user experience and interface."
  },
  {
    num: "04",
    title: "Build",
    description: "Develop and integrate the product."
  },
  {
    num: "05",
    title: "Test",
    description: "Test functionality, responsiveness, performance and security."
  },
  {
    num: "06",
    title: "Launch",
    description: "Deploy the product and make it available to users."
  },
  {
    num: "07",
    title: "Support",
    description: "Maintain, improve and evolve the product."
  }
];

export function Process() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            From Idea to Product
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl">
            Our structured approach ensures we deliver high-quality digital products consistently.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`md:w-1/2 flex ${isEven ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'}`}>
                    <div className="bg-card border border-border p-6 rounded-2xl shadow-sm w-full max-w-md hover:border-primary/50 transition-colors relative">
                      {/* Node for mobile */}
                      <div className="absolute top-6 -left-12 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary md:hidden flex flex-col items-center justify-center">
                         <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-5xl font-black text-muted/50 absolute top-4 right-6 -z-10">{step.num}</span>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Node for desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-muted items-center justify-center z-10 text-xs font-bold text-muted-foreground shadow-sm">
                    {step.num}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
