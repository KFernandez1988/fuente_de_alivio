const router = require('express').Router();
const decisionsCtrl = require('../controller/decisions');

router.get('/', decisionsCtrl.renderLanding);

module.exports = router;
