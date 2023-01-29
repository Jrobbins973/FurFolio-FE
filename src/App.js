import React, {useState, useEffect} from 'react';
import LoginPage from './components/LoginPage';
import './App.css';
import { Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <LoginPage />
    </div>
  );
}

export default App;
