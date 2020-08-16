import React, { Fragment, useRef, useState,useEffect } from 'react'
import { AppBar, Toolbar, IconButton,Typography,Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

const useStyles = makeStyles((theme) => ({
    Toolbar:{
        minHeight: "40px",
        boxShadow: 'none'
    },title: {
        flexGrow: 1,
    },iconBar:{
        borderRight: "5px",
        minHeight:"20px"
    },
    }));

const Header = (props)=>{
    const { className, onSidebarOpen, ...rest } = props;
    const classes = useStyles();
    return(
        <Fragment>
            <AppBar
                color='primary'
                position="fixed"
            >
                <Toolbar
                    variant='regular'
                    className={classes.Toolbar}
                    >
                    <IconButton >
                        <ImportContactsIcon color='secondary' fontSize='large'/>
                        <Typography variant="h6" color='secondary'>
                            TestApp
                        </Typography>
                    </IconButton>
                    <div className={classes.title}/>
                    <Button color='secondary'variant="contained">Default</Button>
                </Toolbar>
            </AppBar>
            
        </Fragment>
    )
}

export default Header;