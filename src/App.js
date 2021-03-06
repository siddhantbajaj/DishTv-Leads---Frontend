import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import PrivateRoute from './components/PrivateRoute';
import MainLayout from './components/MainLayout';
import Leads from './pages/leads';
import Call from './pages/call';
import Distributers from './pages/distributers';
import LoginDistributers from './pages/loginDistributers';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/loginDistributers" component={LoginDistributers} />
          <PrivateRoute component={MainLayout} path="/" />
          <PrivateRoute component={Leads} path="/leads" />
          <PrivateRoute component={Distributers} path="/distributers" />
          <PrivateRoute component={Call} path="/call" />
        </Switch>
      </div>
    );
  }
}

export default App;
