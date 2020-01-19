import React from 'react';
import SearchBar from '../search-bar/search-bar';


export default class Home extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }

  getData() {

  }
}
