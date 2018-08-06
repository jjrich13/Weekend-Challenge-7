import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class AdminTableBody extends Component {
    
    //I had state here originally but had to move it out to put a confirmation dialog here
    
    render() {
        const arrayOfFeedbackItems = this.props.feedbackArray.map( (feedback, index) => {
            return(
                <TableRow key={index}>
                    <TableCell>{feedback.feeling}</TableCell>
                    <TableCell>{feedback.understanding}</TableCell>
                    <TableCell>{feedback.support}</TableCell>
                    <TableCell>{feedback.comments}</TableCell>
                    <TableCell>
                        <button onClick={() => this.props.handleClickOpen(feedback.id)}>Delete</button>
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
