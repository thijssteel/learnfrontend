import React, { Component } from 'react';
import { Route, Switch } from 'react-router'

import Todo from './todo/containers/Todo'
import Landing from './Landing'

import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </main>
    )
  }
}

export default App;
