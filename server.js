const express = require('express');
const axios = require('axios');
const utils = require('./server/utils')
const app = express();
const cors = require('cors');

app.use(cors());
app.get('/search', (req, res) => {
    const place = req.query.place;
    const url = utils.mapPlaceSearchUrl(place)
    console.log('url', url);
    axios.get(url).then((response) => {
        console.log(response.data.predictions);
        const results =  response.data.predictions.map((place) => ({description:place.description, placeId : place.place_id}))
        res.send(results);
    });
    
});

app.get('/place/:placeId', (req,res)=> {
    const placeId = req.params.placeId;
    const url = utils.placeByPlaceIdUrl(placeId);
    axios.get(url).then((response) => {
        console.log(response.data);
        res.send({placeId: response.data.result.place_id, 
            formattedAddress:response.data.result.formatted_address,
            location: response.data.result.geometry.location
        });
    });
})

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })


app.listen(8080, ()=> console.log('serer started'));
