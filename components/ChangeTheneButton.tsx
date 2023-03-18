import React, { useEffect, useState, VFC } from "react";
import { useTheme } from "next-themes";
import { SunLight, HalfMoon } from "iconoir-react";
import { useContext } from "react";
import { DarkModeContext } from "../pages/_app";

export const ChangeThemeButton: VFC = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="">
        <button
          aria-label="DarkModeToggle"
          type="button"
          onClick={() => {
            toggleDarkMode();
            setTheme(isDarkMode ? "light" : "dark");
          }}
        >
          {/* dark/rightモードアイコンの変更 */}
          {mounted && <>{theme === "dark" ? <HalfMoon /> : <SunLight />}</>}
        </button>
      </div>
    </>
  );
};
