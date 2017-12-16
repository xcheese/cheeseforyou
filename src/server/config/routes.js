var express = require('express');
var router = express.Router();
var homeController = require('../controller/homeController')
var userController = require('../controller/userController')
module.exports = router;

router.get('/', homeController.index);
router.get('/user', userController.index);

