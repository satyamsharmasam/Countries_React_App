import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";

const CountriesList = ({ query }) => {
  const [CountriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        // console.log(CountriesData);
      });
  }, []);

  if (!CountriesData.length) {
    return <CountryListShimmer />;
  }

  return (
    <>
      <div className="Countries-container">
        {CountriesData.filter(
          (country) =>
            country.name.common.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query)
        ).map((country) => {
          return (
            <CountryCard
              name={country.name.common}
              population={country.population}
              flags={country.flags.svg}
              region={country.region}
              capital={country.capital?.[0]}
              key={country.name.common}
              data={country}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountriesList;
