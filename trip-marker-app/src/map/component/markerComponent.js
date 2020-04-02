import React from 'react';

const Marker = (props) => {
    return (
            <span className="fa-stack fa-lg">
                <i className="fas fa-map-marker fa-stack-2x text-danger"></i>
                <span className="fa-stack-1x fa-inverse">1</span>
            </span>
    )
}

export default Marker;