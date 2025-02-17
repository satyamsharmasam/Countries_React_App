// This is an context created by us using context api
import { createContext, useState } from "react";

// this is an context
export const ThemeContext = createContext();

// this function help to write full logic of context in context file
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
}
