import React,{Fragment} from 'react'
import { makeStyles ,withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
        },
    profil:{
        display: 'flex',
        marginBottom:30
    },
    foto:{
        marginRight: 30,
        height: 110,
        width: 100,
        flexShrink: 0,
        flexGrow: 0
    }

}))

const UserAdd = ()=>{
    return(
        <Fragment>

        </Fragment>
    )
}

export default UserAdd;