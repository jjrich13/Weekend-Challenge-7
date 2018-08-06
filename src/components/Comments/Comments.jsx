import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class Comments extends Component {
    //handling some async problems below....
    constructor(props){
        super(props);
        this.state = {
            feeling: '',
            understanding: '',
            support: '',
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
        
        axios({
            //had oto use the this.state as data becuase of async problems and redux state not being updated, 
            //not sure of another way to handle this problem but this worked
            method: 'POST',
            url: '/api/feedback',
            data: this.state
        }).then( response => {
            this.props.dispatch(
                { type: 'CLEAR_STATE'}
            )
            this.routeToNext();
        }).catch( err => {
            console.log(err);  
        })
        
    }

    componentDidMount(){
        //again here bringing redux to this.state because redux state was not being updated properly before POST was happening
        this.setState({
            feeling: this.props.state.feeling,
            understanding: this.props.state.understanding,
            support: this.props.state.support
        })
    }

    render() {
        return (
        <div>
            <h1>Comments</h1>
            <input autoFocus type="text" placeholder="Any comments you want to leave?" onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Submit Feedback</button>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {state}
}

export default connect(mapStateToProps)(Comments);
