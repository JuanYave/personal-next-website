"use client";

import type { ReactElement } from "react";
import { Fragment, useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { Theme, useTheme } from "./theme-provider";

const OPTIONS: Array<{
  value: Theme;
  label: string;
  icon: typeof Sun;
}> = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

function isActiveOption(option: Theme, current: Theme): boolean {
  if (current === "system") {
    return option === "system";
  }

  return current === option;
}

export default function ThemeToggle(): ReactElement {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Announce the browser's resolved theme only after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const announceLabel = mounted
    ? theme === "system"
      ? `Tema aplicado: según sistema (${resolvedTheme})`
      : `Tema aplicado: ${theme}`
    : "Tema aplicado: según sistema";

  return (
    <div
      role="radiogroup"
      aria-label="Cambiar tema"
      className="theme-toggle inline-flex items-center gap-1 rounded-full px-1 py-1 text-xs font-medium"
    >
      {OPTIONS.map(({ value, label, icon: Icon }, index) => {
        const active = isActiveOption(value, theme);
        const isLast = index === OPTIONS.length - 1;

        return (
          <Fragment key={value}>
            <button
              type="button"
              role="radio"
              aria-checked={active}
              title={`Preferencia de tema: ${label}`}
              onClick={() => setTheme(value)}
              data-active={active}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors"
            >
              <Icon className="h-4 w-4" aria-hidden />
              <span className="hidden whitespace-nowrap sm:inline">{label}</span>
            </button>
            {!isLast ? <span className="h-4 w-px bg-white/10" aria-hidden /> : null}
          </Fragment>
        );
      })}
      <span className="sr-only">{announceLabel}</span>
    </div>
  );
}
