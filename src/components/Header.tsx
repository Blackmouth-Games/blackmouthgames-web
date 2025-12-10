import logo from "@/assets/logo_bm_white.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#games", label: "Games" },
    { href: "#about", label: "About" },
    { href: "#careers", label: "Careers" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Blackmouth Games" className="h-10 md:h-12" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://stratos-ad.com/trabajo?company=blackmouth"
            target="_blank"
            rel="noopener noreferrer"
            className="gaming-gradient px-5 py-2 rounded-lg font-display text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Join Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card border-t border-border py-4 px-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-muted-foreground hover:text-foreground font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://stratos-ad.com/trabajo?company=blackmouth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 gaming-gradient px-5 py-2 rounded-lg font-display text-sm font-semibold text-primary-foreground"
          >
            Join Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
