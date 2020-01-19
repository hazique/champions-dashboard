import React from 'react';

export default class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      enabled: false,
    };
  }

  render() {
    return (
      <div>
        <h1>This is the search bar</h1>
      </div>
    );
  }
}
