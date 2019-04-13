import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Index from './views/index';
import ARView from  './views/ar-view';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Index}/>
      <Route path='/ar-view' exact component={ARView}/>
    </Switch>
  );
};

export default Routes;
