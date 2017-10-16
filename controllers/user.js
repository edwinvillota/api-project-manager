'use strict'

const User = require('../models/User')
const services = require('../services')

function signUp (req, res) {
  const user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    appointment: req.body.appointment,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  user.save((err) => {
    if (err) return res.status(500).send({message: 'Error:'})
    return res.status(200).send({token: services.createToken(user)})
  })
}

function signIn (req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send({message: err})
    if (!user) return res.status(404).send({message: 'User not found'})
    user.comparePassword(req.body.password).then(valid => {
      if (valid) {
        res.status(200).send({
          message: 'Succesfull',
          token: services.createToken(user)
        })
      } else {
        res.status(500).send({
          message: 'Invalid Credentials'
        })
      }
    })
  })
}

module.exports = {
  signUp,
  signIn
}
