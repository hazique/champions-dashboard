import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';


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
        <InputGroup size="sm" className="mb-3">
          <FormControl id="apiKey"
              placeholder="Search Champions"
              aria-label="Search Champions"/>
          <InputGroup.Append>
              <Button variant="outline-secondary" color="primary" onClick={this.onSubmit}>Search
              </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}
