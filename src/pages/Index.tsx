import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { ForDevelopers } from "@/components/ForDevelopers";
import { ForBusiness } from "@/components/ForBusiness";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Problem />
      <HowItWorks />
      <ForDevelopers />
      <ForBusiness />
      <FinalCTA />
    </div>
  );
};

export default Index;