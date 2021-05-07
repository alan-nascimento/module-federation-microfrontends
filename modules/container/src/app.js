import React, { lazy, Suspense, useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import { Header, Progress } from './components';

const Auth = lazy(() => import('./apps/auth-app'));
const Marketing = lazy(() => import('./apps/marketing-app'));
const Dashboard = lazy(() => import('./apps/dashboard-app'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <Auth onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/dashboard">
              {!isSignedIn && <Redirect to="/" />}
              <Dashboard />
            </Route>
            <Route path="/" component={Marketing} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  );
};

export default App;
