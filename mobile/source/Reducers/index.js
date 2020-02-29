import { combineReducers } from 'redux';
import entryReducers from './entryReducers';
import analysisReducers from './analysisReducers';
import navigatorReducers from './navigatorReducers';


export default combineReducers({
    entry: entryReducers,
    analysis: analysisReducers,
    navigator: navigatorReducers
})