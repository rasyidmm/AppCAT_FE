import React from 'react';
import { Switch, Redirect } from 'react-router-dom'
import RouteWithLayout  from '../components/RouteWithLayout/RouteWithLayout'
import layout from '../containers/layout/MainLayout'

import Dasboards from '../containers/pages/Dasboard'
import UserList from '../containers/pages/Users/UserList'
import UserDetail from '../containers/pages/Users/UserDetail'
import userAdd from '../containers/pages/Users/UserAdd'

const Routes = () => {
    return (
      <Switch>
          <RouteWithLayout
            component={Dasboards}
            exact
            layout={layout}
            path="/"
        />
          <RouteWithLayout
            component={UserList}
            exact
            layout={layout}
            path="/user"
        />
          <RouteWithLayout
            component={UserDetail}
            exact
            layout={layout}
            path="/userdetail"
        />
        <RouteWithLayout
            component={userAdd}
            exact
            path="/useradd"
        />
      </Switch>)}


export default Routes;