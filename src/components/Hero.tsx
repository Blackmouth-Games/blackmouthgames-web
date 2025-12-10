import logo from "@/assets/logo_bm_white.png";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(12,90%,55%,0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-slide-up">
          <img 
            src={logo} 
            alt="Blackmouth Games" 
            className="mx-auto h-24 md:h-32 lg:h-40 mb-8 animate-float"
          />
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">Innovative </span>
          <span className="text-primary">Multiplayer</span>
          <br />
          <span className="text-foreground">Experiences</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up font-body" style={{ animationDelay: '0.2s' }}>
          Creating massive blockchain multiplayer experiences. 
          <br className="hidden md:block" />
          Welcome to the future of gaming!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#games"
            className="gaming-gradient px-8 py-3 rounded-lg font-display font-semibold text-primary-foreground hover:opacity-90 transition-all gaming-glow"
          >
            Our Games
          </a>
          <a
            href="#about"
            className="border border-border bg-card/50 px-8 py-3 rounded-lg font-display font-semibold text-foreground hover:bg-card hover:border-primary/50 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#games" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
