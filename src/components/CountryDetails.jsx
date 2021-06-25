import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

export const CountryDetails = ({ countries }) => {
  const [country, setCountry] = useState({});
  const { countryId } = useParams();
  useEffect(() => {
    setCountry(
      countries.filter((country) => country.alpha3Code === countryId)[0]
    );
  }, [countryId]);

  console.log(country);

  return (
    <div>
      <h1>Country Details</h1>
      {country && (
        <>
          <h2>{country.name}</h2>
          <h3>{country.capital}</h3>
        </>
      )}
    </div>
  );
};
