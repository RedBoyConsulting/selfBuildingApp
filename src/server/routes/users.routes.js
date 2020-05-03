const express = require('express')
const router = express.Router()

const usrCtrl = require('../controllers/users.controller')

router.get('/', usrCtrl.getUsers)
router.post('/', usrCtrl.createUser)
router.get('/:id', usrCtrl.getUser)
router.put('/:id', userCtrl.editUser)
router.delete('/:id', userCtrl.deleteUser)

module.exports = router