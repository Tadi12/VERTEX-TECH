import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Hable Cafe | Case Study",
  description: "A complete digital ordering and restaurant management platform.",
};

export default function HableCafeCaseStudy() {
  return (
    <article className="pt-32 pb-24">
      {/* Header */}
      <header className="container mx-auto px-4 md:px-6 mb-16">
        <Link href="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        <div className="max-w-4xl">
          <div className="flex gap-4 mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">Hospitality</span>
            <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full uppercase tracking-wider">Web App</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Hable Cafe Digital Ordering Platform
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance">
            A complete digital ordering and restaurant management platform designed to modernize the customer ordering experience and simplify restaurant operations.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="container mx-auto px-4 md:px-6 mb-24">
        <div className="w-full h-[50vh] md:h-[70vh] bg-muted rounded-3xl border border-border relative overflow-hidden">
          <Image 
            src="/projects/hable-cafe.jpg"
            alt="Hable Cafe UI Mockup"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p>
                  Hable Cafe approached us to solve operational inefficiencies caused by traditional paper menus and manual order taking. During peak hours, staff were overwhelmed, leading to order mistakes and longer wait times.
                </p>
                <p>
                  We developed a comprehensive digital ecosystem that addresses the needs of every persona in the restaurant: the customer, the waiter, the kitchen staff, the barista, and management.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">The Problem & Solution</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg font-bold text-red-500 mb-4 uppercase tracking-wider">The Problem</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-muted-foreground"><span className="text-red-500 font-bold">×</span> Manual order taking causing bottlenecks.</li>
                    <li className="flex gap-3 text-muted-foreground"><span className="text-red-500 font-bold">×</span> Frequent communication errors between FOH and BOH.</li>
                    <li className="flex gap-3 text-muted-foreground"><span className="text-red-500 font-bold">×</span> No real-time data on sales or inventory.</li>
                  </ul>
                </div>
                <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg font-bold text-green-500 mb-4 uppercase tracking-wider">The Solution</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-muted-foreground"><span className="text-green-500 font-bold">✓</span> QR-code based self-ordering for customers.</li>
                    <li className="flex gap-3 text-muted-foreground"><span className="text-green-500 font-bold">✓</span> Dedicated digital displays for kitchen and bar.</li>
                    <li className="flex gap-3 text-muted-foreground"><span className="text-green-500 font-bold">✓</span> Centralized admin dashboard for real-time analytics.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8">Platform Experience</h2>
              
              <div className="space-y-12">
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Customer Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    Customers scan a QR code at their table to instantly view the digital menu without downloading an app. They can browse categories, customize items, add to cart, and place their order directly to the kitchen.
                  </p>
                  <p className="text-sm font-medium text-foreground bg-secondary inline-block px-3 py-1 rounded">Flow: QR Menu → Browse → Cart → Order</p>
                </div>

                <div className="border-l-2 border-border pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Waiter Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    Waiters use a tablet or mobile device to monitor table status. They receive notifications when food is ready to be delivered, handle cash payments, and can input orders for customers who prefer traditional service.
                  </p>
                  <p className="text-sm font-medium text-foreground bg-secondary inline-block px-3 py-1 rounded">Flow: Tables → Orders → Delivery → Completion</p>
                </div>

                <div className="border-l-2 border-border pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Kitchen & Barista Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    Orders are automatically routed to the correct station (Food to Kitchen, Drinks to Barista). Staff see digital tickets, mark items as preparing, and tap when ready—triggering a notification to the waiter.
                  </p>
                  <p className="text-sm font-medium text-foreground bg-secondary inline-block px-3 py-1 rounded">Flow: New Orders → Preparing → Ready</p>
                </div>

                <div className="border-l-2 border-border pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Admin Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    Management has a comprehensive dashboard to manage the menu (instantly updating all customer devices), track sales performance, manage staff permissions, and view operational analytics.
                  </p>
                  <p className="text-sm font-medium text-foreground bg-secondary inline-block px-3 py-1 rounded">Flow: Dashboard → Menu → Staff → Analytics</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Real-time order synchronization",
                  "Intelligent order routing",
                  "Role-based access control",
                  "Dynamic menu management",
                  "Stock availability toggles",
                  "Performance analytics"
                ].map(feature => (
                  <div key={feature} className="flex items-center gap-3 bg-card border border-border p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8 mt-12 lg:mt-0">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 sticky top-32">
              <h3 className="text-xl font-bold text-foreground mb-6">Technology Stack</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-md">React</span>
                    <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-md">Tailwind CSS</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Backend & API</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-md">Node.js</span>
                    <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-md">Express.js</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Database & Storage</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-md">MongoDB</span>
                    <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-md">Cloudinary</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-border">
                <h4 className="text-xl font-bold text-foreground mb-4">Want to build something similar?</h4>
                <Link
                  href="/contact?project=hable-cafe"
                  className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-12"
                >
                  Start Your Own Project
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
