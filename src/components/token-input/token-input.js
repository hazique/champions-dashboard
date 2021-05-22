import React from 'react';
import { Container, Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';


export default class TokenInput extends React.PureComponent {
    state = {
        isError: false,
    };
    
    onSubmit = async (e) => {
        const token = document.getElementById('apiKey').value;
        localStorage.setItem("apiToken", token);

        // TODO: Check if the URL after appending token input is correct
        const url = "https://api.pandascore.co/lol/champions?token=" + token;
        let response = this.checkToken(url);
        console.log('abc', this.checkToken(url), response);
    }

    checkToken = async ( url ) => {
        const response = await fetch(url);
        console.log('hello');
        const json = await response.json();
        if (json && json !== undefined && !json.error){
            this.setState({ isError: false });
            this.props.history.push("/home");
            return true;
        }
        else {
            this.setState({ isError: true });
            return false;
        }
    }

    render() {
        const { isError } = this.state;
        return (
            <div className="token-input">
                {/* <input id="inputBar" type="text" />
                <input id="" type="button" value="Submit" onClick={this.onSubmit} />
                {isError ? <div>heelo</div> : <div>heel122121o</div>} */}

                <Container fluid="sm">
                    <Row>
                        <Col>
                            <InputGroup size="sm" className="mb-3">
                                <FormControl id="apiKey"
                                    placeholder="Enter API Key"
                                    aria-label="Enter API Key"/>
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" color="primary" onClick={this.onSubmit}>Save
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                            {isError ? <div>heelo</div> : <div>heel122121o</div>}
                        </Col>
                    </Row>

                </Container>
                
            </div> 
        );
    }
}