import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Landing from './components/landing';
import Pricing from './components/pricing';

export default () => (
  <StylesProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing}></Route>
        <Route exact path="/pricing" component={Pricing}></Route>
      </Switch>
    </BrowserRouter>
  </StylesProvider>
);
