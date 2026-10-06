import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Mock data for the example
const posts = {
  "why-businesses-need-strong-digital-presence": {
    title: "Why Businesses Need a Strong Digital Presence",
    date: "Oct 12, 2026",
    category: "Strategy",
    content: "In today's highly competitive market, a business without a strong digital presence is practically invisible. While social media provides a quick way to reach audiences, a dedicated website or web application serves as the foundation of your digital identity..."
  },
  "qr-ordering-improve-restaurant-operations": {
    title: "How QR Ordering Can Improve Restaurant Operations",
    date: "Sep 28, 2026",
    category: "Hospitality",
    content: "The hospitality industry is experiencing a massive shift in how it operates. One of the most significant changes has been the rapid adoption of digital menus and QR-based ordering systems..."
  },
  "invest-in-custom-software": {
    title: "Why Businesses Should Invest in Custom Software",
    date: "Sep 15, 2026",
    category: "Development",
    content: "Many businesses start by using off-the-shelf SaaS products to manage their operations. However, as they grow, these generic solutions often become bottlenecks rather than enablers..."
  },
  "choosing-right-technology": {
    title: "Choosing the Right Technology for Your Business",
    date: "Aug 30, 2026",
    category: "Technology",
    content: "When embarking on a new digital project, one of the most critical decisions is choosing the right technology stack. The choices made early on will impact development speed, product scalability, and long-term maintenance costs..."
  }
};

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];
  if (!post) return { title: "Post Not Found" };
  return { title: post.title };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Insights
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6 text-sm font-medium">
            <span className="text-primary bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-muted-foreground">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            {post.title}
          </h1>
          
          <div className="w-full h-64 md:h-96 bg-muted rounded-3xl overflow-hidden relative border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
          <p className="lead text-xl text-foreground font-medium mb-8">
            {post.content}
          </p>
          <p>
            (This is a placeholder for the full article content. In a production environment, this data would be fetched from a CMS like Sanity, Contentful, or a Markdown file system.)
          </p>
          <h2>The Core Argument</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <ul>
            <li>First important point</li>
            <li>Second important point</li>
            <li>Third important point</li>
          </ul>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-xl font-bold text-foreground mb-4">Share this article</h3>
          <div className="flex gap-4">
             <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/80">Twitter</button>
             <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/80">LinkedIn</button>
          </div>
        </div>
      </div>
    </article>
  );
}
