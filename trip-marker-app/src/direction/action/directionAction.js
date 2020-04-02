import {UPDATE_DIRECTION, CLEAR_DIRECTION} from '../../redux/actionTypes'

const createUpdateDirectionAction = (payload) => {
    return {
        type: UPDATE_DIRECTION,
        payload
    }
}

const createClearDirectionAction = () => {
    return {
        type: CLEAR_DIRECTION
    }
}

export {createUpdateDirectionAction, createClearDirectionAction};