"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group relative"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-4 w-4 text-amber-500 absolute scale-100 dark:scale-0 transition-transform duration-300" />
      <Moon className="h-4 w-4 text-indigo-400 absolute scale-0 dark:scale-100 transition-transform duration-300" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
