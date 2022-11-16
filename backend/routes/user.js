
const express = require('express');


const router = express.Router();


const userControl = require('../controllers/user');


const auth = require('../middleware/auth');


const multer = require('../middleware/multer-config')

// Création des routes USER
router.post('/signup', userControl.signup);
router.post('/login', userControl.login);
router.put('/:id', auth, multer, userControl.modifyUser)
router.get('/', auth, userControl.getAllUsers);
router.get('/:id', auth, userControl.getOneUser);
router.delete('/:id', auth, userControl.deleteOneUser);
router.put('/:id/role', auth, userControl.changeRole);
router.put('/:id/password', auth, userControl.changePassword);


module.exports = router;