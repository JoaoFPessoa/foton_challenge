import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/home'
import Registration from './views/registration'
import Detail from './views/details'

const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/registration" component={Registration} />
      <Route path="/details/:id" component={Detail} />
      </Switch>
    </Router>
  )
}

export default App;
