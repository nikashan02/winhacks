const mapsData = require('../data/index.js')

let search = async (req, res) => {
    /*const params = {
        location: {lat: req.body.lat, lng: req.body.lng},
        radius: req.body.radius,
        keyword: req.body.keyword
    }*/
    const params = {
        location: {lat: req.params.lat, lng: req.params.lng},
        radius: req.params.radius,
        keyword: req.params.keyword
    }
    //console.log(params);
    mapsData(params.location, params.radius, params.keyword, res);

}
module.exports.search =  search;