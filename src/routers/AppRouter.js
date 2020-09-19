import React, { useContext } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRouter } from './DashBoardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
   const { user } = useContext(AuthContext);
   return (
      <Router>
         <div>
            <Switch>
               <PublicRoute
                  exact
                  path='/login'
                  component={LoginScreen}
                  isAuthenticated={user.logged}
               />
               <PrivateRoute
                  isAuthenticated={user.logged}
                  path='/'
                  component={DashBoardRouter}
               />
            </Switch>
         </div>
      </Router>
   );
};
