// https://ui.shadcn.com/docs/dark-mode/next
"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  attribute?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme-mode",
  enableSystem = true,
  disableTransitionOnChange = false,
  attribute = "data-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    // Apply theme class to document
    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      root.style.colorScheme = systemTheme

      // For shadcn/ui class-based theming
      if (attribute === "class") {
        root.classList.add(systemTheme)
      } else {
        root.setAttribute(attribute, systemTheme)
      }
    } else {
      // For shadcn/ui class-based theming
      if (attribute === "class") {
        root.classList.add(theme)
      } else {
        root.setAttribute(attribute, theme)
      }

      root.style.colorScheme = theme
    }
  }, [theme, enableSystem, attribute])

  // Handle transitions
  useEffect(() => {
    if (disableTransitionOnChange) {
      document.documentElement.classList.add("no-transitions")

      const timeout = setTimeout(() => {
        document.documentElement.classList.remove("no-transitions")
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [theme, disableTransitionOnChange])

  // Handle system preference changes
  useEffect(() => {
    if (!enableSystem) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const onMediaChange = () => {
      const systemTheme = mediaQuery.matches ? "dark" : "light"

      if (theme === "system") {
        if (attribute === "class") {
          document.documentElement.classList.remove("light", "dark")
          document.documentElement.classList.add(systemTheme)
        } else {
          document.documentElement.setAttribute(attribute, systemTheme)
        }

        document.documentElement.style.colorScheme = systemTheme
      }
    }

    mediaQuery.addEventListener("change", onMediaChange)
    return () => mediaQuery.removeEventListener("change", onMediaChange)
  }, [theme, attribute, enableSystem])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
