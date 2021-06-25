import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const CountriesList = ({ countries }) => {
  const countryList = countries.map((country) => (
    <div key={country.alpha3Code}>
      <Link to={`/country/${country.alpha3Code}`}>
        <img src={country.flag} alt={`Flag of ${country.name}`} />
        <h1>{country.name}</h1>
      </Link>
    </div>
  ));

  return <div className="country-container">{countryList}</div>;
};
