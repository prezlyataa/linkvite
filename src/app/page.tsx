import { Contact } from "@/components/Contact";
import { EventCategories } from "@/components/EventCategories";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Hero />
      <EventCategories />
      <HowItWorks />
      <Pricing />
      <Contact />
    </main>
  );
}
