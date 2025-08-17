import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium animate-float">
            <Sparkles className="w-4 h-4" />
            Transform Your Vision
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl text-white sm:text-6xl lg:text-7xl font-bold leading-tight">
            Ready to Launch Your{" "}
            <span className="text-gradient animate-pulse-glow">
              AI Business
            </span>
            ?
          </h2>

          {/* Supporting Text */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers already building the future of AI
            commerce. From prototype to profit in minutes, not months.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button className="btn-hero text-xl px-12 py-6 group">
              <Rocket className="w-6 h-6 mr-3" />
              Get Started for Free
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="text-sm text-muted-foreground">
              No credit card required • Deploy in 5 minutes
            </div>
          </div>

          {/* Social Proof */}
          <div className="pt-16 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by developers at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white opacity-60">
              <div className="text-lg font-semibold">OpenAI</div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
              <div className="text-lg font-semibold">Anthropic</div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
              <div className="text-lg font-semibold">Meta AI</div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
              <div className="text-lg font-semibold">Google</div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
              <div className="text-lg font-semibold">Microsoft</div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50" />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse opacity-30" />
      </div>
    </section>
  );
};
