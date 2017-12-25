var express = require('express');
var router = express.Router();
var welcomeController = require('../app/controllers/welcomeController')
var videoController = require('../app/controllers/videoController')
var passportController = require('../app/controllers/passportController')
module.exports = router;

router.get('/', welcomeController.index);
router.get('/signup', welcomeController.index);
router.get('/login', welcomeController.index);
router.get('/video/:video_id', videoController.index);

router.post('/api/reg', passportController.postApiReg);


