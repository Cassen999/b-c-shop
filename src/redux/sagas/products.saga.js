import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchNewAlbums() {
    console.log('err in fetchNewAlbums');
    try {
        const res = yield axios.get('/api/products/new_albums')
        yield put({type: 'SET_NEW_ALBUMS', payload: res.data})
    } catch(err) {
        console.log('err in fetchNewAlbums', err)
    }
};

function* fetchSelectedAlbum(action) {
  console.log('in fetchSelectedAlbum saga');
  try {
    const res = yield axios.get(`/api/products/${action.payload}`)
    yield put({type: 'SET_NEW_ALBUMS', payload: res.data})
  } catch {
    console.log('error with fetchSelectedAlbum saga');
  }
}

function* productsSaga() {
    yield takeLatest("FETCH_NEW_ALBUMS", fetchNewAlbums);
    yield takeLatest("FETCH_SELECTED", fetchSelectedAlbum);
}

export default productsSaga;