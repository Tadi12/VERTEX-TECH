"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"]
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    name: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    name: "Tools & Infrastructure",
    items: ["Git", "GitHub", "Cloudinary", "Vercel"]
  }
];

export function Technology() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Built With Modern Technology
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl">
            We use the right tools for the job to ensure your project is scalable, maintainable, and fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map(item => (
                  <div 
                    key={item}
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
