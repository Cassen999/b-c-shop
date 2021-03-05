import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchMailingAddress() {
  console.log('in fetchMailingAddress');
  try {
    const response = yield axios.get('/api/address/mailing')
    yield put({type: 'SET_MAILING_ADDRESS', payload: response.data})
  }
  catch(error) {
    console.log('error in fetchMailingAddress', error)
  }
}

function* addressSaga() {
  yield takeLatest("FETCH_MAILING_ADDRESS", fetchMailingAddress);
}

export default addressSaga;