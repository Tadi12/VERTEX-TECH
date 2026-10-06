"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "01", label: "Digital Products" },
  { value: "02", label: "Business Solutions" },
  { value: "03", label: "Modern Technologies" },
  { value: "04", label: "Client-Focused Development" },
];

export function Stats() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between">
          <div className="md:w-1/3">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground text-balance">
              Built with modern technology for reliable results.
            </h2>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col gap-2"
              >
                <span className="text-4xl font-bold text-primary">{stat.value}</span>
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
