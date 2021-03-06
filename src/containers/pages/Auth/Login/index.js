import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../../layout/MainLayout/Header'
import { Container, Card, CardHeader, CardContent, Grid, CardActions, Button,TextField } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    card:{
        backgroundColor: theme.palette.secondary.main,
        maxWidth:350
    },
    margin: {
        margin: theme.spacing(1),
    },
}))
const Login=(props)=>{
    const classes = useStyles();
    return(
        <Fragment>
            <Header/>
            <Container >
                <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}>
                    <Grid
                        item
                        xs={12}>
                    <Card className={classes.card}   elevation={5}>
                        <CardHeader
                            title="Login"
                            style={{ textAlign: 'center' }}
                            />
                            <CardContent>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    margin="dense"
                                    name="phone"
                                    type="email"
                                    variant="outlined"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    margin="dense"
                                    name="Password"
                                    type="password"
                                    variant="outlined"
                                    required
                                />
                            </CardContent>
                            <CardActions   CardActions >
                                <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
                                    Submit
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                        </Grid>
            </Container>
            
        </Fragment>
    )
}

export default Login;