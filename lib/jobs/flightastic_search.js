const request = require('request');
const config = require('config');


module.exports = (agenda) => {
    agenda.define('searchFlight', {lockLifetime: 1}, function (job, done) {
        let postData = job.attrs.data;
        request({
            url: config.get('flightasticServiceUrl'),
            method: "POST",
            json: {"fb_id": postData.fbId, "max_price": postData.max_price, "originplace": postData.originplace,
                   "destinationplace": postData.destinationplace,
                   "outbounddate": postData.outbounddate,
                   "inbounddate": postData.inbounddate,
                   "stops": postData.stops,
                    "adults": postData.adults}
        }, (error, response, body) => {
             let minimalPrice = body.minimal_price;
             if (body.found) {
                 console.log(`Found flight in a ${minimalPrice} price`);
                 job.remove(function(err) {
                    if(!err) console.log("Successfully removed job from collection");
                });
             } else {
                console.log(`Coundn't find flight with price tag smaller than ${postData.max_price}. Minimal price: ${minimalPrice}`);
             }
        }
        )
    })
}