import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import store from './configureStore';

const unsubscribe = store.subscribe(() => {});

// Replace the existing store instance
const newStore = configureStore({
  reducer: rootReducer
});

unsubscribe(); // Unsubscribe from the old store
store = newStore;
