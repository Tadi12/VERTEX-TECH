"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Smartphone, Monitor, Database, Server, Coffee } from "lucide-react";

export function FeaturedProject() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground mb-6">
            Featured Case Study
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Hable Cafe Digital Platform
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A complete digital ordering and restaurant management platform designed to modernize the customer ordering experience and simplify restaurant operations.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Customer Experience</h4>
                  <p className="text-sm text-muted-foreground">QR Menu → Browse → Cart → Order</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Monitor className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Staff Operations</h4>
                  <p className="text-sm text-muted-foreground">Kitchen & Barista displays, Waiter routing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Admin Control</h4>
                  <p className="text-sm text-muted-foreground">Menu management, Staff roles, Analytics</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {['React', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="/projects/hable-cafe"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-foreground text-background hover:bg-foreground/90 h-12 px-8"
            >
              View Case Study
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract UI Mockup */}
            <div className="relative aspect-[4/3] w-full rounded-2xl bg-secondary border border-border p-4 md:p-8 flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
              
              <div className="relative w-full max-w-sm bg-card rounded-xl border border-border shadow-xl overflow-hidden">
                {/* Header */}
                <div className="h-14 bg-background border-b border-border flex items-center justify-between px-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                      <Coffee className="w-4 h-4 text-primary" />
                    </div>
                    <div className="w-20 h-3 bg-muted rounded-full" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-secondary" />
                </div>
                {/* Content */}
                <div className="p-4 space-y-4">
                  <div className="w-full h-32 rounded-lg bg-muted flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <div className="w-32 h-4 bg-muted-foreground/20 rounded-full" />
                      <div className="w-24 h-3 bg-muted-foreground/10 rounded-full" />
                    </div>
                    <div className="w-16 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                      Add
                    </div>
                  </div>
                  <div className="space-y-3 pt-2">
                     <div className="w-full h-16 rounded-lg border border-border flex items-center px-3 gap-3">
                        <div className="w-10 h-10 rounded bg-muted" />
                        <div className="space-y-2 flex-1">
                          <div className="w-1/2 h-2 bg-muted-foreground/20 rounded-full" />
                          <div className="w-1/3 h-2 bg-muted-foreground/10 rounded-full" />
                        </div>
                     </div>
                     <div className="w-full h-16 rounded-lg border border-border flex items-center px-3 gap-3">
                        <div className="w-10 h-10 rounded bg-muted" />
                        <div className="space-y-2 flex-1">
                          <div className="w-2/3 h-2 bg-muted-foreground/20 rounded-full" />
                          <div className="w-1/4 h-2 bg-muted-foreground/10 rounded-full" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute top-1/4 -right-4 md:-right-8 p-4 bg-card rounded-xl border border-border shadow-lg flex flex-col gap-2 transform rotate-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-medium">New Order</span>
                </div>
                <div className="w-24 h-2 bg-muted rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
