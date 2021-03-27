const request = require('request');
require('dotenv').config();
const API_TOKEN = process.env.API_KEY;
let photoReq = async (req, res) => {
    
    const url = `https://maps.googleapis.com/maps/api/place/photo?maxheight=600&maxwidth=800&photoreference=${req.params.photo_id}&key=${API_TOKEN}`
    request({
        url: url,
        encoding: null
      }, 
      (err, resp, buffer) => {
        if (!err && resp.statusCode === 200){
          res.set("Content-Type", "image/jpeg");
          res.send(resp.body);
        }
      });
}
module.exports.photoReq =  photoReq;