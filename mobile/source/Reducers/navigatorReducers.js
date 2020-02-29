import t from '../Actions/types';

const INITIAL_STATE = {
    selected: 'entry'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case t.NAVIGATOR_SELECT:
            return {...state, selected: action.payload}
        default:
            return state;
    }
} 