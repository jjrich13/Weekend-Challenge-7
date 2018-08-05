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

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(
            { type: 'STORE_COMMENTS', payload: this.state.comments },
            this.props.history.push('/checkout')
        )
        axios({
            method: 'POST',
            url: '/api/feedback',
            data: this.props.state
        }).then( response => {
            this.routeToNext();
        }).catch( err => {
            console.log(err);  
        })
        
    }

    render() {
        return (
        <div>
            <h1>Comments</h1>
            <input type="text" placeholder="Any comments you want to leave?" onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Submit Feedback</button>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {state}
}

export default connect(mapStateToProps)(Comments);
