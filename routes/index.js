const express = require('express');
const router = express.Router();

router.get('/', (request,respose) => {
    return respose.status(200).json({
        message : 'Welcome to Polling API!'
    })
})

router.use('/api', require('./api/index'));


module.exports = router;