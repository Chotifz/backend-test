const express = require('express');
const router = express.Router();
const {createUser, getAllUsers, getUserById, updateUser, deleteUser} = require('../controllers/user.controller');
const {validateCreateUser, validateUpdateUser }= require('../middlewares/validateUser.middelware');

router.post('/',validateCreateUser, createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.patch('/:id', validateUpdateUser, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;