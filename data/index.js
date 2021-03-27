const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client( {} );

const key = '';

let pSearch=[];
let pDetails=[];

const params = {
    key: key,
    location: { lat: 42.226, lng: -82.546 },
    radius: 50000,
    keyword: 'greenhouse'
};

client.placesNearby( { params: params } )
    .then((r) => {
        (async () => {
            for(var i=0; i<r.data.results.length;i++){
                pSearch.push(r.data.results[i])
                console.log(i)
                let q = await client.placeDetails({params: {key: key, place_id:r.data.results[i].place_id}})
                pDetails.push(q.data.result);
                if (i==r.data.results.length-1){
                    console.log(pSearch)
                    console.log(pDetails)
                }
            }
        })()
    
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

