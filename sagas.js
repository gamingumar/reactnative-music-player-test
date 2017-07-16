import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { 
    FETCH_ALBUM_INFO_REQUEST,
    FETCH_ALBUM_INFO_SUCCESS,
    FETCH_ALBUM_INFO_FAIL
} from './actions/types';

const API_URL = 'https://gist.githubusercontent.com/bgdavidx/9458ff3ae6054a28e0a636367ff77bbf/raw/990adb44389595174da8fc5ec890045e0db66495/gistfile1.txt';

//worker saga
export function * fetchAlbumInfoAsync(action) {
    try {
        let response = yield call(axios.get, API_URL);
        response = response.data;
        console.log('calling api: ', response);

        yield put({ type: FETCH_ALBUM_INFO_SUCCESS, payload: response });
    } catch (e) {
        yield put({ type: FETCH_ALBUM_INFO_FAIL, message: e.message });
    }
}

export function * fetchAlbumInfoSaga() {
    yield takeEvery(FETCH_ALBUM_INFO_REQUEST, fetchAlbumInfoAsync);
}

export default fetchAlbumInfoSaga;