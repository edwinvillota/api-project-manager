'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = Schema({
  code: String,
  name: String,
  description: String,
  start_date: Date,
  ending_date: Date
})

module.exports = mongoose.model('Project', ProjectSchema)
