const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');


router.use('/search', siteController.search);
router.use('/hello-world', siteController.helloWorld);
router.use('/', siteController.index);


module.exports = router;