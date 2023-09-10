import React from 'react'
import Title from '../components/Title'
import Selector from '../components/Selector'
import Results from '../components/Results'
import Header from '../components/Header'
import { TopPageType } from '../types'

const TopPage = ({countriesJson, setCountry ,countryData, loading} : TopPageType) => {
  return (
    <div className='top-page-container'>
      <Header />
      <Title />
        <Selector 
        countriesJson={countriesJson}
        setCountry={setCountry}
        //getCountryData={getCountryData}
        />
      <Results countryData={countryData} loading={loading}/>

    </div>
  )
}

export default TopPage;