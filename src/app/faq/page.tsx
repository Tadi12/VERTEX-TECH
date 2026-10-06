"use client";

import { PageHero } from "@/components/ui/PageHero";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Project costs vary depending on complexity, features, and scale. A simple landing page will cost significantly less than a custom e-commerce platform or web application. We provide detailed proposals with transparent pricing after our initial discovery call where we understand your specific requirements."
  },
  {
    question: "How long does a project take?",
    answer: "A standard business website typically takes 4-6 weeks from design to launch. More complex custom software or web applications can take 3-6 months. The timeline depends heavily on the project scope and how quickly we can collaborate on feedback and content."
  },
  {
    question: "Do you build custom software?",
    answer: "Yes. In fact, building custom business software is one of our core strengths. If off-the-shelf software doesn't fit your unique workflow, we can architect and develop a bespoke solution tailored exactly to how your business operates."
  },
  {
    question: "Do you provide hosting?",
    answer: "Yes, we handle deployment and can provide managed hosting for the products we build. We use modern, scalable cloud infrastructure (like AWS, Google Cloud, or Vercel) to ensure your application is fast, secure, and reliable."
  },
  {
    question: "Do you provide maintenance?",
    answer: "Absolutely. We view product launch as the beginning of our partnership, not the end. We offer various maintenance retainers that include security updates, performance monitoring, bug fixes, and feature enhancements."
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes, we can modernize your existing digital presence. We'll start by analyzing what works and what doesn't with your current site, then design a new experience focused on improving performance and user conversion."
  },
  {
    question: "Do you work with businesses outside your location?",
    answer: "Yes, we work with clients globally. Modern collaboration tools make it seamless to work across time zones and borders effectively."
  },
  {
    question: "How do we start a project?",
    answer: "It starts with a conversation. Fill out our contact form with some basic details about your project. We'll review it and schedule a discovery call to discuss your goals, timeline, and budget. From there, we'll provide a detailed proposal."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHero 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about our services, processes, and how we work."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-primary/50 bg-primary/5' : 'border-border bg-card hover:border-primary/30'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className="font-semibold text-foreground pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-8 bg-muted/30 border border-border rounded-3xl">
            <h3 className="text-xl font-bold text-foreground mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              We're happy to answer any other questions you might have.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
