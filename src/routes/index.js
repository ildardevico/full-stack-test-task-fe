import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SequencerForm from 'containers/SequencerForm';

const AppRouter = () => (
  <Switch>
    <Route path="/" component={SequencerForm} />
    <Route render={() => <h1>Not Found</h1>} />
  </Switch>
);

export default AppRouter;
