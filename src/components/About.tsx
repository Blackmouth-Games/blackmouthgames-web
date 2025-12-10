import { MapPin, Users, Gamepad2, Rocket } from "lucide-react";

const stats = [
  { icon: MapPin, label: "Founded", value: "Madrid, 2017" },
  { icon: Users, label: "Focus", value: "Multiplayer" },
  { icon: Gamepad2, label: "Projects", value: "4+ Games" },
  { icon: Rocket, label: "Tech", value: "Web3 & Cloud" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-primary">Us</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Born in <strong className="text-foreground">2017 in Madrid</strong>, Blackmouth Games is an independent development studio focused on massively multiplayer games.
              </p>
              <p>
                After an initial stage of learning and R&D, the studio has demonstrated its technical capacity, creating in 2019 one of the first <strong className="text-foreground">Battle Royale systems in Europe</strong>, in addition to other complex developments based on the multiplayer technologies of SpatialOS (Improbable), AWS Game Tech (AWS) and Unreal Engine (Epic Games).
              </p>
              <p>
                Our games are the result of a committed entrepreneurial team in close collaboration with some of the largest technology providers in the gaming industry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-gradient border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="text-primary mb-3" size={28} />
                <p className="text-muted-foreground text-sm font-medium mb-1">{stat.label}</p>
                <p className="font-display font-bold text-foreground text-lg">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
