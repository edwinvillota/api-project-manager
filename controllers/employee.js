'use strict'

const Employee = require('../models/Employee')

function add (req, res) {
  const employee = new Employee({
    name: req.body.name,
    lastname: req.body.lastname,
    document: req.body.document,
    telephone: req.body.telephone,
    appointment: req.body.appointment,
    register_date: Date.now(),
    status: 'Activo'
  })

  employee.save((err) => {
    if (err) return res.status(500).send({message: Error})
    return res.status(200).send({message: 'Succesfull'})
  })
}

function getAll (req, res) {
  Employee.find((err, users) => {
    if (err) return res.status(500).send({message: err})
    res.status(200).send(users)
  })
}

module.exports = {
  add,
  getAll
}
