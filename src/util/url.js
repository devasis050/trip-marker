
const getPlaceSearchUrl = (text) => {
    return `http://localhost:8080/search?place=${text}`;
}

const getPlaceByPlaceIdUrl = (placeId) => {
    return `http://localhost:8080/place/${placeId}`;
}

export {getPlaceSearchUrl, getPlaceByPlaceIdUrl};