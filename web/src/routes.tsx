import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { CreatePoint } from './pages/CreatePoint';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/create-point" component={CreatePoint} />
    </BrowserRouter>
  );
};
