import { Zap, Clock, Heart, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Agile Methodologies",
    description: "Our production is based on Scrum, so we can estimate and work efficiently.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Organize your working hours and distribute your free time to better suit your day to day life!",
  },
  {
    icon: Heart,
    title: "No-Crunch Policy",
    description: "No extra hours, that's it! We believe in work-life balance.",
  },
  {
    icon: TrendingUp,
    title: "Grow With Us",
    description: "Blackmouth Games is a young and growing company. Forge your professional career with us.",
  },
];

const Careers = () => {
  return (
    <section id="careers" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(12,90%,55%,0.05)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Join <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2">
            Create great games with a passionate team
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At Blackmouth Games, our priority is to create innovative and quality games. 
            We strive every day to provide memorable experiences. Join, learn and grow with us by sharing our passion for online games!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gaming-gradient mb-4">
                <benefit.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://stratos-ad.com/trabajo?company=blackmouth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gaming-gradient px-10 py-4 rounded-lg font-display font-semibold text-primary-foreground hover:opacity-90 transition-all gaming-glow text-lg"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Careers;
