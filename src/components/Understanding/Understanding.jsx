import React, { Component } from 'react';
import { connect } from 'react-redux'

class Understanding extends Component {
    constructor(props){
        super(props);
        this.state = {
            understanding: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        });
    }

    routeToNext = () => {
        this.props.history.push('/support');

    }

    handleNext = (event) => {
        event.preventDefault();
        this.props.dispatch(
            { type: 'STORE_UNDERSTANDING', payload: this.state.understanding }
        )
        this.routeToNext();
    }

    render() {
        return (
        <div>
            <h1>Understanding</h1>
            <input autoFocus type="number" placeholder="How well are you understanding the content?" onChange={this.handleChange} />
            <button onClick={this.handleNext}>Next</button>
        </div>
        );
    }
}

export default connect()(Understanding);
