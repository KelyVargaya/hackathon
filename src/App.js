import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormDiagnostic from './Form.js'

const App = ({model})=>{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      
      <FormDiagnostic model={model}/>
    </div>
  );
}

export default App;
