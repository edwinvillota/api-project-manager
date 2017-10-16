'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const UserSchema = Schema({
  name: String,
  lastname: String,
  appointment: String,
  username: {type: String, unique: true, require: true},
  email: {type: String, unique: true, lowercase: true},
  password: {type: String},
  signupDate: {type: Date, default: Date.now()},
  lastLogin: Date
})

UserSchema.pre('save', function (next) {
  let user = this
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next()
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

UserSchema.methods.gravatar = function () {
  if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

  const md5 = crypto.createHash('md5').update(this.email).digest('hex')
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('User', UserSchema)
