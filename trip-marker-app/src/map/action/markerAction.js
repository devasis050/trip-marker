import {ADD_MARKER, REMOVE_MARKER} from '../../redux/actionTypes'

const createAddMarkerAction = (marker) => {
    return {
        type: ADD_MARKER,
        payload: {markerPlace:marker}
    }
}

const createRemoveMarkerAction = (placeId) => {
    return {type: REMOVE_MARKER, payload : {placeId}};
}

export {createAddMarkerAction, createRemoveMarkerAction};