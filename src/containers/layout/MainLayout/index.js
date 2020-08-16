import React, { Fragment,useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/styles';
import Headers from './Header'
import Sidebar from './Sidebar'

const useStyles = makeStyles(theme => ({
    root: {
      paddingTop: 56,
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        paddingTop: 64
      }
    },
    shiftContent: {
      paddingLeft: 240
    },
    content: {
      height: '100%'
    }
  }));

const MainLayout =(props)=>{
  const {children} = props
    const classes = useStyles();
    const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };
  const shouldOpenSidebar = openSidebar;
    return(
        <Fragment>
            <div className={classes.shiftContent}>
                <Headers
                     onSidebarOpen={handleSidebarOpen}
                />
                <Sidebar
                onClose={handleSidebarClose}
                open={shouldOpenSidebar}
                open={false}
                variant={'temporary'}/>
                <main className={classes.content}>
                  {children}
                </main>
            </div>
            
        </Fragment>
    )
}

export default MainLayout;