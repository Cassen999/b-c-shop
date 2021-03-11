import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import mailingAddressReducer from './mailingAddress.reducer';
import billingAddressReducer from './billingAddress.reducer';
import productsReducer from './products.reducer';

const rootReducer = combineReducers({
  errors,
  user,
  mailingAddressReducer,
  billingAddressReducer,
  productsReducer
});

export default rootReducer;
