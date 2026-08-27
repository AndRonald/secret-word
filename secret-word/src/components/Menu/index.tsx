import { useEffect, useState } from "react";
import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";

type AvailablesThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailablesThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AvailablesThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme',theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href=""
        aria-label="Ir para a home"
        title="Ir para a home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href=""
        arial-label="Ver histórico"
        title="Ver histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href=""
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href=""
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
