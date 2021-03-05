import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchMailingAddress() {
  console.log('in fetchMailingAddress');
  try {
    const response = yield axios.get()
  }
}

function* addressSaga() {
  yield takeLatest("FETCH_MAILING_ADDRESS", fetchMailingAddress);
}

export default addressSaga;