import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchingCountries() {
      const url =
        "https://covid-19-data.p.rapidapi.com/help/countries?format=json";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "619483048fmshfbfc05866aeb439p192980jsncb1a2d448542",
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        if (Array.isArray(result)) {
          setCountries(result);
        } else {
          console.error("Unexpected response format:", result);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }

    fetchingCountries();
  }, []);

  const halfwayIndex = Math.ceil(countries.length / 2);
  const firstColumn = countries.slice(0, halfwayIndex);
  const secondColumn = countries.slice(halfwayIndex);

  return (
    <main className="w-[1400px] m-auto flex flex-col items-center text-white mt-[50px]">
      <div className="w-full flex justify-between">
        <div className="w-[300px]">
          <ol type="1" className="flex-1 w-full">
            {Array.isArray(firstColumn) &&
              firstColumn.map((country) => (
                <li
                  key={country.alpha2code}
                  className="w-full h-[40px] my-2 text-center rounded-md py-1 px-4 bg-[#290a54] cursor-pointer text-lg"
                >
                  {country.name} ({country.alpha2code}) : 196487
                </li>
              ))}
          </ol>
        </div>
        <div className="w-[300px]">
          <ol type="1" className="flex-1 w-full">
            {Array.isArray(secondColumn) &&
              secondColumn.map((country) => (
                <li
                  key={country.alpha2code}
                  className="w-full h-[40px] my-2 text-center rounded-md py-1 px-4 bg-[#290a54] cursor-pointer text-lg"
                >
                  {country.name} ({country.alpha2code}) : 196487
                </li>
              ))}
          </ol>
        </div>
      </div>
    </main>
  );
}

export default CountryList;
