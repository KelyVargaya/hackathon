import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormDiagnostic from './Form.js'

const App = ({ model }) => {
  return (
    <div className="App">
      <FormDiagnostic model={model} />
    </div>
  );
}

export default App;
