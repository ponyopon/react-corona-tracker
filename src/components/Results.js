import React from 'react'

const Results = (props) => {
  return (
    <div className='results-container'>
      <p>日付: <span>{props.countryData.date.slice(0, 10)}</span></p>
      <p>新規感染者: <span>{props.countryData.newConfirmed.toLocaleString()}</span></p>     
      <p>感染者総数: <span>{props.countryData.totalConfirmed.toLocaleString()}</span></p>    
      <p>新規回復者: <span>{props.countryData.newRecovered.toLocaleString()}</span></p>    
      <p>回復者総数: <span>{props.countryData.totalRecovered.toLocaleString()}</span></p>    
</div>
  )
}

export default Results