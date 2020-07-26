import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9"
const arcOrang = "#FFBA60"
const arcGrey = "#868686"


export default createMuiTheme({
    palette:{
        common:{
            Blue: `${arcBlue}`,
            orange: `${arcOrang}`
        },
        primary:{
            main:`${arcBlue}`
        },
        secondary:{
            main:`${arcOrang}`
        }
    },
    typography:{
        tab:{
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight:"700",
            fontSize:"1rem",
        },
        estimate:{
            fontFamily:"Pacifico",
            fontSize:"1rem",
            textTransform:"none",
            color:"white"
        },
        h2:{
            fontFamily:"Raleway",
            fontWeight:700,
            color:`${arcBlue}`,
            fontSize:"2.5rem",
            lineHeight:1.5
        },
        h3:{
            fontFamily:"Pacifico",
            fontSize:"2.5rem",
            color:arcBlue
        },
        h4:{
            fontFamily:"Raleway",
            fontSize:"1.75rem",
            color:`${arcBlue}`,
            fontWeight:700
        },
        subtitle1:{
            fontSize:"1.25rem",
            fontWeight:300,
            color:`${arcGrey}`
        },
        learnButton:{
            borderColor:arcBlue,
            borderWidth:2,
            textTransfrom:"none",
            color:arcBlue,
            borderRadius:50,
            fontFamily:"Robot",
            fontWeight:"bold"
        }
    }
})