import {
    FETCH_ALBUM_INFO_SUCCESS,
    FETCH_ALBUM_INFO_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    data: [],
    loading: true,
    success: false
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_ALBUM_INFO_SUCCESS:
            return { ...state, loading: false, data: action.payload, success: true };
        case FETCH_ALBUM_INFO_FAIL:
            return { ...state, loading: false, data: action.payload };
        default:
            return state;
    }
}
