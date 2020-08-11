import React from 'react';
import { Switch, Redirect } from 'react-router-dom'
import RouteWithLayout  from '../components/RouteWithLayout/RouteWithLayout'
import layout from '../containers/layout'

import Dasboards from '../containers/pages/Dasboard'

const Routes = () => {
    return (
      <Switch>
          <RouteWithLayout
            component={Dasboards}
            exact
            layout={layout}
            path="/"
        />
      </Switch>)}


export default Routes;