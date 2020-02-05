
import React from 'react';
import MarkerDetailComponent from './markerDetailComponent';
import {createRemoveMarkerAction} from '../action/markerAction'
import { connect } from 'react-redux';

class MarkerList extends React.Component {
    constructor() {
        super();
        this.removeClickHandler = this.removeClickHandler.bind(this);
        this.state = {loading : true};
    }

    removeClickHandler(placeId) {
        const action = createRemoveMarkerAction(placeId);
        this.props.removeMarker(action);
    }

    render() {
        return (
            <div className='pt-4 align-bottom' >
                <h2 >Markers</h2>
                <table className='table-borderless table-hover container-fluid'>
                    <tbody>
                        {this.props.markerPlaces.map((markerPlace, index) => <MarkerDetailComponent 
                            key={`Marker_${index}`}
                            index={index}
                            removeClickHandler={this.removeClickHandler} 
                            markerPlace={markerPlace}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        markerPlaces: state.markers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeMarker: (action) => {dispatch(action)}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkerList);