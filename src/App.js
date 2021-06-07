import axios from 'axios'
import {useEffect, useState} from 'react'
import './App.css';

import {Navbar} from './components/Navbar'
import {CountriesList} from './components/CountriesList'
import {CountryDetails} from './components/CountryDetails'

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(data => setCountries(data.data))
    .catch(err => console.log(err))
    return () => {
      setCountries([])
    }
  }, [])

  return (
    <div>
      <Navbar/>
      <div className="flex">
        <CountriesList
          countries={countries}/>
        <CountryDetails/>
      </div>
    </div>
  );
}

export default App;
