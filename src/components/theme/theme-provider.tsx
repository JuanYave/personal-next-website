"use client";

import type { ReactElement } from "react";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Theme = "light" | "dark" | "system";

type ThemeContextValue = {
  /**
   * User selected theme value. Mode "system" follows the operating system preference.
   */
  theme: Theme;
  /**
   * Resolved theme that is currently applied to the document.
   */
  resolvedTheme: "light" | "dark";
  /**
   * Updates the preferred theme and persists the selection locally.
   */
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = "juan-herrera-theme";

function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Provides light/dark/system theme management and synchronises the preference with the DOM.
 */
export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(getSystemTheme);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(stored)) {
      setThemeState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (value: "light" | "dark") => {
      root.setAttribute("data-theme", value);
      root.style.setProperty("color-scheme", value);
      setResolvedTheme(value);
    };

    const handleSystemChange = () => {
      const systemValue = mediaQuery.matches ? "dark" : "light";
      applyTheme(systemValue);
    };

    if (theme === "system") {
      handleSystemChange();
      window.localStorage.setItem(THEME_STORAGE_KEY, "system");
      mediaQuery.addEventListener("change", handleSystemChange);

      return () => mediaQuery.removeEventListener("change", handleSystemChange);
    }

    applyTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme: setThemeState,
    }),
    [theme, resolvedTheme],
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

/**
 * Returns the current theme preference and a setter to update it.
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
