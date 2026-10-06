import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Technology } from "@/components/sections/Technology";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Solutions />
      <FeaturedProject />
      <WhyUs />
      <Process />
      <Technology />
      <CTA />
    </>
  );
}
