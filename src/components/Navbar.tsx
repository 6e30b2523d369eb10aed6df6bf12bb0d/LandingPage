import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";

export function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-semibold text-xl">ASD.org</div>
        <div className="flex items-center gap-4">
          <a href="#mission" className="hover:text-primary transition-colors">
            Mission
          </a>
          <a href="#story" className="hover:text-primary transition-colors">
            Story
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
}