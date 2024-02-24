import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";

const Card = () => {
  const [data, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    try {
      const response = await fetch(
        "https://swapi.dev/api/planets/?format=json"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPlanets(data.results);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <>
      {" "}
      <div className="grid-cont">
        {data.map((item) => (
          <CardItem
            name={item.name}
            climate={item.climate}
            population={item.population}
            terrain={item.terrain}
            diameter={item.diameter}
            residents={item.residents}
          />
        ))}
      </div>
    </>
  );
};

export default Card;
