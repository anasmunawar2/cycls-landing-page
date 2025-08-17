import { Button } from "@/components/ui/button";
import {
  Code2,
  GitBranch,
  Zap,
  Terminal,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export const ForDevelopers = () => {
  const features = [
    {
      icon: Code2,
      title: "Python-First",
      description:
        "Built by developers, for developers. Just Python - no new languages to learn.",
    },
    {
      icon: GitBranch,
      title: "Open Source Core",
      description:
        "Full transparency and control with our open-source framework. Extend as needed.",
    },
    {
      icon: Zap,
      title: "Zero Config",
      description:
        "No boilerplate, no infrastructure setup. Focus purely on your agent logic.",
    },
    {
      icon: Terminal,
      title: "Perfect Dev/Prod Parity",
      description:
        "What you build locally is exactly what scales globally on our infrastructure.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <Code2 className="w-4 h-4" />
                For Developers
              </div>

              <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold mb-6">
                A <span className="text-gradient">Zero-Config Dream</span> for
                Builders.
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Cycls is built by developers, for developers. Our open-source
                core gives you ultimate flexibility, while our zero-config
                philosophy removes all the boilerplate. The Python SDK is all
                you need to learn.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                With perfect dev/prod parity, what you build locally is exactly
                what scales globally on our serverless infrastructure.
              </p>
            </div>

            <Button className="btn-hero group">
              <BookOpen className="w-5 h-5 mr-2" />
              Read the Docs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-gradient card-glow p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow group-hover:animate-pulse-glow flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Experience Showcase */}
        <div className="mt-20">
          <div className="card-gradient p-8">
            <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
              Developer Experience in Action
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm">
              {/* Local Development */}
              <div className="space-y-3">
                <h4 className="font-medium text-primary">
                  1. Local Development
                </h4>
                <div className="bg-muted/30 p-4 rounded-lg font-mono">
                  <div className="text-muted-foreground"># Install CLI</div>
                  <div className="text-primary">pip install cycls</div>
                  <br />
                  <div className="text-muted-foreground">
                    # Initialize project
                  </div>
                  <div className="text-primary">cycls init my-agent</div>
                </div>
              </div>

              {/* Write Code */}
              <div className="space-y-3">
                <h4 className="font-medium text-primary">
                  2. Write Your Agent
                </h4>
                <div className="bg-muted/30 p-4 text-muted-foreground rounded-lg font-mono">
                  <pre className="text-sm">
                    {`@cycls.agent
def my_agent(query):
    return process(query)
    
# Test locally
cycls run`}
                  </pre>
                </div>
              </div>

              {/* Deploy */}
              <div className="space-y-3">
                <h4 className="font-medium text-primary">3. Deploy & Scale</h4>
                <div className="bg-muted/30 p-4 rounded-lg font-mono">
                  <div className="text-muted-foreground">
                    # Deploy to production
                  </div>
                  <div className="text-primary">cycls deploy</div>
                  <br />
                  <div className="text-accent">✓ Frontend deployed</div>
                  <div className="text-accent">✓ API endpoints ready</div>
                  <div className="text-accent">✓ Payments configured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
