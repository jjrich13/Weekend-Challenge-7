import React, { Component } from 'react';
import axios from 'axios';

class Success extends Component {

    routeToNext = () => {
        this.props.history.push('/feeling');

    }

    render() {
        return (
        <div>
            <h1>Thank You!</h1>
            <button onClick={this.routeToNext}>Leave New Feedback</button>
        </div>
        );
    }
}

export default Success;
