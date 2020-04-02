import { Provider } from "react-redux"
import React from "react";
import ReactDOM from 'react-dom';
import store from './redux/store';
import MapComponent from './map/component/mapComponent';
import MarkerList from './map/component/markerList';
import DirectionComponent from './direction/component/directionComponent';
import SearchComponent from './search/component/searchComponent';
import Header from './header/component/headerComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthRedirect from './authredirect/component/authRedirectComponent';

const App = () => {
    return (
        <div className='container-fluid pt-2 h-100'>
            <Header />
            <div className='row bg-light mt-1 h-100'>
                <div className='col-4'>
                    <div>
                        <SearchComponent />
                        <MarkerList />
                        <DirectionComponent/>
                    </div>
                </div>
                <div className='col-8'>
                    <MapComponent />
                </div>
            </div>
        </div>
    )
} 

const Root = () => {
    return (
        <Provider store= {store} >
            <App />
        </Provider>
    )
}

ReactDOM.render(<Root/>, document.querySelector("#app"))