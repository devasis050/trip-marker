import React from "react";
import {getPlaceSearchUrl} from '../../util/url';
import axios from 'axios';
import {createUpdateSearchResultAction} from '../action/index';
import {connect} from 'react-redux';
import {debounce} from 'throttle-debounce';

class SearchBar extends React.Component {

    constructor() {
        super();
        this.search = this.search.bind(this);
        this.debouncedSeaarch = debounce(200, this.search)
    }



    search() {
        let text = document.querySelector('#searchBar').value;
        // If we use below if block, we have to clear the search result
        // if(text) {  }
        console.log('search called with:', text);

        //Mock code - start 
        const response = [
            {"description" : "Paris, TN, USA", "placeId" : "ChIJ4zHP-Sije4gRBDEsVxunOWg"},
            {"description" : "Paris, Brant, ON, Canada", "placeId" : "ChIJsamfQbVtLIgR-X18G75Hyi0"},
            {"description" : "Paris, IL, USA", "placeId" : "ChIJO5XGnIyXcogRT-7Ymxr9xgo"}
        ]
        setTimeout(()=>{
                let action = createUpdateSearchResultAction(response);
                this.props.updatePlacesSearchResult(action);
        }, 10)

        //Mock code - end

        // const URL = getPlaceSearchUrl(text)
        // axios.get(URL)
        // .then((response) => {
        //     let action = createUpdateSearchResultAction(response.data);
        //     this.props.updatePlacesSearchResult(action);
        // });

    }

    render() {
        return (
            <div className='input-group'>
                <input id='searchBar' 
                    type='search' 
                    className='form-control py-2 border-right-0 border'
                    placeholder="search for location"
                    onKeyUp={() => this.debouncedSeaarch()}
                />
                <span className="input-group-append">
                    <div className="input-group-text bg-transparent"><i className="fa fa-search"></i></div>
                </span>
            </div>
        )
    }

    

}

function mapDispatchToProps(dispatch) {
    return {updatePlacesSearchResult: (action) => dispatch(action)}
}

export default connect(null, mapDispatchToProps)(SearchBar) ;