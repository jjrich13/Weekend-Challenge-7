import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class Feeling extends Component {
    constructor(props){
        super(props);
        this.state = {
            feeling: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        });
    }

    routeToNext = () => {
        this.props.history.push('/understanding');

    }

    handleNext = (event) => {
        event.preventDefault();
        this.props.dispatch(
            { type: 'STORE_FEELING', payload: this.state.feeling },
            this.props.history.push('/checkout')
        )
        this.routeToNext();
    }

    render() {
        return (
        <div>
            <h1>Feeling</h1>
            <input type="text" placeholder="How are you feeling today?" onChange={this.handleChange} />
            <button onClick={this.handleNext}>Next</button>
        </div>
        );
    }
}

export default connect()(Feeling);
