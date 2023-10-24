const { Router } = require('express');
const userController = require('../controllers/userController');
const validateInput = require('../middlewares/validateInput');

const router = Router();

router.post('/signup', validateInput, userController.signUp);

module.exports = router;
