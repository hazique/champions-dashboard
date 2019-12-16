import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Home from './components/home/home';
import WatchList from './components/watch-list/watch-list';
import TokenInput from './components/token-input/token-input';
import Notfound from './components/not-found/not-found';

import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/watchList" component={WatchList} />
    <Route path="/tokenInput" component={TokenInput}/>
    <Route component={Notfound} />
  </Router>
);

ReactDOM.render( routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
