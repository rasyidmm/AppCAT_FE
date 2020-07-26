import React, { Fragment, useRef, useState,useEffect } from 'react'
import { AppBar, Toolbar, IconButton,Typography, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem, Card, CardContent, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AppleIcon from '@material-ui/icons/Apple';
import Avatar from '@material-ui/core/Avatar';
import imgAvatar from '../../assets/image/avatar.png'
import clsx from 'clsx';
import Sidebar from './Sidebar'
const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
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

const Header = (props)=>{
    const{onClose}=props;
    const[menuakun,setMenuAkun] = useState(false)
    const[sideBar,setSideBar]=useState(false)
    const classes = useStyles();
    const anchorRef = useRef(null);
    const handleOpenSideBar=()=>{
        setSideBar(true)
    }
    const handleCloseSideBar=()=>{
        setSideBar(false)
    }

    const handleOpenMenuAkun=()=>{
        setMenuAkun((prevOpen) => !prevOpen);
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
                position="fixed"
                className={clsx(classes.appBar, {
                  [classes.appBarShift]: sideBar,
                })}>
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
                                <Card className={classes.cardMenuAkun}>
                                    <CardMedia>
                                            <CardContent className={classes.avatar}> 
                                                <Avatar alt="Remy Sharp" src={imgAvatar}  className={classes.avatarsize}/>
                                            </CardContent>
                                        </CardMedia>
                                        <CardContent>
                                            
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            Hi, Rasyid
                                        </Typography>
                                        <MenuList  autoFocusItem={menuakun}>
                                            <MenuItem onClick={handleCloseMenuAkun} >My Profil</MenuItem>
                                            <MenuItem onClick={handleCloseMenuAkun}>Logout</MenuItem>
                                        </MenuList>
                                        </CardContent>
                                    
                                    </Card>
                            </Paper>
                        </Grow>
                    )}
                    </Popper>
                </Toolbar>
            </AppBar>
            <Sidebar open={sideBar} onClose={handleCloseSideBar}/>
        </Fragment>
    )
}

export default Header;