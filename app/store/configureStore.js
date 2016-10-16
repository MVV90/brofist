import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
// import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'

// import settings from '../settings/settings'
import reducer from '../reducers'

export default function configureStore() {
  const middlewares = [];

  middlewares.push(thunkMiddleware);
  middlewares.push(createLogger());;;;;;// if development

  const store = createStore(reducer,
    applyMiddleware(...middlewares)
    // autoRehydrate()
  );

  if(1 === 3) {
    const persister = persistStore(store, {storage: AsyncStorage, blacklist: ['network']});
    console.log('Purging stored data.');
    persister.purge();
  }

  return store
}
