"use client";

import { motion } from "framer-motion";
import { Globe, Code, ShoppingCart, Cpu, Layout, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Business websites, landing pages, corporate websites and modern web experiences.",
    href: "/services#web-development"
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Business management systems and custom applications designed around specific workflows.",
    href: "/services#custom-software"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Modern online stores designed to help businesses sell online.",
    href: "/services#e-commerce"
  },
  {
    icon: Cpu,
    title: "Digital Solutions",
    description: "Ordering systems, booking systems, dashboards, automation and other business tools.",
    href: "/services#digital-solutions"
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Clean, intuitive and responsive interfaces focused on usability.",
    href: "/services#ui-ux"
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Continuous improvements, maintenance, optimization and technical support.",
    href: "/services#maintenance"
  }
];

export function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            What We Build
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            We deliver a comprehensive suite of digital services to help your business thrive in the modern landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={service.href}
                  className="group block h-full p-8 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
