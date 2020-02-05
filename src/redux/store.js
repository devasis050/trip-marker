
import searchReducer from '../search/reducer/searchReducer';
import markers from '../map/reducer/markerReducer'
import { combineReducers, createStore } from 'redux'


const rootReducer = combineReducers({searchPlaces:searchReducer, markers});
export default createStore(rootReducer);

