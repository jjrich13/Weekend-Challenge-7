import React, { Component } from 'react';
import axios from 'axios';

class Comments extends Component {

    routeToNext = () => {
        this.props.history.push('/success');

    }

    render() {
        return (
        <div>
            <h1>Comments</h1>
            <button onClick={this.routeToNext}>Next</button>
        </div>
        );
    }
}

export default Comments;
