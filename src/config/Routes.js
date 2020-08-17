import React from 'react';
import { Switch, Redirect } from 'react-router-dom'
import RouteWithLayout  from '../components/RouteWithLayout/RouteWithLayout'
import MainLayout from '../containers/layout/MainLayout'
import MiniLayout from '../containers/layout/MiniLayout'

import Dasboards from '../containers/pages/Dasboard'
import UserList from '../containers/pages/Users/UserList'
import UserDetail from '../containers/pages/Users/UserDetail'
import Register from '../containers/pages/Auth/Register'
import Login from '../containers/pages/Auth/Login'

const Routes = () => {
    return (
      <Switch>
          <RouteWithLayout
            component={Dasboards}
            exact
            layout={MainLayout}
            path="/"
        />
          <RouteWithLayout
            component={UserList}
            exact
            layout={MainLayout}
            path="/user"
        />
          <RouteWithLayout
            component={UserDetail}
            exact
            layout={MainLayout}
            path="/userdetail"
        />
        <RouteWithLayout
            component={Register}
            exact
            layout={MiniLayout}
            path="/register"
        />
        <RouteWithLayout
            component={Login}
            exact
            layout={MiniLayout}
            path="/login"
        />
      </Switch>)}


export default Routes;