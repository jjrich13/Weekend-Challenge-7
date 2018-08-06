import React, { Component } from 'react';
import axios from 'axios';


import AdminTableBody from '../AdminTableBody/AdminTableBody';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';


class Admin extends Component {
    constructor(props){
        super(props);
        this.state ={
            feedbackArray: [],
            open: false,
            idToDelete: 0
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
            //refresh dom
            this.getFeedback();  
            //close dialog
            this.handleClose();          
        }).catch( err => {
            console.log(err);
            
        });
    }


    //for DIALOG WINDOWS
    handleClickOpen = (id) => {
        //id is passed in and store in this.state so the dialog window will know which feedback item to delete when the delete function is triggered
        this.setState({ 
          open: true,
          idToDelete: id 
        });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

    render() {
        return (
        <div>
            <h1>Admin</h1>
            <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Feeling
                            </TableCell>
                            <TableCell>
                                Comprehension
                            </TableCell>
                            <TableCell>
                                Support
                            </TableCell>
                            <TableCell>
                                Comments
                            </TableCell>
                            <TableCell>
                                Delete
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <AdminTableBody
                        feedbackArray={this.state.feedbackArray}
                        handleClickOpen={this.handleClickOpen}
                     />
                </Table>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Permamently Delete?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            You will not be able to recover this feedback.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Cancel
                        </Button>
                        <Button onClick={() => this.handleDelete(this.state.idToDelete)} color="primary">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
        </div>
        );
    }
}

export default Admin;
