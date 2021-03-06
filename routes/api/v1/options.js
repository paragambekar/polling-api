const express = require('express');
const router = express.Router();

const optionsController = require('../../../controllers/api/v1/options.controller');

console.log('Inside options router');

router.get('/:id/add_vote',optionsController.addVote);

router.get('/:id/delete', optionsController.deleteOption);


module.exports = router;