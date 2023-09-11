import TopPages from "./pages/TopPages";
import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import countriesJson from "./countries.json";
import WorldPage from "./pages/WorldPage";
import { AllCountriesDataType, CountryDataType } from "./types";


function App() {
  const [country, setCountry] = useState<string>('japan');
  const [countryData, setCountryData] = useState<CountryDataType>({
    date: "",            
    newConfirmed: 0,     
    totalConfirmed: 0,   
    newRecovered: 0,    
    totalRecovered: 0,  
 });
 const [loading, setLoading] = useState<boolean>(false);

 const [allCountriesData, setAllCountriesData] = useState<AllCountriesDataType>([{
  Country: "", 			
  NewConfirmed: 0,			
  TotalConfirmed: 0,	
}]);
 

 useEffect(() => {
  const getCountryData = () => {
      setLoading(true); 
      fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`) 
      .then(res => res.json())
      .then(data => {
          setCountryData({
              date: data[data.length -1].Date,             
              newConfirmed: data[data.length -1].Confirmed - data[data.length -2].Confirmed,      
              totalConfirmed: data[data.length -1].Confirmed,    
              newRecovered:  data[data.length -1].Recovered- data[data.length -2].Recovered,    
              totalRecovered: data[data.length -1].Recovered,    
          });
      setLoading(false);
      })
      .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
  }
  getCountryData(); 
}, [country])  

useEffect(() => {
  fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")  
  .then(res => res.json())  
  .then(data => setAllCountriesData(data.Countries))  
  .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));  
}, []); 


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPages countriesJson={countriesJson} setCountry={setCountry} countryData={countryData} loading={loading} />} />
        <Route path="/world" element={<WorldPage allCountriesData={allCountriesData} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
