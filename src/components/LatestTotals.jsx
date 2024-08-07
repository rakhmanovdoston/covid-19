import React, { useState, useEffect } from "react";

const LatestTotals = () => {
  const [totals, setTotals] = useState([]);

  useEffect(() => {
    async function fetchingAllTotals() {
      const url = "https://covid-19-data.p.rapidapi.com/totals?format=json";
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

        if (Array.isArray(result)) {
          setTotals(result);
        } else {
          console.error("Unexpected response format:", result);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchingAllTotals();
  }, []);

  return (
    <main className="text-white w-full px-[80px]">
      <ul>
        {totals.map((item, index) => (
          <li key={index} className="flex justify-between">
            <p className="text-red-500">
              TOTAL DEATHS{" "}
              <span className="text-4xl text-white block">{item.deaths}</span>
            </p>
            <p className="text-purple-500">
              TOTAL INFECTIONS{" "}
              <span className="text-4xl text-white block">
                {item.confirmed}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default LatestTotals;
