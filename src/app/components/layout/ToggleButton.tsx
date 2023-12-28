"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import useThemeSwitch from "@/app/hooks/useThemeSwitch"
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";


const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useThemeSwitch();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

    return theme === "light" ?
        (<button onClick={toggleTheme} className="text-yellow-500"><BsFillSunFill /></button>) :
        (<button onClick={toggleTheme} className="text-yellow-500" ><BsFillMoonStarsFill /></button>)
  
};

export default ThemeSwitcher;