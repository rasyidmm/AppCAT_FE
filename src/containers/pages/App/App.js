import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {ThemeProvider} from '@material-ui/styles'
import theme from '../../templates/Themes'
import Routes from '../../../config/Routes'

const browserHistory = createBrowserHistory();
export default function  App() {
  return (
    
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
          <Routes />
        </Router>
    </ThemeProvider>
  );
}
