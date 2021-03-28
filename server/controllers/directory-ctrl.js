const mapsData = require('../data/index.js')

let search = async (req, res) => {
    const params = {
        location: req.body.addr,
        //{lat: req.body.lat, lng: req.body.lng},
        radius: req.body.radius,
        keywords: req.body.keywords
    }
    /*const params = {
        location: req.params.loc,
        radius: req.params.radius,
        keyword: req.params.keyword
    }*/

    //keywords = ['greenhouse', 'best buy'];
    let last = params.keywords[0];
    let pass = []
    //console.log(params);
    params.keywords.shift()
    mapsData(params.location, params.radius, res, last, params.keywords, pass);
}
module.exports.search =  search;