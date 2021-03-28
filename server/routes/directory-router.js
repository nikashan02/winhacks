const express = require('express');

const DirectoryCtrl = require('../controllers/directory-ctrl.js')
const PhotoCtrl = require('../controllers/photo-ctrl.js')

const router = express.Router();

router.post('/search', DirectoryCtrl.search);
router.get('/photo/:photo_id', PhotoCtrl.photoReq);
module.exports = router