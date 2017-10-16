'use strict'

const express = require('express')
const UserCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.post('/signup', UserCtrl.signUp)
api.post('/signin', UserCtrl.signIn)
api.get('/private', auth, function (req, res) {
  res.status(200).send({message: 'Sucessfull'})
})

module.exports = api
