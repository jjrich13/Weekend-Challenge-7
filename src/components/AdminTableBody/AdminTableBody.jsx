import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class AdminTableBody extends Component {
    constructor(props){
        super(props);
        this.state ={
            feedbackArray: []
        };
    }

    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/api/feedback',
        })
        .then( response => {
            this.setState({
                feedbackArray: response.data
            });
        })
        .catch( err => {
            console.log(err);
            
        })
    }

    componentDidMount(){
        this.getFeedback();
    }

    handleDelete = (id) => {
        axios({
            method: 'DELETE',
            url: `/api/feedback/${id}`
        }).then( response => {
            this.getFeedback();            
        }).catch( err => {
            console.log(err);
            
        });
    }
    
    render() {
        const arrayOfFeedbackItems = this.state.feedbackArray.map( (feedback, index) => {
            return(
                <TableRow key={index}>
                    <TableCell>{feedback.feeling}</TableCell>
                    <TableCell>{feedback.understanding}</TableCell>
                    <TableCell>{feedback.support}</TableCell>
                    <TableCell>{feedback.comments}</TableCell>
                    <TableCell>
                        <button onClick={() => this.handleDelete(feedback.id)}>Delete</button>
                    </TableCell>
                </TableRow>
            )
        })
        return (
            <TableBody>{arrayOfFeedbackItems}</TableBody>
        );
    }
}



export default connect()(AdminTableBody);
