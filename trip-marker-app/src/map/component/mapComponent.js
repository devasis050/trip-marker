import React from 'react';
// import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
// import MarkerComponent from './markerComponent';

class MapComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.markers = [];
        this.routes = [];
    }

    loadDirection() {

        const {maps, map} = this.state;
        let directionsService = new maps.DirectionsService();
        const fromId = this.props.direction.fromId;
        const toId = this.props.direction.toId;

        if (fromId && toId) {
            let fromPlace = this.props.markerPlaces.find(markerPlace => markerPlace.placeId === fromId);
            let toPlace = this.props.markerPlaces.find(markerPlace => markerPlace.placeId === toId);
            directionsService.route({
                origin: fromPlace.location,
                destination: toPlace.location,
                travelMode: maps.TravelMode.DRIVING
            }, (response, status) => {
                if (status === 'OK') {
                    const route = new google.maps.Polyline({
                        path: response.routes[0].overview_path,
                        strokeWeight: 5,
                        strokeOpacity: 0.5,
                        strokeColor: 'blue',
                    });
                    route.setMap(map);
                    this.routes.push(route);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }

    }

    componentDidUpdate() {
        this.onMapLoaded();
        this.loadDirection();
    }

    onMapLoaded() {
        const {maps, map} = this.state;
        this.props.markerPlaces.map((markerPlace, index) => {
            this.markers.push(new google.maps.Marker({
                position: markerPlace.location,
                map: map,
                title: ''+index,
                label: ''+index
            }));
        });
        const bounds = new maps.LatLngBounds();
        this.props.markerPlaces.map(markerPlace => {
            bounds.extend(markerPlace.location);
        });
        map.fitBounds(bounds)
        this.loadDirection(maps, map);
    }

    clearMarker() {
        this.markers.forEach(marker=> marker.setMap(null));
        this.markers = [];
        this.routes.forEach(route=> route.setMap(null));
        this.routes = [];
    }

    render() {
        const mapStyles = {
            width: '95%',
            height: '95%',
          };

        this.clearMarker();

        return (
            <div>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'API_KEY', 
                        language: 'en'
                    }}
                    style= {mapStyles}
                    defaultCenter ={{lat: 37.7699298, lng: -122.4491504}}
                    zoom={8}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({maps, map})=> this.setState({maps, map})}
                >
                    
                </GoogleMapReact>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        markerPlaces: state.markers, 
        direction: state.direction
    }
}

const ConnectedMapComponent = connect(mapStateToProps)(MapComponent)

export default ConnectedMapComponent;
