import {ADD_MARKER, REMOVE_MARKER} from '../../redux/actionTypes'

const iState =  [
    {placeId:'123asd', formattedAddress:'Paris France, pin-12314', location: {lat:47.43, lng: -122.13}},
    {placeId:'123asf', formattedAddress:'Paris Germany, pin-12314', location: {lat:47.44, lng: -123.13}}
];


//state = [markerPlace]
const markerReducer = (state=[], action) => {
    if(action.type === ADD_MARKER) {
        console.log('add marker reducer invoded', action);
        return [...state, action.payload.markerPlace];
    } else if(action.type === REMOVE_MARKER) {
        return state.filter(markerPlace=> markerPlace.placeId !== action.payload.placeId);
    }
    return state;
}

export default markerReducer;