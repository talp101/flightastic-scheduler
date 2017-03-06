const config = require('config');

const app = require('../app')

app.listen((process.env.PORT || config.get('port')), (request, response) => {
    console.log(`Flightastic Scheduler started at port ${config.get('port')}`);
})
