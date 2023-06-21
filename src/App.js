import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './Container/headerContainer';
import HomeContainer from './Container/homeContainer'

function App() {
  return(
    <div className="App">
      <HeaderContainer />
     
      <HomeContainer />
    </div>
  );
}

export default App;