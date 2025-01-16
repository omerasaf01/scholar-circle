"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const ICON_SIZE = 16;

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="gap-2">
          {theme === "light" ? (
            <Sun
              key="light"
            />
          ) : theme === "dark" ? (
            <Moon
              key="dark"
            />
          ) : (
            <Laptop
              key="system"
            />
          )}
        Tema Değiştir
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup
              value={theme}
              onValueChange={(e) => setTheme(e)}
          >
            <DropdownMenuRadioItem className="flex gap-2" value="light">
              <Sun size={ICON_SIZE} className="text-muted-foreground" />{" "}
              <span>Açık</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem className="flex gap-2" value="dark">
              <Moon size={ICON_SIZE} className="text-muted-foreground" />{" "}
              <span>Karanlık</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem className="flex gap-2" value="system">
              <Laptop size={ICON_SIZE} className="text-muted-foreground" />{" "}
              <span>Sistem</span>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

export { ThemeSwitcher };
