import React from 'react';
import Nav from './Nav/Nav';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Ranking from '../Ranking/Ranking';
import Trending from '../Trending/Trending';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav></Nav>
        <Switch>
          <Route path='/trending'>
            <Trending></Trending>
          </Route>
          <Route path='/'>
            <Ranking></Ranking>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
