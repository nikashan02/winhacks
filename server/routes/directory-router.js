const express = require('express');

const DirectoryCtrl = require('../controllers/directory-ctrl.js')

const router = express.Router();

router.get('/search/:lat/:lng/:radius/:keyword', DirectoryCtrl.search);

module.exports = router