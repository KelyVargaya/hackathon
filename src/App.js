import React, { Component } from 'react';
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
import MediaQuery from 'react-responsive';
import LogoApp from './portadaMovil.js';

const Apli = ({ model }) => {
  return (
    <BrowserRouter>

      <Switch>
        <Route path="/Hacknemia"
          render={() => <Redirect to={'/home'} />} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/form" render={() => <FormDiagnostic model={model} />} />
        <Route path="/result" render={() => <Result model={model} />} />
        <Route component={Home} />

      </Switch>
    </BrowserRouter>
  );
}

/*<div>
        <MediaQuery minDeviceWidth={1224}>
          <Apli model={model} />

          <MediaQuery minDeviceWidth={1824}>
            <Apli model={model} />

          </MediaQuery>
          <MediaQuery maxWidth={1224}>
            <Apli model={model} />

          </MediaQuery>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <LogoApp />
        </MediaQuery>

      </div>*/
class App extends Component {
  render() {
    const { model } = this.props;
    return (
      <div>
        <Apli model={model} />
      </div>

    )
  }
}

export default App;
