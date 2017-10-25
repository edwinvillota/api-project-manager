'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChargeSchema = Schema({
  name: String,
  level: Number,
  functions: String,
  salary: Number,
  status: String
})

module.exports = mongoose.model('Charge', ChargeSchema)
