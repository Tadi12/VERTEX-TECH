"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-primary/5 -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_100%)] opacity-5 -z-10 blur-2xl" />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-card/50 backdrop-blur-md border border-border rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Have an idea? <br className="hidden md:block"/> Let's build it.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
            Whether you need a business website, web application, or custom software solution, let's turn your idea into a digital product.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg shadow-primary/20"
            >
              Start a Project
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-border bg-background hover:bg-muted text-foreground h-12 px-8"
            >
              Talk to Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
