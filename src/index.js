import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import createStore from './createStore';
import AppRouter from './routes';

/* common styles */
import 'globalStyles/index.scss';
import 'globalStyles/variables.scss';
import 'what-input';

const history = createHistory();
const store = createStore(history);
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRouter />
    </ConnectedRouter>
  </Provider>,
  root,
);
