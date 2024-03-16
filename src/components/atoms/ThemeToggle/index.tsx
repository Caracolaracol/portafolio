import useTheme from "../../../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme, isMounted} = useTheme()

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if(!isMounted){
    return null
  }

  return (
    <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
  );
}

