import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Landing, Pricing } from './pages';

const App = () => (
  <StylesProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} />
        <Route exact path="/pricing" component={Pricing} />
      </Switch>
    </BrowserRouter>
  </StylesProvider>
);

export default App;
