import {
  AlertTriangle,
  Code,
  CreditCard,
  Server,
  Users,
  Zap,
} from "lucide-react";

export const Problem = () => {
  const painPoints = [
    {
      icon: Server,
      title: "Infra Complexity",
      description: "Setting up scalable, production-ready infrastructure",
    },
    {
      icon: Code,
      title: "Frontend Boilerplate",
      description: "Building user interfaces and API integrations from scratch",
    },
    {
      icon: Users,
      title: "User Management",
      description:
        "Authentication, authorization, and user lifecycle management",
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Subscription billing, payment processing, and monetization",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/30 bg-destructive/10 text-destructive text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            The Challenge
          </div>

          <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold mb-6">
            The Gap Between a{" "}
            <span className="text-gradient">Brilliant Agent</span> and a{" "}
            <span className="text-gradient">Viable Business</span> is Immense.
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            You've built a powerful AI agent. But turning it into a real,
            commercial product is a maze of infrastructure, frontend
            boilerplate, authentication, and payment integrations.{" "}
            <span className="text-foreground font-medium">
              This friction kills speed and innovation.
            </span>{" "}
            Cycls is the platform designed to close that gap instantly.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="card-gradient card-glow p-8 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow group-hover:animate-pulse-glow">
                <point.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
            <Zap className="w-5 h-5" />
            <span className="font-medium">
              Cycls eliminates all of this complexity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
