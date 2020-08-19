import React, { Fragment ,useState} from 'react'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {Card, CardHeader,CardContent, CardActions, Button,TextField,TableRow,TableCell,TablePagination,IconButton,TableContainer,Table,TableHead,TableBody} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
    }))(TableCell);

    const columns = [
        {id: 'no',label: 'No', minWidth: 10 },
        { id: 'name', label: 'Name', minWidth: 130 },
        { id: 'TTL', label: 'TTL', minWidth: 70 },
        {
            id: 'Alamat',
            label: 'Alamat',
            minWidth: 70,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'lulus',
            label: 'Jumlah Lulus',
            minWidth: 100,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            label: 'Action',
            minWidth: 170,
            align: 'Center',
        },
        ];
        function createData(no,name, TTL, Alamat, lulus,Action) {
            return { no,name, TTL, Alamat, lulus, Action };
        }
        const rows = [
            createData('1','Jhon Kendo', 'Kendal,18-09-1993', 'Jakarta', 3287263),
            createData('2','Jhon Kendo', 'Kendal,18-09-1993', 'Jakarta', 9596961),
            createData('3','Jhon Kendo', 'Kendal,18-09-1993', 'Jakarta', 301340),
            createData('4','Jhon Kendo', 'Kendal,18-09-1993', 'Jakarta', 9833520),
            createData('5','CanJhon Kendoada', 'Kendal,18-09-1993', 'Jakarta', 9984670),
            createData('6','Jhon Kendo', 'Kendal,18-09-1993', 'Jakarta', 7692024),
            createData('8','Jhon Kendo', 'Kendal,18-09-1993', 'Jakarta', 70273),
            createData('9','Jhon Kendo', 'Kendal,18-09-1993', 'Jakarta', 1972550),
            createData('10','Jhon Kendo', 'JKendal,18-09-1993P', 'Jakarta', 377973),
            createData('11','Jhon Kendo', 'FKendal,18-09-1993R', 'Jakarta', 640679),
            createData('12','Jhon Kendo Kingdom', 'Kendal,18-09-1993', 'Jakarta', 242495),
            createData('13','Jhon Kendo', 'Kendal,18-09-1993', 'Jakarta', 17098246),
            createData('14','Jhon Kendo', 'Kendal,18-09-1993', 'Jakarta', 923768),
            createData('15','BraJhon Kendozil', 'Kendal,18-09-1993', 'Jakarta', 8515767),
        ];
const useStyles = makeStyles((theme) => ({
    root:{
        padding: theme.spacing(4)
    }
}))


const SoalList = ()=>{
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    return(
        <Fragment>
            <div className={classes.root}/>
            <Card>
                <CardHeader
                    title="material"
                />
                <CardContent>
                <div className={classes.paper}>
                            <Button  variant="outlined" color="primary" size="small" className={classes.Button}>
                                Add User
                            </Button  >
                            <div className={classes.dev}/>
                            <TextField  label="Search field" type="search" variant="outlined" margin="dense" />
                            <IconButton>
                                <SearchIcon/>
                            </IconButton>
                        </div>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <StyledTableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </StyledTableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                    <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </TableCell>
                                    );
                                })}
                                </TableRow>
                            );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        // onChangePage={handleChangePage}
                        // onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </CardContent>
                <CardActions>
                    <Button 
                    >
                        SaVe
                    </Button>
                </CardActions>
            </Card>
        </Fragment>
    )
}
export default SoalList;