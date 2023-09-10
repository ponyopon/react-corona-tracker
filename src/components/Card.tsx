import React, { useState } from 'react'
import { CardType } from '../types'

const Card = ({allCountriesData }: CardType) => {

  return (
    <div className='card-container'>
        <button >Get All Data</button>
        {allCountriesData.map((singleData, index) =>
              <div key={index} className="card">
                  <div>
                      <h2>{singleData.Country}</h2>                   
                      <p>新規感染者: <span>{singleData.NewConfirmed.toLocaleString()}</span></p>      
                      <p>感染者総数: <span>{singleData.TotalConfirmed.toLocaleString()}</span></p> 
                  </div>   
              </div>
            )} 
    </div>
  )
}

export default Card