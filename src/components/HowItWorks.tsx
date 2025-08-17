import { Code2, Rocket, DollarSign, ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Code2,
      title: "Write Your Agent",
      description:
        "Focus on what you do best. Write your agent's logic in a simple Python function. Our guided meta-agent can even help you get started, turning ideas into code even faster.",
    },
    {
      number: "02",
      icon: Rocket,
      title: "Deploy Instantly",
      description:
        "Add our @cycls.agent decorator to your function. That's it. Cycls automatically packages your agent into a full-stack, serverless application with a pre-built frontend and API.",
    },
    {
      number: "03",
      icon: DollarSign,
      title: "Monetize Immediately",
      description:
        "Launch your subscription business in minutes. Our managed platform comes with a built-in user pool and monetization, allowing you to charge for your agent with a simple take-rate model.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold mb-6">
            From <span className="text-gradient">Code</span> to{" "}
            <span className="text-gradient">Customer</span> in Three Steps.
          </h2>
          <p className="text-xl text-muted-foreground">
            Our platform handles everything between your brilliant idea and a
            profitable business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="card-gradient card-glow p-8 h-full group hover:scale-105 transition-all duration-300">
                {/* Step Number */}
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow group-hover:animate-pulse-glow">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 text-primary/40">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="card-gradient p-8">
            <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
              See it in action
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">
                  Before: Complex Infrastructure
                </h4>
                <div className="bg-muted/30 p-4 rounded-lg text-sm font-mono text-muted-foreground">
                  <div>✗ Docker containers</div>
                  <div>✗ Frontend framework</div>
                  <div>✗ Authentication system</div>
                  <div>✗ Payment processing</div>
                  <div>✗ Database setup</div>
                  <div>✗ API design</div>
                  <div>✗ Deployment pipeline</div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-primary mb-3">
                  After: Just Your Code
                </h4>

                <div className="bg-primary/10 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                  <pre className="text-primary whitespace-pre-wrap break-words">
                    {`@cycls.agent
def sentiment_analyzer(text):
    return analyze_sentiment(text)

# Production ready! 🎉`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
