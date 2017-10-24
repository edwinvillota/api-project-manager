'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmployeeSchema = Schema({
  name: String,
  lastname: String,
  document: Number,
  phone: Number,
  appointment: String,
  register_date: Date,
  status: String
})

module.exports = mongoose.model('Employee', EmployeeSchema)
