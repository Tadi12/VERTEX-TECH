"use client";

import { motion } from "framer-motion";
import { Coffee, Briefcase, ShoppingBag, BookOpen, Settings } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Coffee,
    title: "Restaurant & Cafe",
    description: "Digital menus, QR ordering, waiter systems, kitchen management and analytics.",
    href: "/solutions#restaurant"
  },
  {
    icon: Briefcase,
    title: "Business Management",
    description: "Custom systems that help businesses manage operations more efficiently.",
    href: "/solutions#business"
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description: "Online stores and digital commerce platforms tailored for growth.",
    href: "/solutions#ecommerce"
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Digital platforms and management systems for educational organizations.",
    href: "/solutions#education"
  },
  {
    icon: Settings,
    title: "Custom Software",
    description: "Software designed around unique and complex business requirements.",
    href: "/solutions#custom"
  }
];

export function Solutions() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Technology Built Around Your Business
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              We focus on solving business problems instead of simply delivering code.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4"
          >
            View all solutions
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            // Make the first card span 2 columns on lg screens if we want, but let's keep it clean
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index === 0 || index === 3 ? 'lg:col-span-2' : 'col-span-1'}`}
              >
                <div className="h-full p-8 rounded-2xl bg-card border border-border flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-md">
                      {solution.description}
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link
                      href={solution.href}
                      className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Learn more <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
