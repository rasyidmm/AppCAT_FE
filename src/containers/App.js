import React from 'react';
import {ThemeProvider} from '@material-ui/styles'
import theme from './layout/Themes'
import Header from './layout/Headers'


export default function  App() {
  return (
    
    <ThemeProvider theme={theme}>
      <Header/>
    </ThemeProvider>
  );
}
