import { PageHero } from "@/components/ui/PageHero";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Vertex Tech team.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero 
        title="Build the Future With Vertex Tech." 
        description="We are always looking for talented individuals who are passionate about technology and solving business problems."
      />

      <section className="py-24 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <div className="bg-card border border-border rounded-3xl p-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">No Open Positions Currently</h2>
            <p className="text-muted-foreground mb-8 text-balance">
              While we don't have any specific openings at the moment, as a growing technology startup we are always interested in connecting with talented developers, designers, and strategists.
            </p>
            <p className="text-muted-foreground mb-8">
              Feel free to send us your resume or portfolio, and we'll keep it on file for future opportunities.
            </p>
            <Link
              href="mailto:careers@vertextech.com"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8"
            >
              Send Us Your Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
