import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import { Landing, Pricing } from './pages';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const App = ({ history }) => (
  <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Switch>
        <Route exact path="/pricing" component={Pricing} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  </StylesProvider>
);

export default App;
