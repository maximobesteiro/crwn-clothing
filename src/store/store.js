import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

// Our own logger middleware in case we prefer to use this instead of redux-logger
// import { loggerMiddleware } from './middleware/logger';

import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line no-undef
const middlewares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(
  Boolean
);
const composeEnhancer =
  // eslint-disable-next-line no-undef
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
