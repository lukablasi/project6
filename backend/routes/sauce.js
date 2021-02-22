const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const saucesCtrl = require('../controllers/sauce');
const Sauce = require('../models/sauce');

router.post('/', auth, multer, saucesCtrl.createSauce);
router.get('/', auth, saucesCtrl.viewAllSauces);
router.get('/:id', auth, saucesCtrl.viewSauce);
router.put('/:id', auth, multer, saucesCtrl.updateSauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.post('/:id/like', auth, saucesCtrl.likeSauce);

module.exports = router;