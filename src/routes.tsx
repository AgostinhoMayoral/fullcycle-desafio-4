import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './pages/ListUsers';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/users' component={Users} />
    </BrowserRouter>
  );
}

export default Routes;
