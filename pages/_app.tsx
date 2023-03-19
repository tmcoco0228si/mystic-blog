import { createContext, useContext, useEffect, useState } from "react";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";

interface IDarkModeContext {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<IDarkModeContext>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider attribute="class">
      <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
