const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.post('/create-user',authController.createUser);
router.post('/login',authController.login);


module.exports = router;