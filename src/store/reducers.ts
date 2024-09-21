import { combineReducers } from 'redux';
import counterSlice from './slice/counterSlice';
// import { infoCustomerApi } from './api/infoCustomerApi';
// import paymentSlice from './slice/paymentSlice';

const rootReducers = combineReducers({
  // [authApi.reducerPath]: authApi.reducer,
  [counterSlice.name]: counterSlice.reducer,
});

export default rootReducers;
