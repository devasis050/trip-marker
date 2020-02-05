import {UPDATE_SEARCH_RESULT, CLEAR_SEARCH_RESULT} from '../../redux/actionTypes'

const createUpdateSearchResultAction = (payload) => {
    return {
        type: UPDATE_SEARCH_RESULT,
        payload 
    }
}

const clearSearchResultAction = () => {
    return {
        type : CLEAR_SEARCH_RESULT
    }
}

export {createUpdateSearchResultAction, clearSearchResultAction};