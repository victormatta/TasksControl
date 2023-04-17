import { Card } from "../Card/Card";
import "./Home.css";
import React, { useState } from "react";

export function Home() {
  const [peopleName, setPeopleName] = useState("");
  const [people, setPeople] = useState([]);

  let handlePeople = () => {
    const newPeople = {
      name: peopleName,
      date: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setPeople((prevState) => [...prevState, newPeople]);
    setPeopleName("");
  };

  let handleDelete = (index) => {
    const newList = [...people];
    newList.splice(index, 1);
    setPeople(newList);
  };

  return (
    <div className="homeStyle">
      <header>
        <h1>My Tasks:</h1>
        <div className="areaInterative">
          <input
            onChange={(e) => setPeopleName(e.target.value)}
            value={peopleName}
            type="text"
          />
          <button onClick={handlePeople} type="submit">
            Add
          </button>
        </div>
      </header>

      {people.map((people, index) => (
        <Card
          name={people.name}
          key={people.date}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}
