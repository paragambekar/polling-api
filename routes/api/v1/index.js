const express = require('express');
const router = express.Router();

console.log('Inside v1 router');
router.use('/questions', require('./questions'));
router.use('/options', require('./options'));

module.exports = router;