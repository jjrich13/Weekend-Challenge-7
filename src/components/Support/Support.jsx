import React, { Component } from 'react';
import axios from 'axios';

class Support extends Component {

    routeToNext = () => {
        this.props.history.push('/comments');

    }

    render() {
        return (
        <div>
            <h1>Support</h1>
            <button onClick={this.routeToNext}>Next</button>
        </div>
        );
    }
}

export default Support;
