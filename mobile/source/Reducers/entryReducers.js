import t from '../Actions/types';

const INITIAL_STATE = {
    logged: false,
    loading: false,
    fbAccessToken: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case t.ENTRY_LOGGED:
            return {...state, logged: action.payload}
        case t.ENTRY_LOADING:
            return {...state, loading: action.payload}
        case t.ENTRY_SETFBACCESSTOKEN:
            return {...state, fbAccessToken: action.payload}
        default:
            return state;
    }
} 