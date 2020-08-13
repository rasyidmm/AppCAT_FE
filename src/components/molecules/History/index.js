import React,{Fragment} from 'react';
import {Typography, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem, Card, CardContent, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

import {
  CardHeader,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { data, options } from './chart';

const useStyles = makeStyles((theme) => ({
    
  root: {},
  chartContainer: {
    height: 300,
    position: 'relative',
    width:700
  },
  actions: {
    justifyContent: 'flex-end'
  }
}))

const History = (props)=>{
    const classes = useStyles();
    const { className, ...rest } = props;
    return(
        <Fragment>
              <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <Button
            size="small"
            variant="text"
          >
            Last 7 days <ArrowDropDownIcon />
          </Button>
        }
        title="Latest Sales"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Bar
            data={data}
            options={options}
          />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          Overview <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
        </Fragment>
    )
}

export default History;