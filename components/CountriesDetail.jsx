import { useEffect, useState } from "react";
import "./Country.css";
import { Link, useLocation, useParams } from "react-router";
import { useTheme } from "../hooks/useTheme";
import CountryDetailShimmer from "./CountryDetailShimmer";

const CountriesDetail = () => {
  // this hook to get data which is pass by state prop in link tag of another page(Countrycard.jsx)
  const { state } = useLocation();
  // console.log(state);
  const params = useParams();
  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isDark] = useTheme();

  function updateCountryData(data) {
    setCountryData({
      flag_img: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      Population: data.population,
      Region: data.region,
      Subregion: data.subregion,
      capital: data.capital.join(", "),
      Domain: data.tld.join(", "),
      Currencies: Object.values(data.currencies)
        .map((currency) => currency.name || {})
        .join(", "),
      Language: Object.values(data.languages || {}).join(", "),
      borders: [],
    });

    if (!data.borders) {
      return [];
    }
    data.borders.map((border) => {
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry]) => {
          console.log(borderCountry);
          setCountryData((prevState) => ({
            ...prevState,
            borders: [...prevState.borders, borderCountry.name.common],
          }));
        });
    });
  }

  useEffect(() => {
    //
    if (state) {
      updateCountryData(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country not found</div>;
  }

  return (
    <main className={` ${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span className="backBtn" onClick={() => history.back()}>
          <i className="fa-solid fa-left-long"></i>&nbsp;&nbsp;Back
        </span>
        {countryData === null ? (
          <CountryDetailShimmer />
        ) : (
          <div className="country-dtl">
            <img className="flag-img" src={countryData.flag_img} />
            <div className="dtl-text-container">
              <h1 className="card-title">{countryData.name}</h1>
              <div className="dtl-text">
                <p>
                  <b>Native Name:</b>
                  <span className="native-name"> {countryData.nativeName}</span>
                </p>
                <p>
                  <b>Population:</b>
                  <span className="Population">
                    {countryData.Population.toLocaleString("en-IN")}
                  </span>
                </p>
                <p>
                  <b>Region:</b>
                  <span className="region">{countryData.Region}</span>
                </p>
                <p>
                  <b>Sub Region:</b>
                  <span className="sub-region">{countryData.Subregion}</span>
                </p>
                <p>
                  <b>Capital:</b>
                  <span className="capital">{countryData.capital}</span>
                </p>
                <p>
                  <b>Top Level Domain:</b>
                  <span className="domain">{countryData.Domain}</span>
                </p>
                <p>
                  <b>Currencies:</b>
                  <span className="currencies">{countryData.Currencies}</span>
                </p>
                <p>
                  <b>Language:</b>
                  <span className="languages">{countryData.Language}</span>
                </p>
              </div>
              {countryData.borders.length !== 0 && (
                <div className="border-countries">
                  <b>Border-countries :</b>
                  {countryData.borders.map((border) => (
                    <Link to={`/${border}`} key={border}>
                      {border}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CountriesDetail;
