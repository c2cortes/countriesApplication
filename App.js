import React from 'react';

import Router from './src/Router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
