import React, { Component } from 'react';

import AdminTableBody from '../AdminTableBody/AdminTableBody';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Admin extends Component {
    
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
                    <AdminTableBody />
                </Table>
        </div>
        );
    }
}

export default Admin;
