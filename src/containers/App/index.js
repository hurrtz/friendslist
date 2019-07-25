import React, { PureComponent } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import FriendListApp from '../FriendListApp';
import * as reducers from '../../reducers';

const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

class App extends PureComponent {
  render() {
    return (
      <div>
        <Provider store={store}>
          <FriendListApp />
        </Provider>
      </div>
    );
  }
}

export default App;
