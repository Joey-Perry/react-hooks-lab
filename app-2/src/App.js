import axios from 'axios';
import React, { useState, useEffect } from 'react';
import List from './components/List';

function App() {

  const [chars, setChars] = useState([]);

  const getChars = async () => {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5');
      setChars(data.results);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getChars();
  }, []);

  return (
    <div className="App">
      <List list={chars} />
    </div>
  );
}

export default App;
