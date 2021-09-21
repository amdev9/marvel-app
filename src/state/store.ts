
// @ts-nocheck
import { createStore } from 'redux';
import { reducer } from './reducers';

import { saveState, loadState } from '../common/localStorage';

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
  const store = createStore(reducer, loadState(), reduxDevTools);

  store.subscribe(
    () => saveState(store.getState())
  )

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(reducer);
      });
    }
  }

  return store;
};


export default configureStore;