import React,{Fragment} from 'react'
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import ava from '../../../assets/image/avatar.png'

const useStyles = makeStyles(theme =>({
    profils:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content',
        margin:10
    },
    avatar: {
        width: 60,
        height: 60
    },
    name: {
        marginTop: theme.spacing(1)
    }
}))
const ProfilSidebar = (props)=>{
    const classes = useStyles();
    return(
        <Fragment>
            <div className={classes.profils}>
                <Avatar
                    alt="person"
                    className={classes.avatar}
                    src={ava}
                />
                  <Typography
                    className={classes.name}
                    variant="h4"
                >
                    Rasyid
                </Typography>
                <Typography variant="body2">Member</Typography>
                </div>

        </Fragment>
    )
}
export default ProfilSidebar;