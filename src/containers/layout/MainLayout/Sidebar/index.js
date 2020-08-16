import React,{Fragment } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography ,Card} from '@material-ui/core';
import ProfilSidebar from '../ProfilSidebar';
import NavSidebar from '../NavSidebar'
import { Divider, Drawer } from '@material-ui/core';
const drawerWidth = 230;
const useStyles = makeStyles(theme =>({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
        },
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('lg')]: {
            marginTop: 60,
            height: 'calc(100% - 64px)'
            }  
        },
    divider: {
            margin: theme.spacing(2, 0)
        },
}))

const Sidebar = (props)=>{
    const classes = useStyles();
    const { open, variant, onClose, className, ...rest } = props;
    return(
        <Fragment>
            <Card  elevation={5}>
            <Drawer
                anchor="left"
                className={classes.drawer}
                onClose={onClose}
                open={open}
                variant="permanent"
               
                classes={{
                    paper: classes.drawerPaper,
                }}
                
                >
                    <ProfilSidebar/>
                    <Divider className={classes.divider} />
                    <NavSidebar/>
                </Drawer>
                
        </Card>
            
          
        </Fragment>
    )
}

export default Sidebar;