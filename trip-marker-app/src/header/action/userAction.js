
import {UPDATE_USER} from '../../redux/actionTypes'

const updateUserAction = (user) => {
   return {
        type: UPDATE_USER,
        payload: user
    }
}

export {updateUserAction};