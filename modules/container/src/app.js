import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MarketingApp from './apps/marketing';
import { Header } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
};

export default App;
