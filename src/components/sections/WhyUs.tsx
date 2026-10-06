"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Modern Technology",
    description: "We use modern development tools and technologies to build maintainable digital products."
  },
  {
    title: "Business-Focused",
    description: "We focus on solving real business problems, not just writing code."
  },
  {
    title: "Responsive by Design",
    description: "Our products are designed to work seamlessly across phones, tablets and desktops."
  },
  {
    title: "Performance",
    description: "We build fast and optimized digital experiences."
  },
  {
    title: "Security",
    description: "Security is considered throughout the development process."
  },
  {
    title: "Long-Term Partnership",
    description: "We aim to build lasting relationships with our clients beyond launch."
  }
];

export function WhyUs() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Why Vertex Tech?
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            We combine technical expertise with business understanding to deliver products that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="mt-1">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
