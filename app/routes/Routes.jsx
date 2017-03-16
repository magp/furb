import React from 'react';
import { Route, Switch } from 'react-router-dom';

import List from '../components/List';
import About from '../components/About';
import NotFound from '../components/NotFound';

import links from '../../api/data/links.json';

const linksarr = Object.values(links);

function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={props => (<List links={linksarr} {...props} />)} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
