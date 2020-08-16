import React, { Fragment } from 'react'
import { makeStyles ,withStyles} from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Avatar, Typography, ButtonBase } from '@material-ui/core';
import { TablePagination,   Button, Divider,TextField,IconButton,Grid} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SearchIcon from '@material-ui/icons/Search';
import ava from '../../../../assets/image/avatar.png'

const columns = [
    {id: 'no',label: 'No', minWidth: 10 },
    { id: 'Type', label: 'Type Ujian', minWidth: 130 },
    { id: 'TUjian', label: 'Tanggal Ujian', minWidth: 70 },
    {
        id: 'JSoal',
        label: 'Jumlah Soal',
        minWidth: 70,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Skor',
        label: 'Skor',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Status',
        label: 'Status',
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
    function createData(no,Type, TUjian, JSoal, Skor,Status,Action) {
       
        return {no,Type, TUjian, JSoal, Skor,Status,Action };
    }
  
    const rows = [
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),
        createData('1','TWK', '18-09-2019', '120', 400,'Lulus'),

    ];
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
        },
    Search1:{
        display: 'flex',
        marginBottom:1
    },
    foto:{
        marginRight: 30,
        height: 110,
        width: 100,
        flexShrink: 0,
        flexGrow: 0
    },CardTabalce:{
        marginTop:30
    },Search:{
        marginLeft:'auto',
        marginRight:1
    },
    textfield:{
        margin:3
    },image:{
        width: 150,
        height: 128,
        margin:10
    },img:{
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },cardprofil:{
        backgroundColor: theme.palette.secondary.main
    }

}))


const UserDetail = ()=>{
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event, newPage) => {
    setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
};
    return(
        <Fragment>
            <div className={classes.root} />
            <Card  elevation={2} className={classes.cardprofil} >
                <CardHeader 
                    title="Usert Detail"
                    style={{ textAlign: 'center' }}
                />
                <CardContent>
                    <Grid container>
                        <Grid 
                            item
                            xs={2}
                            
                            >
                                <ButtonBase className={classes.image}>
                                <img alt="complex" src={ava} className={classes.img}/>
                                </ButtonBase>
                            
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs className={classes.textfield}> 
                                    <TextField
                                        fullWidth
                                        label="Nama"
                                        margin="dense"
                                        name="firstName"
                                        required
                                        variant="outlined"
                                        value="Rasyid Maulid Majid"
                                        
                                    />
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        margin="dense"
                                        name="firstName"
                                        value="rasyid@gmail.com"
                                        required
                                        variant="outlined"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Jenis Kelamin"
                                        margin="dense"
                                        name="firstName"
                                        required
                                        value="Pria"
                                        variant="outlined"
                                    />
                                </Grid>
                                
                            </Grid>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs className={classes.textfield}>
                                    <TextField
                                        fullWidth
                                        label="Tempat Tanggal Lahir"
                                        margin="dense"
                                        name="firstName"
                                        value="Kendal, 14 Agustus 2020"
                                        required
                                        variant="outlined"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Alamat"
                                        margin="dense"
                                        name="firstName"
                                        value="Jakarta"
                                        required
                                        variant="outlined"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Nomer Hp"
                                        margin="dense"
                                        name="firstName"
                                        value="0212312323"
                                        required
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                <Button
                    color="primary"
                    variant="contained"
                >
                    Edit
                </Button>
                </CardActions>

            </Card>
            <div  className={classes.CardTabalce}>
            <Card elevation={5} >
                <CardHeader 
                title="Daftar Ujain"
                style={{ textAlign: 'center' }}
                />
                    
                <CardContent>
                    <div className={classes.Search1}>
                        <TextField  className={classes.Search} label="Search field" type="search" variant="outlined" margin="dense" />
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
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </CardContent>
            </Card>
            </div>
            
        </Fragment>
    )
}

export default UserDetail;