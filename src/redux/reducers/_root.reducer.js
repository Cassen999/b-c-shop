import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import mailingAddressReducer from './mailingAddress.reducer';
import billingAddressReducer from './billingAddress.reducer';

const rootReducer = combineReducers({
  errors,
  user,
  mailingAddressReducer,
  billingAddressReducer
});

export default rootReducer;
