import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Index from './views/index';
import ARView from  './views/ar-view';
import OrderNow from './views/order-now';
import NotFound from './views/not-found';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Index}/>
      <Route path='/ar-view' exact component={ARView}/>
      <Route path='/order-now' exact component={OrderNow}/>
      <Route component={NotFound}/>
    </Switch>
  );
};

export default Routes;
