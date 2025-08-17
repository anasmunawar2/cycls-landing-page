import { Button } from "@/components/ui/button";
import { Building2, Rocket, Globe, Shield, Users, Mail } from "lucide-react";

export const ForBusiness = () => {
  const startupFeatures = [
    {
      icon: Rocket,
      title: "Business-in-a-Box",
      description: "Complete infrastructure for launching your AI startup",
    },
    {
      icon: Users,
      title: "Built-in User Pool",
      description: "Ready-made user management and customer acquisition",
    },
  ];

  const enterpriseFeatures = [
    {
      icon: Shield,
      title: "Sovereign Cloud",
      description: "Hosted in Dammam, Saudi Arabia for data sovereignty",
    },
    {
      icon: Globe,
      title: "Enterprise Ready",
      description: "Flexible platform for foundational AI capabilities",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-card/50 to-background">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Business & Enterprise
          </div>

          <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold mb-6">
            A Complete <span className="text-gradient">Commercial Engine</span>.
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Cycls is more than a tool; it's an economic engine. Transform your
            AI capabilities into sustainable, scalable business value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Startups */}
          <div className="card-gradient card-glow p-8 space-y-12">
            <div>
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                For Startups
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We provide a complete business-in-a-box, handling users,
                payments, and infrastructure so you can focus on your product.
              </p>
            </div>

            <div className="space-y-4">
              {startupFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="text-sm text-muted-foreground mb-4">
                ✓ Instant monetization with take-rate model
                <br />
                ✓ Pre-built user acquisition funnels
                <br />
                ✓ Automated billing and subscription management
                <br />✓ Global CDN and auto-scaling infrastructure
              </div>

              <Button className="btn-hero w-full">Launch Your Startup</Button>
            </div>
          </div>

          {/* For Enterprise */}
          <div className="card-gradient card-glow p-8 space-y-8">
            <div>
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-glow">
                <Building2 className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                For Enterprise
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our sovereign managed cloud, hosted in Dammam, offers a
                flexible, enterprise-ready platform to build foundational AI
                capabilities within the Kingdom.
              </p>
            </div>

            <div className="space-y-4">
              {enterpriseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="text-sm text-muted-foreground mb-4">
                ✓ Data sovereignty and compliance
                <br />
                ✓ Custom deployment configurations
                <br />
                ✓ Dedicated support and SLAs
                <br />✓ White-label and private cloud options
              </div>

              <Button variant="outline" className="btn-secondary w-full group">
                <Mail className="w-4 h-4 mr-2" />
                Contact Sales
              </Button>
            </div>
          </div>
        </div>

        {/* Enterprise Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">SOC 2</div>
            <div className="text-sm text-muted-foreground">Compliant</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">KSA</div>
            <div className="text-sm text-muted-foreground">Data Residency</div>
          </div>
        </div>
      </div>
    </section>
  );
};
