const express = require('express');
const router = express.Router();

const userController = require('../../../controllers/api/v1/questions-controller');
console.log('inside questions router');


router.post('/create',userController.createQuestion);


router.get('/:id',userController.viewQuestion);

router.post('/:id/options/create',userController.addOption);

router.get('/:id/delete', userController.deleteQuestion);

module.exports = router;