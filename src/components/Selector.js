

const Selector = (props) => {


  return (
    <div className="selector-container">
      <select onChange={(e) => props.setCountry(e.target.value)}>
        <option>select country</option>
        {props.countriesJson.map((country, index) =>
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
          
        )};
      </select>
      <button onClick={props.getCountryData}>GetData</button>
    </div>
    
  )
}

export default Selector