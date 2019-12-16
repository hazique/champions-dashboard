import React from 'react';
import './App.css';

import TokenInput from './components/token-input/token-input';

export default class App extends React.PureComponent {
  constructor() {
    super();
    this.check();
  }

  // Check if API token is already present in LocalStorage
  check() {
    console.log('localStorage.getItem', localStorage.getItem('apiToken'));
    if (typeof (Storage) !== undefined &&
      localStorage.getItem('apiToken')) {
      this.props.history.push('/home');
    } else {
      this.props.history.push('/tokenInput');
    }
  }

  render() {
    return null;
  }
}
