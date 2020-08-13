import React,{Fragment} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CardsDasboard from '../../../components/molecules/CardsDasboard'
import History from '../../../components/molecules/History'
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
      }
}))

const Dasboard = ()=>{
    const classes = useStyles();
    return(
        <Fragment>
           
            <div className={classes.root} />
            <Grid
              container
              spacing={4}
            >
            <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <CardsDasboard />
          </Grid>

          <div className={classes.root} />
            <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <CardsDasboard />
          </Grid>

          <div className={classes.root} />
            <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <CardsDasboard />
          </Grid>
          <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <History />
        </Grid>
          </Grid>
        </Fragment>
    )
}

export default Dasboard;