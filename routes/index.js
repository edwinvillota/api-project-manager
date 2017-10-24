'use strict'

const express = require('express')
const api = express.Router()
// Controllers
const UserCtrl = require('../controllers/user')
const EmployeeCtrl = require('../controllers/employee')

api.post('/signup', UserCtrl.signUp)
api.post('/signin', UserCtrl.signIn)
// Staff Routes
api.get('/staff', EmployeeCtrl.getAll)
api.post('/staff', EmployeeCtrl.add)

module.exports = api
