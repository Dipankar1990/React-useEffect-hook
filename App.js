import React,{useEffect, useState} from 'react';
import "./App.css";
import FetchData from './useEffect/FetchData';
import SearchById from './useEffect/SearchById';
import SearchByOnClick from './useEffect/SearchByOnClick';
import JsonData from './useEffect/JsonData';
import UeClass from './useEffect/UeClass';
import UeFunc from './useEffect/UeFunc';
import DataAlbums from './useEffect/DataAlbums';
import UseToggle from './useEffect/UseToggle';
const App = () => {
  
  return ( 
    <>
    <div className="App">
        {/* <FetchData/>
        <SearchById/>
        <SearchByOnClick/>
        <UeClass/>
        <UeFunc/> */}
        {/* <DataAlbums/> */}
        <UseToggle/>
    </div>
   </>
   );
}
 
export default App;