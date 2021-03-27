const express = require('express');

const DirectoryCtrl = require('../controllers/directory-ctrl')

const router = express.Router();

router.get('/search', DirectoryCtrl.search);