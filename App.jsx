import React, { useState } from 'react';
import data from './data.json';

function App() {
  const [countries] = useState(data.countries);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setStates(countries.find(c => c.name === country).states);
    setCities([]);
    setSelectedState('');
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(states.find(s => s.name === state).cities);
  };

  return (
    <div className="App">
      <h1>--Select Country, State, and City--</h1>

      <label>Country:</label>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="" disabled>--Select Country--</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>{country.name}</option>
        ))}
      </select>

      <label>State:</label>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="" disabled>--Select State--</option>
        {states.map((state, index) => (
          <option key={index} value={state.name}>{state.name}</option>
        ))}
      </select>

      <label>City:</label>
      <select>
        <option value="" >--Select City--</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>{city}</option>
        ))}
      </select>
      <button value="submit">Submit</button>
    </div>
  );
}

export default App;
