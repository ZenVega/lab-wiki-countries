import React, { Fragment } from 'react'

export const CountriesList = ({countries}) => {

console.log(countries[0])

const countryList = countries.map((country) => (
  <div 
    key={country.alpha3Code}>
    <img 
    src={country.flag} 
    alt={`Flag of ${country.name}`} />
    <h1>{country.name}</h1>
  </div>
))
  
return(
  <div className="country-container">
  {countryList}
  </div>
)

}
