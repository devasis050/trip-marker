
import searchReducer from '../search/reducer/searchReducer';
import markers from '../map/reducer/markerReducer';
import directionReducer from '../direction/reducer/directionReducer';
import UserReducer from '../header/reducer/userReducer';
import { combineReducers, createStore } from 'redux';


const rootReducer = combineReducers({searchPlaces:searchReducer, markers, direction: directionReducer, user: UserReducer});
export default createStore(rootReducer);

