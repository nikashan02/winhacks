function mapsData(loc, rad, kw, res){
    const {Client} = require("@googlemaps/google-maps-services-js");

    const client = new Client( {} );

    const key = 'lol';

    let pSearch=[];
    let pDetails=[];

    const params = {
        key: key,
        location: loc,
        radius: rad,
        region: 'ca',
        keyword: kw
    };

    client.placesNearby( { params: params } )
        .then((r) => {
            (async () => {
                for(var i=0; i<r.data.results.length;i++){
                    pSearch.push(r.data.results[i])
                    let q = await client.placeDetails({params: {key: key, place_id:r.data.results[i].place_id}})
                    for (var z=0; z<q.data.result.address_components.length; z++){
                        if (q.data.result.address_components[z].long_name == "Canada"){
                            pDetails.push({
                                name: q.data.result.name,
                                phoneNum: q.data.result.formatted_phone_number,
                                address: q.data.result.formatted_address,
                                website: q.data.result.website,
                                status: q.data.result.business_status
                            });
                        }
                    }
                    if (i==r.data.results.length-1){
                        res.send(pDetails);
                    }
                }
            })()
        
        })
        .catch(e => {
            console.error('Connection error', e.message)
    })
}
module.exports= mapsData;

