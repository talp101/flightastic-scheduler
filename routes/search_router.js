const express = require('express');
const agenda = require('../lib/agenda');

const router = express.Router();

router.post('/', (request, response, next) =>{  
    agenda.every('5 minutes', 'searchFlight', request.body); 
    response.json({success:true});
})

module.exports = router;
