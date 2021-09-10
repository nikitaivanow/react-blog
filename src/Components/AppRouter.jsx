import React from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom"
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../contex';
import { privateRoutes, publicRoutes } from '../router/routes';
import Loader from './UI/loader/Loader';



const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if(isLoading){
    return <Loader/>
  }
  return (
    isAuth ?
      <Switch>
        {privateRoutes.map(route =>
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
           />
        )}

        <Redirect to="/posts" />
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
            />
        )}

        <Redirect to="/login" />
      </Switch>

  );
}

export default AppRouter;
