const express = require('express');

const DirectoryCtrl = require('../controllers/directory-ctrl.js')
const PhotoCtrl = require('../controllers/photo-ctrl.js')

const router = express.Router();

router.get('/search/:loc/:radius/:keyword', DirectoryCtrl.search);
router.get('/photo/:photo_id', PhotoCtrl.photoReq);
module.exports = router