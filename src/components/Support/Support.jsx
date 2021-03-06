import React, { Component } from 'react';
import { connect } from 'react-redux'

class Support extends Component {
    constructor(props){
        super(props);
        this.state = {
            support: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        });
    }

    routeToNext = () => {
        this.props.history.push('/comments');

    }

    handleNext = (event) => {
        event.preventDefault();
        this.props.dispatch(
            { type: 'STORE_SUPPORT', payload: this.state.support }
        )
        this.routeToNext();
    }

    render() {
        return (
        <div>
            <h1>Support</h1>
            <input autoFocus type="number" placeholder="How well are you being supported?" onChange={this.handleChange} />
            <button onClick={this.handleNext}>Next</button>
        </div>
        );
    }
}

export default connect()(Support);
