import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const CountryDetails = ({ countries, dark }) => {
  const navigate = useNavigate();
  const params = useParams();
  const countryName = params.countryName;
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState({
    name: "",
    official: "",
    flagImg: "",
    population: 0,
    region: "",
    subregion: "",
    capital: "",
    currencies: {},
    languages: [],
    borders: [],
  });

  const url = "https://restcountries.com/v3.1/name/";
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchData = await fetch(`${url}${countryName}`);
      const res = await fetchData.json();
      setCountry(res);
      setLoading(false);
    };
    fetchData();
  }, [countryName]);

  let languages;
  languages = Object.values(country.languages);

  let borders = [];
  borders = country.borders;

  let currencies;
  currencies = Object.values(country.currencies);

  return loading ? (
    <div className={dark ? "loading dark" : "loading"}>Loading . . .</div>
  ) : (
    <div className={dark ? "country-details dark" : "country-details"}>
      <button
        className={dark ? "back-btn dark" : "back-btn"}
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft />
        Back
      </button>
      <div className="country-details-body">
        <div className="img-container">
          <img src={country.flagImg} alt="Country Flag" />
        </div>
        <div className="country-details-content">
          <div className="country-details-name">
            <h1>{country.name}</h1>
          </div>
          <div className="country-details-info">
            <section>
              {/* <p>
                Native Name: <span>{nativeName}</span>
              </p> */}
              <p>
                Official Name: <span>{country.official}</span>
              </p>
              <p>
                Population: <span>{country.population}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </section>
            <section>
              <p>
                Currencies:{" "}
                <span>
                  {currencies?.map(
                    (currency, index) =>
                      currency.name +
                      `${index === currencies.length - 1 ? "" : " , "} `
                  )}
                </span>
              </p>
              <p>
                Languages:{" "}
                <span>
                  {languages?.map(
                    (language, index) =>
                      language +
                      `${index === languages.length - 1 ? "" : " , "} `
                  )}
                </span>
              </p>
            </section>
          </div>
          <div>
            <p>
              Borders:
              {borders !== undefined &&
                country.borders.map((border) => <span>{border}</span>)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;