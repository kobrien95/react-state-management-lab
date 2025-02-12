// src/App.jsx

import { useState } from "react";

import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighter, setZombieFighter] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  const calculateTotalStrength = (team) => {
    let totalStrength = 0;
    team.forEach((fighter) => (totalStrength += fighter.strength));
    return totalStrength;
  };

  const calculateTotalAgility = (team) => {
    let totalAgility = 0;
    team.forEach((fighter) => (totalAgility += fighter.agility));
    return totalAgility;
  };

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log("Not enough money!.");
      return;
    }

    const newTeam = [...team, fighter];

    const newZombieFighter = zombieFighter.filter(
      (zombieFighter) => zombieFighter.id !== fighter.id
    );

    setTeam(newTeam);
    setZombieFighter(newZombieFighter);
    setMoney(money - fighter.price);
  };

  const handleRemoveFighter = (fighter) => {
    const newTeam = team.filter((teamMember) => teamMember.id !== fighter.id);

    const newZombieFighters = [...zombieFighter, fighter];

    setTeam(newTeam);
    setZombieFighter(newZombieFighters);
    setMoney(money + fighter.price);
  };

  const totalAgility = calculateTotalAgility(team);
  const totalStrength = calculateTotalStrength(team);

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team</h2>
      {team.length > 0 ? (
        <ul>
          {team.map((fighter, index) => (
            <li key={index}>
              <img src={fighter.img} alt={fighter.name} />
              <p>
                <strong>{fighter.name}</strong>
              </p>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Pick some team members</p>
      )}
      <h2>Fighters</h2>
      <ul>
        {zombieFighter.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <p>
              <strong>{fighter.name}</strong>
            </p>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
