const Employee = require('../models/employee.model');

exports.findAll = (req,res,next)=>{
    Employee.find()
    .then(data=>{
        res.send(data);
    })
}

exports.create = (req,res,next)=>{

    console.log(req)

    Employee.create(req.body)
    .then(data=>{
        res.send(data);
    })
}