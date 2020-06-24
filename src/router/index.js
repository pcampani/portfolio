import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Blog from '../components/Blog';
import Home from '../components/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/blog' component={Blog} />
    </Switch>
  )
}