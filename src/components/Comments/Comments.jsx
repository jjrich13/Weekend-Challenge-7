import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    routeToNext = () => {
        this.props.history.push('/success');

    }

    handleNext = (event) => {
        event.preventDefault();
        this.props.dispatch(
            { type: 'STORE_COMMENTS', payload: this.state.comments },
            this.props.history.push('/checkout')
        )
        this.routeToNext();
    }

    render() {
        return (
        <div>
            <h1>Comments</h1>
            <input type="text" placeholder="Any comments you want to leave?" onChange={this.handleChange} />
            <button onClick={this.handleNext}>Next</button>
        </div>
        );
    }
}

export default connect()(Comments);
