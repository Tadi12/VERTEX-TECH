import { PageHero } from "@/components/ui/PageHero";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Thoughts, insights, and news from the Vertex Tech team.",
};

const posts = [
  {
    slug: "why-businesses-need-strong-digital-presence",
    title: "Why Businesses Need a Strong Digital Presence",
    excerpt: "In today's landscape, a website is no longer just a digital business card. It's the core of your operations and customer acquisition strategy.",
    date: "Oct 12, 2026",
    category: "Strategy"
  },
  {
    slug: "qr-ordering-improve-restaurant-operations",
    title: "How QR Ordering Can Improve Restaurant Operations",
    excerpt: "Discover how digital menus and self-ordering can reduce wait times, increase table turnover, and alleviate staff pressure.",
    date: "Sep 28, 2026",
    category: "Hospitality"
  },
  {
    slug: "invest-in-custom-software",
    title: "Why Businesses Should Invest in Custom Software",
    excerpt: "When off-the-shelf SaaS products force you to change your workflow, it might be time to build a solution that fits your business perfectly.",
    date: "Sep 15, 2026",
    category: "Development"
  },
  {
    slug: "choosing-right-technology",
    title: "Choosing the Right Technology for Your Business",
    excerpt: "A guide to understanding different tech stacks and how to make the right architectural choices for your next digital product.",
    date: "Aug 30, 2026",
    category: "Technology"
  }
];

export default function BlogPage() {
  return (
    <>
      <PageHero 
        title="Insights & Perspectives" 
        description="Thoughts on technology, design, and building products that matter."
      />

      <section className="py-24 bg-background min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent group-hover:scale-105 transition-transform duration-500" />
                  <div className="w-16 h-1 bg-primary/20 rounded-full" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4 text-xs font-medium">
                    <span className="text-primary bg-primary/10 px-2 py-1 rounded">{post.category}</span>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-sm font-medium text-foreground">
                    Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
