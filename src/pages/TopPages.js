import React from 'react'
import Title from '../components/Title'
import Selector from '../components/Selector'
import Results from '../components/Results'
import Header from '../components/Header'

const TopPage = (props) => {
  //const [countriesJson, setCountry, getCountryData] = props;
  return (
    <div>
      <Header />
      <Title />
        <Selector 
        countriesJson={props.countriesJson}
        setCountry={props.setCountry}
        />
      <Results countryData={props.countryData} />

    </div>
  )
}

export default TopPage;