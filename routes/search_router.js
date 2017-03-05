const express = require('express');

const router = express.Router();

router.post('/', (request, response, next) =>{    
    response.json({success:true});
})

module.exports = router;
