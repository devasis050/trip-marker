import { connect } from "react-redux";
import React from 'react';
import {createAddMarkerAction} from '../../map/action/markerAction';
import {clearSearchResultAction} from '../action/index';
import {getPlaceByPlaceIdUrl} from '../../util/url';
import axios from 'axios';

class SearchResult extends React.Component {
    constructor() {
        super();
        // this.places = [{description:'Paris, Fa'},
        // {description:'germany'},
        // {description:'Belgium'}];

    }

    searchResultClickHandler(searchPlace) {

        this.props.clearSearchResult();
        // const markerPlace = {placeId:'123asd', 
        //         formattedAddress:'Paris Belgium, pin-12314', location: {lat:42.43, lng: -121.13}};
        // setTimeout(() => {
        //     let action = createAddMarkerAction(markerPlace);
        //     this.props.addMarker(action);
        // }, 100);

        const getPlaceUrl = getPlaceByPlaceIdUrl(searchPlace.placeId);

         axios.get(getPlaceUrl)
        .then((response) => {
            console.log(response.data);
            let action = createAddMarkerAction(response.data);
            this.props.addMarker(action);
        });

    }


    render() {
        return (
            <div className='dropdown'>
                {this.props.searchPlaces.map((searchPlace, index) => (
                    <div key={index}
                        className='dropdown-item'
                        onClick={() => this.searchResultClickHandler(searchPlace)}
                    >
                        {searchPlace.description}
                    </div>))}
            </div>
        )
    }

    
}

function mapsDispatchToProps(dispatch) {
    return {
        addMarker : (action) => dispatch(action),
        clearSearchResult: () => dispatch(clearSearchResultAction())
    }
}

function mapStateToProps(state) {
    return {searchPlaces:state.searchPlaces}
}

export default connect(mapStateToProps, mapsDispatchToProps)(SearchResult);