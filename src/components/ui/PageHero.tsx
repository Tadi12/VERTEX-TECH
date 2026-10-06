"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description?: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-muted/20 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
