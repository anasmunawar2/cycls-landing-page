import { Button } from "@/components/ui/button";
import { Code2, Zap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center section-padding">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium animate-float">
            <Zap className="w-4 h-4" />
            AI Agent Platform
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl text-white sm:text-6xl lg:text-7xl font-bold leading-tight">
            Go from <span className="text-gradient">AI Agent</span> to{" "}
            <span className="text-gradient">AI Business</span>
            <span className="text-glow">.</span> Instantly.
          </h1>

          {/* Sub-headline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cycls is the definitive platform for commercial AI agents. Our
            open-source framework and managed cloud transform your Python code
            into a scalable, monetizable business with a single decorator.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button className="btn-hero text-lg px-10 py-6 group">
              Start Building for Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="btn-secondary text-lg px-8 py-6 group"
            >
              <Code2 className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </div>

          {/* Code Snippet Preview */}
          <div className="pt-12 max-w-2xl mx-auto">
            <div className="card-gradient p-6 text-left">
              <div className="text-sm text-muted-foreground mb-3 font-mono">
                # Transform your function into a business
              </div>
              <pre className="text-primary font-mono text-sm sm:text-base overflow-x-auto">
                {`@cycls.agent
def my_ai_agent(input_data):
    # Your AI logic here
    return process_with_ai(input_data)
    
# That's it! 🚀`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
