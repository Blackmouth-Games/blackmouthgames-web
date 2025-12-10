import gameChickenCompany from "@/assets/game-chicken-company.png";
import gameZodiark from "@/assets/game-zodiark.jpg";
import gameTimedefenders from "@/assets/game-timedefenders.jpg";
import gameDomenation from "@/assets/game-domenation.jpg";
import { ExternalLink } from "lucide-react";

const games = [
  {
    title: "Chicken Company",
    description: "Build and manage your ultimate chicken empire in this fun farming simulation game!",
    image: gameChickenCompany,
    url: "https://chickencompany.io/",
    badge: "NEW",
  },
  {
    title: "Domenation",
    description: "A massive multiplayer battle royale experience with unique mechanics and intense gameplay.",
    image: gameDomenation,
    url: "https://domenation.io",
  },
  {
    title: "Time Defenders",
    description: "Tower defense meets strategy in this epic time-traveling adventure within the Domenation universe.",
    image: gameTimedefenders,
    url: "https://timedefenders.domenation.io/",
  },
  {
    title: "Zodiark: Astral Awakening",
    description: "An immersive RPG experience featuring astral powers and cosmic adventures.",
    image: gameZodiark,
    url: "https://zodiark.blackmouthgames.com/",
  },
];

const Games = () => {
  return (
    <section id="games" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(350,85%,55%,0.05)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Games</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our portfolio of innovative multiplayer experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {games.map((game, index) => (
            <a
              key={game.title}
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              
              {game.badge && (
                <span className="absolute top-4 left-4 gaming-gradient px-3 py-1 rounded-full text-xs font-display font-bold text-primary-foreground">
                  {game.badge}
                </span>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  {game.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
