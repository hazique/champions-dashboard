import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.check();
  }

  // Check if API token is already present in LocalStorage
  check() {
    console.log('localStorage.getItem', localStorage.getItem('apiToken'));
    if ( typeof (Storage) !== undefined &&
      localStorage.getItem('apiToken') &&
      localStorage.getItem('apiToken') !== null ) {
      this.props.history.push('/home');
    } else {
      this.props.history.push('/tokenInput');
    }
  }

  render() {
    return null;
  }
}
