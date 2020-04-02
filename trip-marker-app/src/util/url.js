
const FB_CLIENT_ID = '212634969918380';
const REDIRECT_URL = 'http://localhost:3000/oauth/redirect';
const RESPONSE_TYPE = 'code';
const FB_OAUTH_URL = 'https://www.facebook.com/v6.0/dialog/oauth';
const TRIP_MARKER_SERVRE_URL = 'http://localhost:8080';

const getPlaceSearchUrl = (text) => {
    return `${TRIP_MARKER_SERVRE_URL}/search?place=${text}`;
}

const getPlaceByPlaceIdUrl = (placeId) => {
    return `${TRIP_MARKER_SERVRE_URL}/place/${placeId}`;
}

const getFbOauthUrl = () => {
    const url = `${FB_OAUTH_URL}?client_id=${FB_CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=email`
    return url;
}

const getUserUrl = () => {
    return `${TRIP_MARKER_SERVRE_URL}/user`
}

export {getPlaceSearchUrl, getPlaceByPlaceIdUrl, getFbOauthUrl, getUserUrl};