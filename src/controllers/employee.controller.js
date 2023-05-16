const Employee = require('../models/employee.model');
const {generateCrudMethods} = require('../services');
const ObjectId = require('mongoose').Types.ObjectId;
const employeeCrud= generateCrudMethods(Employee);

exports.findAll = (req,res,next)=>{
    employeeCrud.getAll()
    .then(data=>{
        res.status(200).json(data);
    }).catch(err=>{
        res.status(400).json({
            error: err
        });
    })
}

exports.create = (req,res,next)=>{
    employeeCrud.create(req.body)
    .then(data=>{
        res.status(201).json(data);
    }).catch(err=>{
        res.status(400).json({
            error: err
        });
     })
}

exports.getById = (req,res,next)=>{

    if(ObjectId.isValid(req.params.id)==false)
    {
        res.status(400).json({
            error:"given object id is not valid"
        })
    }
    else
    employeeCrud.getById(req.params.id)
    .then(data=>{
        res.status(200).json(data);
    }).catch(err=>{
        res.status(400).json({
            error: err
        });
    })
}


exports.update = (req,res,next)=>{
    if(ObjectId.isValid(req.params.id)==false)
    {
        res.status(400).json({
            error:"given object id is not valid"
        })
    }
    else
    employeeCrud.findByIdAndUpdate(req.params.id,req.body)
    .then((data)=>{
        res.status(200).json(data);
    }).catch(err=>{
        res.status(400).json({
            error: err
        });
    })
}

exports.delete = (req,res,next)=>{
    if(ObjectId.isValid(req.params.id)==false)
    {
        res.status(400).json({
            error:"given object id is not valid"
        })
    }
    else
    employeeCrud.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.status(200).json({"status":"deleted Sucessfully"});
    }).catch(err=>{
        res.status(400).json({
            error: err
        });
    })
}