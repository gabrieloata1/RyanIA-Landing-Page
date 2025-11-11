import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-8" />
          <span className="text-xl font-bold text-foreground">{APP_TITLE}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("features")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Funcionalidades
          </button>
          <button
            onClick={() => scrollToSection("agents")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Agentes
          </button>
          <button
            onClick={() => scrollToSection("benefits")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">Começar Agora</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("agents")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Agentes
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Contato
            </button>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full">Começar Agora</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
