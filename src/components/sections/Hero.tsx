"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Monitor, Layers } from "lucide-react";
import { InteractiveGrid } from "@/components/ui/InteractiveGrid";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background -z-30" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-20" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-20" />
      
      <InteractiveGrid />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Next-Generation Digital Agency
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance leading-tight">
              Building Digital Solutions <br className="hidden md:block" />
              for the Next Generation of Business.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-xl leading-relaxed">
              Vertex Tech creates modern websites, web applications, and custom digital solutions that help businesses work smarter, serve customers better, and grow faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8"
              >
                Start a Project
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-border bg-transparent hover:bg-muted text-foreground h-12 px-8 group"
              >
                View Our Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center"
          >
            <div className="relative w-full h-full border border-border rounded-2xl overflow-hidden shadow-2xl group">
              {/* Image */}
              <img 
                src="/hero.jpg" 
                alt="Technology Workspace" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 p-4 bg-card/80 backdrop-blur-md border border-border rounded-xl shadow-lg flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-semibold text-foreground">Digital Products</div>
                  <div className="text-xs text-muted-foreground">Built for scale</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
