import {UPDATE_DIRECTION, CLEAR_DIRECTION} from '../../redux/actionTypes'

const directionReducer = (state={}, action) => {
    if(action.type === CLEAR_DIRECTION) {
        return {};
    } else if(action.type === UPDATE_DIRECTION){
        return action.payload;
    } else {
        return state;
    }
}

export default directionReducer;