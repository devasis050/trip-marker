import { connect } from "react-redux";
import {createUpdateDirectionAction, createClearDirectionAction} from '../action/directionAction'
import React from 'react';

class DirectionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {fromId:'', toId:''};
    }

    onPlaceChange() {
        const fromId = document.querySelector("#fromPlace").value;
        const toId = document.querySelector("#toPlace").value;
        console.log('onPlaceChange ', toId);
        this.setState({fromId, toId});
    }

    goBtnClickHandler() {
        console.log('goBtnClickHandler', this.state);
        //dispatch action to update direction object
        this.props.dispatch(createUpdateDirectionAction({fromId: this.state.fromId, toId: this.state.toId}));
    }

    clearBtnClickHandler() {
        this.setState({fromId:'', toId:''});
        this.props.dispatch(createClearDirectionAction());
    }

    render() {

        let goButtonDisabled = true;
        if(this.state.fromId && this.state.toId) {
            goButtonDisabled = false;
        }
        let showSameValueError = false;
        if(this.state.fromId && this.state.fromId === this.state.toId) {
            showSameValueError = true;
            goButtonDisabled = true;
        }

        const {markerPlaces=[]} = this.props; 
        console.log('direction markerPlaces', markerPlaces);
        return (
            <>
                {markerPlaces.length != 0 && false ? <div/> : (<div>
                    <h2 className='pt-4' >Direction</h2>
                    <select id='fromPlace' value={this.state.fromId} className='form-control form-control-sm mt-2' onChange={() => this.onPlaceChange()}>
                        <option value=''>From</option>
                {markerPlaces.map((markerPlace, index) => (<option key={markerPlace.placeId} value={markerPlace.placeId}> {index+1}. {markerPlace.formattedAddress}</option>))}
                    </select>
                    
                    <select id='toPlace' value={this.state.toId} className='form-control form-control-sm mt-2'  onChange={() => this.onPlaceChange()}>
                        <option value=''>To</option>
                        {markerPlaces.map((markerPlace, index) => (<option key={markerPlace.placeId} value={markerPlace.placeId}> {index+1}. {markerPlace.formattedAddress}</option>))}
                    </select>
                    {showSameValueError ? <div className='text-danger'>From and TO location can not be same.</div> : ''}
                    <table className='container-fluid mt-2'>
                        <tbody>
                        <tr>
                            <td className='w-50'>
                                <button type='button' className='btn btn-sm btn-primary btn-block' disabled={goButtonDisabled} onClick={() => this.goBtnClickHandler()}>Go</button>
                            </td>
                            <td className='w-50'>
                                <button className="btn btn-sm btn-block btn-secondary" onClick={() => this.clearBtnClickHandler()}>Clear</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    
                 </div>)
                }
            </>
            
        )

    }

}

function mapStateToProps(state) {
    return {
        markerPlaces : state.markers
    }
}

const ConenctedComponent = connect(mapStateToProps)(DirectionComponent);
export default ConenctedComponent;