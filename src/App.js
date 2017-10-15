import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormDiagnostic from './Form.js'
import Result from './result.js';
import Home from './home.js';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

const NotFound = (props) => {
	return (
		<div><h2> Error 404! </h2></div>
	);
}


class App extends Component {
  render() {
    return (
      <BrowserRouter>
     
        <Switch>
          <Route  path="/Hacknemia"
				       render={() => <Redirect to= {'/home'}/>}/>
          <Route  path="/home" render={() => <Home  />} />
          <Route  path="/form" render={() => <FormDiagnostic  />} />      
          <Route  path="/result" render={() => <Result  />}/>
          <Route component={Home}/>
        
        </Switch>
	</BrowserRouter>)
    
  }
}

export default App;
