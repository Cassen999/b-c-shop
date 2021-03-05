import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import mailingAddressReducer from './mailingAddress.reducer';

const rootReducer = combineReducers({
  errors,
  user,
  mailingAddressReducer,
});

export default rootReducer;
