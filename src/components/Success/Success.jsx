import React, { Component } from 'react';
import axios from 'axios';

class Success extends Component {

    routeToNext = () => {
        this.props.history.push('/feeling');

    }

    render() {
        return (
        <div>
            <h1>Success</h1>
            <button onClick={this.routeToNext}>Next</button>
        </div>
        );
    }
}

export default Success;
