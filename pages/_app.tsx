import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import { createContext, useState } from "react";

export const AllTheme = createContext<any>([]);
export default function App({ Component, pageProps }: AppProps) {
  const [objTheme, setObjTheme] = useState("");

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <AllTheme.Provider value={{ objTheme, setObjTheme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AllTheme.Provider>
    </ThemeProvider>
  );
}
