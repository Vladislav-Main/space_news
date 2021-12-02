import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { About } from '../pages/about-page/About';
import { Home } from '../pages/home-page/Home';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail/:id" component={About} />
      <Redirect to="/" />
    </Switch>
  );
};
