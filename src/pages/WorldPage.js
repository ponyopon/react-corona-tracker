import React from 'react'
import Card from '../components/Card'
import Title from '../components/Title'
import Header from '../components/Header'

const WorldPage = (props) => {
  return (
    <div className='world-page-container'>
        <Header />
        <Title />
        <Card getAllCountriesData={props.getAllCountriesData} allCountriesData={props.allCountriesData} />
    </div>
  )
}

export default WorldPage