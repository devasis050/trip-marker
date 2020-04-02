import {UPDATE_SEARCH_RESULT, CLEAR_SEARCH_RESULT} from '../../redux/actionTypes'

export default (state=[], action) => {
    if(action.type === UPDATE_SEARCH_RESULT) {
        return [...action.payload];
    } else if(action.type === CLEAR_SEARCH_RESULT) {
        return [];
    }
    return state;
};