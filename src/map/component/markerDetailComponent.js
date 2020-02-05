import React from 'react';

class MarkerDetailComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.index+1}.</td>
                <td >{this.props.markerPlace.formattedAddress}</td>
                <td > 
                    <i className='fas' style={{cursor: 'pointer'}}
                        onClick={() => this.props.removeClickHandler(this.props.markerPlace.placeId)}
                    >&#xf2ed;</i>
                </td>
            </tr>
        )
    }
    
}

export default MarkerDetailComponent;
