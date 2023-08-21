const express = require('express')
const router = express.Router()
const {signUp,signIn} = require('../controllers/usersController')

router.route('/sign').post(signIn)
router.route('/createaccount').post(signUp)

module.exports = router