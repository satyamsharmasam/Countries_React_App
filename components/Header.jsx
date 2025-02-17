import { Link } from "react-router";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  // dark and lite mood
  const [isDark, setIsDark] = useTheme();

  return (
    <header className={`${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <Link to={"/"}>Where in the World?</Link>
        </h2>
        <p
          className="dark-mood"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
