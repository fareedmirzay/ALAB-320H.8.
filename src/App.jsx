import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api.jsx';
import StarshipCard from './components/StarshipCard.jsx'; 
import './App.css'

function App() {
  const [starships, setStarships] = useState([]); 
  useEffect(() => {
    async function fetchStarships() {
      const data = await getAllStarships();
      setStarships(data.results); 
    }
    fetchStarships();
  }, []); 

  return (
    <div className="App">
      <h1>Ahmads StarWars Starships selection</h1>
      <div className="starship-container">
        {starships.map((ship, idx) => (
          <StarshipCard key={idx} ship={ship} />
        ))}
      </div>
    </div>
  );
}

export default App;