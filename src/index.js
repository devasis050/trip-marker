import { Provider } from "react-redux"
import React from "react";
import ReactDOM from 'react-dom';
import store from './redux/store';
import MapComponent from './map/component/mapComponent';
import MarkerList from './map/component/markerList';

import SearchComponent from './search/component/searchComponent'


const App = () => {
    return (
        <Provider store= {store} >
            <div className='container-fluid pt-2 h-100'>
                <div className='row h-100'>
                    <div className='col-4'>
                        <div>
                            <SearchComponent />
                            <MarkerList />
                        </div>
                    </div>
                    <div className='col-8'>
                        <MapComponent />
                    </div>
                </div>
            </div>
        </Provider>
    )
}

ReactDOM.render(<App/>, document.querySelector("#app"))