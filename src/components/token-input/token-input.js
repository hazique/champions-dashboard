import React from 'react';

export default class TokenInput extends React.PureComponent {
    state = {
        isError: false,
    };
    
    onSubmit = async (e) => {
        const token = e.target.previousSibling.value;
        localStorage.setItem("apiToken", token);

        // TODO: Check if the URL after appending token input is correct
        const url = "https://api.pandascore.co/lol/champions?token=" + token;
        let response = await this.checkToken(url);
        console.log('abc', this.checkToken(url), response);
    }

    checkToken = async ( url ) => {
        const response = await fetch(url);
        console.log('hello');
        const json = await response.json();
        console.log('hello11', json);
        if (json && json !== undefined && !json.error){
            this.setState({ isError: false });
            // this.props.history.push("/home");
            return true;
        }
        else {
            this.setState({ isError: true });
            console.log('hello13333');
            return false;
        }
    }

    render() {
        const { isError } = this.state;
        return (
            <div>
                <input id="inputBar" type="text" />
                <input id="" type="button" value="Submit" onClick={this.onSubmit} />
                {isError ? <div>heelo</div> : <div>heel122121o</div>}
                
            </div> 
        );
    }
}