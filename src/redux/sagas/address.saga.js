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

function* fetchBillingAddress(){
  console.log('in fetchBillingAddress');
  try {
    const res = yield axios.get('/api/address/billing')
    yield put({type: 'SET_BILLING_ADDRESS', payload: res.data})
  } catch(err) {
    console.log('error in fetchBillingAddress', err)
  }
}

function* addressSaga() {
  yield takeLatest("FETCH_MAILING_ADDRESS", fetchMailingAddress);
  yield takeLatest("FETCH_BILLING_ADDRESS", fetchBillingAddress);
}

export default addressSaga;