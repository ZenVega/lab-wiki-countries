import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((data) => setCountries(data.data))
      .catch((err) => console.log(err));
    return () => {
      setCountries([]);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="flex">
        <CountriesList countries={countries} />

        
        <Switch>
          <Route exact path={'/country/:countryId'}>
            <CountryDetails countries={countries} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
