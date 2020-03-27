import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />

        <Route path="/register" component={Register} />

        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
