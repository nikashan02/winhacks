const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client( {} );

const key = 'lol';

const params = {
    key: key,
    location: { lat: 42.226, lng: -82.546 },
    radius: 50000,
    keyword: 'greenhouse'
};

client.placesNearby( { params: params } )
    .then((r) => {
        console.log(r.data);
    })

