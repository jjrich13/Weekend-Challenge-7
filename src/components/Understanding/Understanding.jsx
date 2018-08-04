import React, { Component } from 'react';
import axios from 'axios';

class Understanding extends Component {

    routeToNext = () => {
        this.props.history.push('/support');

    }

    render() {
        return (
        <div>
            <h1>Understanding</h1>
            <button onClick={this.routeToNext}>Next</button>
        </div>
        );
    }
}

export default Understanding;
