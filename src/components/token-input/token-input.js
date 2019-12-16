import React from 'react';

export default class TokenInput extends React.PureComponent {

    onSubmit = (e) => {
        localStorage.setItem("apiToken", e.getValue());

        // Navigate to Home Page
        this.props.history.push("/home");
    }

    render() {
        return (
            <div>
                <input type="text" />
                <input type="button" value="Submit" onClick={this.onSubmit} />
            </div>
        );
    }
}