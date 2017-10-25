'use strict'

const Charge = require('../models/Charge')

function add (req, res) {
  const charge = new Charge({
    name: req.body.name,
    level: req.body.level,
    functios: req.body.functions,
    salary: req.body.salary,
    status: 'Activo'
  })

  charge.save((err) => {
    if (err) return res.status(500).send({message: Error})
    return res.status(200).send({message: 'Succesfull'})
  })
}

function getAll (req, res) {
  Charge.find((err, charges) => {
    if (err) return res.status(500).send({message: err})
    res.status(200).send(charges)
  })
}

module.exports = {
  add,
  getAll
}
