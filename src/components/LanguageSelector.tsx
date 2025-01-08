import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useState } from "react";

const languages = {
  enUS: "English",
  ptBR: "Português",
  esES: "Español",
};

type LanguageKey = keyof typeof languages;

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState<LanguageKey>("enUS");

  const handleLanguageChange = (lang: LanguageKey) => {
    setCurrentLang(lang);
    // TODO: Implement language change logic
    console.log("Language changed to:", lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Select language">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([key, label]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => handleLanguageChange(key as LanguageKey)}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}