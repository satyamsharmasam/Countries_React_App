import { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useTheme } from "../hooks/useTheme";

const Home = () => {
  const [query, setQuery] = useState("");
  // use Context by using useContext hook
  const [isDark] = useTheme();

  return (
    <>
      <main className={`${isDark ? "dark" : ""}`}>
        <div className="upper">
          <SearchBar setQuery={setQuery} />
          <SelectMenu setQuery={setQuery} />
        </div>
        <CountriesList query={query} />
      </main>
    </>
  );
};

export default Home;
