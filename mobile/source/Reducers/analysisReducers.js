import t from '../Actions/types';

const INITIAL_STATE = {
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case t.ANALYSIS_LOADING:
            return {...state, loading: action.payload}
        default:
            return state;
    }
} 