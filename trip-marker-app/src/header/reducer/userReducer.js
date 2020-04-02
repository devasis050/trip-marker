import {UPDATE_USER} from '../../redux/actionTypes'

function UserReducer(state={}, action) {
    if(action.type === UPDATE_USER) {
        return action.payload;
    } else {
        return state;
    }
}


export default UserReducer;