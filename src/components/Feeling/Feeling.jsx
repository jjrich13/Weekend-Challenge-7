import React, { Component } from 'react';
import axios from 'axios';

class Feeling extends Component {

    routeToNext = () => {
        this.props.history.push('/understanding');

    }

    render() {
        return (
        <div>
            <h1>Feeling</h1>
            <input type="text" placeholder="How are you feeling today?" />
            <button onClick={this.routeToNext}>Next</button>
        </div>
        );
    }
}

export default Feeling;
