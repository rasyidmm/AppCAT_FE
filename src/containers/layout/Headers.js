import React, { Fragment, useRef, useState,useEffect } from 'react'
import { AppBar, Toolbar, IconButton,Typography, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem, Card, CardContent, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AppleIcon from '@material-ui/icons/Apple';
import Avatar from '@material-ui/core/Avatar';
import imgAvatar from '../../assets/image/avatar.png'
import clsx from 'clsx';
import Sidebar from './sidebar'
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    cardMenuAkun:{
        minWidth: 175,
        margin:'auto',
    },
    avatar:{
        display: 'flex',
        marginTop:'20px',
        '& > *': {
        margin: theme.spacing(1),
        },
    },
    avatarsize:{
        width: theme.spacing(7),
        height: theme.spacing(7),
        margin: 'auto',
    }
    }));

const Header = ()=>{
    const[menuakun,setMenuAkun] = useState(false)
    const[sideBar,setSideBar]=useState(false)
    const classes = useStyles();
    const anchorRef = useRef(null);

    const handleOpenSideBar=()=>{
        console.log('side aktive')
    }

    const handleOpenMenuAkun=()=>{
        setMenuAkun((prevOpen) => !prevOpen);
        console.log('togle run');
    }
    const handleCloseMenuAkun=(event)=>{
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
          }
      
          setMenuAkun(false);
    }
    const prevOpen = React.useRef(menuakun);
    useEffect(() => {
    if (prevOpen.current === true && menuakun === false) {
        anchorRef.current.focus();
    }

    prevOpen.current = menuakun;
    }, [menuakun])
    return(
        <Fragment>
            <AppBar 
                position="static">
                <Toolbar>
                    <IconButton
                        onClick={handleOpenSideBar}
                        >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Dasboard TestApp
                    </Typography>
                    <IconButton
                        ref={anchorRef}
                        onClick={handleOpenMenuAkun}
                    >
                        <AppleIcon/>
                    </IconButton>
                    <Popper open={menuakun} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener>
                                    <Card autoFocusItem={menuakun} className={classes.cardMenuAkun}>
                                        <CardMedia>
                                            <div className={classes.avatar}> 
                                                <Avatar alt="Remy Sharp" src={imgAvatar}  className={classes.avatarsize}/>
                                            </div>
                                        </CardMedia>
                                        <CardContent>
                                            
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            Hi, Rasyid
                                        </Typography>
                                        <MenuList >
                                            <MenuItem onClick={handleCloseMenuAkun} >My Profil</MenuItem>
                                            <MenuItem onClick={handleCloseMenuAkun}>Logout</MenuItem>
                                        </MenuList>
                                        </CardContent>
                                    
                                    </Card>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                    </Popper>
                </Toolbar>
            </AppBar>
            <Sidebar/>
        </Fragment>
    )
}

export default Header;