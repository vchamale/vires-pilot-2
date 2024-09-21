import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducers';
// import { billToAndShipTosApi } from './api/billToAndShipTos';

const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
      // .concat(authApi.middleware),
  preloadedState: {},
  devTools: !Object.is(process.env.NODE_ENV, 'production')
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
