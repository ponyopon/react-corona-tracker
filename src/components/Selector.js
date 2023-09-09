import React from 'react';
import countriesJson from "../countries.json";

const Selector = () => {

  return (
    <div>
      <select>
        {countriesJson.map((country, index) => 
        <option key={index}>
          {country.Slug}
        </option>
        )}
      </select>
    </div>
    
  )
}

export default Selector