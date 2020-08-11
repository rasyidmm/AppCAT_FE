import React,{Fragment} from 'react';
import {Typography, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem, Card, CardContent, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import imgAvatar from '../../assets/image/avatar.png'
const useStyles = makeStyles((theme) => ({
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
}))
const CardsProfil=(props)=>{
    const classes = useStyles();
    return(
        <Fragment>
            <Popper open={props.open} anchorEl={props.anchorEl} role={undefined} transition disablePortal>
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
                                        <MenuList  autoFocusItem={props.open}>
                                            {/* <MenuItem onClick={handleCloseMenuAkun} >My Profil</MenuItem>
                                            <MenuItem onClick={handleCloseMenuAkun}>Logout</MenuItem> */}
                                        </MenuList>
                                        </CardContent>
                                    
                                    </Card>
                            </Paper>
                        </Grow>
                    )}
                    </Popper>

        </Fragment>
    )
}
export default CardsProfil;