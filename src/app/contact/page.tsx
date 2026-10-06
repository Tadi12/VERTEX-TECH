import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/config/site";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Start a project with Vertex Tech.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Let's Build Something Great." 
        description="Ready to transform your business with custom digital solutions? Fill out the form below and our team will get back to you within 24 hours."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            <div className="lg:col-span-8 bg-card border border-border rounded-3xl p-6 md:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-8">Project Inquiry</h2>
              <ContactForm />
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="bg-muted/30 border border-border rounded-3xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Email</p>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">WhatsApp</p>
                      <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                        {siteConfig.contact.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Phone</p>
                      <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Location</p>
                      <p className="text-muted-foreground">{siteConfig.contact.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4">What happens next?</h3>
                <ol className="space-y-4 text-primary-foreground/80 text-sm">
                  <li className="flex gap-3">
                    <span className="font-bold">1.</span>
                    We review your project requirements.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">2.</span>
                    We schedule a discovery call to discuss details and feasibility.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">3.</span>
                    We provide a proposal with timelines and estimates.
                  </li>
                </ol>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
