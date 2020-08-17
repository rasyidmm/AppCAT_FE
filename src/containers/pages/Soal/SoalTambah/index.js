/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment ,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { Card, CardHeader, CardContent,CardActions,Button,TextField, Grid, Modal ,Fab,Backdrop, Divider} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Card:{
        backgroundColor: theme.palette.secondary.main
    },
    root: {
        padding: theme.spacing(4)
    },
    Grid:{
        margin:3
    },
    Cardimport:{
        height:40,
        justifyContent: 'center'
        ,width:50
    },
    CardActionsIm:{
        justifyContent: 'center',
        height:30
    },
    input: {
        display: 'none',
      },
    media:{
        height:90,
        width:140,
        padding:'auto'
    },
    cardviewImage:{
        maxHeight:500
    },imgview:{
        width:400,
        height: 700
    }

}))



const SoalTambah = ()=>{

    const [model, seModel] = useState(false)
    const [selectedFile, setSelectedFile] = useState("")

    const classes = useStyles();
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
    const handleUploadImage = async(event)=> {
        const file = event
        console.log(file);
        if(file !== undefined){
            var imgbase = await toBase64(file)
            if(selectedFile===""){
                setSelectedFile(imgbase);
            }else if(selectedFile !== imgbase ){
                setSelectedFile("");
                setSelectedFile(imgbase);
            }else{
                setSelectedFile("");
                setSelectedFile(selectedFile);
            }
        }
        
       
        
        
    };
    const HandleOpenModelImage = ()=>{
        seModel(true)
    }
    const HandleCloseModelImage = ()=>{
        seModel(false)
    }
    

    return(
        
        <Fragment>
            <div className={classes.root}/>
            <Card className={classes.Card}>
                <CardHeader title="Tambah Soal"  style={{ textAlign: 'center' }}/>
                <CardContent>
                    <Grid container>
                        <Grid xs={7} className={classes.Grid}> 
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"  
                                label="Soal"
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid xs={2} className={classes.Grid}> 
                        <Card >
                            <CardContent className={classes.Cardimport}> 
                                {/* <CardMedia
                                    src={selectedFile}
                                />               */}
                                <img
                                    className={classes.media}
                                    src={selectedFile}
                                />
                            </CardContent>
                            
                            <CardActions className={classes.CardActionsIm}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    
                                    onChange={(e)=> handleUploadImage(e.target.files[0])}
                                    
                                />
                                <label htmlFor="contained-button-file">
                                    <Fab component="span"  size="small" className={classes.button}>
                                        <AddPhotoAlternateIcon />
                                    </Fab>
                                </label>
                                <Fab component="span"  size="small" onClick={HandleOpenModelImage} className={classes.button}>
                                        <ZoomInIcon />
                                </Fab>
                            </CardActions>
                                
                        </Card> 
                            
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container>
                        <Grid xs={7} className={classes.Grid}> 
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"  
                                label="Jawaban 1"
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid xs={2} className={classes.Grid}> 
                        <Card >
                            <CardContent className={classes.Cardimport}> 
                                {/* <CardMedia
                                    src={selectedFile}
                                />               */}
                                <img
                                    className={classes.media}
                                    src={selectedFile}
                                />
                            </CardContent>
                            
                            <CardActions className={classes.CardActionsIm}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    
                                    onChange={(e)=> handleUploadImage(e.target.files[0])}
                                    
                                />
                                <label htmlFor="contained-button-file">
                                    <Fab component="span"  size="small" className={classes.button}>
                                        <AddPhotoAlternateIcon />
                                    </Fab>
                                </label>
                                <Fab component="span"  size="small" onClick={HandleOpenModelImage} className={classes.button}>
                                        <ZoomInIcon />
                                </Fab>
                            </CardActions>
                                
                        </Card> 
                            
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs={7} className={classes.Grid}> 
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"  
                                label="Jawaban 2"
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid xs={2} className={classes.Grid}> 
                        <Card >
                            <CardContent className={classes.Cardimport}> 
                                {/* <CardMedia
                                    src={selectedFile}
                                />               */}
                                <img
                                    className={classes.media}
                                    src={selectedFile}
                                />
                            </CardContent>
                            
                            <CardActions className={classes.CardActionsIm}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    
                                    onChange={(e)=> handleUploadImage(e.target.files[0])}
                                    
                                />
                                <label htmlFor="contained-button-file">
                                    <Fab component="span"  size="small" className={classes.button}>
                                        <AddPhotoAlternateIcon />
                                    </Fab>
                                </label>
                                <Fab component="span"  size="small" onClick={HandleOpenModelImage} className={classes.button}>
                                        <ZoomInIcon />
                                </Fab>
                            </CardActions>
                                
                        </Card> 
                            
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs={7} className={classes.Grid}> 
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"  
                                label="Jawaban 3"
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid xs={2} className={classes.Grid}> 
                        <Card >
                            <CardContent className={classes.Cardimport}> 
                                {/* <CardMedia
                                    src={selectedFile}
                                />               */}
                                <img
                                    className={classes.media}
                                    src={selectedFile}
                                />
                            </CardContent>
                            
                            <CardActions className={classes.CardActionsIm}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    
                                    onChange={(e)=> handleUploadImage(e.target.files[0])}
                                    
                                />
                                <label htmlFor="contained-button-file">
                                    <Fab component="span"  size="small" className={classes.button}>
                                        <AddPhotoAlternateIcon />
                                    </Fab>
                                </label>
                                <Fab component="span"  size="small" onClick={HandleOpenModelImage} className={classes.button}>
                                        <ZoomInIcon />
                                </Fab>
                            </CardActions>
                                
                        </Card> 
                            
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs={7} className={classes.Grid}> 
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"  
                                label="Jawaban 4"
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid xs={2} className={classes.Grid}> 
                        <Card >
                            <CardContent className={classes.Cardimport}> 
                                {/* <CardMedia
                                    src={selectedFile}
                                />               */}
                                <img
                                    className={classes.media}
                                    src={selectedFile}
                                />
                            </CardContent>
                            
                            <CardActions className={classes.CardActionsIm}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    
                                    onChange={(e)=> handleUploadImage(e.target.files[0])}
                                    
                                />
                                <label htmlFor="contained-button-file">
                                    <Fab component="span"  size="small" className={classes.button}>
                                        <AddPhotoAlternateIcon />
                                    </Fab>
                                </label>
                                <Fab component="span"  size="small" onClick={HandleOpenModelImage} className={classes.button}>
                                        <ZoomInIcon />
                                </Fab>
                            </CardActions>
                                
                        </Card> 
                            
                        </Grid>
                    </Grid>
                   
                    
                </CardContent>
                <CardActions >
                <Button
                    color="primary"
                    variant="contained"
                >
                    Save
                </Button>
                </CardActions>
            </Card>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={model}
                onClose={HandleCloseModelImage}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
                >
                   <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}>
                        <Grid
                        item
                        xs={12}>
                            <Card >
                                <CardContent className={classes.cardviewImage}>
                                <img className={classes.imgview}
                                    src={selectedFile}/>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={HandleCloseModelImage}
                                    >
                                        Close
                                    </Button>
                                </CardActions>
                            </Card>
                           
                        </Grid>
                    </Grid>
                </Modal>
        </Fragment>
    )
}
export default SoalTambah;