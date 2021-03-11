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

function* productsSaga() {
    yield takeLatest("FETCH_NEW_ALBUMS", fetchNewAlbums)
}

export default productsSaga;