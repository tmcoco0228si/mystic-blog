import React, { useState, useEffect, VFC } from "react";
import { useTheme } from "next-themes";
import { SunLight, HalfMoon } from "iconoir-react";
import { useContext } from "react";
import { AllTheme } from "../pages/_app"

export const ChangeThemeButton = () => {

  const { objTheme, setObjTheme } = useContext(AllTheme);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  const changeTheme = () => {
    if (theme === "dark") {
      setObjTheme("white");
    } else if (theme === "light") {
      setObjTheme("#222831");
    }
    setTheme(theme === "dark" ? "light" : "dark");
  };


  useEffect(() => setMounted(true), [objTheme]);

  return (
    <>
    <div className="">


      <button
        aria-label="DarkModeToggle"
        type="button"
        onClick={() => changeTheme()}
        >
        {/* dark/rightモードアイコンの変更 */}
        {mounted && <>{theme === "dark" ? <HalfMoon /> : <SunLight />}</>}
      </button>
        </div>
    </>
  );
};
