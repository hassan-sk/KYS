import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './Reducers';
import App from './Components/App';

const store = createStore(reducers,applyMiddleware(reduxThunk));

const index = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}
export default index;
