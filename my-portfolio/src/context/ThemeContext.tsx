import { createContext, useEffect, useState } from "react";

type ThemeContext = {
  setTheme(value: string): void;
  theme: string;
};
type ThemeProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({} as ThemeContext);

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const toggleTheme = () => {
      if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    };
    toggleTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
