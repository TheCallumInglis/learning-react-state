import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fighter from './components/FighterComponent'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]    
  )

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log('Not enough money');
      return;
    }

    if (team.find((teamFighter) => teamFighter.name === fighter.name)) {
      console.log('Fighter already in team'); 
      return;
    }

    setTeam([...team, fighter]);
    setMoney(money - fighter.price);
  }

  const handleRemoveFighter = (fighter) => {
    const newTeam = team.filter((teamFighter) => teamFighter.name !== fighter.name);

    setTeam(newTeam);
    setMoney(money + fighter.price);
  }

  useEffect(() => {
    const calculateTotalStrength = () => {
      const strength = team.reduce((total, fighter) => total + fighter.strength, 0);
      setTotalStrength(strength);
    }

    const calculateTotalAgility = () => {
      const agility = team.reduce((total, fighter) => total + fighter.agility, 0);
      setTotalAgility(agility);
    }

    calculateTotalStrength();
    calculateTotalAgility();
  }, [team]);

  return (
    <>
      <h2>Money: <span>{money}</span></h2>

      <h2>Total Strength: <span>{totalStrength}</span></h2>
      <h2>Total Agility: <span>{totalAgility}</span></h2>

      <h2>Team</h2>
      <div>
        {team.length == 0 
          ? <p>Pick some team members!</p>
          : <ul>
              {team.map((fighter, index) => (
                <Fighter fighter={fighter} handler={handleRemoveFighter} action="Remove" key={index} />
              ))}
            </ul>
        }
      </div>

      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <Fighter fighter={fighter} handler={handleAddFighter} action="Add" key={index} />
        ))}
      </ul>
    </>
  )
};

export default App;
