import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Home from './components/home/home';
import WatchList from './components/watch-list/watch-list';
import TokenInput from './components/token-input/token-input';
import Notfound from './components/not-found/not-found';
import AxiosSetup from './components/dnd-poc/axiosSetup';

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

// import DndPOC from './components/dnd-poc/dnd-poc';
import ArrangeableGrid from './components/dnd-poc/arrangeable-grid';

import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/watchList" component={WatchList} />
      <Route path="/tokenInput" component={TokenInput} />
      {/* <Route path="/dnd-poc" component={DndPOC} /> */}
      {/* <Route path="/arrangeable-grid" component={ArrangeableGrid} /> */}
      <Route path="/axios" component={AxiosSetup} />
      <Route path="*" component={Notfound} />
      
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
